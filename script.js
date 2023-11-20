let box = document.getElementById('box');

function display(value){
    box.value += value;
}

function clearDisplay(){
    box.value = '';
}

function deleteDisplay(){
    box.value = box.value.slice(0,-1);
}

function changeSign(){
    if(box.value !== '' && box.value !== '0'){
        box.value = box.value.startsWith('-') ? box.value.slice(1) : '-' + box.value;
    }
}

function calculate(){
    try {
        box.value = eval(box.value);
    }catch (error) {
        box.value = 'Error';
    }
}