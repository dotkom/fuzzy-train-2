import React, { Component } from 'react';
import logo from './assets/logo.svg';
import poly1 from './assets/Poly1.svg'
import poly2 from './assets/Poly2.svg'
import './frontPage.css';
import MenuTab from '../core/components/MenuTab'

class Frontpage extends Component {
    render() {
        return (
            <div className="Frontpage">
                <img src={logo} className="Frontpage-logo" alt="Onlines logo" />
                <MenuTab isActive={true}>Hovedside</MenuTab>
                <img src={poly1} id="poly1" />
                <img src={poly2} id="poly2" />
                <div className="orb" id="orb1"></div>
                <div className="orb" id="orb2"></div>
            </div>
        )
    }
}

export default Frontpage;