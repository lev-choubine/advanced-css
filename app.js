const container = document.querySelector('.container');
const body = document.querySelector('body');

container.addEventListener('mouseover', function(){
    body.style.backgroundImage="url('https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp')";

})

container.addEventListener('mouseout', function(){
    body.style.backgroundImage="none";

})

$(function () {
    $('[data-toggle="popover"]').popover()
  })

  function createNewElement(tagName, text) {
    let element=document.createElement(tagName);
    element.innerText=text; 
    return element;
  }
  const card = createNewElement('div','My new card');
  card.classList.add('card');
  console.log(card);

  const cardText = createNewElement('p', 'Here is my dev');
  card.appendChild(cardText);
  const link = createNewElement ('a', 'General Assembly');
  link.classList.add('btn', 'btn-primary');
  link.setAttribute('href','https://generalassemb.ly')
  card.appendChild(link);
body.appendChild(card);
