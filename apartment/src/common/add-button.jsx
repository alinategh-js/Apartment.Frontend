import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} className='add-btn-icon'/>


const AddButton = ({showModal}) => {
        return ( 
            <button className='btn' onClick={showModal}>
                {plusIcon}
            </button>
         );
};
 
export default AddButton;