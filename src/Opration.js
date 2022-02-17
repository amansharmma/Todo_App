import React, { Component } from 'react'

class Opration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            num : 0
        }
    }

    incNum = () => {
        this.setState({
            num : this.state.num + 5
        })
        console.log(this.state.num)
    }
    decNum = () => {
        this.setState({
            num : this.state.num - 1
        })
        console.log(this.state.num)
    }


    render() {
        return (
            <div>
            <h1>Incryption and Decryption</h1>
            <h1>{this.state.num}</h1>
            <button onClick = {this.incNum}>Click me to add</button>
            <button onClick = {this.decNum}>Click me to Subtrect</button>
            </div>
        )
    }
}

export default Opration




 // num = (event) => { 
    //     this.setState({
    //         name : event.target.value
    //     })
    // }

    // <h1>Incryption and Decryption</h1>
    //         <input onChange = {this.num} />
            // <h1>{this.state.name}</h1>

            // import React, { Component } from 'react'

            // export class Learning extends Component {
            //     constructor(props) {
            //         super(props)
                
            //         this.state = {
            //              number : 1
            //         }
            //     }
                
            //     Add = () => {
            //         this.setState({
            //             number : this.state.number + 1
            //         })
            //     }
            
            //     Dicrm = () => {
            //         this.setState({
            //             number : this.state.number - 1
            //         })
            //     }
            //     render() {
            //         return (
            //             <div>
            //                 <h1>{this.state.number}</h1>
            //                 <button onClick = {this.Add}>Add</button>
            //                 <button onClick = {this.Dicrm}>Decriment </button>
            //             </div>
            //         )
            //     }
            // }
            
            // export default Learning