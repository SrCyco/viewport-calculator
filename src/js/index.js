
import '../sass/main.scss';

function getViewportWidth(){
    return window.innerWidth;
}

function getViwportHeight(){
    return window.innerHeight;
}

function getUserEntry(element){
    return parseInt(element.value);
}

function calculateValue(DeviceValue, userValue){
    return (userValue * 100) / DeviceValue;
}

function printResult(value, unit){
    let $resultContainer = document.querySelector('.result');
    $resultContainer.innerHTML = `<h2>${value}${unit}</h2>`;
}

function whoIsSelected(){
    let elementsGroup = document.querySelectorAll(`input[type=radio]`);
    for (let i = 0; i < elementsGroup.length; i++) {
        if(elementsGroup[i].checked){
            radioActions(elementsGroup[i].getAttribute('id'));
        }
    }
}

function disableInput(element, state){
    let $input = document.getElementById(element);
    if(state){
        $input.disabled = true;
    }else{
        $input.disabled = false;
    }
}

function showDeviceValue(element, value){
    let $input = document.getElementById(element);
    $input.value = value;
    console.log('entro')
}

function isSelected(element){
    let $input = document.getElementById(element);
    if($input.checked){
        return true;
    }else{
        return false;
    }
}

function radioActions(radioId){
    let vw = getViewportWidth();
    let vh = getViwportHeight();
    switch (radioId) {
        case 'vw':
            showDeviceValue('device-value', vw);
            break;
        case 'vh':    
            showDeviceValue('device-value', vh);
            break;
        case 'auto':
            disableInput('device-value', true);
            if(isSelected('vw')){
                showDeviceValue('device-value', vw);
            }
            if(isSelected('vh')){
                showDeviceValue('device-value', vh);
            }
            break;
        case 'manual':
            disableInput('device-value', false);
            showDeviceValue('device-value', '');
            break;
    }
}

function addListenerToRadios(){
    let $radios = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < $radios.length; i++) {
        $radios[i].addEventListener('click', event =>{
            let radioId = event.target.getAttribute('id');
            radioActions(radioId);
        });
    }
}

let $userDeviceValue = document.getElementById('device-value');
let $userValue = document.getElementById('value');

function posibilities(){
    let deviceValue;
    let userValue = getUserEntry($userValue);
    let userDeviceValue = getUserEntry($userDeviceValue);
    let unit;

    if (isSelected('vw')){
        deviceValue = getViewportWidth();
        unit = 'vw';
    }
    if(isSelected('vh')){
        deviceValue = getViwportHeight();
        unit = 'vh';
    }
    if(isSelected('auto')){
        let result = calculateValue(deviceValue, userValue);
        printResult(result, unit);
    }
    if(isSelected('manual')){
        let result = calculateValue(userDeviceValue, userValue);
        printResult(result, unit);
    }
}

$userValue.addEventListener('click', (element)=>{
    console.log(element)
    element.target.value = '';
});

const $calculateButton = document.querySelector('.calculate');
$calculateButton.addEventListener('click', event =>{
    event.preventDefault();
    posibilities();    
});

(function(){
    addListenerToRadios();
    whoIsSelected();
})();
