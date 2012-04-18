(function($){

	/*
		jQuery
	**********************************************************************/
	$.extend({

		distinct: function(array) {
			var distinct = [];

			$.each(array, function(i, v){
				if($.inArray(v, distinct) == -1){
					distinct.push(v);
				};
			});

			return distinct.sort();
		}

	});

	$.fn.extend({

		getClasses: function(){
			var classes = [];
			this.each(function(i, e){
				var classStr = $(e).attr('class');
				if(classStr != '' && classStr != null && typeof classStr != 'undefined'){
					var classList = classStr.split(/\s+/);
					for(var c = 0; c < classList.length; c++){
						classes.push(classList[c]);
					}
				}
			});
			return $.distinct(classes);
		}

	});

	/*
		Filtering
	**********************************************************************/
	$(function(){

		// var filters = $("#skills .filter");
		// 
		// filters.click(function(evt){
		// 	
		// 	var target = $(this),
		// 		filters = target.data('filters').split(' '),
		// 		hideFilters = _.map(filters, function(f){ return "." + f; }),
		// 		hideSelector = ".competency:not(" + hideFilters.join(",") + ")",
		// 		showFilters = _.map(filters, function(f){ return ".competency." + f; }),
		// 		showSelector = showFilters.join(","),
		// 
		// 		experiences = $(".experience"),
		// 		projects = $(".project");
		// 	
		// 	$(hideSelector).hide();
		// 	$(showSelector).show();
		// 
		// 	experiences.hide().has(showSelector).show();
		// 	projects.hide().has(showSelector).show();
		// 
		// });

	});
}(jQuery));