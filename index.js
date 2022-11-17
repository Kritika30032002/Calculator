let a= document.getElementsByClassName('k');
let s= document.getElementById('text');
let z;
Array.from(a).forEach(element => {
    element.addEventListener('click',function(){
        console.log(element.value);
        s.value+=element.value;
        z= s.value;
    })
    let m=document.getElementById("a=");
    m.addEventListener('click',function(){
        s.value=eval(z);
    })
    let m1=document.getElementById("aC");
    m1.addEventListener('click',function(){
        s.value="";
    })
});
