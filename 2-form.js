import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form"),l="feedback-form-state";if(localStorage.getItem(l)){const e=JSON.parse(localStorage.getItem(l));t.elements.email.value=e.email,a.email=e.email,t.elements.message.value=e.message,a.message=e.message}t.addEventListener("input",e=>{e.target.name==="email"?a.email=e.target.value.trim():e.target.name==="message"&&(a.message=e.target.value.trim()),localStorage.setItem(l,JSON.stringify(a))});t.addEventListener("submit",e=>{e.preventDefault(),a.email==0||a.message==0?alert("Fill please all fields"):(console.log(a),localStorage.removeItem(l),t.reset(),a.email="",a.message="")});
//# sourceMappingURL=2-form.js.map
