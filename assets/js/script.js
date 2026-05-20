const hamburgerBtn = document.getElementById('hamburgerBtn')
const navLinks = document.getElementById('navLinks')

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

let taskData = []

const taskRender = () => {
    const listElement = document.getElementById('taskList')
    listElement.innerHTML = "";

    taskData.forEach((task, index) => {
        const li = document.createElement('li')
        li.className = 'todo-item'
        li.innerHTML = `
        <span class"todo-text">${task}</span>
        <button class="btn-delete" onclick="deleteTask(${index})" title="Hapus Tugas">
        <i data-lucide="trash-2"></i>
        </button>`
        listElement.appendChild(li)

        if(typeof lucide !== 'undefined') {
            lucide.createIcons()
        }
    })
}

const addTask = () => {
    const input = document.getElementById('taskInput')
    
    if(input.value.trim() !== "") {
        taskData.push(input.value)
        input.value = "";
        taskRender();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Tambah tugas terlebih dahulu!',
            confirmButtonColor: '#4A90E2'
        })
    }
}

const deleteTask = (index) => {
    const todoItems = document.querySelectorAll('.todo-item')
    const targetItem = todoItems[index]

    if(targetItem) {
        targetItem.style.opacity = '0'
        targetItem.style.transition = 'translateY(-10px)'
        targetItem.style.transition = 'all 0.2s ease-in-out'

        setTimeout(() => {
            taskData.splice(index,1)
            taskRender()
        }, 200);
    }
    taskRender();
}

taskRender();