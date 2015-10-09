import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
