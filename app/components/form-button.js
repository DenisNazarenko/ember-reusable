import Component from '@ember/component';
import { computed, get, getProperties, set } from '@ember/object';
import { isBlank, isNone, isPresent } from '@ember/utils';
import { or } from '@ember/object/computed';

/**
 * Form button.
 */
export default Component.extend({
  attributeBindings: ['isDisabledAttribute:disabled', 'type'],
  classNameBindings: ['isRunning:form-button--running', 'styleClass'],
  classNames: ['form-button'],
  tagName: 'button',
  type: 'button',

  clickTask: null,
  clickTaskAfterAction: null,
  isDisabled: false,
  style: null,
  value: '',

  _isRunning: null,

  isDisabledAttribute: or('isDisabled', 'isRunning'),

  styleClass: computed('style', function() {
    let stylesArray = [];
    let styles = get(this, 'style');

    if (!isBlank(styles)) {
      styles = styles.split(' ');
      stylesArray = styles.map((style) => {
        return `form-button--${style}`;
      });
    }

    return stylesArray.join(' ');
  }),

  isRunning: computed('_isRunning', 'clickTask', 'clickTask.task.isRunning', {
    get() {
      const { _isRunning, clickTask } = getProperties(this, '_isRunning', 'clickTask');

      if (isPresent(_isRunning)) {
        return _isRunning;
      }
      if (isPresent(clickTask)) {
        return get(clickTask.task, 'isRunning');
      }

      return false;
    },
    set(key, value) {
      set(this, '_isRunning', value);

      return value;
    }
  }),

  click() {
    const { clickTask, isDisabled, type } = getProperties(this, 'clickTask', 'isDisabled', 'type');

    if (isDisabled) {
      return;
    }

    if ('button' === type && isPresent(clickTask)) {
      clickTask.task.perform(clickTask.params).then(this._afterAction.bind(this));
    }
  },

  _afterAction() {
    const afterAction = get(this, 'clickTaskAfterAction');

    if (!isNone(afterAction)) {
      afterAction();
    }
  }
});
