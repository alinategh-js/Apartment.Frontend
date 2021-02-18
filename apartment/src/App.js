import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home'
import Units from './components/Units/units'
import People from './components/People/people'
import Charges from './components/Charges/charges'
import ExpensesHome from './components/Expenses/expenses-home'
import ExpensesCategory from './components/Expenses/expenses-category'
import Expenses from './components/Expenses/expenses'
import Header from './common/header'
import Footer from './common/footer'
import UnitForm from './components/Units/unitform';

class App extends Component {
  state = {  }
  render() { 
    return (
      <>
      <Header />
        <div className='container'>
        <Switch>

          {/* ============Units =============== */}
          <Route path='/units/new'>
            <UnitForm />
          </Route>
          
          <Route path='/units'>
            <Units/>
          </Route>
          {/* ========================== */}

          {/* ===========People ==============*/}
          <Route path='/people'>
            <People/>
          </Route>
          {/* ================================*/}

          {/* ===========Charges ==============*/}
          <Route path='/charges/:id'>
            <UnitCharge/>
          </Route>
          <Route path='/charges'>
            <Charges/>
          </Route>
          {/* ==================================== */}

          {/* ===========Expenses ==============*/}
          <Route path='/expenses/expcat'>
            <ExpensesCategory/>
          </Route>

          <Route path='/expenses/exp'>
            <Expenses/>
          </Route>

          <Route path='/expenses'>
            <ExpensesHome/>
          </Route>
          {/* ==================================== */}

          {/* ===========Home ==============*/}
          <Route path='/'>
            <Home/>
          </Route>
          {/* ============================= */}
        </Switch>
      </div>
      <Footer />
      </>
      
      
     );
  }
}
 
export default App;