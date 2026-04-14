const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const statusCheck = document.querySelector('[data-testid="test-todo-status"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

checkbox.addEventListener('change', function(){
    if (this.checked){
    title.style.textDecoration = 'line-through';
    statusCheck.textContent = 'Done';
    statusCheck.style.color = '#2d6a4f';

    } else {
    title.style.textDecoration = 'none';
    statusCheck.textContent = 'Pending';
    statusCheck.style.color = '#d00000';
    }    
})


// Edit button
editBtn.addEventListener('click', () => {
  console.log("Edit clicked");
});

// Delete button 
deleteBtn.addEventListener('click', () => {
  alert("Delete clicked");
});