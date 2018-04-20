import Component from '@ember/component';

/**
 * Checkbox input.
 */
export default Component.extend({
  autocomplete: 'off',
  classNameBindings: ['disabled:input-checkbox--disabled'],
  classNames: ['input-checkbox'],

  checked: false,
  disabled: false,
  text: null,

  click() {
    this.toggleProperty('checked');
  }
});
