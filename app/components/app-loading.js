import Component from '@ember/component';

/**
 * Loading component.
 */
export default Component.extend({
  classNameBindings: [
    'fullscreen:app-loading--fullscreen',
    'inButton:app-loading--button',
    'inInput:app-loading--input',
    'inline:app-loading--inline'
  ],
  classNames: ['app-loading'],

  fullscreen: false,
  inButton: false,
  inInput: false,
  inline: false
});
