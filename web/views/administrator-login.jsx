const {React, View, BlockInput, Shadow, Footer} = require('../template.jsx')
module.exports = (state, emit) => {
    return <View class="room">
    <form id="joinRoom" class="form" autocomplete="off" onsubmit={e => emit('login', e)}>
        <div class="control" style="text-align:center">
            <br/>
            <h1 style="color:pink"> Administrator management </h1>
            <br/><br/><br/>
            <h1> Authenticate </h1>
            <br/><br/>
            <div id='error'>{state.error}</div>
            <br/>
        </div>
        <BlockInput>
            <input name="Username" type="text" placeholder="Username" />
        </BlockInput>
        <BlockInput>
            <input name="Passowrd" type="passowrd" placeholder="Password" />    
        </BlockInput>
        <button type="submit" class="btn block-cube block-cube-hover">
            <Shadow/>
            <div class="text"> Login </div>
        </button>
        <Footer/>
    </form>
    </View>
}