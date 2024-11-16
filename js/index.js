
var content = [`Resentment is like drinking poison and waiting for your enemies to die.
    <br>
    <br>
    
   --Nelson Mandela`,
   `Be yourself; everyone else is already taken.
    <br>
    <br>
― Oscar Wilde`,

 `Be the change that you wish to see in the world.
  <br>
    <br>
― Mahatma Gandhi`,
   `If you tell the truth, you don't have to remember anything.
   <br>
    <br>
― Mark Twain` ,

`A room without books is like a body without a soul.
<br>
    <br>
― Marcus Tullius Cicero` ,
`Always forgive your enemies; nothing annoys them so much.
<br>
    <br>
― Oscar Wilde`,
`It's not what happens to you, but how you react to it that matters."
<br>
    <br>
--Epictetus`


]



function textChange(){

    var randomIndex = Math.floor(Math.random() *content.length );
    var randomQuote = content[randomIndex];

    document.getElementById('text').innerHTML = ` <p  class=' h2   '>${randomQuote} </p>`
}

//"Resentment is like drinking poison and waiting for your enemies to die."
// <span class="h4"> --Nelson Mandela</span>