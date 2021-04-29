const choo = require('choo')
const app = choo()
app.mount('body')

//store procedures
app.use(require('./store-procedures/login'))

//styles
import './style.scss'

//routes
app.route('/', require('./views/administrator-login'))
app.route('/administrare', require('./views/administrare'))
