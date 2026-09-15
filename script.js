let form =document.querySelector("form");
let username=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let img=document.querySelector("#photo");
let  btn =document.querySelector("button");
let main=document.querySelector("#cards");
const usermanager={
users:[],
initial:  function (){
    form.addEventListener("submit",this.submitform.bind(usermanager));
},
submitform:function(event){
    event.preventDefault();
    this.adduser();
}
,
adduser:  function(){
    this.users.push(
        {
username:username.value,
role:role.value,
bio:bio.value,
photo:img.value
} );
    form.reset();

    usermanager.renderui();
    
    
},
renderui:function(){
    document.querySelector("#cards").innerHTML="";
this.users.forEach(function(user){

    let card=document.createElement("div");
    card.classList.add("card");
    let img=document.createElement("img");
    img.src=user.photo;

    let h3=document.createElement("h3");
    h3.textContent=user.username;
    let h4=document.createElement("h4");
    h4.textContent=user.role;

    let p=document.createElement("p");
    p.textContent=user.bio;

    card.append(img,h3,h4,p);
    main.append(card);



})


},
removeuser: function(){}
//i have to make it 


}
usermanager.initial();