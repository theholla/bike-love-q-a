import Ember from 'ember';

export default Ember.Component.extend({
  provideAnswer: false,
  actions: {
    provideAnswerForm() {
      this.set('provideAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        email: this.get('email') ? this.get('email') : "",
        text: this.get('text') ? this.get('text') : "",
        question: this.get('question') ? this.get('question') : "",
        date: Date.now(),
      };
      this.set('provideAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
