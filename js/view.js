/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { UI_ELEMENTS } from './const';

export function settingsOpen() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'flex';
  UI_ELEMENTS.OVERLAY.classList.add('container--active');
}

export function settingsClose() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'none';
  UI_ELEMENTS.OVERLAY.classList.remove('container--active');
}

export function checkClickOnTarget(e) {
  if (e.target === UI_ELEMENTS.SETTINGS.WINDOW) {
    settingsClose();
  }
}

export function closeTab() {
  if (confirm('Вы действительно хотите закрыть страницу?')) {
    window.close();
  }
}

export function showMessage(textMessage, timeMessage) {
  const templateText = UI_ELEMENTS.TEMPLATE.ME.content.querySelector('p');
  const templateTime = UI_ELEMENTS.TEMPLATE.ME.content.querySelector('.messages__time');
  templateText.textContent = textMessage;
  templateTime.textContent = timeMessage;
  const li = UI_ELEMENTS.TEMPLATE.ME.content.cloneNode(true);
  UI_ELEMENTS.MESSAGE_LIST.append(li);
}

export function scrollToLastMessage() {
  UI_ELEMENTS.MESSAGE_LIST_CONTAINER.scrollTop = UI_ELEMENTS.MESSAGE_LIST_CONTAINER.scrollHeight;
}

export function clearInputMessage() {
  UI_ELEMENTS.INPUT_MESSAGE.value = '';
}
