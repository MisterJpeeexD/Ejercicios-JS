// Modulos

const prompt = require("prompt-sync")();
const print = function(...texto){
    console.log(...texto)
}

// Nivel 1
print()
print("===> Nivel 1 <===")

// Ejercicio 1: Crea un array llamado frutas con 5 frutas distintas y muéstralo por consola. 
print()
print("Ejercicio 1: Crear array y llamarla")

let frutas = ["Manzana", "Frutilla", "Pera", "Piña", "Arandanos"]
console.log(frutas)
print(frutas)

// Ejercicio 2: Mostrar un elemento
print()
print("Ejercicio 2: Mostrar primer y ultimo elemento de la lista")
let colores= ["Rojo","Azul","Verde","Amarillo"];
print(colores[0])
print(colores[colores.length-1])

// Ejercicio 3: Contar elementos
print()
print("Ejercicio 3: Contar cantidad de elementos")
let animales = ["Perro", "Gato", "Conejo", "Huron", "Erizo", "Caballo", "Vaca", "Burro"]
print(animales.length)

// Nivel 2

print()
print("===> Nivel 2 alcanzado! <===")

// Ejercicio 4: Mostrar todos los elementos
print()
print("Ejercicio 4: Mostrar los elementos de una lista")
let numeros = [10,20,30,40,50];
for(recorrer of numeros){
    print(recorrer)
}

// Ejercicio 5: Sumar numeros
print()
print("Ejercicio 5: Sumar los valores dentro de una lista")
let lista = [2,4,6,8];
let suma = 0;
for(valor of lista){
    suma += valor
}
print("La suma es:",suma)

// Ejercicio 6: Contar mayores de edad
print()
print("Ejercicio 6: Contar cuantas personas son mayores de edad")
let edades = [12,18,25,14,30,17];
let i = 0;
for(mayoredad of edades){
    if(mayoredad >= 18){
        i++
    }
}
print("Hay",i,"personas que son mayores de edad")

// Nivel 3
print()
print("===> Nivel 3 alcanzado! <===")

// Ejercicio 7: Agregar elementos a una lista
print()
print("Ejercicio 7: Agregar 3 elementos a una lista")
let compras = [];
print()
print("Agregando Arroz blanco a la lista...")
compras.push("Arroz blanco")
print("Agregando Tallarines a la lista...")
compras.push("Tallarines")
print("Agregando aceite a la lista...")
compras.push("Aceite")
print()
print("Tienes los siguientes elementos agregados en el carrito:")
print(compras)

// Ejercicio 8: Eliminar el ultimo elemento
print()
print("Ejercicio 8: Eliminar ultimo elemento de la lista")
let estudiantes = ["Ana","Pedro","Luis","Maria"];
print()
print("La lista de estudiantes es:")
print(estudiantes)
print("Eliminando a",estudiantes.pop()+"...")
print()
print("Lista actualizada!")
print()
print("La lista de estudiantes es:")
print(estudiantes)

// Ejercicio 9: Buscar elemento
print()
let paises = ["Chile","Argentina","Perú","México"];
let busqueda = prompt("Indique el pais a buscar con mayuscula (Ej. Chile): ")
print()
if(paises.includes(busqueda)){
    print("Pais encontrado")
} else {
    print("Pais no encontrado")
}

// Nivel 4
print()
print("===> Nivel 4 alcanzado! <===")

// Ejercicio 10: Numeros pares
print()
print("Ejercicio 10: Recorre una array y mostrar solo numeros pares")
let numeros_lista = [1,2,3,4,5,6,7,8];
print()
for(pares of numeros_lista){
    if(pares % 2 == 0){
        print(pares)
    }
}

// Ejercicio 11: Numero mayor
print()
print("Ejercicio 10+1: Encontrar numero mas grande en una lista")
let lista_numeros = [5,9,2,20,1];
let num_mayor = 0
for(mayor of lista_numeros){
    if(mayor > num_mayor){
        num_mayor = mayor
    }
}
print("El numero mayor de la lista es",num_mayor)

