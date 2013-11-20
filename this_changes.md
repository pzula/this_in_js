!SLIDE

# `this` is a bit like Pokemon

![Gotta catch 'em all?](/images/transformation.jpg)

!SLIDE

# `this` can change on you…
### just like a Pokemon can change with the right stone
![Thunderstone, go!](/images/thunderstone.jpg)

!SLIDE title

# `this` changes 
# with the right invocation

!SLIDE 

# Case 1: Inside of a function

```
function openPokeball() {
	return this;
}

```

Here `function openPokeball() === window;`
and `this` refers to the global object

!SLIDE

# Case 2: Inside of a function* 
*(in strict mode)

```
function openPokeball() {
	"use strict";
	return this;
}
```

Here `function openPokeball() === undefined`

!SLIDE

# Case 3: As an object method

When a function is called as a method of an object, `this` is set to the object that the method is called on:

```
var Pikachu = {
	type: "electric",
	ability: "static",
	attacks: ["growl", "thunder shock", "tail whip"],
	stats: function() {
		return "Type is" + this.type;
		return "Ability is" + this.ability;
	}
}

```

!SLIDE

In this case, when `Pikachu.stats();` is invoked, `this` gets bound to the `Pikachu` object, as we can see in by running `console.log()` on it:

```
console.log(Pikachu.stats()); 
// logs:
// Type is electric
// Ability is static
```
