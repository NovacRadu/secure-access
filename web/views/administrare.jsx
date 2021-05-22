const {React, View} = require('../template.jsx')
const UserList = require('../components/users')
const AddUser = require('../components/new_user')

module.exports = (state, emit) => <View class="room">
    <a href="/"><button>Home</button></a>
    <div class="admin-div">
        <h2>Pagina de Administrare</h2>
        {UserList(state, emit)}
        {AddUser(state, emit)}
    </div>
</View>

