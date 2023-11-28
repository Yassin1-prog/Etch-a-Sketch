const container = document.querySelector('.container');
const content = document.querySelector('.content');

function grid(size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('col');
        for(let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'blue';
            });
            div.classList.add('square');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {

    let input = prompt("enter size of the grid");
    container.replaceChildren();
    grid(input);
});
