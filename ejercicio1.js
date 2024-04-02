// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros

const suma = (a = 10, b = 5) => {
  console.log('La suma de los dos parámetros es:', a + b)
}

// 1.1 Ejecutar sin pasar ningún parámetro
suma()

// 1.2 Ejecutar pasando un solo parámetro
suma(20)

// 1.3 Ejecutar pasando dos parámetros
suma(30, 15)
