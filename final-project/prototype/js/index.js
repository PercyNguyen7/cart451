let posts1 = document.getElementsByClassName("posts-trial-1");
let posts2 = document.getElementsByClassName("posts-trial-2");
let posts3 = document.getElementsByClassName("posts-trial-3");
let buttonNav = document.getElementById('buttonNav');
let currentTrial = document.getElementById('current-trial');

let trial1Button = document.getElementById('trial-1-button');
let trial2Button = document.getElementById('trial-2-button');
let trial3Button = document.getElementById('trial-3-button');

trial1Button.addEventListener("click", ()=>{
    console.log('Displaying 1');
    for (let i = 0; i < posts1.length; i++) {
        posts1[i].setAttribute("data-visible",true);
        posts2[i].setAttribute("data-visible",false);
        // posts3[i].setAttribute("data-visible",false);
        
      };
      currentTrial.innerHTML='Trial 1';
});

trial2Button.addEventListener("click", ()=>{
    console.log('Displaying Trial 2');
    for (let i = 0; i < posts1.length; i++) {
        posts1[i].setAttribute("data-visible",false);
        posts2[i].setAttribute("data-visible",true);
        // posts3[i].setAttribute("data-visible",false);
      };
      currentTrial.innerHTML='Trial 2';
});

