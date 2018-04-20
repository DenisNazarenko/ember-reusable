import TextField from '@ember/component/text-field';

/**
 * Text input.
 */
export default TextField.extend({
  attributeBindings: ['autocapitalize'],
  autocapitalize: 'off',
  autocomplete: 'off',
  classNames: ['input-text'],
  disabled: false,
  maxlength: '524288',
  placeholder: '',
  readonly: false,
  spellcheck: false,
  type: 'text',

  value: ''
});
