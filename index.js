function tictactoe(el){
    window.location.href = "players.html"
}
var count=0;
function next(el){
    count+=1;
    if(count>=3){
        count=0;
    }
    document.getElementById('imageID').src = pic[count];
    return count;
}
function aserai(el){
    window.location.href = "diego.html"
}
function johan(el){
    window.location.href = "johan.html"
}
function yashin(el){
    window.location.href = "yashin.html"
}
function maldini(el){
    window.location.href = "maldini.html"
}
function ronaldo(el){
    window.location.href = "ronaldo.html"
}
function zidan(el){
    window.location.href = "zidan.html"
}

