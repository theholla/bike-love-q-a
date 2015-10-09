import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr(),
  q: DS.attr(),
  user: DS.attr(),
  date: DS.attr(),
  tags: DS.attr()
});
