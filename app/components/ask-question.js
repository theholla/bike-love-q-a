import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        summary: this.get('summary') ? this.get('summary') : "",
        q: this.get('q') ? this.get('q') : "",
        user: this.get('user') ? this.get('user') : "",
        tags: this.get('tags') ? this.get('tags') : "",
        date: Date.now(),
      };
      this.sendAction('save', params);
    }
  }
});
