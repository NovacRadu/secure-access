const {React, View} = require('../template.jsx')
const videoStream = require('../components/stream')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => <View class="room">
    <h2>HTML Table</h2>

    <table>
    <tr>
        <th>Username</th>
        <th>Access</th>
        <th>Expiration Date</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Radu Novac</td>
        <td>Patient</td>
        <td>12/12/2022</td>
        <td>
            Delete,
            Edit
        </td>

    </tr>
    </table>

</View>

