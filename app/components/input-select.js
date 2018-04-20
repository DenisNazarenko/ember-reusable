import Component from '@ember/component';
import { set } from '@ember/object';

/**
 * Select input.
 */
export default Component.extend({
  attributeBindings: ['readonly:readonly'],
  classNames: ['input-select'],
  readonly: false,
  tagName: 'select',

  options: null,
  value: null,

  change(event) {
    const value = event.target.value;
    set(this, 'value', value);
  }
})
