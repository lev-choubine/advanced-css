const container = document.querySelector('.container');
const body = document.querySelector('body');

container.addEventListener('mouseover', function(){
    body.style.backgroundImage="url('https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp')";

})

container.addEventListener('mouseout', function(){
    body.style.backgroundImage="none";

})
