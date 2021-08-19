console.log("Let's get this party started!");
const gifForm = document.getElementById('gifForm');
const input = document.getElementById('textInput');
const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');
const gifArea = document.getElementById('gifArea')

// http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

async function addGif(q) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=hbCtLOcajbd6bpbvu7M7OQqDfb9aTd6V`)

    console.log(res)
    const gif = document.createElement('img');
    console.log(res.data.data[0].images.original)
    gif.setAttribute('src', res.data.data[0].images.original.url);
    gif.width = 250
    gifArea.append(gif)        
}

function deleteAll() {
    for(let i = gifArea.children.length; i > 0; i--) {
        gifArea.children[0].remove()
    }
}

gifForm.addEventListener('click', function(e) {
    e.preventDefault();

    console.log(e.target.id)
    console.log(input.value)

    if(e.target.id == 'searchButton') {
        addGif(input.value)
    } else if(e.target.id == 'deleteButton') {
        deleteAll();
    }
})