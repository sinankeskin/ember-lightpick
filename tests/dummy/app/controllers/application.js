import Controller from '@ember/controller';

export default Controller.extend({
  init(){
    this._super(...arguments);

    this.set("lang", "en-US");
  },
  actions: {
    onSelect(startDate) {
      alert(startDate);
      this.set("lang", "tr-TR");
    }
  }
});
