
//                          Bienvenida
let welcome = document.createElement ("div");
const h2 = document.createElement ("h2")
// document.getElementById("welcome");
h2.innerText = 'Bienvenido ' + prompt('Ingrese su nombre');
welcome.append(h2);
document.body.append(welcome);

// =========================================================================

const btn = document.createElement('button');
btn.textContent = 'INICIAR';
document.body.append(btn);


btn.addEventListener('click', () => {
    //Creo el parrafo inicial
    const date = new Date;
    const p =  document.createElement('p');
    p.innerText = 'La camioneta de hoy ' + 
    '(' + date.toLocaleDateString() + ') ' + 'esta formada por:';
    document.body.append(p);
    // Hacer que sea presionado una vez sola 
    btn.disabled = true;
    

    // Boton para agregar children
    let btnAdd = document.createElement('button');
    btnAdd.textContent = 'Agregar +';
    document.body.append(btnAdd);

        btnAdd.addEventListener ('click', () => {
            add();
        })


    // Boton para eliminar children
    let btnLess = document.createElement('button');
    btnLess.textContent = 'Eliminar -';
    document.body.append(btnLess);

        btnLess.addEventListener ('click', () => {
            less();
        })
    // Boton de Filtrado
    const btnFilter = document.createElement('button');
    btnFilter.textContent = 'Filtrar:';
    btnFilter.id = 'btnFilter'
    document.body.append(btnFilter);
        
    btnFilter.addEventListener ('click', () => {
        filtrado();
        
    })

    showList();
    
// Boton para finalizar
    const btnEnd = document.createElement('button');
    btnEnd.textContent = 'Finalizar';
    btnEnd.id = 'btnEnd'
    document.body.append(btnEnd);

    btnEnd.addEventListener ('click', () => {
        alert('Listo para partir!' +
            ' Tienes ' + children.length + ' alumnos')
    })




        
})



//==============================================================================

//Array de objetos
const children = [
    { nombre: 'Santiago', edad: 19, colegio: 'ISASA' },
    { nombre: 'Juan', edad: 20, colegio: 'Ingles' },
    { nombre: 'Pedro', edad: 15, colegio: 'Colegio America' }
  ];
  
  //Funcion para mostrar la lista con nombres
  function showList() {
    const listaExistente = document.querySelector('ol');
  if (listaExistente) {
    listaExistente.remove();
  }
    const ol = document.createElement('ol'); 
    
    // Recorro el array con forEach
    children.forEach(objeto => {
      
      //Posibles errores
      if (objeto.nombre === null |' ') {
        alert('Nombre no valido') 

    } else if (isNaN(objeto.edad) || objeto.edad <= 0) {
        alert('Edad no valida')

    } else if (objeto.colegio === null |' ') {
        alert('Colegio no valido') 

    } else { 
        //Creo el li
        const li = document.createElement('li');
    li.innerHTML = `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}, Colegio: ${objeto.colegio}`;
    ol.appendChild(li); 

    }
    });
    document.body.append(ol);  
  }

//==============================================================================
//                                   BOTONES

  //Funcion para agregar children
  function add() {
    const newChildren = { 
      nombre: prompt('Ingrese nuevo nombre'),
      edad: parseInt(prompt('Ingrese la edad')), 
      colegio: prompt('Ingrese colegio')
    };
    children.push(newChildren); 
    showList(); 
  }
  
  // Funcion para eliminar children
  function less () {
    if (confirm ('Estas seguro que quieres eliminar?')) {
        children.pop();
        showList();
        if (children.length === 0) {
            alert('La lista esta vacía')
        } else {
        alert('Se ha eliminado correctamente') }
    } else {
        showList();
    }
  }

//====================================================================
//                                FILTRADO

function filtrado () {

const inputName = document.createElement('input');
inputName.id = 'searchByName';
inputName.type = 'text'
inputName.placeholder = 'Ingrese un nombre';
document.body.append(inputName) 



let inputAge = document.createElement('input');
inputAge.id = 'searchByAge';
inputAge.type = 'Number'
inputAge.placeholder = 'Menor que: Ingrese edad';
document.body.append(inputAge)



let inputColegio = document.createElement('input');
inputColegio.id = 'searchByColegio';
inputColegio.type = 'text'
inputColegio.placeholder = 'Ingrese un colegio';
document.body.append(inputColegio)



const searchButton = document.createElement('button');
searchButton.textContent = 'Buscar';
searchButton.id = 'searchButton'
document.body.append(searchButton); 
searchButton.addEventListener('click', searchingButton);

function searchingButton() {
    const name = document.getElementById('searchByName').value.toLowerCase();
    const age = parseInt(document.getElementById('searchByAge').value);
    const colegio = document.getElementById('searchByColegio').value.toLowerCase();

    let filteredResults = children.filter((el) => {

        const nameMatch = el.nombre.toLowerCase().includes(name);

        const ageMatch = isNaN(age) || el.edad <= age;

        const colegioMatch = el.colegio.toLowerCase().includes(colegio);
    
        return nameMatch && ageMatch && colegioMatch;
      });
    

      console.log(filteredResults);
      showFilteredResults(filteredResults);
    }
  }


    function showFilteredResults (filtredChildren) {
        const filChildList = document.createElement('ul');
        document.body.append(filChildList);


        filtredChildren.forEach((objeto) => {
            const listChild = document.createElement('li');
            listChild.textContent = `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}, Colegio: ${objeto.colegio}`;
            filChildList.appendChild(listChild);
        })
}
