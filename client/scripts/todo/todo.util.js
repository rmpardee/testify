(function() {
	var lastId = 1;

	// Valid todo names must contain at least 2 non-space characters
	var validTodoRe = /[^\s]{2,}/;
	var whiteSpaceRe = /^\s+|\s+$/g;

	todo.util = {
		trimTodoName: function(name) {
			// replaces everything in name that matches the regex expression whiteSpaceRe (2 consequitive white spaces only at the end of the string) with nothing ('')
			return name.replace(whiteSpaceRe, '');
		},
		isValidTodoName: function(name) {
			// .test returns true is the name contains the things in the regex expression validTodoRe (2 non-space characters)
			return validTodoRe.test(name);
		},
		getUniqueId: function() {
			return lastId++;
		}
	};
}());
