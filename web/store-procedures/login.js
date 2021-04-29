module.exports = (state, emitter) => {
	state.error = ''

    emitter.on('login', e => {
        e.preventDefault()
        const form = new FormData(e.target)

        window.location.pathname = '/administrare'

    })

}