module.exports = (state, emitter) => {
    state.page.scanned = 0

    setInterval(() => {
        const element = document.getElementById('message')
        if (element) {
            element.innerText = state.page.scanned === 0 ? 'Please Scan your card' : 
                (state.page.scanned === 1 ? 'Found you!' : 'Invalid Card')
            
            element.style.color = state.page.scanned === 0 ? 'yellow' : 
            (state.page.scanned === 1 ? 'green' : 'red')
            state.page.scanned++
            if (state.page.scanned > 2)
                state.page.scanned = 0
        }
    }, 1000)

}