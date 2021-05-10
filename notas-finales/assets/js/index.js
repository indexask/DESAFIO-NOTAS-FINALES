const nombre = prompt("Ingrese su Nombre");
const apellido = prompt("Ingrese su Apellido");
const carrera = prompt("Ingrese su carrera");
const ramo = prompt("Ingrese el primer ramo");
const nota1 = prompt("Ingrese la nota1");
const nota2 = prompt("Ingrese la nota2");
const nota3 = prompt("Ingrese la nota3");
const ramo2 = prompt("Ingrese el segundo ramo");
const nota4 = prompt("Ingrese la nota1");
const nota5 = prompt("Ingrese la nota2");
const nota6 = prompt("Ingrese la nota3");
const ramo3 = prompt("Ingrese el tercer ramo");
const nota7 = prompt("Ingrese la nota1 ");
const nota8 = prompt("Ingrese la nota2");
const nota9 = prompt("Ingrese la nota3");
const promedio1 =
  (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
const promedio2 =
  (parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)) / 3;
  const promedio3 =
  (parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9)) / 3;
  const need = (12-nota7-nota8)


document.write(`

<div>
        <h1>NOTAS FINALES</h1>

        <ul>
          <li>Nombre : ${nombre} </li>
          <li>Apellido : ${apellido} </li>
          <li>Carrera : ${carrera}</li>
        </ul>
    </div>


<table class="table">
        <thead class="table-dark">
        <tr>
          <th>Ramo</th>
          <th>Primera Nota</th>
          <th>Segunda Nota</th>
          <th>Tercera Nota</th>
          <th>Promedios</th>
        </tr>
      </thead>
        <tr>
          <th>${ramo}</th>
          <td>${nota1}</td>
          <td>${nota2}</td>
          <td>${nota3}</td>
          <td>${promedio1}</td>
        </tr>
        <tr>
          <th>${ramo2}</th>
          <td>${nota4}</td>
          <td>${nota5}</td>
          <td>${nota6}</td>
          <td>${promedio2}</td>
        </tr>
        <tr>
          <th>${ramo3}</th>
          <td>${nota7}</td>
          <td>${nota8}</td>
          <td>${!nota9 ? '-' :nota9  }</td>
          <td>${!promedio3 ? '-' :promedio3   }</td>

        </tr>
      </tbody>
    </table>
`);

document.write("Para aprobar el ramo JavaScript con nota 4. necesitas obtener un" +"   "+need +" "+"en la nota 3");
