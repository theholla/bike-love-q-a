import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['questions']
},
  {
  actions: {
    update(question) {
      var params = {
        summary: this.get('summary'),
        q: this.get('q'),
        user: this.get('user'),
        date: this.get('date'),
        tags: this.get('tags'),
      };
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Delete this for reals?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
