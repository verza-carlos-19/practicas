const galeria = document.querySelector("#galeria");
let url = "https://dummyjson.com/products/category/";
let combox = document.querySelector("#combobox");
var seleccion = "smartphones";
var response = fetch(url + seleccion).then(res => res.json());



function mostrarProductos(producto){ 
    const Div = document.createElement("div");
    Div.classList.add("product");
    Div.innerHTML = `
                <div class="img">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                </div>
                <div class="info">
                    <h1>${producto.title}</h1>
                    <p>${producto.description}</p>
                    <button class="btn-srv">ver detalles</button>
                </div>
    `;
    galeria.append(Div);
}

function  enviar(){     
    seleccion = combox.value;
    console.log(seleccion);

    prueba();
}
function prueba(){
    console.log(seleccion); 
    console.log(response);
for(let i; i<100; i++){
    let sct = fetch(url + seleccion)
    .then(res => res.json());
    console.log(sct);
    if(sct.category == seleccion){
    fetch("https://dummyjson.com/product/" + i)
    .then(res => res.json())
    .then(json => mostrarProductos(json));
    console.log("funciono");
    }
}
}

