import { UI_ELEMENTS } from "./const";
import { settingsClose, settingsOpen } from "./view";

UI_ELEMENTS.SETTINGS.OPEN.addEventListener('click', settingsOpen);
UI_ELEMENTS.SETTINGS.CLOSE.addEventListener('click', settingsClose);