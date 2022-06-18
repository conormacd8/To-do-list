const taskContainer = document.getElementById('task-container')
const submitTaskBtn = document.getElementById('submit-task-btn')
const userInput = document.getElementById('user-input')

submitTaskBtn.addEventListener('click', () => {
  if (userInput.value){
    taskContainer.innerHTML += `<li>${userInput.value}</li>`
    userInput.value = ''
  }
})