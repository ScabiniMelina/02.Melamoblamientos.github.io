var ancho =window.innerWidth
console.log(ancho)

window.addEventListener('resize',function () {
  if (window.innerWidth != ancho)  {
    location.reload();
  }});
  
const galeryGrid = (container, childrenContainer, columns)=>{
    container.classList.add("galery",`columns-${columns}`)
    // crear columnas virtuales para recorrerlas para qeu se coloqeu los elementos

    let columnsElements =[]/*arreglo */
    for(let i = 1; i <= columns; i++){
        let newColumn = document.createElement("div")
        newColumn.classList.add(`galeryColumn`, `col-${i}` )
        container.appendChild(newColumn)
        columnsElements.push(newColumn)
        
    }
    for(let m= 0; m < Math.ceil( childrenContainer.length/columns ); m++){
        for (let n = 0; n < columns; n++){
      columnsElements[n].appendChild(childrenContainer[m*columns+n])

        }}
        
}


var galery=document.getElementById("galery")
var columns =getComputedStyle(document.documentElement).getPropertyValue("--columns")
var items =  galery.querySelectorAll(" img")
galeryGrid(galery,items, columns)





// window.resize(function cambio() {
//       if (window.innerHeight != ancho)  {
//         location.reload();
//       }})












// var style =window.getComputedStyle(galery)
// console.log(window.getComputedStyle())


