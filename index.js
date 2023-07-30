
let input=document.querySelector(".input");
let btn=document.getElementById("bt");
let c2=document.querySelector(".c2");
let ch2;
if(localStorage.getItem("tab1" )=== null ||localStorage.getItem("x")===null ){
    localStorage.clear();
}
if(localStorage.getItem("tab1") === null ){
localStorage.tab1="[]";
ch2=localStorage.getItem("tab1");
}
else{
ch2=localStorage.getItem("tab1");
}
if(localStorage.getItem("x") === null){
    localStorage.x=15010;
}
let tab2=JSON.parse(ch2);
let ch3;
for(let i=0;i<localStorage.length;i++){
    let ch=localStorage.key(i);
    if(ch!=="x" && ch!=="tab1"){
        let element=document.createElement(`div`);
        element.className="card";
        element.id=`${localStorage.key(i)}`;
        element.innerHTML=`<div class="ca1">
                    <p class="${localStorage.key(i)}">${localStorage[ch]}</p>
                </div>
                <div class="ca2">
                    <i class="fa-solid fa-trash" trash="${localStorage.key(i)}"
                    ></i>
                    <i class="fa-solid fa-pen" pen="${localStorage.key(i)}"></i>
                    <i class="fa-solid fa-circle-check" check="${localStorage.key(i)}"></i>
                </div>`;
            c2.appendChild(element);
    }
}
for(let i=0;i<tab2.length;i++){
    let g=document.querySelector("."+tab2[i]);
    g.classList.add("line");
}
btn.addEventListener("click",()=>{
    if(input.value!==""){
        let element=document.createElement(`div`);
        element.className="card";
        localStorage.x++;
        element.id=`id${localStorage.x}`;
        element.innerHTML=`<div class="ca1">
                    <p class="id${localStorage.x}">${input.value}</p>
                </div>
                <div class="ca2">
                    <i class="fa-solid fa-trash" trash="id${localStorage.x}"
                    ></i>
                    <i class="fa-solid fa-pen" pen="id${localStorage.x}"></i>
                    <i class="fa-solid fa-circle-check" check="id${localStorage.x}"></i>
                </div>`;
            c2.appendChild(element);
            localStorage[`id${localStorage.x}`]=input.value;
    }
})
document.addEventListener("click",(e)=>{
    if(e.target.getAttribute("trash")!==null){
        let h=document.getElementById(e.target.getAttribute("trash"));
        h.classList.add("cache");
        localStorage.removeItem(e.target.getAttribute("trash"));
        tab2.pop(e.target.getAttribute("trash"));
            ch3=JSON.stringify(tab2);
            localStorage.setItem('tab1',ch3);
    }
    if(e.target.getAttribute("pen")!==null){
        let h=document.getElementById(e.target.getAttribute("pen"));
        let h1=document.querySelector(`.${e.target.getAttribute("pen")}`);
        let prompt1=prompt("Give me the new task");
        localStorage[e.target.getAttribute("pen")]=prompt1;
        h1.innerText=prompt1;
    }
    if(e.target.getAttribute("check")!==null){
        let h=document.getElementById(e.target.getAttribute("check"));
        let h1=document.querySelector(`.${e.target.getAttribute("check")}`);
        if(h1.classList.contains("line")){
            h1.classList.remove("line");
            tab2.pop(e.target.getAttribute("check"));
            ch3=JSON.stringify(tab2);
            localStorage.setItem('tab1',ch3);
        }
        else{
            h1.classList.add("line");
            tab2.push(e.target.getAttribute("check"));
            ch3=JSON.stringify(tab2);
            localStorage.setItem('tab1',ch3);
        }
    }
})