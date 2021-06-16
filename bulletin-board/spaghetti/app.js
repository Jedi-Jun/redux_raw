const data = [
    {id: 1, title: 'HTML', description: 'html is sososo...'},
    {id: 2, title: 'CSS', description: 'css was style..'},
    {id: 3, title: 'JavaScript', description: 'JS is script silde..'},
    {id: 4, title: 'React', description: 'react is my favorite..'},
    {id: 5, title: 'Redux', description: 'now it has been studying...'},
    {id: 6, title: 'Home', description: 'back home 8:00?'},
];

const section = document.querySelector('section');
const listSection = document.querySelector('.listSection');

function renderList(data) {
    data.forEach(article => {
        let li = document.createElement('li');
        li.innerText = article.title;
        listSection.append(li);
    });
}
renderList(data)


// Read data
const readBtn = document.getElementById('btn-r');
readBtn.addEventListener('click', () => {
    listSection.innerHTML = '';
    renderList(data);
});

// Toggle write page
const writeBtn = document.getElementById('btn-c');
const writeSection = document.querySelector('.writeSection')
writeBtn.addEventListener('click', () => {
    writeSection.classList.toggle('hide');
    console.log(writeSection)
});

// Create data
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const submit = document.querySelector('#submitBtn');
submit.addEventListener('click', () => {
    const index = getIdOrder();
    const id = index + 1;
    data[index] = {id, title: title.value, description: desc.value}
});

// Get id for numbering
function getIdOrder() {
    const buffer = [];
    data.forEach(value => buffer.push(value.id));
    console.log(buffer);
    const result = Math.max(...buffer);
    return Number(result);
}

// Update data
const updateBtn = document.getElementById('btn-u');
updateBtn.addEventListener('click', () => {
    
});

// Delete data
const deleteBtn = document.getElementById('btn-d');
deleteBtn.addEventListener('click', () => {

});