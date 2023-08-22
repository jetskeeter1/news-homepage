# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size 
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

To create a shadow background when the sidebar is clicked.
First I created a div with no content inside

<div class="backshadow" id="backshadow"></div> index.html // Line 28, within the header element

I define the styles needed in order for the shadow to exist and give a value of 0 to the width

.backshadow{
    position: absolute;
    display: none;
    background-color: rgba(0, 0, 0, 0.338);
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.68);
    width: 0px;
    height: 100em;
    right: 0;
} style.css // Line 44, 52

.navbar{
  ...
  ...
  ...
  transition: 1s;
} style.css // Line 261. animated

I then created an eventlistener that goes interacts with the sidebar whenever the hamburger is clicked. A css of transition is also added for the shadow.

.backshadow{
  display: block;
  transition: 500ms;
} style.css // Line 224, 226

I added overflow hidden and visible to body so that whenever the sidebar is opened the user can never scroll.

openmen.addEventListener("click", ()=>{
    nav.classList.add("openthis");
    shadow.classList.add("full-mobile");
    document.body.style.overflow='hidden'
});
    
closemen.addEventListener("click", ()=>{
    nav.classList.remove("openthis");
    shadow.classList.remove("full-mobile");
    document.body.style.overflow='visible'
}); javascript.js // Line 6, 16.



### Continued development

I want to learn more and do more with event listener for interactivity with the user. Therefore I would more likely reuse the click, learn more whenever I encounter something that need to do other things like hover.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@jetskeeter1](https://www.frontendmentor.io/profile/jetskeeter1)
- Twitter - [@jetskeeter9](https://www.instagram.com/jetskeeter9/?hl=en)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

