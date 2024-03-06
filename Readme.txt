installed bootstrap as a css library
npm i bootstrap@latest

by reading the examples and documentation in https://getbootstrap.com/ 
you can implement different styles on the html controls.

docs / Components

if you want to return multiple lines of html from a function. use paranthesis
to wrap the lines.

React cant return more than 1 element from a function. 
below is not possible:
return(
<h1></h1>
<ul>...</ul>
)

if you need something like above, use a wrapper like div

below is possible
return (
    <ul><li>...</li></ul>
)

Since li and ul are not on the same level. and there is only one element returned,
<ul>