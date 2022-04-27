/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { format } from 'date-fns';
import { arrMessage, UI_ELEMENTS } from './const';
import {
  settingsClose, checkClickOnTarget, settingsOpen, closeTab, showMessage, scrollToLastMessage, clearInputMessage,
} from './view';

function sendMessage() {
  const textMessage = UI_ELEMENTS.INPUT_MESSAGE.value;
  const timeMessage = format(new Date(), 'HH:mm');
  arrMessage.push(
    {
      textMessage,
      timeMessage,
    },
  );
  showMessage(textMessage, timeMessage);
  scrollToLastMessage();
  clearInputMessage();
}

UI_ELEMENTS.SETTINGS.OPEN.addEventListener('click', settingsOpen);
UI_ELEMENTS.SETTINGS.CLOSE.addEventListener('click', settingsClose);
UI_ELEMENTS.SETTINGS.WINDOW.addEventListener('click', checkClickOnTarget);
UI_ELEMENTS.ALL_BUTTONS.forEach((item) => item.addEventListener('click', (e) => {
  e.preventDefault();
}));
UI_ELEMENTS.BUTTON_EXIT.addEventListener('click', closeTab);
UI_ELEMENTS.BUTTON_SEND.addEventListener('click', sendMessage);
