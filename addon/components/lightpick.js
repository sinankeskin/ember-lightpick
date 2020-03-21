/* globals Lightpick */
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { action, computed, get } from '@ember/object';
import { isPresent } from '@ember/utils';
import moment from 'moment';
import Component from '@glimmer/component';

/**
 * Lightpick component
 *
 * Usage:
 *
 * * Base
 * ``` handlebars
 * <Lightpick @onSelect={{fn this.onSelect}} />
 * ```
 * * Full
 * ``` handlebars
 * <Lightpick @secondField={{null}} @firstDay={{1}} @parentEl="body" @lang="auto" @format="DD/MM/YYYY" @separator=" - " @numberOfMonths={{1}} @numberOfColumns={{2}} @singleDate={{true}} @autoclose={{true}} @repick={{false}} @value={{null}} @startDate={{null}} @endDate={{null}} @minDate={{null}} @maxDate={{null}} @disableDates={{null}} @selectForward={{false}} @selectBackward={{false}} @minDays={{null}} @maxDays={{null}} @hoveringTooltip={{true}} @hideOnBodyClick={{true}} @footer={{false}} @disabledDatesInRange={{true}} @tooltipNights={{false}} @orientation={{"auto"}} @disableWeekends={{false}} @inline={{false}} @weekdayStyle="short" @dropdowns={{hash years=(hash min=1900 max= null) months=true}} @locale={{hash buttons=(hash prev="&leftarrow;" next="&rightarrow;" close="&times;" reset="Reset" apply="Apply" tooltip=(hash one="day" other="days" tooltipOnDisabled=null }} @onSelect={{fn this.onSelect}} @onSelectStart={{fn this.onSelectStart}} @onSelectEnd={{fn this.onSelectEnd}} @onOpen={{fn this.onOpen}} @onClose={{fn this.onClose}} @onError={{fn this.onError}} @onMonthsChange={{fn this.onMonthsChange}} @onYearsChange={{fn this.onYearsChange}}/>
 * ```
 *
 * @class Lightpick
 * @public
 */
export default class LightpickComponent extends Component {
  @computed
  get _config() {
    const config = getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-lightpick'] || {};
  }

  @computed('_config')
  get _options() {
    const options = this._defaultOptions();

    assign(options, this._config, this._componentOptions());

    return options;
  }

  /**
   * @argument field
   * @type HtmlElement
   */
  _defaultOptions() {
    return {
      field: this.field
    };
  }

  /**
   * @argument secondField
   * @type HtmlElement
   */

  /**
   * @argument firstDay
   * @type Number
   */

  /**
   * @argument parentEl
   * @type HtmlElement|String
   */

  /**
   * @argument lang
   * @type String
   */

  /**
   * @argument format
   * @type String
   */

  /**
   * @argument separator
   * @type String
   */

  /**
   * @argument numberOfMonths
   * @type Number
   */

  /**
   * @argument numberOfColumns
   * @type Number
   */

  /**
   * @argument singleDate
   * @type Boolean
   */

  /**
   * @argument autoclose
   * @type Boolean
   */

  /**
   * @argument repick
   * @type Boolean
   */

  /**
   * @argument startDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument endDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument minDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument maxDate
   * @type moment|String|Number|Date
   */

  /**
   * @argument disableDates
   * @type Array
   */

  /**
   * @argument selectForward
   * @type Boolean
   */

  /**
   * @argument selectBackward
   * @type Boolean
   */

  /**
   * @argument minDays
   * @type Number
   */

  /**
   * @argument maxDays
   * @type Number
   */

  /**
   * @argument hoveringTooltip
   * @type Boolean
   */

  /**
   * @argument hideOnBodyClick
   * @type Boolean
   */

  /**
   * @argument footer
   * @type Boolean|String
   */

  /**
   * @argument disabledDatesInRange
   * @type Boolean
   */

  /**
   * @argument tooltipNights
   * @type Boolean
   */

  /**
   * @argument orientation
   * @type String
   */

  /**
   * @argument disableWeekends
   * @type Boolean
   */

  /**
   * @argument inline
   * @type Boolean
   */

  /**
   * @argument weekdayStyle
   * @type String
   */

  /**
   * @argument dropdowns
   * @type Object|Boolean
   */

  /**
   * @argument locale
   * @type Object
   */

  /**
   * @argument onSelect
   * @type Function
   */

  /**
   * @argument onSelectStart
   * @type Function
   */

  /**
   * @argument onSelectEnd
   * @type Function
   */

  /**
   * @argument onOpen
   * @type Function
   */

  /**
   * @argument onClose
   * @type Function
   */

  /**
   * @argument onError
   * @type Function
   */

  /**
   * @argument onMonthsChange
   * @type Function
   */

  /**
   * @argument onYearsChange
   * @type Function
   */

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
      'weekdayStyle',
      'dropdowns',
      'locale',
      'onSelect',
      'onSelectStart',
      'onSelectEnd',
      'onOpen',
      'onClose ',
      'onError',
      'onMonthsChange',
      'onYearsChange'
    ];

    const options = {};

    defaults.forEach(option => {
      if (isPresent(get(this.args, option))) {
        options[option] = get(this.args, option);
      }
    });

    return options;
  }

  @action
  _initializeOptions(element) {
    this.field = element;

    this._setupLightpick();
  }

  @action
  _updateOptions() {
    this._setMomentLocale();

    this.picker.reloadOptions(this._options);
  }

  @action
  _destroyOptions() {
    this.picker.destroy();
  }

  _setupLightpick() {
    this.picker = new Lightpick(this._options);

    this._setMomentLocale();
    this._setLightpickDate();
  }

  _setMomentLocale() {
    const lang = this.args.lang;

    if (isPresent(lang) && lang !== 'auto') {
      moment.locale(lang);
    }
  }

  _setLightpickDate() {
    const singleDate = this.args.singleDate;

    if (isPresent(singleDate)) {
      if (singleDate) {
        const value = this.args.value;

        if (isPresent(value)) {
          this.picker.setDate(value);
        }
      } else {
        const startDate = this.args.startDate;

        if (isPresent(startDate)) {
          const endDate = this.args.endDate;

          if (isPresent(endDate)) {
            this.picker.setDateRange(startDate, endDate);
          } else {
            this.picker.setDateRange(startDate, null);
          }
        }
      }
    }
  }
}
