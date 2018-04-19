import Component from '@ember/component';
import { get, getProperties } from '@ember/object';
import { isNone } from '@ember/utils';
import { task } from 'ember-concurrency';

/**
 * Form container.
 */
export default Component.extend({
  attributeBindings: ['autocomplete', 'novalidate'],
  autocomplete: 'off',
  classNames: ['form-container'],
  tagName: 'form',

  isDisabled: false,
  novalidate: true,
  submitTask: null,

  _submitTask: task(function* () {
    const submitTask = get(this, 'submitTask');

    if (!isNone(submitTask)) {
      yield submitTask.task.perform(submitTask.params);
    }
  }),

  submit(event) {
    event.preventDefault();

    const { isDisabled, _submitTask } = getProperties(this, 'isDisabled', '_submitTask');

    if (isDisabled) {
      return;
    }

    _submitTask.perform();
  }
});
