import React from "react";

import './assets/styles/Homepage.css';

import filterSign from './assets/images/filter-sign.svg';

export default class Homepage extends React.Component {
    render() {
        return (
            <header className="homepage">
                <h1 className="homepage-header">Homepage</h1>
                <form action="" className="search-form">
                    <label for="search" className="search-label">Input field</label>
                        <input type="text" className="search-input"/>
                    <button type="submit" className="search-button">Search</button>
                </form>
                <div className="filter">
                    <div className="filter-link">Advanced filter</div>
                    <img src={filterSign} alt="sign" className="filter-sign"/>
                </div>
            </header>
        );
    }
}