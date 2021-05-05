const choo = require('choo')
const app = choo()
app.mount('body')

//store procedures
app.use(require('./store-procedures/login'))
app.use(require('./store-procedures/admin'))
app.use(require('./store-procedures/scan'))




//styles
import './style.scss'

//routes
app.route('/', require('./views/home'))
app.route('/login', require('./views/administrator-login'))
app.route('/administrare', require('./views/administrare'))
