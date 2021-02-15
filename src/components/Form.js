import React, {Component} from  'react';

class ExpenseForm extends Component {

     //refs para los campos del formulario
     expenseName = React.createRef();
     expenseNumber = React.createRef()

     createExpense = (e)=>{
          //Prevenir el default
          e.preventDefault();

          //crear el objeto con los datos
          const expense ={
               expenseName:this.expenseName.current.value,
               expenseNumber: this.expenseNumber.current.value
          }

          console.log(expense)
          //Agregarlo y enviarlo por props

          this.props.addExpense(expense);

          //Resetear el formulario (opcional)
          e.currentTarget.reset();
     }
    render(){
        return(<h1>
             <form onSubmit={this.createExpense}>
                    <h2>Agrega tus gastos aqui</h2>

                    <div className="campo">
                         <label>Nombre Gasto</label>
                         <input ref={this.expenseName} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                    </div>
               
                    <div className="campo">
                         <label>Cantidad</label>
                         <input ref={this.expenseNumber} className="u-full-width" type="text" placeholder="Ej. 300" />
                    </div>
               
                    <input className="button-primary u-full-width" type="submit" value="Agregar" />
               </form>
        </h1>);
    }
}


export default ExpenseForm;