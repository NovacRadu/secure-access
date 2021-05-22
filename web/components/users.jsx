const React = require('jsx-dom')
module.exports = (state, emit) => <table class="admin-table"> 
    <tr>
        <th>Username</th>
        <th>Access</th>
        <th>Expire</th>
        <th>Is In</th>
        <th>Action</th>
    </tr>
    {state.users.map(({name, whoami, expire, isIn}) => <tr>
        <td>{name}</td>
        <td>{whoami}</td>
        <td>{expire}</td>
        <td><span style={'color: ' + (isIn ? 'green' : 'red')}>{isIn ? '☻' : '☹'}</span></td>
        
        <td>
            <button onclick={e => emit('admin:delete', e, name)}>Delete</button> 
            <button onclick={e => emit('admin:edit', e)}>Edit</button>
        </td>

    </tr>)}
</table>