function votar() {
    let seccionSelect = document.getElementById("seccionSelect");
    let resultadoVoto = document.getElementById("resultadoVoto");
    
    if (!seccionSelect || !resultadoVoto) return;
    
    let zona = seccionSelect.value;
    let mensaje = "";

    switch (zona) {
        case "norte":
            mensaje = "Emitiste tu voto para la sección NORTE.";
            break;
        case "sur":
            mensaje = "Emitiste tu voto para la sección SUR.";
            break;
        case "centro":
            mensaje = "Emitiste tu voto para la sección CENTRO.";
            break;
        default:
            mensaje = "Por favor selecciona una sección válida.";
            break;
    }

    resultadoVoto.innerHTML = mensaje;
}

let btnVotar = document.getElementById("btnVotar");
if (btnVotar) {
    btnVotar.onclick = votar;
}

let sumaAcumulada = 0;
let btnAgregar = document.getElementById("btnAgregarNumero");
let btnReiniciar = document.getElementById("btnReiniciarSuma");
let inputNum = document.getElementById("inputNumero");
let resSuma = document.getElementById("resultadoSuma");

if (btnAgregar && inputNum && resSuma) {
    btnAgregar.onclick = function() {
        let valor = parseFloat(inputNum.value);

        if (isNaN(valor)) {
            alert("Por favor ingresa un número válido.");
            return;
        }

        if (valor <= 0) {
            resSuma.className = "alert alert-danger mt-3";
            resSuma.innerHTML = "<b>Programa finalizado.</b> Se ingresó un número negativo o cero. La suma total es: <strong>" + sumaAcumulada + "</strong>";
            inputNum.disabled = true;
            btnAgregar.disabled = true;
        } else {
            sumaAcumulada += valor;
            resSuma.className = "alert alert-success mt-3";
            resSuma.innerHTML = "Suma total acumulada: <strong>" + sumaAcumulada + "</strong>";
            inputNum.value = "";
            inputNum.focus();
        }
    };
}

if (btnReiniciar && inputNum && resSuma) {
    btnReiniciar.onclick = function() {
        sumaAcumulada = 0;
        inputNum.value = "";
        inputNum.disabled = false;
        btnAgregar.disabled = false;
        resSuma.className = "alert alert-secondary mt-3";
        resSuma.innerHTML = "Suma total acumulada: 0";
        inputNum.focus();
    };
}

let btnMayorMenor = document.getElementById("btnMayorMenor");
if (btnMayorMenor) {
    btnMayorMenor.onclick = function() {
        let n1 = parseFloat(document.getElementById("num1").value);
        let n2 = parseFloat(document.getElementById("num2").value);
        let n3 = parseFloat(document.getElementById("num3").value);
        
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            document.getElementById("resMayorMenor").innerHTML = "Por favor ingresa los tres números en las cajas.";
            return;
        }

        let mayor, medio, menor;

        if (n1 >= n2 && n1 >= n3) {
            mayor = n1;
            if (n2 >= n3) { medio = n2; menor = n3; } 
            else { medio = n3; menor = n2; }
        } else if (n2 >= n1 && n2 >= n3) {
            mayor = n2;
            if (n1 >= n3) { medio = n1; menor = n3; } 
            else { medio = n3; menor = n1; }
        } else {
            mayor = n3;
            if (n1 >= n2) { medio = n1; menor = n2; } 
            else { medio = n2; menor = n1; }
        }

        document.getElementById("resMayorMenor").innerHTML = "De mayor a menor: " + mayor + ", " + medio + ", " + menor;
    };
}

let btnImporte = document.getElementById("btnImporte");
if (btnImporte) {
    btnImporte.onclick = function() {
        let bruto = parseFloat(document.getElementById("importeInput").value);
        
        if (isNaN(bruto)) {
            document.getElementById("resImporte").innerHTML = "Por favor ingresa un importe válido.";
            return;
        }

        let neto = 0;
        let impuesto = "";

        if (bruto > 15000) {
            neto = bruto * 1.16;
            impuesto = "16%";
        } else {
            neto = bruto * 1.10; 
            impuesto = "10%";
        }

        document.getElementById("resImporte").innerHTML = "Importe neto con " + impuesto + " de impuestos: $" + neto.toFixed(2);
    };
}

let btnSueldo = document.getElementById("btnSueldo");
if (btnSueldo) {
    btnSueldo.onclick = function() {
        let sueldoBase = 40000;
        let anos = parseInt(document.getElementById("anosInput").value);

        if (isNaN(anos)) {
            document.getElementById("resSueldo").innerHTML = "Por favor ingresa los años trabajados.";
            return;
        }

        let aumento = 0;

        if (anos > 10) {
            aumento = 0.10;
        } else if (anos > 5) {
            aumento = 0.07;
        } else if (anos > 3) {
            aumento = 0.05;
        } else {
            aumento = 0.03;
        }

        let sueldoFinal = sueldoBase + (sueldoBase * aumento);
        document.getElementById("resSueldo").innerHTML = "Sueldo correspondiente con aumento: €" + sueldoFinal.toFixed(2);
    };
}

