const harry = {
    name: 'Harry Potter',
    hair: 'black',
}

const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
}

const ron = {
    name: 'Ron Weasley',
    hair: 'red',
}

const characters = [harry, hermoine, ron];

const list = document.getElementById('list');

const renderCharacters = (characters) => {
    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.textContent = character.name;
        listItem.style.color = character.hair;
        list.appendChild(listItem);
    });
}

renderCharacters(characters);