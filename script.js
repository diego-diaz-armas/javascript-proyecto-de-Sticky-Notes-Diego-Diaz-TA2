let createBox = document.getElementsByClassName('createBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
let i = 0;

createBox.addEventListener('keydown', content);

document.getElementById("create").addEventListener("click",
function(){
    createBox.style.display = "block";

});

function content(e){
    if(e.keyCode == '13'){
        divStyle(input.value);
        input.value="";
        createBox.style.display = "none";
    }
}

function color(){
    /*let randomColors =["#c2ff3d","#cff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if(i > randomColors.length - 1){
        i = 0;
    }
    return randomColors[i++];*/
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function divStyle(text){
    let div = document.createElement("div");
    div.className = 'nota';
    div.innerHTML='<div class="details">'+'<h3>'+text+'<h3>'+'</div>';

    //borrar notas doble click
    div.addEventListener("dblclick", function(){
        div.remove();
    });
 
      // Editar notas al hacer clic
      div.addEventListener("click", function() {
        let newText = prompt("Editar nota", text);
        if (newText !== null) {
            div.innerHTML = '<div class="details">' + '<h3>' + newText + '<h3>' + '</div>';
        }
    });

    //colores randoms de las notas
    div.setAttribute('style', 'background:'+color()+'');

    notes.appendChild(div);
}
