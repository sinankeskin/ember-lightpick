/* globals Lightpick */
import TextField from '@ember/component/text-field';
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import moment from 'moment';

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

  field: null,

  _config: computed({
    get() {
      const config =
        getOwner(this).resolveRegistration('config:environment') || {};

      return config['ember-lightpick'] || {};
    }
  }),

  _options: computed('_config', 'attrs', {
    get() {
      const options = this._defaultOptions();

      assign(options, this._config, this._componentOptions());

      return options;
    }
  }),

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
      field: this.get('field')
    };
  },

  _componentOptions() {
    const defaults = [
      'secondField',
      'firstDay',
      'parentEl',
      'lang',
      'format',
      'separator',
      'numberOfMonths',
      'numberOfColumns',
      'singleDate',
      'autoclose',
      'repick',
      'date', // to add value to input tag
      'startDate',
      'endDate',
      'minDate',
      'maxDate',
      'disableDates',
      'selectForward',
      'selectBackward',
      'minDays',
      'maxDays',
      'hoveringTooltip',
      'hideOnBodyClick',
      'footer',
      'disabledDatesInRange',
      'tooltipNights',
      'orientation',
      'disableWeekends',
      'inline',
      'dropdowns',
      'locale',
      'onSelect',
      'onOpen',
      'onClose ',
      'onError'
    ];

    const options = {};

    defaults.forEach(option => {
      if (isPresent(this.get(option))) {
        options[option] = this.get(option);
      }
    });

    return options;
  },

  _setupLightpick() {
    this.set('picker', new Lightpick(this.get('_options')));
    this._setMomentLocale();
    this._setLightpickDate();
  },

  _setMomentLocale() {
    if (isPresent(this.get('lang')) && this.get('lang') !== 'auto') {
      moment.locale(this.get('lang'));
    }
  },

  _setLightpickDate() {
    if (isPresent(this.get('singleDate'))) {
      if (this.get('singleDate')) {
        const date = this.get('date');

        if (isPresent(date)) {
          this.get('picker').setDate(date);
        }
      } else {
        const startDate = this.get('startDate');

        if (isPresent(startDate)) {
          const endDate = this.get('endDate');

          if (isPresent(endDate)) {
            this.get('picker').setDateRange(startDate, endDate);
          } else {
            this.get('picker').setDateRange(startDate, null);
          }
        }
      }
    }
  },

  _updateOptions() {
    this._setMomentLocale();
    this.get('picker').reloadOptions(this.get('_options'));
  }
});
