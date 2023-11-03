console.log(
  'JS DOM create elements HTML functions'  
);
var h2Element = document.createElement('h2');
h2Element.textContent = 'List of TODOs';
var content = document.getElementById('content');
content.appendChild(h2Element);

var listTODOs = ['HTML functions',  'JS events', 'JS DOM create element HTML function '];
var ulElement = document.createElement('ul');
for (let i=0; i < listTODOs.length; i++){
    var liELement = document.createElement('li');
    
}

