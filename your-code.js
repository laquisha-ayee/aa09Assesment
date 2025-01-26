/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

document.addEventListener('DOMContentLoaded', () => {
    const firstSquare = document.getElementById('first-square-id');
    const button = document.createElement('button');
    button.textContent = '1';
    firstSquare.appendChild(button);
});


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

document.addEventListener('DOMContentLoaded', () => {
    
    const secondSquare = document.querySelector('.second-square-class');
     
    secondSquare.computedStyleMap.backgroundcolor = 'orange';
    secondSquare.computedStyleMap.color = 'white';
    secondSquare.computedStyleMap.boarder = '5px dashed black';
});
 


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well. 
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

document.addEventListener('DOMContentLoaded', () => {
    const plusSquares = document.querySelectorAll('.plus');
    
    plusSquares.forEach(square => {

    const currentWidth = parseInt(window.getComputedStyle(square).width);
    const currentFontSize = parseInt(window.getComputedStyle(square).fontSize);

    square.style.width = `${currentWidth * 2}px`;
    square.style.fontSize = `${currentFontSize * 2}px`;

    });
});


// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

document.addEventListener('DOMContentLoaded', () => {
const fourthBox = document.querySelector('.fourth-box-class');
     
    fourthBox.setAttribute('id', 'problem-four');
    fourthBox.classList.remove('square');
    fourthBox.classList.add('round');
});

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

 document.addEventListener('DOMContentLoaded', () => {
for (let i = 5; i <= 7; i++) {
    const box = document.getElementById(`box${i}`);
        if (box) {
            box.remove();
        }
    }
 });

