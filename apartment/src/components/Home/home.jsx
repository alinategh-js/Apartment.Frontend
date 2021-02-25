import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar , faBuilding, faUsers, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'

const fileInvoiceIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} className='card-icon'/>
const buildingIcon = <FontAwesomeIcon icon={faBuilding} className='card-icon'/>
const usersIcon = <FontAwesomeIcon icon={faUsers} className='card-icon'/>
const moneyIcon = <FontAwesomeIcon icon={faMoneyBillWave} className='card-icon'/>

const Home = () => {
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col  display-flex'>
                        <Link to='/units' className='card-link'>
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        {buildingIcon}
                                        <h5 className="card-title">Units</h5>
                                    </div>
                                </div>
                        </Link>
                    </div>

                    <div className='col  display-flex'>
                        <Link to='/people' className='card-link'>
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        {usersIcon}
                                        <h5 className="card-title">People</h5>
                                    </div>
                                </div>
                        </Link>
                    </div>
                </div>

                <div className='row'>
                    <div className='col  display-flex'>
                        <Link to='/charges' className='card-link'>
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        {moneyIcon}
                                        <h5 className="card-title">Charges</h5>
                                    </div>
                                </div>
                        </Link>
                    </div>

                    <div className='col  display-flex'>
                        <Link to='/expenses' className='card-link'>
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        {fileInvoiceIcon}
                                        <h5 className="card-title">Expenses</h5>
                                    </div>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
         );
};
 
export default Home;