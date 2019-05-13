
// FontumiChat: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './fontumi-chat.core.js';
import { COMPONENTS } from './fontumi-chat.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
