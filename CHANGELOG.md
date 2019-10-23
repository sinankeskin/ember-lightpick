# Changelog
All notable changes will be documented in this file.

[1.0.0] - 2019-10-22
* Fix minDate, maxDate, disableDates and value (gotoDate) of input now respects format parameter.
* Switch to 1.x release.

[0.0.10] - 2019-10-22
* New options `onMonthsChange` and `onYearsChange` - Events fire when months or years select changed.
    `onMonthsChange` throws zero based number of month. Ex: January = 0
    `onYearsChange` throws year. Ex: 2019

[0.0.9] - 22.10.2019
* `date` parameter was added by me. Revert back to TextField value parameter.
* New option `weekdayStyle` - Weekday display style added.
    Possible values are 'long', 'short' or 'narrow'.

[0.0.1] - 17.10.2019
* Published on Github
