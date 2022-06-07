var i=0;
var txt = 'I am a Software Engineer<br>, Full stack Engineer and A.R enthusiast.'
var speed= 50;

function typedLetters(){
    if(i<txt.length){
        document.getElementById('typed').innerHTML+= typed.CharAt(i);
        i++
        setTimeout(typedLetters, speed)
    }
}