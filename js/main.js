// GO!

// TASK 1 -- Show/Hide Nav

function hiddenMenuNav(){
  var navMenuEl = document.querySelector('.answer-box .nav-menu')
     // console.log(navMenuEl);
     // console.log(navMenuEl.textContent);
   // var navMenuStyle = window.getComputedStyle(navMenuEl)
   // console.log(navMenuEl);
   navMenuEl.classList.contains("nav-menu-hidden")    // .contains retorna un valor boleano
   navMenuEl.classList.add("nav-menu-hidden")

   if(navMenuEl === "nav-menu-hidden"){
   navMenuEl.classList.remove("nav-menu-hidden")
    }

}

var task1BtnEl = document.querySelector("#hide-nav button")
task1BtnEl.addEventListener('click', hiddenMenuNav)

//-------------------------------------------------------

// TASK 2 -- Select an Icon

var selIconEl = document.querySelectorAll('.option')

  function selectEl(someObj){
  // console.log(someObj);

  // console.log(typeof selIconEl);

  var clickIcon = someObj.currentTarget

// var colIcon = window.getComputedStyle(clickIcon)
 //  console.log(colIcon);
  clickIcon.classList.toggle('selected')
// console.log(clickIcon.classList);

 }
selIconEl.forEach(function addListenerIcon(btnEl, i){
btnEl.addEventListener('click', selectEl)

})
//______________________________________________-

// TASK 3 -- Move Item From List to List
var buttEl = document.querySelectorAll('.point') // se selecciona el elemento que va a recibir el evento
// console.log(buttEl);
// console.log(typeof buttEl);  observamos que es una objeto
// console.log(buttEl.textContent);
// console.log(buttStr);

  function addNum(somEvt){
    var buttNumEl = somEvt.currentTarget //leemos las propiedades del argumento
  // console.log(buttNumEl);

    var numRes = document.querySelector('.total-points') //indicamos el elemento que va a modificarse con el evento
   // console.log(typeof numRes);  tambien es un objeto
   // console.log(numRes.textContent);
    var objToNum = parseInt(numRes.textContent) //.Se convierte a numero el valor que se va arrojar como resultado de la adicion , innerHTML tambie funciona
  // console.log(objToNum);
  // console.log(typeof objToNum);
    var numAdd = parseInt(buttNumEl.textContent)  //se convierte a numero el valor que se va a sumar

    objToNum = objToNum + numAdd  // se declara la varibale resultado tomando como referencia (10 que es el valor original en html) y se le suma el valor a agregar
    numRes.innerHTML = objToNum  // se modifica el html con el nuevo resultado

}

  buttEl.forEach(function addListenerButtNum(btnEl, i){ // se itera sobre cada numero para que sume el numero cada vez que el click suceda
  btnEl.addEventListener('click', addNum) // se activa el listener para que escuche el clik y ejecute la funcion
})

// TASK 4 -- Add Guest to List


var boxEl = document.querySelectorAll('#list-2-list li')
// console.log(boxEl);
// var boxStr = boxEl.toString();
// // console.log(typeof boxStr);

  function nameUpdt(nameList){
      var nameEl = nameList.currentTarget
  // console.log(nameEl);
      var goodList = document.querySelector('.good-standing-list')
      var probationList = document.querySelector('.probation-list')

      if(nameEl.parentNode.classList.contains('good-standing-list')){
   probationList.appendChild(nameEl);
   return
      }

      if(nameEl.parentNode.classList.contains('probation-list')){
  goodList.appendChild(nameEl);
  return
      }
  }

boxEl.forEach(function putEventListener(btnEl, i){
  btnEl.addEventListener('click',nameUpdt)
})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

var colorBoxEl = [...document.querySelectorAll('#change-colors span')]
// console.log(colorBoxEl);

 function changeColor(colorList){
   var colorEl = colorList.currentTarget
   // console.log(colorEl);
   var textBox = document.querySelector('.msg')
   console.log(textBox.className);

   var currentColor = textBox.classList.value
   // console.log(currentColor);
   var selectColor = colorEl.classList.value
    textBox.className = 'msg '+ selectColor



 }

colorBoxEl.forEach(function putEventListener(btnEl, i){
btnEl.addEventListener('click', changeColor)
})
