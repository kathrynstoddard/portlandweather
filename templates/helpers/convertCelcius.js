define(function (require) {
	var Handlebars = require('hbs/handlebars');

	function convertCelcius (context, options) {
		 var temperatureF = context;

		 return Math.round(5/9 * (temperatureF - 32));

	}
	

	Handlebars.registerHelper( 'convertCelcius', convertCelcius);

	return convertCelcius;
});