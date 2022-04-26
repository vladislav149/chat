import { UI_ELEMENTS } from "./const";
import { settingsClose, checkClickOnTarget, settingsOpen, stopSubmit, closeTab } from "./view";

UI_ELEMENTS.SETTINGS.OPEN.addEventListener('click', settingsOpen);
UI_ELEMENTS.SETTINGS.CLOSE.addEventListener('click', settingsClose);
UI_ELEMENTS.SETTINGS.WINDOW.addEventListener('click', checkClickOnTarget);
UI_ELEMENTS.ALL_BUTTONS.forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
  })
);

UI_ELEMENTS.BUTTON_EXIT.addEventListener('click', closeTab);