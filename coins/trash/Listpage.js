import React from "react";

import './assets/Listpage.css';

import filterSign from './assets/images/filter-sign.svg';

export default class Listpage extends React.Component {
    state = {
        coins: this.props.coins
    }

    render() {
        return (
            <div className="listPage">
                <header className="listpage">
                    <h1 className="listpage-header">List of the coins</h1>
                    <div className="return-home"><span className="return-homepage">Homepage</span> - List of the coins</div>
                    <form action="" className="search-form">
                        <label htmlFor="search" className="search-label">Input field</label>
                            <input type="text" className="search-input"/>
                        <button type="submit" className="search-button">Search</button>
                    </form>
                    <div className="filter">
                        <div className="filter-link">Advanced filter</div>
                        <img src={filterSign} alt="sign" className="filter-sign"/>
                    </div>
                </header>
                <main>
                    <section className="coins">
                        {
                            this.state.coins.map(coin => (
                                <article className="coin">
                                    <img src={coin.photo} alt="coin" className="coin-photo"/>
                                    <div className="coin-description">
                                        <h2 className="coin-header">{coin.header}</h2>
                                        <p className="coin-info">{coin.info}</p>
                                    </div>
                                </article>
                            ))
                        }
                        {/* <article className="coin">
                            <img src={canadianBeaver} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">Canadian Beaver</h2>
                                <p className="coin-info">"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                            </div>
                        </article>
                        <article className="coin">
                            <img src={kennedy} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">Kennedy</h2>
                                <p className="coin-info">The unique coin is made in honor of the assassination of the 35th president of Texas.</p>
                            </div>
                        </article>
                        <article className="coin">
                            <img src={looney} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">Looney</h2>
                                <p className="coin-info">"Looney". Unique coin with the image 
                                    of a goat. Canadian dollar symbol.</p>
                            </div>
                        </article>
                        <article className="coin">
                            <img src={canadianCent} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">Canadian Cent</h2>
                                <p className="coin-info">"Canadian cent." A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.</p>
                            </div>
                        </article>
                        <article className="coin">
                            <img src={jefferson} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">Jefferson</h2>
                                <p className="coin-info">Unique coin featuring Thomas Jefferson, 
                                    the 3rd American president. Face value - 5 cents.
                                    </p>
                            </div>
                        </article>
                        <article className="coin">
                            <img src={aPenny} alt="coin" className="coin-photo"/>
                            <div className="coin-description">
                                <h2 className="coin-header">A penny</h2>
                                <p className="coin-info">"A penny". A unique coin with a shield image with 13 vertical stripes.</p>
                            </div>
                        </article> */}
                    </section>
                </main>
            </div>
        );
    }
}