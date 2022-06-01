import React from "react";

import './assets/styles/Homepage2.css';

export default class Homepage2 extends React.Component {
    render() {
        return (
            <form action="" className="filters">
                <div className="selects">
                    <div className="select-box">
                        <label htmlFor="issuing-country">Issuing country</label>
                            <select name="issuing-country" id="issuing-country">
                                <option value="canada">Canada</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label htmlFor="metal">Metal</label>
                            <select name="metal" id="metal">
                                <option value="gold">Gold</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label htmlFor="quality-of-the-coin">Quality of the coin</label>
                            <select name="quality-of-the-coin" id="quality-of-the-coin">
                                <option value="proof">Proof</option>
                            </select>
                    </div>
                </div>
                <div className="inputs">
                    <div className="inputs-container">
                        <div className="inputs-label">Price</div>
                        <div className="inputs-box">
                            <div className="input-box">
                                <label htmlFor="price_from">from</label>
                                    <input type="text" name="price_from" id="price_from"/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="price_to" className="to">to</label>
                                    <input type="text" name="price_to" id="price_to"/>
                            </div>
                        </div>
                    </div>
                    <div className="inputs-container">
                        <div className="inputs-label">Year of issue</div>
                        <div className="inputs-box">
                            <div className="input-box">
                                <label htmlFor="year-of-issue_from">from</label>
                                    <input type="text" name="year-of-issue_from" id="year-of-issue_from"/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="year-of-issue_to" className="to">to</label>
                                    <input type="text" name="year-of-issue_to" id="year-of-issue_to"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}