const {React, View} = require('../template.jsx')

module.exports = (state, emit) => <View class="room background">
    <a href="/login"><button>Administrare</button></a>
    <h1 style="text-align:center" id="message"></h1>
</View>
