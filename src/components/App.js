import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import List from './List';
import BudgetControl from './BudgetControl';
import {validarPresupuesto} from '../helper';

class App extends Component {


  state = {
    budget: '',
    remaining: '',
    expenses:{}
  }

  componentDidMount() {//Se recomienda no recargar el componentDidMount
    this.getBudget();
  }

  getBudget = () =>{
    let budget = prompt('¿Cuál es el presupuesto?');
    let result = validarPresupuesto(budget);
    if(result){
      this.setState({
        budget: budget,
        remaining: budget
      })

    }else{
      this.getBudget();
    }
  }


  //Agregar un nuevo gasto al state
  addExpense = (expense) => {
    //Tomar una copia del state actual
    const expenses = {...this.state.expenses};

    console.log('Se agregó el gasto'+expense);
    //agregar al gasto al objeto del state

    expenses[`expense${Date.now()}`]=expense;
    console.log(expenses);
    //ponerlo en state
    this.setState({
      expenses
    })
  }

  render(){
    return (
      <div className="App container">
        <Header
        title="weekly expense"/>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
                <Form
                    addExpense = {this.addExpense}
                />
            </div>
            <div className="one-half column">
               <List 
                  expenses={this.state.expenses}
               />

               <BudgetControl 
                  budget = {this.state.budget}
                  remaining = {this.state.remaining}
               />

               
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
