export const UI_ELEMENTS = {
  POPUP: {
    POPUPS: document.querySelectorAll('.popup'),
    SETTINGS: document.querySelector('.popup--settings'),
    LOG_IN: document.querySelector('.popup--log-in'),
    SEND_CODE: document.querySelector('.popup--send-code'),
    OPEN_SETTINGS: document.querySelector('.header__settings'),
    CLOSE: document.querySelectorAll('.popup__exit'),
    INPUT_NAME: document.querySelector('.popup__input--name'),
    INPUT_EMAIL: document.querySelector('.popup__input--email'),
    INPUT_CODE: document.querySelector('.popup__input--code'),
  },
  TEMPLATE: {
    ME: document.querySelector('#messages-me'),
    COMPANION: document.querySelector('#messages-companion'),
  },
  OVERLAY: document.querySelector('.container'),
  ALL_BUTTONS: document.querySelectorAll('.btn'),
  INPUT_MESSAGE: document.querySelector('.form__input'),
  BUTTON_LOG_IN: document.querySelector('.header__exit'),
  BUTTON_SEND: document.querySelector('.form__btn'),
  MESSAGE_LIST: document.querySelector('.messages'),
  MESSAGE_LIST_CONTAINER: document.querySelector('.main'),
  SEND_CODE_BUTTON: document.querySelector('.popup__btn--code'),
  LOG_IN: document.querySelector('.popup__btn--log-in'),
  CHANGE_NAME_BUTTON: document.querySelector('.popup__btn--settings'),
};

export const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
export const url1 = 'https://mighty-cove-31255.herokuapp.com/api/user/me';

export const user = {
  name: 'Я:',
};

export const arrMessage = [];
