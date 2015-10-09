import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        summary: this.get('summary'),
        q: this.get('q'),
        user: this.get('user'),
        tags: this.get('tags'),
        date: Date.now(),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },

    deleteQuestion(question) {
      if(confirm('Delete this for reals?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
