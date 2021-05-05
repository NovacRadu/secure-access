module.exports = (state, emitter) => {
    emitter.on('admin:delete', (e, name) => {
        state.users = state.users.filter(user => user.name !== name)
        emitter.emit('render')
    })


    state.page = {
        edits: {}
    }

    emitter.on('admin:edit', e => {
        const button = e.target
        const tr = button.parentNode.parentNode
        const trs = tr.parentNode.children
        const entries = []
        for (let i = 0; i < trs.length; i++) 
            entries.push(trs[i])
        const n = entries.indexOf(tr)

        const name = tr.firstChild
        

        if (state.page.edits[n]) {
            button.innerText = "Edit"
            name.removeAttribute("contenteditable")
        } else {
            name.setAttribute("contenteditable", true)
            button.innerText = "Save"
        }

        state.page.edits[n] = !state.page.edits[n]

        



    })


}