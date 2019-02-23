
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
function roundResult(result, decimals){
    return result.toFixed(decimals);    
}
function printResult(value, unit){
    let $resultContainer = document.getElementById('result_field');
    let decimals = getUserEntry(document.getElementById('decimals'));
    $resultContainer.value = roundResult(value, decimals) + unit;
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
    element.target.value = '';
});

function changeText(element, text){
    const inicialText = element.innerText;
    element.innerText = text;
    setTimeout(()=>{
        element.innerText = inicialText;
    }, 1500);
}

function copyToClipboard(){
    let $resultField = document.getElementById('result_field');
    $resultField.select();
    document.execCommand('copy');
}

const $copyBtn = document.getElementById('copy');
$copyBtn.addEventListener('click', event =>{
    copyToClipboard();
    changeText(event.currentTarget, 'Copied!');
})

function showResultPanel(){
    let $resultPanel = document.querySelector('.result');
    $resultPanel.style.visibility = 'visible';
}


const $calculateButton = document.querySelector('.calculate');
$calculateButton.addEventListener('click', event =>{
    event.preventDefault();
    posibilities();   
    showResultPanel(); 
});


(function(){
    addListenerToRadios();
    whoIsSelected();
})();
