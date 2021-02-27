import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faSitemap } from '@fortawesome/free-solid-svg-icons'



const fileInvoiceIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} className='card-icon'/>
const siteMapIcon = <FontAwesomeIcon icon={faSitemap} className='card-icon'/>

class ExpensesHome extends Component {
    state = {  }
    render() { 
        return (
            <div className='card-container'>
                <Link to='/expenses/exp' className='card-link'>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            {fileInvoiceIcon}
                            <h5 className="card-title">Expenses</h5>
                            <p className="card-text">See list of all the expenses of this building.</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/expenses/expcat' className='card-link'>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            {siteMapIcon}
                            <h5 className="card-title">Expenses Types</h5>
                            <p className="card-text">See list of all the expense types defined by user.</p>
                        </div>
                    </div>
                </Link>
            </div>
            
         );
    }
}
 
export default ExpensesHome;