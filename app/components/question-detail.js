import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    deleteAnswer(answer) {
      if(confirm('You definitely want to delete your reponse?')) {
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
