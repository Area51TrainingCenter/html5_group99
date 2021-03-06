/* 

  El ejercicio consiste en crear una estructura de datos que almacena información sobre un grupo de mínimo 5 estudiantes. Es decir, necesitamos crear un objeto que guarde información de estos estudiantes.

  El objeto debe de comenzar siendo un arreglo que tenga una lista de objetos que guarden esta información. De esta manera 

  var estudiantes = [
    {},
    {},
    {}
  ]
  Cada objeto debe de contener las siguientes propiedades:
    nombre, 
    edad,
    curso ( HTML5, Desarrollo Movil, Videojuegos, Javascript, Android, iOS, Arte Conceptual, PhotoShop, Illustrator, etc )
    logros ( el cual debe de tener un número como valor)

    Luego de terminar esta parte, debes de imprimir en tu pantalla la información de cada estudiante. Como si estuvieras haciendo un reporte de los estudiantes de Area51.

    Para ayudarte un poco con este ejercicio, me tomé la libertad de crear la función que hará la impresión en la pantalla de la información de cada estudiante
*/


var estudiantes = [ 
  { 
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'Jody',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

// Imprimiendo la informacion en la pantalla

var message = " ";

function print(pepilospalotes) {
  var divReporte = document.getElementById('reporte-estudiantes');
  divReporte.innerHTML = message;
}

for( var i = 0; i < estudiantes.length; i++ ){
	var estudiante = estudiantes[i];
	message += '<h2> Estudiante: ' + estudiante.name + '</h2>';
	message += '<p> Estudiante: ' + estudiante.track + '</p>';
	message += '<p> Estudiante: ' + estudiante.achievements + '</p>';
	message += '<p> Estudiante: ' + estudiante.points + '</p>';
}

print(message);
