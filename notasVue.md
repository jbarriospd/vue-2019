## v-show:

 Modifica la propiedad display (block-none) se recomienda si hay un cambio constante, mientras que la directiva v-if renderiza si la condicion se cumple, se recomienda si es mas fijo a lo largo del renderizado de la vista

## v-for:
 Cuando utilizamos un v-for es aconsejable utilizar el propiedad key  que le permite a Vue identificar de manera univoca acada uno de estos elementos En caso de que la lista se reordene o se modifique o sufra act Vue pueda seguir detectando cual es el elemento y no pierda el trakeo de esas depenencias

## Computed properties:
 Se generan apartir de los valores de otras propiedades es decir que tenemos propiedes dentro de data que al modificarse permiten generar un valor nuevo sobre una propiedad. son funciones que siempre devuelvan un valor. se calculan en tiempo real en base a los valores de otras propiedades

## watchers:
 funciones que ejecutan codigo es decir que el cambio dispara una accion, debe estan funciones llamarse igual a la proiedad en data que se observa

## Two-Way Data Binding: 
Linkear v-model- directiva, refesecar el codigo

changePercent', 'title','img','name', 'price