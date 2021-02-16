import React, {Component} from 'react';

class Remaining extends Component {
    render(){
        return(
            <div className="alert alert-success">
                     Restante:${this.props.remaining}
            </div>
        )
    }
}


export default Remaining;