Flint = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Flint.Router.map(function() {
  this.route('about');
  this.resource('products', function () {
	  this.resource('product', {path: '/:title'})
  });
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
		description: "From our planet, Flint is one of the hardest material out there. Due to" +
		"it's magnificient colors, Flint is highly effective at removing damanging Estial's" +
		"sunray. It is also highly effective against Big Trollers and Lagune's Tidal Wave Attack.",
		isOnSale: true,
		image: 'img/flint.png'
	},
	{
		title: 'Orine',
		price: 999,
		description: "One of the finest materials on Planet Flint. We cherish great" +
		"build materials and we know Orine will never disappoint. Orine natural healing properties" +
		"makes it highly desirable product for clerics and healers. Increase your magicka with Orine.",
		isOnSale: true,
		image: 'img/orine.png'
	},
	{
		title: 'Ankel',
		price: 1900,
		description: "Powerful dark magic resistance properties. It is the best in the realms! Ankel" +
		"have helped turn 5 Nebulous Wars and the Fifth Tribune Sacrifice. Ankel has medicial benefits." +
		"The healing properties are not as effective as Orine but Ankel works great in-tandem with other" +
		"materials.",
		isOnSale: false,
		image: 'img/ankel.png'
	}];

Flint.ProductsRoute = Ember.Route.extend({
	model: function () {
		return products;
	}
});

Flint.ProductRoute = Ember.Route.extend({
	model: function (params) {
		return products.findBy('title', params.title);
	}
});