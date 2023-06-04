const selectTiposDeProducto = document.querySelector("#tipos-de-productos");
const selectCantidadDeProductos = document.querySelector("#cantidad-de-productos");
const selectColores = document.querySelector("#colores");
const fielsetVentas = document.querySelector("#ventas");

const IMG_1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQO7ZGEsQQLmLDxJOqOkhu2wxGGZpqB6_OE7lZa4VMFwEzRi4I0Hh-oH2Qt1-l2i1hlM&usqp=CAU"
const IMG_2 = "https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg";
const IMG_3 = "https://www.cuerpomente.com/medio/2021/01/07/propiedades-manzana_6c6baf54_1200x630.jpg";
const IMG_4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9hUXhKgmodX_iyYX8Modsy2J0LsyxBLYSA&usqp=CAU";
const IMG_5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST997siLdO1a8Omf2Y7o1pt4nngulnsg3K5jXFxd6yF9GqS5R-uNSyTQK96JT0vUT0iew&usqp=CAU";
const IMG_6 = "https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png";
const IMG_7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBJMXufeIW_UHUtJzZUYNNcRIBMXg4aE8cPc5KLssNPV4gUJnOsjEGsT8ZsrkDnHiwZs&usqp=CAU";
const IMG_8 = "https://img.freepik.com/fotos-premium/chupetin-rayas-blancas-rojas-lazo-rojo_262259-3.jpg?w=2000";
const IMG_9 = "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/3987/10205/mantecol253__21090.1651773409.jpg?c=2";
const IMG_10 = "https://vinomanos.com/wp-content/uploads/2021/12/PORTADA-PAN-DULCE-min.jpg";
const NOMBRE_1="sanwich";
const NOMBRE_2="coca-cola";
const NOMBRE_3="manzana";
const NOMBRE_4="mantecol";
const NOMBRE_5="levite";
const NOMBRE_6="pelota";
const NOMBRE_7="pan";
const NOMBRE_8="paleta";
const NOMBRE_9="MANTECOL GRANDE";
const NOMBRE_10="pasetelito"

let IMAGENES= [{IMG_1,NOMBRE_1},{IMG_2,NOMBRE_2},{IMG_3,NOMBRE_3},{IMG_4,NOMBRE_4},{IMG_5,NOMBRE_5},{IMG_6,NOMBRE_6},{IMG_7,NOMBRE_7},{IMG_8,NOMBRE_8},{IMG_9,NOMBRE_9},{IMG_10,NOMBRE_10}]


/*function verificar() {
    switch (parseInt(selectTiposDeProducto.value)) {
        case 1:
            fielsetVentas.innerHTML =`
                                    <div><p>Producto 1</p>
                                    <img src="${IMG_1}" alt="">
                                    </div>`
                         
                                    

            break;
        case 3:
            fielsetVentas.innerHTML = `<div><p>Producto 1</p>
                                <img src="${IMG_1}" alt="">
                                </div>
                                <div><p>Producto 2</p>
                                <img src="${IMG_2}" alt="">
                                </div>
                                <div><p>Producto 3</p>
                                <img src="${IMG_3}" alt="">
                                </div>
                                `


            break;
        case 7:
            fielsetVentas.innerHTML = `<div><p>Producto 1</p>
                                <img src="${IMG_1}" alt="">
                                </div>
                                <div><p>Producto 2</p>
                                <img src="${IMG_2}" alt="">
                                </div>
                                <div><p>Producto 3</p>
                                <img src="${IMG_3}" alt="">
                                </div>
                                <div><p>Producto 4</p>
                                <img src="${IMG_4}" alt="">
                                </div>
                                <div><p>Producto 5</p>
                                <img src="${IMG_5}" alt="">
                                </div>
                                <div><p>Producto 6</p>
                                <img src="${IMG_6}" alt="">
                                </div>
                                <div><p>Producto 7</p>
                                <img src="${IMG_7}" alt="">
                                </div>
                                `

            break;
        case 10:
            fielsetVentas.innerHTML = `<div><p>Producto 1</p>
                                <img src="${IMG_1}" alt="">
                                </div>
                                <div><p>Producto 2</p>
                                <img src="${IMG_2}" alt="">
                                </div>
                                <div><p>Producto 3</p>
                                <img src="${IMG_3}" alt="">
                                </div>
                                <div><p>Producto 4</p>
                                <img src="${IMG_4}" alt="">
                                </div>
                                <div><p>Producto 5</p>
                                <img src="${IMG_5}" alt="">
                                </div>
                                <div><p>Producto 6</p>
                                <img src="${IMG_6}" alt="">
                                </div>
                                <div><p>Producto 7</p>
                                <img src="${IMG_7}" alt="">
                                </div>
                                <div><p>Producto 8</p>
                                <img src="${IMG_8}" alt="">
                                </div>
                                <div><p>Producto 9</p>
                                <img src="${IMG_9}" alt="">
                                </div>
                                <div><p>Producto 10</p>
                                <img src="${IMG_10}" alt="">
                                </div>
                                `

            break;
        default:
            break;
    }

}*/

function verificar() {
    generarProductos();
    generarCantidadDeProductos();
    cambiarColorAlProducto ();
}


function generarProductos() {
    /*console.log ("PRODUCTO1")*/

    
}

function generarCantidadDeProductos() {
    /*document.write ("ESCIRIBIR")*/
    fielsetVentas.innerHTML="";
    const cantidadDeProductosGenerar= parseInt(selectTiposDeProducto.value)
        for (let i = 0; i < cantidadDeProductosGenerar; i++){
            nombreseimagenes=IMAGENES[i]
            let opcinesProductosGenerar="";
            const cantidadDeArticulosSelecionar= parseInt(selectCantidadDeProductos.value);
                for (let e = 1; e < cantidadDeArticulosSelecionar; e++){
                    opcinesProductosGenerar+= `<option value="${e}">${e}</option>`
1                   
                }
                fielsetVentas.innerHTML += `
                <div class="producto">
                Producto 1
                </div>
                `;
            
  }
}

function cambiarColorAlProducto() {
    /*console.log ("PRODUCTO2")*/
    
}