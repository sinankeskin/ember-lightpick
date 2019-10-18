import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('lang', 'en');
    this.set('format', 'MM/DD/YYYY');
    this.set('disableDates', ['15.10.2019', '16.10.2019']);
  },
  actions: {
    onSelect(startDate) {
      console.log(startDate);
      this.set('lang', 'tr');
      this.set('format', 'DD.MM.YYYY');
    }
  }
});
