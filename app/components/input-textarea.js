import TextArea from '@ember/component/text-area';
import { get } from '@ember/object';
import { isPresent } from '@ember/utils';

/**
 * Texteara input.
 */
export default TextArea.extend({
  autocomplete: 'off',
  autoresize: true,
  classNames: ['input-textarea'],
  maxlength: '524288',
  placeholder: '',
  spellcheck: false,

  focusInAction: null,
  focusOutAction: null,
  value: '',

  focusIn() {
    const focusInAction = get(this, 'focusInAction');

    if (isPresent(focusInAction)) {
      focusInAction();
    }
  },

  focusOut() {
    const focusOutAction = get(this, 'focusOutAction');

    if (isPresent(focusOutAction)) {
      focusOutAction();
    }
  }
});
