const {React, View} = require('../template.jsx')
const videoStream = require('../components/stream')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => <View class="room">
    <a href="/login">Administrare</a>

    <h1>Acasa</h1>
</View>