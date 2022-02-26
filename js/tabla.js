     

function añadirProducto(){
    productos = new Array();
    elementos = parseInt(prompt("¿ Cuantas instrucciones deseas añadir ?"));
    for (let i = 0; i < elementos; i++) {
        num=i+1;
        instruccion = prompt("Id Instrucción:");
        ciclos = prompt("Ciclos de "+ instruccion);
        vecesr = parseInt(prompt("Veces que se repite instrucción "+instruccion+' = '+ciclos));
        total = parseInt(ciclos*vecesr);

        productos.push(new Array(num,instruccion,ciclos, vecesr, total));
    }
    return productos;
}


function getCells(data, type) {
return data.map(cell => `<${type}>${cell}</${type}>`).join('');
}

function createBody(data) {
return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}

function createTable(data) {
let cabeceras = ['N° INSTRUCCIONES', 'INSTRUCCIÓN', 'CICLOS', 'VECES QUE SE REPITE','TOTAL'];
return `
<table>
<thead>${getCells(cabeceras, 'th')}</thead>
<tbody>${createBody(data)}</tbody>
</table>
`;
}

document.body.insertAdjacentHTML('beforeend', createTable(añadirProducto()));




