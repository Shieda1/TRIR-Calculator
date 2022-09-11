// https://www.omnicalculator.com/finance/trir

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const TRIRRadio = document.getElementById('TRIRRadio');
const hoursworkedRadio = document.getElementById('hoursworkedRadio');
const numberofinjuriesRadio = document.getElementById('numberofinjuriesRadio');

let TRIR;
let hoursworked = v1;
let numberofinjuries = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

TRIRRadio.addEventListener('click', function() {
  variable1.textContent = 'Hours worked';
  variable2.textContent = 'Number of injuries';
  hoursworked = v1;
  numberofinjuries = v2;
  result.textContent = '';
});

hoursworkedRadio.addEventListener('click', function() {
  variable1.textContent = 'TRIR';
  variable2.textContent = 'Number of injuries';
  TRIR = v1;
  numberofinjuries = v2;
  result.textContent = '';
});

numberofinjuriesRadio.addEventListener('click', function() {
  variable1.textContent = 'TRIR';
  variable2.textContent = 'Hours worked';
  TRIR = v1;
  hoursworked = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(TRIRRadio.checked)
    result.textContent = `TRIR = ${computeTRIR().toFixed(0)}`;

  else if(hoursworkedRadio.checked)
    result.textContent = `Hours worked = ${computehoursworked().toFixed(0)}`;

  else if(numberofinjuriesRadio.checked)
    result.textContent = `Number of injuries = ${computenumberofinjuries().toFixed(0)}`;
})

// calculation

function computeTRIR() {
  return (Number(numberofinjuries.value) * 200000) / Number(hoursworked.value);
}

function computehoursworked() {
  return (Number(numberofinjuries.value) * 200000) / Number(TRIR.value);;
}

function computenumberofinjuries() {
  return (Number(TRIR.value) * Number(hoursworked.value)) / 200000;
}