import React, {Component} from 'react';

class Expense extends Component{
    render(){
        const {expenseName, expenseNumber} = this.props.expense;
        console.log(expenseName);
        console.log(expenseNumber);
        return(            
            <li className="gastos">
                <p>
                    {expenseName}
                    <span className="gasto">${expenseNumber}</span>
                </p>
            </li>
           
        )  
    }
}

export default Expense;