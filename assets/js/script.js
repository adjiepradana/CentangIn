let dataTugas = [];

const renderTugas = () => {
    const listElement = document.getElementById("taskList");
    listElement.innerHTML = "";

    dataTugas.forEach((tugas, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${tugas}</span>
        <button onclick="hapusTugas(${index})">➖</button>`;
        listElement.appendChild(li);
    });
};

const tambahTugas = () => {
    const input = document.getElementById("taskInput");

    if(input.value.trim() !== "") {
        dataTugas.push(input.value);
        input.value = "";
        renderTugas();
    } else {
        alert("Isi tugas terlebih dahulu");
    }
};

const hapusTugas = (index) => {
    dataTugas.splice(index, 1);
    renderTugas();
};

renderTugas();