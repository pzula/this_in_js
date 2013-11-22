!SLIDE

# Remember Bob?

![Bob the Pokemon Master](/images/pokemon-bob.jpg)

!SLIDE 

# `this` works as expected

![This in Bob](/images/this_bob.png)

Here, `this` refers to our instance of Bob

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

![Inside the Bob object](/images/meanwhile_bob.png)


!SLIDE
![Pikachu is mad](/images/mad-pikachu.png)


!SLIDE
# Unexpected results!

![Unexpected results](/images/unexpected_results.png)

!SLIDE
#Why is that happening?

JavaScript has the methods `bind(newThis);` and `apply(newThis, args..);`, which jQuery uses to reset `this`. It's important to keep this in mind when making assumptions about the value of `this` because anything can change it!


!SLIDE title

# How do we fix `this`?

!SLIDE

# assign `this` to a variable* 
*to save its state

![Define self](/images/define_self.png)

Now, `self` will refer to the Bob object and return the input field

!SLIDE 
# And all is well with the world

![Pikachu is surprised](/images/suprised-pikachu.gif)

!SLIDE title

# Another way…

!SLIDE

# Pokemasters use $.proxy();

`$.proxy();` can take two parameters: `function` and `context`.

It will take in the function you specify, and return a new one with the context that you specify.

!SLIDE

# Using $.proxy(); with Bob

![Using Proxy](/images/proxy.png)

Now `this` is within the context of our Bob object

!SLIDE

![Pikachu is happy](/images/happy-pikachu.png)
	

!SLIDE

# Remember

## **save the state of `this`**

or

use `$.proxy();` when you're feeling hip

## to solve `this` woes in jQuery