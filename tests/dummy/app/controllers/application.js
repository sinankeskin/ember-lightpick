import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('lang', 'en');
    this.set('format', 'MM/DD/YYYY');
  },
  actions: {
    onSelect(startDate) {
      alert(startDate);
      this.set('lang', 'tr');
      this.set('format', 'DD.MM.YYYY');
    }
  }
});
