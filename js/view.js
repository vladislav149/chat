/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { UI_ELEMENTS } from './const';

// const name = 'no_name';

export function openPopup(e) {
  if (UI_ELEMENTS.POPUP.OPEN_SETTINGS === e.target) {
    UI_ELEMENTS.POPUP.SETTINGS.style.display = 'flex';
  } else if (UI_ELEMENTS.BUTTON_LOG_IN === e) {
    UI_ELEMENTS.POPUP.LOG_IN.style.display = 'flex';
  } else if (UI_ELEMENTS.POPUP.INPUT_EMAIL === e) {
    UI_ELEMENTS.POPUP.SEND_CODE.style.display = 'flex';
  }
  UI_ELEMENTS.OVERLAY.classList.add('container--active');
}

export function closePopup() {
  UI_ELEMENTS.POPUP.POPUPS.forEach((element) => {
    element.style.display = 'none';
  });
  UI_ELEMENTS.OVERLAY.classList.remove('container--active');
}

export function checkClickOnTarget(e) {
  UI_ELEMENTS.POPUP.POPUPS.forEach((element) => {
    if (e.target === element) {
      closePopup();
    }
  });
}

export function showMessage(textMessage, timeMessage, userName) {
  const templateText = UI_ELEMENTS.TEMPLATE.ME.content.querySelector('p');
  const templateTime = UI_ELEMENTS.TEMPLATE.ME.content.querySelector('.messages__time');
  const templateName = UI_ELEMENTS.TEMPLATE.ME.content.querySelector('.messages__name--me');
  templateText.textContent = textMessage;
  templateTime.textContent = timeMessage;
  templateName.textContent = userName;
  const li = UI_ELEMENTS.TEMPLATE.ME.content.cloneNode(true);
  UI_ELEMENTS.MESSAGE_LIST.append(li);
}

export function scrollToLastMessage() {
  UI_ELEMENTS.MESSAGE_LIST_CONTAINER.scrollTop = UI_ELEMENTS.MESSAGE_LIST_CONTAINER.scrollHeight;
}

export function clearInputMessage(input) {
  input.value = '';
}

export function changeName(name) {
  document.querySelectorAll('.messages__name--me').forEach((element) => {
    element.textContent = `${name}: `;
  });
}
