const numItemsToGenerate = 1;

function renderItem(){
  fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`     
    document.body.appendChild(item);
  }) 
}

 let item = document.getElementByID('existing');
 item.existing = `<img class="beach-image" src="${response.url}" alt="beach image"/>` 

 for(let i=0;i<numItemsToGenerate;i++){
  renderItem();
}