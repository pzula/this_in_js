!SLIDE

# Remember Bob?

![Bob the Pokemon Master](/images/pokemon-bob.jpg)

!SLIDE

```
var Bob = function() {
	this.hey = function(input) {
		if (this.isShouting(input)) {
			return "Whoa, chill out!";
		} else if (this.isAQuestion(input)) {
			return "Sure"
		} else if (this.isSilence(input)) {
      return "Fine. Be that way!";
    } else {
			return "Whatever.";
		}
	}

	this.isShouting = function(input) {
		return input.search(/[a-zA-Z]/) != -1 
		&& input.toUpperCase() === input;
	}

	this.isAQuestion = function(input) {
		return input[input.length - 1] === "?";
	}

	this.isSilence = function(input) {
		return input.trim() === "";
	}
}
```

!SLIDE

# A fireside chat with Bob*
*using jQuery

![Bob by the Fireplace](/images/bob-fireplace.jpg)

!SLIDE 

# The HTML

```
<h1>Fireside Chat with Bob</h1>
<input type="text" name="chat" id="bob-input">
<button id="bob-input-button">Say</button>

```

!SLIDE

#The JavaScript

Meanwhile, inside of the Bob object:

```
var Bob = function() {
	###

	this.inputField = $("#bob-input");
	this.inputButton = $("#bob-input-button");

	this.inputButton.click(function(eventObj) {
		console.log(this.inputField);
	});
	
	###
});
```

!SLIDE
![Pikachu is mad](/images/mad-pikachu.png)


!SLIDE
# Unexpected results!

```
###

this.inputButton.click(function(eventObj) {
	console.log(this.inputField);
	\\ this outputs 'undefined' instead of our input field
	\\ 'this' is not our instance of Bob
	\\ 'this' is actually the element that was clicked
});

```
!SLIDE
#Why is that happening?

JavaScript has the methods `bind(newThis);` and `apply(newThis, args..);`, which jQuery uses to reset `this`. It's important to keep this in mind when making assumptions about the value of `this` because anything can change it!


!SLIDE title

# How do we fix `this`?

!SLIDE

# assign `this` to a variable* 
*to save its state

```
var Bob = function() {
	###
	
	this.inputField = $("#bob-input");
	this.inputButton = $("#bob-input-button");
	var self = this;

	this.inputButton.click(function(eventObj) {
		console.log(self.inputField);
	});
});
```

!SLIDE 
# And all is well with the world

![Pikachu is surprised](/images/suprised-pikachu.gif)

!SLIDE title

# Another way…

!SLIDE

# Introducing $.proxy();

`$.proxy();` can take two parameters: `function` and `context`.

It will take in the function you specify, and return a new one with the context that you specify.

!SLIDE

# Using $.proxy(); with Bob

```
var Bob = function() {
	###

	this.inputButton.click( $.proxy(function(eventObj) {
		// Execute the proxy but within the Bob object
		console.log(this.inputField);
	},this));
	
	###
});
```

!SLIDE

![Pikachu is happy](/images/happy-pikachu.png)
	

!SLIDE

# Remember

`var self = this;`

and

`$.proxy();`

are your friends when using `this` in jQuery