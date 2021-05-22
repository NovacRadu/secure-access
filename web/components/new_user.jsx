const React = require('jsx-dom')
module.exports = (state, emit) => <div style='text-align:left' id='new-user'>
    <h1>New User</h1>
    <input placeholder="User Name" /><br /><br />
    <select>
        <option>Doctor</option>
        <option>Nurse</option>
        <option>Patient</option>
        <option>Admin</option>
        <option>Guest</option>
    </select><br /><br />
    <input type='number' placeholder='N' value='1' /> Days<br /><br />
    <span style='color: yellow'>Scan your card</span><br /><br />
    <button onclick={e => emit('user:new', e)}>Add User</button>
    <br /><br /><br /><br /><br /><br /><br />


</div>
