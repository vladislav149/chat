/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import Cookies from 'js-cookie';
import { format } from 'date-fns';
import {
  arrMessage, socketUrl, UI_ELEMENTS, url, url1, user,
} from './const';
import {
  closePopup, checkClickOnTarget, openPopup, showMessage, scrollToLastMessage, clearInputMessage, changeName,
} from './view';

const savedToken = Cookies.get('token');
const socket = new WebSocket(`${socketUrl}${savedToken}`);

const isThereAnyCookies = Object.keys(Cookies.get()).length === 0;
if (isThereAnyCookies) {
  UI_ELEMENTS.BUTTON_LOG_IN.textContent = 'Войти';
  user.name = 'Я: ';
} else {
  UI_ELEMENTS.BUTTON_LOG_IN.textContent = 'Выйти';
}

function sendMessage() {
  const textMessage = UI_ELEMENTS.INPUT_MESSAGE.value;
  const timeMessage = format(new Date(), 'HH:mm');
  arrMessage.push(
    {
      textMessage,
      timeMessage,
    },
  );
  showMessage(textMessage, timeMessage, user.name);
  scrollToLastMessage();
  clearInputMessage(UI_ELEMENTS.INPUT_MESSAGE);
  socket.send(JSON.stringify({
    text: textMessage,
  }));
  socket.onmessage = function (event) {
    console.log(event.data);
  };
}

function logInOrLogOut() {
  if (UI_ELEMENTS.BUTTON_LOG_IN.textContent === 'Выйти') {
    UI_ELEMENTS.BUTTON_LOG_IN.textContent = 'Войти';
    Cookies.remove('token');
    user.name = 'Я:';
  } else {
    openPopup(UI_ELEMENTS.BUTTON_LOG_IN);
  }
}

async function sendCode() {
  const email = UI_ELEMENTS.POPUP.INPUT_EMAIL.value;
  clearInputMessage(UI_ELEMENTS.POPUP.INPUT_EMAIL);
  if (!email) {
    UI_ELEMENTS.POPUP.INPUT_EMAIL.placeholder = 'нельзя ввести пустой email';
    return;
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      openPopup(UI_ELEMENTS.POPUP.INPUT_EMAIL);
    } else {
      UI_ELEMENTS.POPUP.INPUT_EMAIL.placeholder = 'Перепроверьте почту';
    }
  } catch (error) {
    alert(error);
  }
}

async function logIn() {
  const token = UI_ELEMENTS.POPUP.INPUT_CODE.value;
  const name = UI_ELEMENTS.POPUP.INPUT_NAME.value || 'no_name';
  Cookies.set('token', token);
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      changeName(name);
      UI_ELEMENTS.BUTTON_LOG_IN.textContent = 'Выйти';
      window.location.reload();
    } else {
      UI_ELEMENTS.POPUP.INPUT_CODE.placeholder = 'Перепроверьте код';
    }
  } catch (error) {
    alert(error);
  }
}

async function settingsName() {
  const token = Cookies.get('token');
  const currentName = document.querySelector('.messages__name--me').textContent.replace(/\:$/, '') || user.name;
  const name = UI_ELEMENTS.POPUP.INPUT_NAME.value || 'no_name';
  user.name = `${name}:`;
  changeName(name);
  closePopup();
  const response = await fetch(
    url1,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!response.ok) {
    changeName(currentName);
    alert('Вы не авторизованы');
  }
}

UI_ELEMENTS.POPUP.OPEN_SETTINGS.addEventListener('click', openPopup);
UI_ELEMENTS.BUTTON_LOG_IN.addEventListener('click', logInOrLogOut);
UI_ELEMENTS.BUTTON_SEND.addEventListener('click', sendMessage);
UI_ELEMENTS.SEND_CODE_BUTTON.addEventListener('click', sendCode);
UI_ELEMENTS.LOG_IN.addEventListener('click', logIn);
UI_ELEMENTS.POPUP.CLOSE.forEach((element) => {
  element.addEventListener('click', closePopup);
});
UI_ELEMENTS.POPUP.POPUPS.forEach((element) => {
  element.addEventListener('click', checkClickOnTarget);
});
UI_ELEMENTS.ALL_BUTTONS.forEach((item) => item.addEventListener('click', (e) => {
  e.preventDefault();
}));
UI_ELEMENTS.CHANGE_NAME_BUTTON.addEventListener('click', settingsName);
