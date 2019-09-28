/*let btn = document.getElementById('button');
let rainbow = ['yellow','red','green','blue','black','orange','pink'];
function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click' , change);


function maen(){
    let avrage , total = 0 ;
    for (let i=0;i<arguments.length;i++){
        total += arguments[i];
    }
    avrage = total / arguments.length;
    return avrage;
}

let output = '';
for(let n = 1;n <= 10;n++){
    for(let m = 1;m <= 10;m++){
        output += (n*m) + '\t';
    }
    output += '\n';
}
document.getElementById('demo').innerHTML = output;
console.log(output);


function sumOrProduct(operation,...numbers){
    let result;
    if(operation=='sum'){
        result=0;
        for(let number of numbers){
            result += number;
        }
    }else if(operation=='product'){
        result=1;
        for(let number of numbers){
            result *= number;
        }
    }
    return result;
}



function discount(price,amount=10){
    console.log(price-(price*amount/100));
}




let num=[5,9,20,5,4,15];
function compare(value1,value2){
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return +1;
    }else{
        return 0;
    }
}



let colors=['red','blue','green'];
colors.forEach((value,index) => console.log(`at position ${index} is ${value}`));



let result=colors.map((value)=>value.toUpperCase());
console.log(result);




let words=['I','am',33,'years','old'];
let javab=words.reduce((prev,value)=>prev.concat(' ',value));
console.log(javab);


let word=['I','am',33,'years','old'];
let resu=word.reduce((total,value)=>total+String(value).length,0);
console.log(resu);



let person={
    firstName:'ebrahim',
    lastName:'aghaie',
    age:30
};
person.age=35;
person.showBio=function(){
    return 'I\'m' +' '+ this.firstName+' ' + this.lastName +' '+ '&' +' '+ this.age +' '+ 'years old';
}
let str=person.showBio();
document.getElementById('demo1').innerHTML=str;



function createElement(tag,text){
    const elm=document.createElement(tag);
    elm.textContent=text;
    return elm;
}
const heading=createElement('h1','fruits list');
const p=createElement('p','this is a paragraph');
const ul=createElement('ul','');
const li1=createElement('li','apple');
const li2=createElement('li','orange');
const li3=createElement('li','banana');
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(heading);
document.body.appendChild(ul);
document.body.insertBefore(p,ul);
ul.style.color='red';
ul.style.fontFamily='tahoma';



const klid=document.querySelector('input');
klid.addEventListener('click',()=>{
    const para=document.createElement('p');
    para.textContent='click event happend on '+ Date.now();
    document.body.appendChild(para);
});
klid.addEventListener('dblclick',()=>{
    const para=document.createElement('p');
    para.textContent='double click event happend on '+ Date.now();
    document.body.appendChild(para);
});*/



/*let button=document.getElementById('btn');
button.addEventListener('click',duplicate);

function duplicate(){
    let input=document.getElementById('field');
    input.value +=  input.value;
}*/



/*let button=document.querySelector('button');
button.addEventListener('click',handler)

function handler(){
    let inputs=document.querySelectorAll('input');
    let sanad='<table border="1" width="200">';
    for(let input of inputs){
        if(input.checked){
            sanad+=`<tr><td>${input.value}</td></tr>`;
        }
    }
    sanad+='</table>';
    let div=document.getElementById('result');
    div.innerHTML=sanad;
}*/




/*let button=document.querySelector('button');
button.addEventListener('click',handler);
function handler(){
    let marriageInputs=document.querySelectorAll('input[name="marriage"]');
    let educationInputs=document.querySelectorAll('input[name="education"]');
    let married , education;
    for(let input of marriageInputs){
        if(input.checked){
            married=input.value;
            break;
        }
    }
    for(let input of educationInputs){
        if(input.checked){
            education=input.value;
            break;
        }
    }
    let div=document.getElementById('result');
    div.innerHTML= `<p>شما ${married} هستید و دارای مدرک ${education} هستید</p>`
}*/






/*let button=document.querySelector('button');
button.addEventListener('click',handler);
function handler(){
    let marriageMenu=document.querySelector('select[name="married"]');
    let educationMenu=document.querySelector('select[name="educatio"]');
    let div=document.getElementById('result');
    div.innerHTML= `<p>شما ${marriageMenu.value} هستید و دارای مدرک تحصیلی ${educationMenu.value} میباشید</p>`;
}*/