// Ejercicio 12: Promedio
print()
print("Ejercicio 12: Calcular promedio de una lista")
let notas = [5.5,6.0,4.8,7.0];
let cant_notas = notas.length
let promedio = 0;
for(nota of notas){
    promedio += nota    
}
print("La nota es:",promedio/cant_notas)

// Nivel 5
print()
print("===> Nivel 5 alcanzado! <===")

// Ejercicio 13: Contar letras
print()
print("Ejercicio 13: Contar letras")
let nombres = ["Ana","Felipe","Camila","Tomás"]
nombres.forEach((e, i) => {
    print(`El nombre ${nombres[i]} tiene ${nombres[i].length}`);
});

// Ejercicio 14: Convertir a mayusculas
print()
print("Ejercicio 14: Convertir a mayusculas las palabras de la lista")
let palabras = ["Desarrollo","Optimización","Estructura","Sintaxis","Algoritmo"]
print("El contenido de la lista es:")
print(palabras)
print()
print("Ahora con el cambio, la estructura de la lista es")
let palabras_mayusculas = palabras.map(e => e.toUpperCase())
print(palabras_mayusculas)

// Ejercicio 15
print()
print("Ejercicio 15: Encontrar las palabras que tenga mas de 5 letras")
let num = 0
palabras.forEach((e,i) => {
    if(palabras[i].length >= 5){
        num++
    }
})
print(`Hay ${num} palabras con mas de 5 letras`)

// Nivel 6
print()
print("===> Nivel 6 alcanzado! <===")

// Ejercicio 16: Mostrar propiedades
print()
print("Ejercicio 16: Mostrar propiedades")
let usuarios= [
    {nombre:"Ana", edad:20},
    {nombre:"Luis", edad:17},
    {nombre:"Pedro", edad:25}
];
print()
usuarios.forEach((e,i) => {
    print(`${usuarios[i].nombre} tiene ${usuarios[i].edad} años`)
})

// Ejercicio 17: Filtrar mayores de edad
print()
print("Ejercicio 17: Solo mostrar mayores de edad")
usuarios.forEach((e,i) => {
    if(usuarios[i].edad >= 18){
        print(`${usuarios[i].nombre} es mayor de edad, tiene ${usuarios[i].edad} años`)
    }
})

// Ejercicio 18: Buscar usuario
print()
print("Ejercicio 18: Busqueda de usuario")
print()
let FindUser = prompt("Ingrese el usuario a buscar: ")
print()
usuarios.forEach((e,i) => {
    if(FindUser == usuarios[i].nombre){
        print(`Usuario ${usuarios[i].nombre} se encuentra en la lista`)
    }
})

// Nivel 7
print()
print("===> Nivel 7 alcanzado! <===")
print("Bien hecho! has llegado al nivel maximo")

// Ejercicio 19: map()
print()
print("Ejercicio 19: Crear una nueva lista con numero x 2")
let num_sim = [1,2,3,4];
let num_dup = num_sim.map(i => i*2)
print()
print(num_dup)

// Ejercicio 20: filter()
print()
print("Ejercicio 20: Uso filter()")
let edad_es = [12,18,25,10,30];
let may_edades = edad_es.filter(edad => edad >= 18)
print()
print("Lista filtrada correctamente:")
print(may_edades)

// Ejercicio 21: Find()
print()
print("Ejercicio 21: Uso find()")
print("Se usaran los siguiente nombres: ")
print(nombres)
let busc = nombres.find(i => i == "Ana" )
print()
print("Se encontro a:",busc)

// Ejercicio 22: reduce()
print()
print("Ejercicio 22: Uso reduce()")
print("Se usará la siguiente lista: ")
print(numeros_lista)
let num_list_red = numeros_lista.reduce((total, numero) => {
    return total + numero
},0);
print(num_list_red)

// Logro adquirido
print("===> Has finalizado el desafio con exito <===")
print()
print("Has dominado los algoritmos de .functions()")
print()
print("+ Habilidad descubierta: .find()")
print("+ Habilidad descubierta: .reduce()")