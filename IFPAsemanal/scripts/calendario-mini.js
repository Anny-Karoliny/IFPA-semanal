var dateGrid = document.querySelector(".date-grid button")
var mesAno = document.querySelector(".little-calendar-tittle h3")
var tituloD = document.querySelector(".data-atual h3")
var date = new Date().getDay() // DIA DA SEMANA
var day = new Date().getDate()
var month = new Date().toLocaleDateString('default', {month:'long'})
var year = new Date().getFullYear()




switch (date) {
    case 1:
        dateGrid.style.gridColumn = 1;
        break;
    case 2:
        dateGrid.style.gridColumn = 2;
        break;
    case 3:
        dateGrid.style.gridColumn = 3;
    break;
    case 4:
        dateGrid.style.gridColumn = 4;
        break;
    case 5:
        dateGrid.style.gridColumn = 5;
        break;
    case 6:
        dateGrid.style.gridColumn = 6;
        break;
    case 7:
        dateGrid.style.gridColumn = 7;
        break;

    default:
        console.log("erro com datas")
        break;
}


mesAno.innerHTML = month + ", " + year

tituloD.innerHTML = `${month} - ${day}, ${year} `