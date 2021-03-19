import React from 'react'

class Keypad extends React.Component {

    keyUpListener() {
        console.log('Entering password...')
    }

    render() {
       return (
       <input type="password" onKeyUp={this.keyUpListener}></input>
       )
    }
}

export default Keypad