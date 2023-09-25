//Ingredientes Receta
let ingHarina = 300;
let ingAzucar = 350;
let ingHuevos = 5;
let ingLeche = 500;
let ingLimon = 5;
let ingManteca = 100;
let ingSal = 100;
let porcentajeAdicionalCosto = 1.7; //70% -> Porcentaje adicional q quiero sumarle al costo
let horasTorta = 3;
let costoHora = 1000;


const calcularCostos = () => {
    let costoHarina = document.getElementById("costoHarina");
    let costoHarinaError = document.getElementById("costoHarinaError");
    let tamanoHarina = document.getElementById("tamanoHarina");
    let tamanoHarinaError = document.getElementById("tamanoHarinaError");
    let costoManteca = document.getElementById("costoManteca");
    let costoMantecaError = document.getElementById("costoMantecaError");
    let tamanoManteca = document.getElementById("tamanoManteca");
    let tamanoMantecaError = document.getElementById("tamanoMantecaError");
    let costoAzucar = document.getElementById("costoAzucar");
    let costoAzucarError = document.getElementById("costoAzucarError");
    let tamanoAzucar = document.getElementById("tamanoAzucar");
    let tamanoAzucarError = document.getElementById("tamanoAzucarError");
    let costoHuevos = document.getElementById("costoHuevos");
    let costoHuevosError = document.getElementById("costoHuevosError");
    let tamanoHuevos = document.getElementById("tamanoHuevos");
    let tamanoHuevosError = document.getElementById("tamanoHuevosError");
    let costoLeche = document.getElementById("costoLeche");
    let costoLecheError = document.getElementById("costoLecheError");
    let tamanoLeche = document.getElementById("tamanoLeche");
    let tamanoLecheError = document.getElementById("tamanoLecheError");
    let costoLimon = document.getElementById("costoLimon");
    let costoLimonError = document.getElementById("costoLimonError");
    let tamanoLimon = document.getElementById("tamanoLimon");
    let tamanoLimonError = document.getElementById("tamanoLimonError");
    let costoSal = document.getElementById("costoSal");
    let costoSalError = document.getElementById("costoSalError");
    let tamanoSal = document.getElementById("tamanoSal");
    let tamanoSalError = document.getElementById("tamanoSalError");

    if (costoHarina.value == "") {
        costoHarinaError.innerHTML = "Complete el numero!";
        costoHarinaError.className = "text-danger";
        return false;
    } else {
        costoHarinaError.innerHTML = "";
    }

    if (tamanoHarina.value == "") {
        tamanoHarinaError.innerHTML = "Complete el numero!";
        tamanoHarinaError.className = "text-danger";
        return false;
    } else {
        tamanoHarinaError.innerHTML = "";
    }


    if (costoManteca.value == "") {
        costoMantecaError.innerHTML = "Complete el numero!";
        costoMantecaError.className = "text-danger";
        return false;
    } else {
        costoMantecaError.innerHTML = "";
    }

    if (tamanoManteca.value == "") {
        tamanoMantecaError.innerHTML = "Complete el numero!";
        tamanoMantecaError.className = "text-danger";
        return false;
    } else {
        tamanoMantecaError.innerHTML = "";
    }


    if (costoAzucar.value == "") {
        costoAzucarError.innerHTML = "Complete el numero!";
        costoAzucarError.className = "text-danger";
        return false;
    } else {
        costoAzucarError.innerHTML = "";
    }

    if (tamanoAzucar.value == "") {
        tamanoAzucarError.innerHTML = "Complete el numero!";
        tamanoAzucarError.className = "text-danger";
        return false;
    } else {
        tamanoAzucarError.innerHTML = "";
    }


    if (costoHuevos.value == "") {
        costoHuevosError.innerHTML = "Complete el numero!";
        costoHuevosError.className = "text-danger";
        return false;
    } else {
        costoHuevosError.innerHTML = "";
    }

    if (tamanoHuevos.value == "") {
        tamanoHuevosError.innerHTML = "Complete el numero!";
        tamanoHuevosError.className = "text-danger";
        return false;
    } else {
        tamanoHuevosError.innerHTML = "";
    }


    if (costoLeche.value == "") {
        costoLecheError.innerHTML = "Complete el numero!";
        costoLecheError.className = "text-danger";
        return false;
    } else {
        costoLecheError.innerHTML = "";
    }

    if (tamanoLeche.value == "") {
        tamanoLecheError.innerHTML = "Complete el numero!";
        tamanoLecheError.className = "text-danger";
        return false;
    } else {
        tamanoLecheError.innerHTML = "";
    }


    if (costoLimon.value == "") {
        costoLimonError.innerHTML = "Complete el numero!";
        costoLimonError.className = "text-danger";
        return false;
    } else {
        costoLimonError.innerHTML = "";
    }

    if (tamanoLimon.value == "") {
        tamanoLimonError.innerHTML = "Complete el numero!";
        tamanoLimonError.className = "text-danger";
        return false;
    } else {
        tamanoLimonError.innerHTML = "";
    }


    if (costoSal.value == "") {
        costoSalError.innerHTML = "Complete el numero!";
        costoSalError.className = "text-danger";
        return false;
    } else {
        costoSalError.innerHTML = "";
    }

    if (tamanoSal.value == "") {
        tamanoSalError.innerHTML = "Complete el numero!";
        tamanoSalError.className = "text-danger";
        return false;
    } else {
        tamanoSalError.innerHTML = "";
    }




//-----------------------------

    const datosUsuario = {costoHarina:costoHarina.value, tamano:tamanoHarina.value, costoManteca:costoManteca.value, tamanoManteca:tamanoManteca.value, costoAzucar:costoAzucar.value, tamanoAzucar:tamanoAzucar.value, costoHuevos:costoHuevos.value, tamanoHuevos:tamanoHuevos.value, costoLeche:costoLeche.value, tamanoLeche:tamanoLeche.value, costoLimon:costoLimon.value, tamanoLimon:tamanoLimon.value, costoSal:costoSal.value, tamanoSal:tamanoSal.value};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
    const datosUsuarioLS = JSON.parse(localStorage.getItem("datosUsuario"));

//-----------------------------

    // Calculo:
    let CalcGramoHarina = ((datosUsuarioLS.costoHarina)/(datosUsuarioLS.tamano));
    let CalcCostoHarina = (CalcGramoHarina*ingHarina);
    let CalcGramoManteca = ((datosUsuarioLS.costoManteca)/(datosUsuarioLS.tamanoManteca));
    let CalcCostoManteca = (CalcGramoManteca*ingManteca);
    let CalcGramoAzucar = ((datosUsuarioLS.costoAzucar)/(datosUsuarioLS.tamanoAzucar));
    let CalcCostoAzucar = (CalcGramoAzucar*ingAzucar);
    let CalcHuevos = ((datosUsuarioLS.costoHuevos)/(datosUsuarioLS.tamanoHuevos));
    let CalcCostoHuevos = (CalcHuevos * ingHuevos);
    let CalcMLleche = ((datosUsuarioLS.costoLeche)/(datosUsuarioLS.tamanoLeche));
    let CalcCostoLeche = (CalcMLleche*ingLeche);
    let CalcLimon = ((datosUsuarioLS.costoLimon)/(datosUsuarioLS.tamanoLimon));
    let CalcCostoLimon = (CalcLimon*ingLimon);
    let CalcGramoSal = ((datosUsuarioLS.costoSal)/(datosUsuarioLS.tamanoSal));
    let CalcCostoSal = (CalcGramoSal*ingSal);

    let CostoTotal = (CalcCostoHarina+CalcCostoManteca+CalcCostoAzucar+CalcCostoHuevos+CalcCostoLeche+CalcCostoLimon+CalcCostoSal);
    let GananciaCosto = (CostoTotal*porcentajeAdicionalCosto);
    let CostoxHora = (costoHora*horasTorta);

   
    let contenidoHTML = `<h3>Calculo de Costos</h3>
    <table class="table">
    <tr>
    <td class="bg-primary-subtle">El paquete de Harina de ${datosUsuarioLS.tamano} grs costó: $${datosUsuarioLS.costoHarina}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo del gramo de Harina es: $${CalcGramoHarina.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo del Harina utilizada es: $${CalcCostoHarina.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">El paquete de Manteca de ${datosUsuarioLS.tamanoManteca} grs costó: $${datosUsuarioLS.costoManteca}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo del gramo de Manteca es: $${CalcGramoManteca.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de la Manteca utilizada es: $${CalcCostoManteca.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">El paquete de Azucar de ${datosUsuarioLS.tamanoAzucar} grs costó: $${datosUsuarioLS.costoAzucar}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo del gramo de Azucar es: $${CalcGramoAzucar.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo del Azucar utilizada es: $${CalcCostoAzucar.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">El paquete de ${datosUsuarioLS.tamanoHuevos} Huevos costó: $${datosUsuarioLS.costoHuevos}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de Cada Huevo es: $${CalcHuevos.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de los Huevos es: $${CalcCostoHuevos.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">La leche de ${datosUsuarioLS.tamanoLeche} mililitros costó: $${datosUsuarioLS.costoLeche}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de la leche (por mililitro) es: $${CalcMLleche.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de la leche es: $${CalcCostoLeche.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">Los ${datosUsuarioLS.tamanoLimon} limones costaron: $${datosUsuarioLS.costoLimon}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de cada limon es: $${CalcLimon.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de los limones es: $${CalcCostoLimon.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary-subtle">El paquete de ${datosUsuarioLS.tamanoSal} grs de Sal costo: $${datosUsuarioLS.costoSal}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de cada gramo de Sal es: $${CalcGramoSal.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">El costo de la Sal es: $${CalcCostoSal.toFixed(2)}</td>
    </tr>




    
    <tr>
    <td class="bg-primary text-white">El costo total de ingredientes es: $${CostoTotal.toFixed(2)}</td>
    </tr>

    <tr>
    <td class="bg-primary text-white">El costo mas un ${((100*porcentajeAdicionalCosto)-100)}% es : $${GananciaCosto.toFixed(2)}</td>
    </tr>
    <tr>
    <td class="bg-primary text-white"> Horas para hacer la torta: ${horasTorta}. Costo x hora: $${costoHora}. Total: $${costoHora*horasTorta}</td>
    </tr>
    <tr>
    <td class="bg-primary text-white"> PRECIO DE VENTA: $${(CostoxHora+GananciaCosto).toFixed(2)}</td>
    </tr>

    

    </table>`;
    document.getElementById("resultado").innerHTML = contenidoHTML;
}

document.getElementById("btnCalcular").onclick = calcularCostos;