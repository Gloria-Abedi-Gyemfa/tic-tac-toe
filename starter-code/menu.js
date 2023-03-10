const playerX = document.querySelector(".x-outline");
const playerO = document.querySelector(".o-outline");

const newSoloGame = document.getElementById("new-solo-btn");
const newMultiGame = document.getElementById("new-multiplayer-btn");

const playerXSelected = ()=>{
  playerX.addEventListener('click', ()=>{
    playerX.classList.toggle('btn-click');
    sessionStorage.setItem("selectedMark", "x");
  });
}

const playerOSeclected = ()=>{
  playerO.addEventListener('click', ()=>{
    playerO.classList.toggle('btn-click');
    sessionStorage.setItem("selectedMark", "o");
  })
}

playerXSelected()
playerOSeclected()



newSoloGame.addEventListener("click", () => {
  const selectedMark = sessionStorage.getItem("selectedMark");

  // Check if the user state is "selected"
  if (selectedMark) {
    // Navigate to a new page
    window.location.href = "./new-game-solo.html";
  } else {
    alert("select user");
  }
});

newMultiGame.addEventListener('click', ()=>{
    const selectedMark = sessionStorage.getItem("selectedMark");
    if (selectedMark) {
        window.location.href = "./new-game-multiplayer.html";
      } else {
        alert("select user");
      }
})

