import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents
  },
  directives: { directives },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3E4B8F',
          secondary: '#2A9DDE',
          myorange: '#FC9B31',
          mypink: '#FAC4D4',
          mylightblue: '#AEDAF2',
        }
      }
    }
  }
})

export default vuetify