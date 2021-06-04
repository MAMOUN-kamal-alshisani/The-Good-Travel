'use strict';
/////global arrays
let images=[]
let allplaces=[];
let theplaces=['placeName','trip', 'transport'];

//////constructor
function myplaces(placeName,trip, transport){
this.placeName=placeName;
this.trip=trip;
this.transport=transport;
allplaces.push(this);
}

////////set localstorage:
function SetItems(){
let locations=JSON.stringify(allplaces);
localStorage.setItem('places',locations);
}

function GetItems(){
let LocationString=localStorage.getItem('places');
let LocalObject=JSON.parse(LocationString);
if (LocalObject!==null){
    allplaces=LocalObject;
}
}

let thetable=document.getElementById('table');
myplaces.prototype.render=function(){
    
    let tr1=document.createElement('tr');
thetable.appendChild(tr1);
    let td1=document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent='placeName :';
    
    let tr2=document.createElement('tr');
    thetable.appendChild(tr2);
    let td2=document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent='trip :';
    
    let tr3=document.createElement('tr');
    thetable.appendChild(tr3);
    let td3=document.createElement('td');
    tr3.appendChild(td3);
    td3.textContent='transport :';




    let td5=document.createElement('td');
tr1.appendChild(td5);
td5.textContent=this.placeName;

let td6=document.createElement('td');
tr2.appendChild(td6);
td6.textContent=this.trip;

let td7=document.createElement('td');
tr3.appendChild(td7);
td7.textContent=this.transport;

    
SetItems();

}


let theform=document.getElementById('form');

theform.addEventListener('submit',submitform);

function submitform(event){
event.preventDefault();
let path;
let img1=document.getElementById('img1');
let placeN = event.target.placeN.value;

console.log(placeN);
let trip=event.target.trip.value;
if(trip ==='HAWAII'){
    let MYimgs=document.getElementById('img2');
    thetable.appendChild(MYimgs);
    MYimgs.setAttribute('src','images/HAWAII.jpg');
}else if(trip ==='LONDON'){
    let MYimgs=document.getElementById('img3');
    thetable.appendChild(MYimgs);
    MYimgs.setAttribute('src','images/ITALY.png');

    }
console.log(trip);
let transport=event.target.transport.value;
console.log(transport);
let newplaces=new myplaces(placeN,trip,transport)
newplaces.render();

}



 GetItems();