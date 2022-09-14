const Githubp = document.getElementById('Githubp');

Githubp.addEventListener('submit', (e) => {
        e.preventDefault();

    let uname = document.getElementById('uname');

    let gitHubUsername = uname.value;          

    requestuserRepos(gitHubUsername);

})

function requestuserRepos(username){
    
    const abf = new XMLHttpRequest();
    
    const url = `https://api.github.com/users/${username}/repos`;
   
   abf.open('GET', url, true);
    
   abf.onload = function () {
    
        const data = JSON.parse(this.response);
        
        for (let i in data) {

            let ul = document.getElementById('res');
    
            let li = document.createElement('li');
            
            li.classList.add('list-group-item')
        
            li.innerHTML = (`
        
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                
            `);
            
            ul.appendChild(li);
        
        }

    }
    
   abf.send();
    
}