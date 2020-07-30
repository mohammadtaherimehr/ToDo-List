const NewTask = document.querySelector('#new-task-input');
const AddTaskButtn = document.querySelector('.new-task-bttn');
const Clearbttn = document.querySelector('.clear-bttn');
const TaskList = document.querySelector('.task-list');
const TaskTemplate = document.querySelector('.task-template');
let id = 1;
NewTask.addEventListener('keyup', (e) => {
    if (e.keyCode=== 13 && inputValid() ){
        addTask();
    }
});
AddTaskButtn.addEventListener('click' , () => {
    AddTaskButtn.style.color = 'grey';
    if (inputValid()){
        addTask();
    }
});
function inputValid(){
    return NewTask.value !== ''
}
function addTask(){
    const taskElement = document.importNode (TaskTemplate.content, true);
    const checkbox =taskElement.querySelector('input');
    checkbox.id = id;
    const label = taskElement.querySelector('label');
    label.htmlFor = id;
    label.append(NewTask.value);
    TaskList.appendChild(taskElement);
    NewTask.value = '';
    id++;
}
Clearbttn.addEventListener('click', () =>{
    const tasks = document.querySelectorAll('.task');
    tasks.forEach( task =>{
        const checked =task.querySelector('input').checked;
        if (checked){
            task.remove();
        }
    })
});
AddTaskButtn.addEventListener ('mouseout', () =>{
    AddTaskButtn.style.color = 'black';
});