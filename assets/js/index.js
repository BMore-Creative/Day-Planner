//DOM element variables
const currDay = document.querySelector("#currentDay");
const dayPlan = document.querySelectorAll("textarea");

//Displays current date at top of screen
currDay.textContent = moment().format("dddd, MMMM Do");

const currTime = moment().format("HH");

dayPlan.forEach(function (currBlock) {
  const blockTime = currBlock.dataset.time;
  if (blockTime === currTime) {
    currBlock.classList.add("present");
  } else if (blockTime < currTime) {
    currBlock.classList.add("past");
  } else if (blockTime > currTime) {
    currBlock.classList.add("future");
  }
});

function save(id) {
  const block = document.querySelector(id);
  console.log(block);
  const blockText = block.value
  console.log(blockText);
  localStorage.setItem(id, blockText)
}

dayPlan.forEach(function (block) {
    const id = '#' + block.id
    block.value = localStorage.getItem(id)
})

function clearPlanner() {
    localStorage.clear
}