let turn = '';
let isgameover = false;

const turnChange = ()=>{
   player1.addEventListener('click', ()=>{
       turn= "O";
       });
       player2.addEventListener('click', ()=>{
           turn= "X";
           });
    // return turn === "X"? "O": "X" 
    return turn = ''
}


const playrewin = ()=>{
       let boxtext = document.getElementsByClassName('box');
        let wins = [
           [2, 4, 6],
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],  
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8]
        ]
        wins.forEach(e =>{
           if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "") ){
               document.querySelector('.detail').innerText = boxtext[e[0]].innerText + " Won"
               isgameover = true

               document.getElementsByClassName('palyer1').disabled = true;
               document.getElementsByClassName('palyer2').disabled = true; 
           }
       })
   }

   let boxes = document.getElementsByClassName("square");
Array.from(boxes).forEach(element =>{
   let boxtext = element.querySelector('.box');
   element.addEventListener('click', ()=>{
       if(boxtext.innerText === ''){
           boxtext.innerText = turn;
           turn = turnChange();
          
           playrewin();
           if (!isgameover){
            document.getElementsByClassName("detail")[0].innerText  = "Turn for " + turn;
        }
       }
   })
})

reset.addEventListener('dblclick', ()=>{
   let boxtexts = document.querySelectorAll('.box');
   Array.from(boxtexts).forEach(element => {
       element.innerText = ""
   });
   turn = turnChange(); 
   isgameover = false
   document.getElementsByClassName("detail")[0].innerText  = "Turn for " + turn;
})