module.exports = (state, emitter) => {


    emitter.on('socket:home', ({status, data, error, element}) => {
        element.innerText = status ? 'Found you!' : 'Please Scan your card'
        element.style.color = status ? 'green' : 'yellow'
        if (error) {
            element.innerText = 'Invalid Card'
            element.style.color = 'red'
        }

    })
    emitter.on('socket:admin', ({status, data, element}) => {
        if (status) {
            state.page.adminCardScanned = data
            element.innerText = 'Card Scanned!'
            element.style.color = 'green' 
        }
    })


    const ws = state.page.ws = new WebSocket('ws://' + window.location.hostname + '/onEvent')
    ws.onmessage = e => {
        const { status, data, error } = JSON.parse(e.data)

        const messageElement = document.getElementById('message')

        messageElement && emitter.emit('socket:home', {status, data, error, element: messageElement})

        const parent = document.getElementById('new-user')
        if (parent) {
            const [element] = parent.getElementsByTagName('span')
            emitter.emit('socket:admin', {status, data, element})
        }



    }
    ws.onclose = e => {}
    ws.onopen = e => {}

}