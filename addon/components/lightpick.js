/* globals Lightpick */
import TextField from '@ember/component/text-field';
import { assign } from '@ember/polyfills';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default TextField.extend({
  classNames: ['ember-lightpick-input'],
  /**
   * ARIA bindings for a textbox.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role
   * @see https://labs.levelaccess.com/index.php/Category:ARIA
   */
  attributeBindings: [
    'aria-activedescendent',
    'aria-autocomplete',
    'aria-describedby',
    'aria-labelledby',
    'aria-multiline',
    'aria-placeholder',
    'aria-readonly',
    'aria-required'
  ],

  _options: computed('attrs', {
    get() {
      const options = this._defaultOptions();
      // eslint-disable-next-line ember/no-attrs-in-components
      assign(options, this.getProperties(Object.keys(this.attrs)));

      return options;
    }
  }),

  _onSelect() {},
  _onOpen() {},
  _onClose() {},
  _onError() {},

  didInsertElement() {
    this._super(...arguments);

    this.set('field', this.element);
    this._setupLightpick();
  },

  didUpdateAttrs() {
    this._super(...arguments);

    this._updateOptions();
  },

  willDestroyElement() {
    this._super(...arguments);

    this.get('picker').destroy();
  },

  _defaultOptions() {
    return {
      field: this.get('field'),
      onSelect: this._onSelect.bind(this),
      onOpen: this._onOpen.bind(this),
      onClose: this._onClose.bind(this),
      onError: this._onError.bind(this)
    };
  },

  _setupLightpick() {
    this.set('picker', new Lightpick(this.get('_options')));
    this._setLightpickDate();
  },

  _setLightpickDate() {
    const options = this.get('_options');

    if (options.singleDate) {
      const date = options.date;

      if (isPresent(date)) {
        this.get('picker').setDate(date);
      }
    } else {
      const startDate = options.startDate;

      if (isPresent(startDate)) {
        const endDate = options.endDate;

        if (isPresent(endDate)) {
          this.get('picker').setDateRange(startDate, endDate);
        } else {
          this.get('picker').setDateRange(startDate, null);
        }
      }
    }
  },

  _updateOptions() {
    this.get('picker').reloadOptions(this.get('_options'));
  }
});
