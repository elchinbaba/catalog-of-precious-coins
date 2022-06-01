import React from "react";

import './assets/styles/Homepage1.css';

import bullion from './assets/images/bullion-coins.svg';
import exclusive from './assets/images/exclusive-coins.svg';
import commemorative from './assets/images/commemorative-coins.svg';


export default class Homepage1 extends React.Component {
    render() {
        return (
            <main className="all-coins">
                <section className="coin-type">
                    <h2 className="coin-type-header">Bullion coins</h2>
                    <a href="#" className="show-all">Show all {">"}</a>
                    <img src={bullion} alt="bullion" className="coin-photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-header">Exclusive coins</h2>
                    <a href="#" className="show-all">Show all {">"}</a>
                    <img src={exclusive} alt="exclusive" className="coin-photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-header">Commemorative coins</h2>
                    <a href="#" className="show-all">Show all {">"}</a>
                    <img src={commemorative} alt="commemorative" className="coin-photo"/>
                </section>
            </main>
        );
    }
}