const app = new Vue({
  el: '#app',
  
  data () {
   return {

    // Inicializo las variables
      courses: [],
     
     title: '',
     time: ''
   }
  },
  
  computed: {
    totalTime () {
      if (!this.courses.length) { return 0 }
      
      return this.courses.reduce((a, b) => a + parseInt(b.time), 0
      )
    }
  },
  
  methods: {
    addCourse () {
      // si no hay ni titulo del curso o horas retornelo vacio sino:
      if (!this.title || !this.time) { return }
      // realice un push de un objeto que contenga es di¡os llaves
      this.courses.push({
        title: this.title,
        time: this.time
      })
      // inicializar las variables
      this.title = ''
      this.time = 0
    }
  }
})