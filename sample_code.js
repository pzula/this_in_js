Bob = function() {
	// this is Bob
	this.hey = function(input) {
		// this is also Bob
		if (this.isShouting(input)) {

		}
	}

	this.isShouting = function(input) {}
}

//////

Bob = function() {

  this.inputField = $("#bob-input");
  // this, right now is Bob

  var self = this;
  this.inputField.on("click",function(eventObj) {
    // this, right now is no longer Bob
    // this is inputField
    // you can self
  });

  // bind and apply

  $.proxy(function() {},this);
}
