ember-lightpick
==============================================================================

Ember addon for [Lightpick](https://wakirin.github.io/Lightpick/) date range picker library.


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

I'm testing. You can call it alpha. Detailed usage and updated readme will be come later.

``` handlebars
<Lightpick
  @singleDate={{true}}
  @date="17.10.2019"
  @onSelect={{action "onSelect"}}
  @numberOfMonths={{3}}
  @lang={{this.lang}}
  @dropdowns={{hash years=(hash min=2012 max=null) months=true}}
/>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
