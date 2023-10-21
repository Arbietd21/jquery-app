function newItem() {
    
    
    
    //defining listItem
    let listItem = $('<li class="list-item"></li>')
    //defining listValue to be what is in the input field
    listValue = $('#input').val()
    //inserting the value of the input into the <li> created by listItem
    listItem.append(listValue)
    //add an <li>(listItem) to the <ol> that is already in the html 
    $('#list').append(listItem)

    if(listValue === '') {
        alert(`You must have a value`)
    };
    

    
    listItem.on('dblclick', crossOut)
    function crossOut(){
        listItem.addClass('strike')
    }

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append('delete');
    listItem.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        listItem.addClass("delete")
    }

$('.list-item').sortable();






};

