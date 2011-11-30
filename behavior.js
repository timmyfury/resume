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
		Filter
	**********************************************************************/
	function Filter(opts){

		this.opts = $.extend({
			
		}, opts);

		return this;

	}

	(function(filterproto){

		filterproto.toString = function(){ return "[object Filter]"; };

	}(Filter.prototype));

	window.Filter = Filter;

	/*
		Filter
	**********************************************************************/
	$(function(){

		var skills = $("#skills dt").getClasses();

		for(var i = 0; i < skills.length; i++){
			var skill = skills[i],
				filters = $('dt.' + skill + ', ' + 'dd.' + skill),
				label = $('dt.' + skill).text();

			console.log(label, ' - ', skill, filters);
		}

	});
}(jQuery));