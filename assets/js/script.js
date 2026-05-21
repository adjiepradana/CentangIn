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

let taskData = ['Belajar Javascript']

const taskRender = () => {
    const listElement = document.getElementById('taskList')
    listElement.innerHTML = "";

    taskData.forEach((task, index) => {
        const li = document.createElement('li')
        li.classList = 'todo-item'
        li.innerHTML = `
        <span class="todo-text">${task}</span>
        <button class="btn-delete" onclick="deleteTask(${index})" title="Hapus Tugas">
            <i data-lucide="trash-2"></i>
        </button>`
        listElement.appendChild(li)
    })

    if(typeof lucide !== 'undefined') {
        lucide.createIcons()
    }
}

const addTask = () => {
    const input = document.getElementById('taskInput')

    if(input.value.trim() !== "") {
        taskData.push(input.value)
        input.value = ""
        taskRender()
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Tambah tugas terlebih dahulu',
            confirmButtonColor: '#4a90e2'
        })
    }
}

const deleteTask = (index) => {
    const todoItems = document.querySelectorAll('.todo-item')
    const targetItem = todoItems[index]
    
    if(targetItem) {
        targetItem.style.opacity = '0'
        targetItem.style.transform = 'translateY(10px)'
        
        setTimeout(() => {
            taskData.splice(index, 1)
            taskRender() 
        }, 300); 
    }
}

taskRender();