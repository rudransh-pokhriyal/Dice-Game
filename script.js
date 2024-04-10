let flag=0
if(flag=0)
{
    flag=1
}
else
{
let p1=Math.floor(Math.random()*6)+1
let p2=Math.floor(Math.random()*6)+1
document.querySelector('.img1').setAttribute('src','./images/dice'+p1+'.png')
document.querySelector('.img2').setAttribute('src','./images/dice'+p2+'.png')
if(p1>p2)
document.querySelector('h1').innerHTML="Player 1 wins 🚩"
else if(p2>p1)
document.querySelector('h1').innerHTML="Player 2 wins 🚩"
else 
document.querySelector('h1').innerHTML="It's a draw🤨"
}