import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';

/**
 * Error component.
 */
export default Component.extend({
  data: service(),
  header: service(),

  classNameBindings: ['custom:app-error--custom', 'fullscreen:app-error--fullscreen'],
  classNames: ['app-error'],

  custom: false,
  fullscreen: false,
  text: oneWay('data.defaultError'),

  actions: {
    reload() {
      window.location.reload();
    }
  }
});
