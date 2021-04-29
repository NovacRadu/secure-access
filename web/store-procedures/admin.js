module.exports = (state, emitter) => {
    emitter.on('admin:delete', (e, name) => {
        state.users = state.users.filter(user => user.name !== name)
        emitter.emit('render')
    })

    emitter.on('admin:edit', e => {
        console.log('edit blin!!!!')
    })


}