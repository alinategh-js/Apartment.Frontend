import React, { useState, useEffect, CreateContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/home";
import Units from "./components/Units/units";
import People from "./components/People/people";
import Charges from "./components/Charges/charges";
import ExpensesHome from "./components/Expenses/expenses-home";
import ExpensesCategory from "./components/Expenses/expenses-type";
import Expenses from "./components/Expenses/expenses";
import Header from "./common/header";
import Footer from "./common/footer";
import UnitForm from "./components/Units/unitform";
import UnitCharge from "./components/Charges/UnitCharge";
import UnitOwnerResidentForm from "./components/Units/unitOwnerResidentForm";
import PersonForm from "./components/People/personForm";
import ExpensesForm from "./components/Expenses/expensesForm";
import ExpensesTypeForm from "./components/Expenses/expenseTypeForm";
import CreateBuilding from "./components/Home/createBuilding";
import Modal from "./common/modal";
import CalculateChargeForm from "./components/Charges/calculateChargeForm";
import { getBuilding } from "./components/Home/homeServices";


export const BuildingContext = React.createContext({})

const App = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [building, SetBuilding] = useState({})

  useEffect(async () => {
    const { data } = await getBuilding();
    SetBuilding(data);
  },[]);

  const handleShowModal = () => {
    setModalDisplay(true);
  };

  const handleCloseModal = () => {
    setModalDisplay(false);
  };

  return (
    <BuildingContext.Provider value={building}>
      <Header showModal={handleShowModal} />
      <Modal show={modalDisplay} hideModal={handleCloseModal} />
      <div className="container">
        <Switch>
          {/* ============Units =============== */}

          <Route path="/units/edit/:id">
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
          <Route path="/charges/calculate">
            <CalculateChargeForm />
          </Route>

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
            <Home />
          </Route>

          {/* ============================= */}
        </Switch>
      </div>
      <Footer />
    </BuildingContext.Provider>
  );
};


export default App;