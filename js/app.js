Flint = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Flint.Router.map(function() {
  this.route('about');
  this.resource('products', function () {
	  this.resource('product', {path: '/:product_id'})
  });
});

Flint.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});

Flint.IndexController = Ember.ArrayController.extend({
	productType: Ember.computed.alias('length'),
	rock_orange: 'img/flint.png',
	current_time: function () {
		return(new Date()).toDateString()
	}.property()
});

Flint.ApplicationAdapter = DS.FixtureAdapter.extend({

});

Flint.Product = DS.Model.extend({
	title: DS.attr('string'),
	price: DS.attr('number'),
	description: DS.attr('string'),
	inOnSale: DS.attr('boolean'),
	image: DS.attr('string'),
	reviews: DS.hasMany('review', {async:true})
});

Flint.Product.FIXTURES = [
	{   id: 1,
		title: 'Flint',
		price: 29,
		description: "From our planet, Flint is one of the hardest material out there. Due to" +
		"it's magnificient colors, Flint is highly effective at removing damanging Estial's" +
		"sunray. It is also highly effective against Big Trollers and Lagune's Tidal Wave Attack.",
		isOnSale: true,
		image: 'img/flint.png',
		reviews: [100, 101]
	},
	{   id:2,
		title: 'Orine',
		price: 999,
		description: "One of the finest materials on Planet Flint. We cherish great" +
		"build materials and we know Orine will never disappoint. Orine natural healing properties" +
		"makes it highly desirable product for clerics and healers. Increase your magicka with Orine.",
		isOnSale: true,
		image: 'img/orine.png',
		reviews: [102, 105]
	},
	{   id: 3,
		title: 'Ankel',
		price: 1900,
		description: "Powerful dark magic resistance properties. It is the best in the realms! Ankel" +
		"have helped turn 5 Nebulous Wars and the Fifth Tribune Sacrifice. Ankel has medicial benefits." +
		"The healing properties are not as effective as Orine but Ankel works great in-tandem with other" +
		"materials.",
		isOnSale: false,
		image: 'img/ankel.png',
		reviews: [103, 104, 106]
	}];

Flint.ProductsRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('product');
	}
});

Flint.ProductsController = Ember.ArrayController.extend({
	sortProperties: ['title']
});

Flint.ProductRoute = Ember.Route.extend({
	model: function (params) {
		return this.store.find('product', params.product_id);
	}
});

Flint.Review = DS.Model.extend({
	text: DS.attr('string'),
	reviewDate: DS.attr('date')
});

Flint.Review.FIXTURES = [
	{   id: 100,
		product: 1,
		text: "I made my building out of Flint and I think it is the best product yet!"

	},
	{   id: 101,
		product: 1,
		text: "Who needs other brand of goods? I have trusted Flint for decades!"

	},
	{   id: 102,
		product: 2,
		text: "My mother healed great after being infected by Autho's Dyle Spell. As a" +
		"Cleric of the Healing Wind Tribe, I am able to heal multiple people without" +
		"getting fatiqued!"

	},
	{   id: 103,
		product: 3,
		text: "Highly effective!!"

	},
	{   id: 104,
		product: 3,
		text: "Truly phenomenal craftsmanship!"

	},
	{   id: 105,
		product: 2,
		text: "Stunning! Beautiful! Highly Effective. Will buy again!"

	},
	{   id: 106,
		product: 3,
		text: "The craft speaks for itself!"

	}
];