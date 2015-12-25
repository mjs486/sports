'use strict';

// /* Filters */

angular.module('filterFilters', []).filter('startFrom', function() {
  return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});
