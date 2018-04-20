import TextField from '@ember/component/text-field';
import { get } from '@ember/object';
import { isPresent } from '@ember/utils';
import { run } from '@ember/runloop';

/**
 * Image file input.
 */
export default TextField.extend({
  accept: 'image/*',
  attributeBindings: ['accept', 'multiple'],
  changeTask: null,
  classNames: ['input-image'],
  multiple: false,
  type: 'file',

  change(event) {
    if (isPresent(event.target.files)) {
      const changeTask = get(this, 'changeTask');
      const length = event.target.files.length || 0;

      if (isPresent(changeTask) && length > 0) {
        for (let i = 0; i < length; i++) {
          const file = event.target.files[i];
          changeTask.perform({ file });
        }
        run(() => {
          this.$().val('');
        });
      }
    }
  }
});