let btnImpares = document.getElementById("btnImpares");
if (btnImpares) {
    btnImpares.onclick = function() {
        let sumaImpares = 0;
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                sumaImpares += i;
            }
        }
        document.getElementById("resImpares").innerHTML = "La suma de los impares del 1 al 100 es: " + sumaImpares;
    };
}

let btnAsteriscos = document.getElementById("btnAsteriscos");
if (btnAsteriscos) {
    btnAsteriscos.onclick = function() {
        let cantidad = parseInt(document.getElementById("inputAsteriscos").value);
        
        if (isNaN(cantidad) || cantidad <= 0) {
            document.getElementById("resAsteriscos").innerHTML = "Por favor ingresa un número válido mayor a 0.";
            return;
        }

        let resultadoAst = "";
        for (let i = 0; i < cantidad; i++) {
            resultadoAst += "* ";
        }
        document.getElementById("resAsteriscos").innerHTML = resultadoAst;
    };
}

let btnTablas = document.getElementById("btnTablas");
if (btnTablas) {
    btnTablas.onclick = function() {
        let textoTablas = "";
        for (let i = 1; i <= 10; i++) {
            textoTablas += "<br><b>--- Tabla del " + i + " ---</b><br>";
            for (let j = 1; j <= 10; j++) {
                textoTablas += i + " x " + j + " = " + (i * j) + "<br>";
            }
        }
        document.getElementById("resTablas").innerHTML = textoTablas;
    };
}

let paises = ["México", "España", "Argentina", "Japón", "Canadá", "Brasil", "Francia", "Italia", "Alemania", "Chile"];

function actualizarVistaArreglo() {
    let display = document.getElementById("arrayDisplay");
    if (display) {
        display.innerHTML = paises.join(", ");
    }
}
actualizarVistaArreglo();

let configurarBotonArray = function(idBtn, callback) {
    let btn = document.getElementById(idBtn);
    let res = document.getElementById("resultadoArreglo");
    if (btn) {
        btn.onclick = function() {
            callback();
            actualizarVistaArreglo();
            if(res) res.innerHTML = "Acción ejecutada correctamente. Arreglo actual: [" + paises.join(", ") + "]";
        };
    }
};

configurarBotonArray("btnPop", function() { paises.pop(); });
configurarBotonArray("btnShift", function() { paises.shift(); });
configurarBotonArray("btnPush", function() { 
    let nuevo = prompt("Ingresa el país a agregar (push):");
    if (nuevo) paises.push(nuevo);
});
configurarBotonArray("btnUnshift", function() { 
    let nuevo = prompt("Ingresa el país a agregar al inicio (unshift):");
    if (nuevo) paises.unshift(nuevo);
});
configurarBotonArray("btnReverse", function() { paises.reverse(); });
configurarBotonArray("btnSort", function() { paises.sort(); });

let btnLength = document.getElementById("btnLength");
if (btnLength) {
    btnLength.onclick = function() {
        let res = document.getElementById("resultadoArreglo");
        if(res) res.innerHTML = "La longitud (length) del arreglo es: " + paises.length;
    };
}

let btnMenu = document.getElementById("btn-menu");
let loginContainer = document.getElementById("login-container");

if (btnMenu && loginContainer) {
    btnMenu.onclick = function() {
        if (loginContainer.style.display === "none" || loginContainer.style.display === "") {
            loginContainer.style.display = "block";
        } else {
            loginContainer.style.display = "none";
        }
    };
}

let btnDelete = document.getElementById("btnDelete");
if (btnDelete) {
    btnDelete.onclick = function() {
        let pos = parseInt(prompt("Ingresa la posición (0 a " + (paises.length - 1) + ") para borrar con 'delete':"));
        if (!isNaN(pos) && pos >= 0 && pos < paises.length) {
            delete paises[pos];
            actualizarVistaArreglo();
            document.getElementById("resultadoArreglo").innerHTML = "Se aplicó 'delete paises[" + pos + "]'. El elemento quedó vacío.";
        }
    };
}

let btnConcat = document.getElementById("btnConcat");
if (btnConcat) {
    btnConcat.onclick = function() {
        let masPaises = ["Canadá", "Perú"];
        let nuevoArreglo = paises.concat(masPaises);
        document.getElementById("resultadoArreglo").innerHTML = "Arreglo concatenado con ['Canadá', 'Perú']:<br><strong>" + nuevoArreglo.join(" - ") + "</strong>";
    };
}

let btnJoin = document.getElementById("btnJoin");
if (btnJoin) {
    btnJoin.onclick = function() {
        let textoUnido = paises.join(" * ");
        document.getElementById("resultadoArreglo").innerHTML = "Resultado de .join(' * '):<br><strong>" + textoUnido + "</strong>";
    };
}