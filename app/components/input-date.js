import InputText from 'mobileapp/components/input-text';
import moment from 'moment';
import { computed, get, set } from '@ember/object';

const { isMoment } = moment;

/**
 * Date input.
 */
export default InputText.extend({
  type: 'date',

  value: computed('date', {
    get() {
      const date = get(this, 'date');

      if (!isMoment(date) || !date.isValid()) {
        return '';
      }

      return get(this, 'date').format(moment.HTML5_FMT.DATE);
    },

    set(key, value) {
      set(this, 'date', moment(value, moment.HTML5_FMT.DATE));
      return value;
    }
  })
});
