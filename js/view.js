import { UI_ELEMENTS } from "./const";

export function settingsOpen() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'flex';
  UI_ELEMENTS.OVERLAY.classList.add('container--active');
}

export function settingsClose() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'none';
  UI_ELEMENTS.OVERLAY.classList.remove('container--active');
}

export function checkClickOnTarget(e) {
  if (e.target===UI_ELEMENTS.SETTINGS.WINDOW) {
    settingsClose();
  }
}

export function closeTab() {
  if (confirm('Вы действительно хотите закрыть страницу?')) {
	window.close();
  }
}