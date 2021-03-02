import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">© 2021-2022</small>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;