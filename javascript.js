document.addEventListener('DOMContentLoaded', () =>{

    // card options
    const cardArray=[
       {
        name:'tiburon',
        img: 'imagenes/1.png'
       } ,
       {
        name:'tiburon',
        img: 'imagenes/1.png'
       } ,
       {
        name:'pajaro',
        img: 'imagenes/2.png'
       } ,
       {
        name:'pajaro',
        img: 'imagenes/2.png'
       } ,
       
       {
        name:'venado',
        img: 'imagenes/3.png'
       } ,
       {
        name:'venado',
        img: 'imagenes/3.png'
       } ,
       {
        name:'buho',
        img: 'imagenes/4.png'
       } ,
       {
        name:'buho',
        img: 'imagenes/4.png'
       } ,
       {
        name:'lobo',
        img: 'imagenes/5.png'
       } ,
       {
        name:'lobo',
        img: 'imagenes/5.png'
       } ,
       {
        name:'pinguino',
        img: 'imagenes/6.png'
       } ,
       {
        name:'pinguino',
        img: 'imagenes/6.png'
       }      

    ]

cardArray.sort(() => 0.5 -Math.random());

const grid= document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon= [];
   // crear tablero
   function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        var card=document.createElement('img');
        card.setAttribute('src', 'imagenes/reverso.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
   }
   function checkForMatch(){
    var cards= document.querySelectorAll('img');
    const optionOneId= cardsChosenId[0];
    const optionTwoId= cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        alert('you found a match');
        cards[optionOneId].setAttribute('src', 'imagenes/blank.png');
        cards[optionTwoId].setAttribute('src', 'imagenes/blank.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'imagenes/reverso.png');
        cards[optionTwoId].setAttribute('src', 'imagenes/reverso.png');
        alert('sorry try again');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='congratulations you found all'

    }

   }
   function flipcard(){
        var cardId=this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId),
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length===2){
            setTimeout(checkForMatch, 500);
        }

   }
   createBoard();
   
})
