Flint = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Flint.Router.map(function() {
  this.route('about');
  this.resource('products');
});

Flint.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

Flint.IndexController = Ember.Controller.extend({
	productType: 2,
	rock_orange: 'img/flint.png',
	current_time: function () {
		return(new Date()).toDateString()
	}.property()
});

var products = [
	{
		title: 'Flint',
		price: 29,
		description: "Awesome for simple building and our most affordable material" +
		"yet",
		isOnSale: true,
		image: 'img/flint.png'
	},
	{
		title: 'Orine',
		price: 999,
		description: "One of the finest materials on Planet Flint. We cherish great" +
		"build materials and we know Orine will never disappoint.",
		isOnSale: true,
		image: 'img/orine.png'
	}];

Flint.ProductsRoute = Ember.Route.extend({
	model: function () {
		return products;
	}
});

Flint.ProductController = Ember.Controller.extend({

});