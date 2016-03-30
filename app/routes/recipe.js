import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('recipe', params.ingredient_id);
  },
  save3(params) {
    var newIngredient = this.store.createRecord('ingredient', params);
    var recipe = params.recipe;
    recipe.get('ingredients').addObject(newIngredient);
    newIngredient.save().then(function() {
      return recipe.save();
    });
    this.transitionTo('recipe', params.recipe);
  }
});
