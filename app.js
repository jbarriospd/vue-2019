Vue.component('CoinDetail',{

  
})


new Vue ({

  el: '#app',

  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      color: 'f4f4f4',
      value: 0,
      price: 8400,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
      ],

      showPrices: false,

    }
    // en methods puedo defibir g¡funciones
    
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    },
    convertedValue () {
      if(!this.value) {
        return 0
      }
      return this.value / this.price
    }
  
  },

  watch: {
    showPrices(newVal, olvVal){
      console.log(newVal,olvVal)
    }
  },

  methods: {
    togglePrices () {
      this.showPrices = !this.showPrices

      this.color = this.color.split('').reverse().join('')
    }

  }
})

// v-show modifica la propiedad display (block-none) se recomienda si hay un cambio constante, mientras que la directiva v-if renderiza si la condicion se cumple, se recomienda si es mas fijo a lo largo del renderizado de la vista

// Cuando utilizamos un v-for es aconsejable utilizar el propiedad key  que le permite a Vue identificar de manera univoca acada uno de estos elementos En caso de que la lista se reordene o se modifique o sufra act Vue pueda seguir detectando cual es el elemento y no pierda el trakeo de esas depenencias

// Computed properties: Se generan apartir de los valores de otras propiedades es decir que tenemos propiedes dentro de data que al modificarse permiten generar un valor nuevo sobre una propiedad. son funciones que siempre devuelvan un valor. se calculan en tiempo real en base a los valores de otras propiedades


// watchers: funciones que ejecutan codigo es decir que el cambio dispara una accion, debe estan funciones llamarse igual a la proiedad en data que se observa

// Two-Way Data Binding: linkear v-model- directiva, refesecar el codigo