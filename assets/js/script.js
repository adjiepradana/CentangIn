const hamburgerBtn = document.getElementById('hamburgerBtn')
const navLinks = document.getElementById('navLinks')

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

document.querySelectorAll('.nav-links ul li').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active')
    })
})

// Main 
let taskData = [{text: 'Belajar Javascript', completed: true}]

const taskRender = () => {
    const listElement = document.getElementById('taskList')
    listElement.innerHTML = "";

    taskData.forEach((task, index) => {
        const li = document.createElement('li')
        li.className = /*html*/`
            todo-item ${task.completed ? 'completed' : ''}
        `
        const iconCheck = task.completed? 'check-circle-2' : 'circle'

        li.innerHTML = /*html*/`
            <div class="todo-left" onclick="toggleTask(${index})">
                <button class="btn-check"><i data-lucide="${iconCheck}"></i></button>
                <span class="todo-text">${task.text}</span>
            </div>
            <button class="btn-delete" onclick="deleteTask(${index})" title="Hapus Tugas"><i data-lucide="trash-2"></i></button>
        `

        listElement.appendChild(li)
    })

    if(typeof lucide !== 'undefined') {
        lucide.createIcons()
    }
}

const addTask = () => {
    const input = document.getElementById('taskInput')

    if(input.value.trim() !== "") {
        taskData.push({text: input.value, completed: false})
        input.value = "";
        taskRender();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Tambah tugas terlebih dahulu',
            confirmButtonColor:  '#4a90e2'
        })
    }
}

const toggleTask = (index) => {
    taskData[index].completed = !taskData[index].completed
    taskRender();
}

const deleteTask = (index) => {
    const todoItems = document.querySelectorAll('.todo-item')
    const targetItem = todoItems[index]

    if(targetItem) {
        targetItem.style.opacity = '0'
        targetItem.style.transform = 'translateX(50px)'
        setTimeout(() => {
            taskData.splice(index, 1)
            taskRender()
        }, 300)
    }
}

taskRender();