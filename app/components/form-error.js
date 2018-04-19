import Component from '@ember/component';
import { equal, none } from '@ember/object/computed';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

/**
 * Form error text.
 */
export default Component.extend({
  data: service(),

  attributeBindings: ['dataText:data-text'],
  classNameBindings: [
    'center:form-error--center',
    'hasEmptyText:form-error--empty',
    'isNone:form-error--none'
  ],
  classNames: ['form-error'],

  center: false,
  dataText: null,
  hasEmptyText: equal('text', ''),
  isNone: none('text'),
  text: null,

  init() {
    this._super(...arguments);

    this.addObserver('text', function() {
      const text = get(this, 'text');
      if ('' !== text) {
        set(this, 'dataText', text);
      }
    });
  }
});
