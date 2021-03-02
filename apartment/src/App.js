import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/home";
import Units from "./components/Units/units";
import People from "./components/People/people";
import Charges from "./components/Charges/charges";
import ExpensesHome from "./components/Expenses/expenses-home";
import ExpensesCategory from "./components/Expenses/expenses-category";
import Expenses from "./components/Expenses/expenses";
import Header from "./common/header";
import Footer from "./common/footer";
import UnitForm from "./components/Units/unitform";
import UnitCharge from "./components/Charges/UnitCharge";
import UnitOwnerResidentForm from "./components/Units/unitOwnerResidentForm"
import PersonForm from "./components/People/personForm";
import ExpensesForm from "./components/Expenses/expensesForm";
import ExpensesTypeForm from "./components/Expenses/expenseTypeForm";
import CreateBuilding from "./components/Home/createBuilding";
import Modal from "./common/modal"

class App extends Component {
  state = {
    modalDisplay: false
  };

  handleShowModal = () => {
    this.setState({
      modalDisplay: true
    })
    console.log('show modal')
  }

  handleCloseModal = () => {
    this.setState({
      modalDisplay: false
    })
  }

  render() {
    return (
      <>
        <Header showModal={this.handleShowModal}/>
        <Modal show={this.state.modalDisplay} hideModal={this.handleCloseModal} />
        <div className="container">
          <Switch>
            {/* ============Units =============== */}
           
            <Route path="/units/form/:id">
              <UnitOwnerResidentForm />
            </Route>

            <Route path="/units/new">
              <UnitForm />
            </Route>

            <Route path="/units">
              <Units />
            </Route>
            {/* ========================== */}

            {/* ===========People ==============*/}
           

            <Route path="/people/new">
              <PersonForm />
            </Route>

            <Route path="/people">
              <People />
            </Route>
            {/* ================================*/}

            {/* ===========Charges ==============*/}

            <Route path="/charges/:id">
              <UnitCharge />
            </Route>
            
            <Route path="/charges">
              <Charges />
            </Route>
            
            {/* ==================================== */}

            {/* ===========Expenses ==============*/}
            <Route path="/expenses/expcat/new">
              <ExpensesTypeForm />
            </Route>

            <Route path="/expenses/exp/new">
              <ExpensesForm />
            </Route>

            <Route path="/expenses/expcat">
              <ExpensesCategory />
            </Route>

            <Route path="/expenses/exp">
              <Expenses />
            </Route>

            <Route path="/expenses">
              <ExpensesHome />
            </Route>
            {/* ==================================== */}

            {/* ===========Home ==============*/}
            <Route path="/">
              <CreateBuilding />
            </Route>

            <Route path="/">
              <Home />
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
