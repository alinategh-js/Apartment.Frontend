import React from 'react'
import { Link } from 'react-router-dom';

import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faFileInvoiceDollar, faSitemap} from '@fortawesome/free-solid-svg-icons'

const unitIcon = <FontAwesomeIcon icon={faBuilding} className = 'modal-icon'/>
const personIcon = <FontAwesomeIcon icon={faUser} className = 'modal-icon'/>
const fileInvoiceIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} className = 'modal-icon'/>
const siteMapIcon = <FontAwesomeIcon icon={faSitemap} className = 'modal-icon'/>

const Modal = ({ hideModal, show}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return ( 
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className='btn close-btn' type="button" onClick={hideModal}>
                    Close
                </button>
                <Link to='/units/new'>
                    <button className='icon-btn' onClick={hideModal}>{unitIcon}  Add Unit</button>
                </Link>
                <Link to='/people/new'>
                    <button className='icon-btn' onClick={hideModal}>{personIcon}  Add Person</button>
                </Link>
                <Link to='/expenses/expcat/new'>
                    <button className='icon-btn' onClick={hideModal}>{siteMapIcon}  Add Expense Type</button>
                </Link>
                <Link to='/expenses/exp/new'>
                    <button className='icon-btn' onClick={hideModal}>{fileInvoiceIcon}  Add Expense</button>
                </Link>
            </section>
        </div>
     );
}
 
export default Modal;