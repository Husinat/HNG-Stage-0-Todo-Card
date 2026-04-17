const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const statusCheck = document.querySelector('[data-testid="test-todo-status"]');

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

const editForm = document.querySelector('[data-testid="test-todo-edit-form"]');
const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');

const cardContent = document.querySelector('.cardContent');

// edit inputs
const titleInput = document.querySelector('[data-testid="test-todo-edit-title-input"]');
const descriptionInput = document.querySelector('[data-testid="test-todo-edit-description-input"]');
const prioritySelect = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
const statusSelect = document.querySelector('[data-testid="test-todo-edit-status-select"]');
const dueDateInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

// card fields
const description = document.querySelector('[data-testid="test-todo-description"]');
const priority = document.querySelector('[data-testid="test-todo-priority"]');
const dueDateElement = document.querySelector('[data-testid="test-todo-due-date"]');

const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');
const overdueIndicator = document.querySelector('[data-testid="test-todo-overdue-indicator"]');




checkbox.addEventListener('change', function () {
  if (this.checked) {
    statusCheck.textContent = "Done";
    statusControl.value = "Done";
    statusSelect.value = "Done";
    title.style.textDecoration = 'line-through';
  } else {
    statusCheck.textContent = "Pending";
    statusControl.value = "Pending";
    statusSelect.value = "Pending";
    title.style.textDecoration = 'none';
  }
});

statusControl.addEventListener('change', () => {
  const value = statusControl.value;

  statusCheck.textContent = value;
  statusSelect.value = value;

  if (value === "Done") {
    checkbox.checked = true;
    title.style.textDecoration = 'line-through';
  } else {
    checkbox.checked = false;
    title.style.textDecoration = 'none';
  }
});



editBtn.addEventListener('click', () => {
  cardContent.style.display = 'none';
  editForm.style.display = 'block';

  titleInput.value = title.textContent;
  descriptionInput.value = description.textContent;
  prioritySelect.value = priority.textContent.trim();
  statusSelect.value = statusControl.value;

  const dateText = dueDateElement.textContent.replace("Due ", "").trim();
  dueDateInput.value = "2026-04-16"; 
});



saveBtn.addEventListener('click', () => {

  title.textContent = titleInput.value;
  description.textContent = descriptionInput.value;
  priority.textContent = prioritySelect.value;
  updatePriorityUI(prioritySelect.value);

  statusControl.value = statusSelect.value;
  statusCheck.textContent = statusSelect.value;

  if (statusSelect.value === "Done") {
    checkbox.checked = true;
    title.style.textDecoration = 'line-through';
  }

  const newDate = dueDateInput.value;

  dueDate = new Date(newDate + "T23:59:59");

  dueDateElement.textContent = "Due " + newDate;

  updateTimeRemaining(); 

  cardContent.style.display = 'block';
  editForm.style.display = 'none';
});




cancelBtn.addEventListener('click', () => {
  cardContent.style.display = 'block';
  editForm.style.display = 'none';
});



// Expand/Collapse

const expandBtn = document.querySelector('[data-testid="test-todo-expand-toggle"]');
const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]');

let isExpanded = false;

expandBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;

  collapsible.classList.toggle('expanded', isExpanded);

  expandBtn.setAttribute('aria-expanded', isExpanded);

  expandBtn.textContent = isExpanded ? "Show less" : "Show more";
});


deleteBtn.addEventListener('click', () => {
  alert("Delete clicked");
});









// TIME REMAINING LOGIC
const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');


let dueDate = new Date("2026-04-16T18:00:00");

let timeInterval;



function updateTimeRemaining() {

  
  if (statusControl.value === "Done") {
    clearInterval(timeInterval);
    timeRemaining.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = dueDate - now;
  const overdueIndicator = document.querySelector('[data-testid="test-todo-overdue-indicator"]');

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let text = "";

if (diff > 0) {
  overdueIndicator.style.display = "none"; 
  timeRemaining.style.color = "#d00000";

  if (days > 0) {
    text = `Due in ${days} day(s)`;
  } else if (hours > 0) {
    text = `Due in ${hours} hour(s)`;
  } else if (minutes > 0) {
    text = `Due in ${minutes} minute(s)`;
  } else {
    text = "Due now!";
  }

} else {
  overdueIndicator.style.display = "block";
  timeRemaining.style.color = "";

  if (Math.abs(hours) >= 1) {
    text = `Overdue by ${Math.abs(hours)} hour(s)`;
  } else {
    text = `Overdue by ${Math.abs(minutes)} minute(s)`;
  }
}

  timeRemaining.textContent = text;
}

updateTimeRemaining();
timeInterval = setInterval(updateTimeRemaining, 60000);

// Priority Indicator
const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');

function updatePriorityUI(value) {
  // remove old classes
  priorityIndicator.classList.remove('priority-low', 'priority-medium', 'priority-high');

  if (value === "Low") {
    priorityIndicator.classList.add('priority-low');
  } else if (value === "Medium") {
    priorityIndicator.classList.add('priority-medium');
  } else if (value === "High") {
    priorityIndicator.classList.add('priority-high');
  }
}
updatePriorityUI(priority.textContent.trim());