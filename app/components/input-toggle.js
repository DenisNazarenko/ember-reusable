import Component from '@ember/component';
import { getProperties } from '@ember/object';

/**
 * Input toggle.
 */
export default Component.extend({
  classNames: ['input-toggle'],
  tagName: 'label',

  disabled: false,
  label: '',
  toggled: false,

  click(event) {
    // prevent checkbox from changing state directly
    event.preventDefault();

    const { disabled, toggleAction, toggled } = getProperties(this, 'disabled', 'toggleAction', 'toggled');

    if (disabled) {
      return;
    }

    // actually toggles the value
    if (toggleAction) {
      toggleAction(!toggled);
      return;
    }

    this.toggleProperty('toggled');
  }
});
