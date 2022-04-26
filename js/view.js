import { UI_ELEMENTS } from "./const";

export function settingsOpen() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'flex';
  console.log('1');  
}

export function settingsClose() {
  UI_ELEMENTS.SETTINGS.WINDOW.style.display = 'none';
  console.log('2');  
}