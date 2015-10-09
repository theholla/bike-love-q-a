import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        summary: this.get('summary') ? this.get('summary') : "",
        q: this.get('q') ? this.get('q') : "",
        user: this.get('user') ? this.get('user') : "",
        date: this.get('date') ? this.get('date') : "",
        tags: this.get('tags') ? this.get('tags') : "",
      };
      this.sendAction('save', params);
    }
  }
});
