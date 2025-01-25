// Put your code in here to make each of the tests described in the HTML file
// pass.

//1.
document.getElementById('bubble-trouble').addEventListener('click', function(event) {
  event.stopPropagation();  
});

//2.
document.getElementById('increment').addEventListener('click', function(){
    counterValue += 1;
document.getElementById('counter-value').innerHTML = counterValue;
});

document.getElementById('decrement').addEventListener('click', function() {
counterValue -=1;
document.getElementById('counter-value').innerHTML = counterValue;
});

document.getElementById('zero-out').addEventListener('click', function () {
    counterValue = 0;
    document.getElementById('counter-value').innerHTML = counterValue;
});

//3.
document.addEventListener('DOMContentLoaded', function() {
    var inputBox = document.getElementById('my-name-is');

    var storedValue = localStorage.getItem('my-name-is');
    if (storedValue) {
        inputBox.value = storedValue;
    }
inputBox.addEventListener('keyup', function() {
    localStorage.setItem('my-name-is', inputBox.value);
            });
});

//4.
document.getElementById('navigates-elsewhere').addEventListener('click', function(event) {
  event.preventDefault();  
});

//5.
document.getElementById('go-fetch').addEventListener('click', function() {
   
 fetch('https://dog.ceo/api/breed/terrier/list')
   .then(response => response.json())
   .then(data => {
    const subBreeds = data.message;
    const subBreedsList = document.getElementById('sub-breed-ol');
    subBreedsList.innerHTML = '';

    subBreeds.forEach(subBreed => {
        const listItem = document.createElement('li');
        listItem.textContent = subBreed;

 listItem.addEventListener('mouseover', function() {
    listItem.style.color = 'red';

 });
 subBreedsList.appendChild(listItem);       
    });
   }) 
.catch(error => console.error('Error fetching data:', error));

});

