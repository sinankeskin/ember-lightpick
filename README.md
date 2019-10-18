ember-lightpick
==============================================================================

Ember addon for [Lightpick](https://wakirin.github.io/Lightpick/) date range picker library.
[ember-cli-moment-shim](https://github.com/jasonmit/ember-cli-moment-shim) is used in the background so it is added as NPM dependencies to your application.

![screenshot](https://wakirin.github.io/Lightpick_new_style.gif)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-lightpick
```


Usage
------------------------------------------------------------------------------

> This library has issues with moment format. Ex: minDate and maxDate formats always should be *MM/DD/YYYY* format.
> I sent a [PR](https://github.com/wakirin/Lightpick/pull/92) for this issue but then i realize disableDates also has this issue.
> In short, even if your format set the differ you should use *MM/DD/YYYY* format everywhere till author fix this.

You can change all global configuration settings via `config/environment.js` file.

Please check [Lightpick](https://wakirin.github.io/Lightpick/) site for more configuration details.

```javascript
ENV['ember-lightpick'] = {
  firstDay: 1,
  parentEl: 'body',
  lang: 'auto',
  format: 'DD/MM/YYYY',
  separator: ' - ',
  numberOfMonths: 1,
  numberOfColumns: 2,
  singleDate: true,
  autoclose: true,
  repick: false,
  startDate: null,
  endDate: null,
  minDate: null,
  maxDate: null,
  disableDates: null,
  selectForward: false,
  selectBackward: false,
  minDays: null,
  maxDays: null,
  hoveringTooltip: true,
  hideOnBodyClick: true,
  footer: false,
  disabledDatesInRange: true,
  tooltipNights: false,
  orientation: 'auto',
  disableWeekends: false,
  inline: false,
  dropdowns: {
    years: {
      min: 1900,
      max: null,
    },
    months: true,
  },
  locale: {
    buttons: {
      prev: '&leftarrow;',
      next: '&rightarrow;',
      close: '&times;',
      reset: 'Reset',
      apply: 'Apply',
    },
    tooltip: {
      one: 'day',
      other: 'days',
    },
    tooltipOnDisabled: null,
    pluralize: function(i, locale){
      if (typeof i === "string") i = parseInt(i, 10);

      if (i === 1 && 'one' in locale) return locale.one;
      if ('other' in locale) return locale.other;

      return '';
    },
  }
};
```
ember-cli-moment-shim included the project therefore if you want to include another locale for moment
you should add to environment like below. English is automatically included.
If your lang parameter set to your locale all dates will return in this locale settings.

```javascript
ENV['moment'] = {
    // To cherry-pick specific locale support into your application.
    // Full list of locales: https://github.com/moment/moment/tree/master/locale
    includeLocales: ['tr']
  };
```

Default configuration

``` handlebars
<Lightpick @onSelect={{action "onSelect"}} />
```

All default configuration parameters

> If singleDate is true you can set a value with date parameter.
> If singleDate is false you can set start date and end date with startDate and endDate parameters.

``` handlebars
<Lightpick
  @secondField={{null}},
  @firstDay={{1}},
  @parentEl='body',
  @lang='auto',
  @format='DD/MM/YYYY',
  @separator=' - ',
  @numberOfMonths={{1}},
  @numberOfColumns={{2}},
  @singleDate={{true}},
  @autoclose={{true}},
  @repick={{false}},
  @date={{null}},
  @startDate={{null}},
  @endDate={{null}},
  @minDate={{null}},
  @maxDate={{null}},
  @disableDates={{null}},
  @selectForward={{false}},
  @selectBackward={{false}},
  @minDays={{null}},
  @maxDays={{null}},
  @hoveringTooltip={{true}},
  @hideOnBodyClick={{true}},
  @footer={{false}},
  @disabledDatesInRange={{true}},
  @tooltipNights={{false}},
  @orientation={{'auto'}},
  @disableWeekends={{false}},
  @inline={{false}},
  @dropdowns={{hash years=(hash min=1900 max= null) months=true}},
  @locale={{hash buttons=(hash prev='&leftarrow;'
                                next='&rightarrow;'
                                close='&times;'
                                reset='Reset'
                                apply='Apply')
      tooltip=(hash one='day' other='days')
      tooltipOnDisabled=null
  }},
  @onSelect={{action "onSelect"}},
  @onOpen={{action "onOpen"}},
  @onClose={{action "onClose"}},
  @onError={{action "onError"}}
/>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.
I'm sorry that i don't have time to write tests. Please report if you find any issue.

Thanks.

TODO
------------------------------------------------------------------------------
- [X] Initial release

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).