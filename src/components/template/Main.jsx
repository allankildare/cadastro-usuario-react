import './Main.css'
import React, { Fragment } from 'react'
import Header from './Header'

export default props => 
    <Fragment>
        <Header {...props} /> 
        <main className="content container-fluid">
            <div className="p-3 nt-3">
                {props.children}
            </div>
        </main>
    </Fragment>
