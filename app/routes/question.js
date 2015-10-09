import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },

    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question', question_id);
    },

    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    }
  }
});
