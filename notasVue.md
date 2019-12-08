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

## Slots

Introducir elementos a lun elemento hijo

**Comuncicaión de padre a hijo** : A través de props.
**Comuncicaión de hijo a padre** : Por $emit.

## created()

Este momento del ciclo de vida del compoenente es ideal obtener informacion de una api rest

## mounted()

Acceder informacaion del DOM

**Practica del modulo 3** https://codepen.io/ianaya89/pen/VwwGMOE

Actualizar o instalar el paquete de node para vue

```
npm i -g @vue/cli
```


Crear proyecto:

```
vue create [nombre-proyecto]
```

```
npm i -g serve
```
Instala la dependencia serve que hace que el bunbler constrido para produccion este siempre actualizado

```
serve -s dist

```
Interfaz para el manejo del proyecto en vue

```
vue ui
```
Instalar framework de css Tailwindcss

## Vue-router
```
npm i -S vue-router
```
Teniendo en cuenta que la bandera -S para que se guarde en las dependencias

## Corregir errores de lint

```
npm run lint
```