/*let form=document.querySelector('form');
form.addEventListener('submit',handler);
function handler(event){
    let input=document.getElementById('search');
    if(input.value.length<3){
        alert('مقدار فیلد باید بیشتر از 3 کلمه باشد');
        event.preventDefault();
    }
}*/



/*let first=document.getElementById('firstname');
let last=document.getElementById('lastname');
first.addEventListener('focus',textSelect);
last.addEventListener('focus',textSelect);
function textSelect(event){
    event.target.select();
}*/




/*let day=document.getElementById('day');
let month=document.getElementById('month');
day.addEventListener('blur',(event)=>{
    if(!(day.value>=1 && day.value<=31)){
        alert('عدد باید بین 1 و 31 باشد');
    }
});
month.addEventListener('blur',(event)=>{
    if(!(month.value>=1 && month.value<=12)){
        alert('عدد باید بین 1 و 12 باشد');
    }
});*/




/*let form=document.querySelector('form');
let day=document.getElementById('day');
let month=document.getElementById('month');
form.addEventListener('submit',validateForm);
function validateForm(event){
    if(!(day.value>=1 && day.value<=31)){
        alert('عدد باید بین 1 تا 31 باشد');
        day.focus();
        day.select();
        event.preventDefault();
    }else if(!(month.value>=1 && month<=12)){
        alert('عدد باید بین 1 تا 12 باشد');
        month.focus();
        month.select();
        event.preventDefault();
    }
}*/





/*let text=document.getElementById('text');
let check=document.getElementById('check');
let textarea=document.getElementById('textarea');
let select=document.getElementById('select');
text.addEventListener('change',handler);
check.addEventListener('change',handler);
textarea.addEventListener('change',handler);
select.addEventListener('change',handler);
function handler(event){
    alert('Changed');
}*/






/*let form=document.querySelector('form');
form.addEventListener('submit',handler);
function handler(event){
    let user=document.getElementById('user');
    let pass=document.getElementById('pass');
    let usererror=document.getElementById('usererror');
    let passerror=document.getElementById('passerror');
    usererror.textContent='';
    passerror.textContent='';
    if(user.value.length<5 || user.value.length>15){
        usererror.textContent="نام کاربری باید بین 5 تا 15 کاراکتر باشد";
        event.preventDefault();
    }
    if(pass.value.length<6 || pass.value.length>20){
        passerror.textContent="پسوورد باید بین 6 تا 12 کاراکتر باشد";
        event.preventDefault();
    }
}*/





/*let form=document.querySelector('form');
form.addEventListener('submit', validate);
function validate(event){
    let year=document.getElementById('year');
    let yearerror=document.getElementById('yearerror');
    yearerror.textContent='';
    if(!Number.isInteger(Number(year.value))){
        yearerror.textContent="عدد وارد شده باید جزو اعداد صحیح باشد";
        event.preventDefault();
    }else if(year.value<1300 || year.value>1400){
        yearerror.textContent="سال تولد باید بین 1300 تا 1400 باشد";
        event.preventDefault();
    }
}*/







/*let form=document.querySelector('form');
form.addEventListener('submit',validate);
function validate(event){
    let email=document.getElementById('email');
    let emailerror=document.getElementById('emailerror');
    let emailSample=/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    emailerror.textContent='';
    if(!emailSample.test(email.value) || email.value.length<10){
        emailerror.textContent="لطفا یک ایمیل معتبر وارد نمایید";
        event.preventDefault();
    }
}*/





/*let div=document.getElementById('div');
let angle=0;
window.requestAnimationFrame(rotate);
function rotate(){
    div.style.transform=`rotate(${angle}deg)`;
    angle+=1;
    window.requestAnimationFrame(rotate);
}*/




/*function* myGenerator(a,b){
    let [current,prev]=[a,b];
    let i=0;
    while(true){
        [current,prev]=[prev,current+prev];
        yield prev;
        i++;
        if(i>=20){
            return;
        }
    }
}
let sequence=myGenerator(0,1);
for(let n of sequence){
    //document.getElementById('demo').innerHTML=n;
    console.log(n);
}*/





const button=document.getElementById('button');
const prev=document.getElementById('data');
button.addEventListener('click',function (){
    const xhr=new XMLHttpRequest;
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',false);
    xhr.addEventListener('readystatechange',function(){
        if(this.readyState==4){
            if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
                prev.innerHTML=xhr.responseText;
            }
        }
    });
    xhr.send();
});


