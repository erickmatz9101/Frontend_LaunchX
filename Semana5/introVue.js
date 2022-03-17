const app = Vue.createApp({
    data() {
        return { /**Agregando los atributos de mi objeto para ser utilizados como datos de la app dicho de otra manera es el metodo construtor que le da vida al objeto y sus atributos */
            name: 'Erick',
            firstName: 'Martinez',
            email: 'erick_martinez9101@outlook.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    }, /**No se te olvide porner la coma */

    methods: {
        async getUser() { /**Funcion que permite traer los usuarios randoms de la api, ademas se declara la funcion como asincrona por medio de async */

            const res = await fetch('https://randomuser.me/api');/**El await es como si fuera nuestro then en este caso y se coloca la liga de la api que estamos usando*/

            const { results } = await res.json(); /** resultados es un objeto d eun usuario aleatorio*/
            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.genero = results[0].gender
            this.picture = results[0].picture.large
        },  
    }
})

app.mount('#app');




/**Recuerda observar bien como esta colocada la estructura de la APP ya que practicamente es la misma que esta en el quick start de VUEJS.org
 * 
 * Aqui declaró como una constante la app porque su valor nunca va a cambiar
 */