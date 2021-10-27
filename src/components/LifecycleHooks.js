import React, { Component } from 'react';

class LifecycleHooks extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          counter: 0,
        };
        console.log("In constructure")
      }
    componentDidMount()
    {
        console.log("In componentdidmount")
    }
    componentWillUnmount()
    {
        console.log("In componentwillunmount")
    }
    shouldComponentUpdate()
    {
        console.log(this.state.counter);
        if(this.state.counter==0)
        {
            return true;
        }
        console.log("In shouldcomponentUpdate")
        return false;
    }
    handlclick=()=>
    {
        this.setState({
            counter:counter+1,
        })
        console.log("In handleclick")
    }
    render() {
        console.log("In render");
        return (
            <div>
                <button onClick={this.handlclick}>My button</button>
            </div>
        );
    }
}

export default LifecycleHooks;