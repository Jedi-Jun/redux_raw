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
const readSection = document.querySelector('.readSection');

function renderList(data) {
    data.forEach(article => {
        let li = document.createElement('li');
        li.innerText = article.title;
        li.setAttribute('id', `item-${article.id}`);
        listSection.append(li);
    });
}
renderList(data);

// Click List
const description = document.querySelector('.readSection__desc');
section.addEventListener('mousedown', e => {
    const selectedStringId = e.target.id;
    const selectedId = selectedStringId.substring(5);
    const selectedArticle = data.filter(article => article.id == parseInt(selectedId));
    console.log(selectedArticle)
    description.textContent = selectedArticle[0].description;
    // page move to read from detail page
    listSection.classList.add('hide');
    readSection.classList.remove('hide');
});

// Read data
const readBtn = document.getElementById('btnReadJS');
readBtn.addEventListener('click', () => {
    listSection.innerHTML = '';
    renderList(data);
    writeSection.classList.add('hide');
    listSection.classList.remove('hide');
    readSection.classList.add('hide');
});

// Toggle write page
const writeBtn = document.getElementById('btnWriteJS');
const writeSection = document.querySelector('.writeSection')
writeBtn.addEventListener('click', () => {
    writeSection.classList.toggle('hide');
    listSection.classList.toggle('hide');
    readSection.classList.add('hide');
    // @error : page hide toggle issue
});

// Create data
const title = document.querySelector('.writeSection__title');
const desc = document.querySelector('.writeSection__desc');
const submit = document.querySelector('.writeSection__btn--submit');
submit.addEventListener('click', () => {
    const index = getIdOrder();
    const id = index + 1;
    data[index] = {id, title: title.value, description: desc.value}
    // clear input boxes
    title.value = "";
    desc.value = "";
    // move page to read
    writeSection.classList.add('hide');
    listSection.classList.remove('hide');
    readSection.classList.add('hide')
    // render for added one
    listSection.innerHTML = '';
    renderList(data);

});

// Get id for numbering
function getIdOrder() {
    const buffer = [];
    data.forEach(value => buffer.push(value.id));
    const result = Math.max(...buffer);
    return parseInt(result);
}

// Submitting Button
const submitBtn = document.querySelector('.writeSection__btn--submit');
submitBtn.addEventListener('click', () => {

});

// Update data
const updateBtn = document.getElementById('btnUpdateJS');
updateBtn.addEventListener('click', () => {
    
});

// Remove data
const deleteBtn = document.getElementById('btnDeleteJS');
deleteBtn.addEventListener('click', () => {
});