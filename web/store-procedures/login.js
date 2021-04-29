module.exports = (state, emitter) => {
	state.error = ''

    emitter.on('login', e => {
        e.preventDefault()
        const form = new FormData(e.target)

        window.location.pathname = '/administrare'

    })

    state.users = [
        {name: 'Radu Novac', whoami: 'Doctor', expire: '3 days', isIn: true},
        {name: 'Petrea Duhlicher', whoami: 'Admin', expire: '8 days', isIn: false},
        {name: 'Marin Bivol', whoami: 'Nurse', expire: '1 days', isIn: false}
    ]

}