const taskContainer = document.getElementById('task-container')
const submitTaskBtn = document.getElementById('submit-task-btn')
const userInput = document.getElementById('user-input')
const listItems = document.getElementsByClassName('list-item')

submitTaskBtn.addEventListener('click', () => {
  if (userInput.value){
    let randomId = `${Math.random()}`
    taskContainer.innerHTML += `<li class="list-item ${randomId}">${userInput.value} <button class="delete" onclick="deleteItem(${randomId})">✅</button></li>`
    userInput.value = ''
  }
})

function deleteItem(randomId){
  for (let i = 0 ; i < listItems.length ; i++){
    if (listItems[i].classList.contains(randomId)){
    listItems[i].remove(listItems[i])
  }
  }
  
}