import Node from "./Node.js"

const node1 = new Node('Its a boring day', 'What are you gonna do about it?');
const node2 = new Node('Take a flight','Take a flight to some nice place')
const node3 = new Node('Play a game', 'Lets play a game')
const node4 = new Node('Greenland', 'Greenland is very cold, what is next?')
const node5 = new Node('Australia', 'Australia seems nice, what is next?')
const node6 = new Node('Ludo', 'Playing ludo with yourself')
const node7 = new Node('Go outside', 'The weather is suddenly nice')
const node8 = new Node('Go to the park', 'The park is very nice')

node1.setChoices([node2, node3])
node2.setChoices([node4, node5])
node3.setChoices([node6])
node4.setChoices([node7, node8])
node5.setChoices([node7, node8])
node6.setChoices([node7, node8])
node7.setChoices([]);
node8.setChoices([]);

document.addEventListener('DOMContentLoaded', start)
const content = document.getElementById('content')

function start() {
    displayStory(node1)
}

function displayStory(node) {
    content.innerHTML = '';
    const title = document.createElement('h2')
    const desc = document.createElement('p')
    title.textContent = node.title;
    desc.textContent = node.description
    content.appendChild(title)
    content.appendChild(desc)

    if(node.choices[0]) {
        const choice1 = document.createElement('button')
        choice1.textContent = node.choices[0].title
        content.appendChild(choice1)
        choice1.addEventListener('click', () => displayStory(node.choices[0]))
    }
    
    if(node.choices[1]) {
        const choice2 = document.createElement('button')
        choice2.textContent = node.choices[1].title
        content.appendChild(choice2)
        choice2.addEventListener('click', () => displayStory(node.choices[1]))
    }
    
}

