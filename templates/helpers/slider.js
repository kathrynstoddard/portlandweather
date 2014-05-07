// define(function (require) {
// 	var Handlebars = require('hbs/handlebars');

// 	function convertCelcius (context, options) {
// 		 var temperatureF = context;

// 		 return Math.round(5/9 * (temperatureF - 32));

// 	}
	

// 	Handlebars.registerHelper( 'convertCelcius', convertCelcius);

// 	return convertCelcius;
// });

define(function (require) {
	var Handlebars = require('hbs/handlbears');

	function slider (context, options) {
		var ret = "";      
    if (this.id === selected[0].id) {
        ret = "selected";
    }
    return options.fn(ret);
	}

	Handlebars.registerHelper ('slider', slider);

	return slider;
});