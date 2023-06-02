const selectTiposDeProducto = document.querySelector("#tipos-de-productos");
const selectCantidadDeProductos = document.querySelector("#cantidad-de-productos");
const selectColores = document.querySelector("#colores");
const fielsetVentas = document.querySelector("#ventas");

vectorColores=[]


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
const IMG_11 = "https://shoppicture.ww-api.com/pretty_pict/v1/1800x1800/50x50/v1/commerce_pict/2458325/1599074558854_64512/pan-flauta.png";
const IMG_12 = "https://desayunospersonalizados.com/wp-content/uploads/2021/06/128142-01_arcor-chocolate-butter-toffee-chewy-candy-1lb-bag_1200x1200.jpg";
const IMG_13 = "https://media.tycsports.com/files/2022/01/26/383756/caramelos-sugus_862x485.jpg?v=3";
const IMG_14 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQh17LXoVnEJG1e_8uD_gz3ksutgDF7MABunu4njYvULB1FTqaIoQSPN2v2O9n27V7tk&usqp=CAU";
const IMG_15 = "https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000";
const IMG_16 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ0Z1R1Dy3m8r-xQudGMFb2U4FWp9XXT2Vi0cMWrW8i6HnUhgKJ0-MQ-o6LAz4O_Ox40&usqp=CAU";
const IMG_17 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYCgccfxjBz-11ZN8HlANTLxT3-W_QYOKof3Xbm2QGm9OQrJyMXSPGGtUfDoRb3i6EI0&usqp=CAU";
const IMG_18 = "https://http2.mlstatic.com/D_NQ_NP_637905-MLA50810082617_072022-O.webp";
const IMG_19 = "https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/01/computer-coloring-page.png";
const IMG_20 = "https://http2.mlstatic.com/D_NQ_NP_769688-MLA46234024274_062021-O.webp";
const IMG_21 = "https://calmessimple.com.ar/wp-content/uploads/2019/10/FotoAlmohada-02-1280x853.jpg";




function verificar() {
    switch (parseInt(selectTiposDeProducto.value)) {
        case 1:
            fielsetVentas.innerHTML = `<div><p>Producto 1</p>
                                    <img src="${IMG_1}" alt="">

                                    </div>
                                    `

            break;
        case 3:
            fielsetVentas.innerHTML = `<div><p>Producto 2</p>
                                <img src="${IMG_2}" alt="">
                                </div>
                                <div><p>Producto 3</p>
                                <img src="${IMG_3}" alt="">
                                </div>
                                <div><p>Producto 4</p>
                                <img src="${IMG_4}" alt="">
                                </div>
                                `


            break;
        case 7:
            fielsetVentas.innerHTML = `<div><p>Producto 5</p>
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
                                <div><p>Producto 11</p>
                                <img src="${IMG_11}" alt="">
                                </div>
                                `

            break;
        case 10:
            fielsetVentas.innerHTML = `<div><p>Producto 12</p>
                                <img src="${IMG_12}" alt="">
                                </div>
                                <div><p>Producto 13</p>
                                <img src="${IMG_13}" alt="">
                                </div>
                                <div><p>Producto 14</p>
                                <img src="${IMG_14}" alt="">
                                </div>
                                <div><p>Producto 15</p>
                                <img src="${IMG_15}" alt="">
                                </div>
                                <div><p>Producto 16</p>
                                <img src="${IMG_16}" alt="">
                                </div>
                                <div><p>Producto 17</p>
                                <img src="${IMG_17}" alt="">
                                </div>
                                <div><p>Producto 18</p>
                                <img src="${IMG_18}" alt="">
                                </div>
                                <div><p>Producto 19</p>
                                <img src="${IMG_19}" alt="">
                                </div>
                                <div><p>Producto 20</p>
                                <img src="${IMG_20}" alt="">
                                </div>
                                <div><p>Producto 21</p>
                                <img src="${IMG_21}" alt="">
                                </div>
                                `

            break;
        default:
            break;
    }

}