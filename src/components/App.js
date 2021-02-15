import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {


  state = {
    buget: '',
    remaining: '',
    expenses:{}
  }
  //Agregar un nuevo gasto al state

  addExpense = (expense) => {
    //Tomar una copia del state actual
    const expenses = {...this.state.expenses};

    console.log('Se agregó el gasto'+expense);
    console.log(expense);
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
  
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
