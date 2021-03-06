import {defaultStyles, defaultTitle} from '../constants';
import {clone} from '../core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  currentText: '',
  dataState: {},
  stylesState: {'1': {}},
  currentStyles: defaultStyles,
  lastOpenedAt: new Date().toJSON()
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
