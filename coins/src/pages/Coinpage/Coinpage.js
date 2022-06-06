import React from "react";

import store from './../../redux/store';
import getData from "../../redux/actions";

import './assets/Coinpage.css';

// import canadianBeaverBack from './assets/images/canadian-beaver-back.svg';
// import canadianBeaverFront from './assets/images/canadian-beaver-front.svg';

export default class Coinpage extends React.Component {
    state = {
        
    }

    componentDidMount() {
        localStorage.setItem("coinType", JSON.stringify(0));
        localStorage.setItem("state", JSON.stringify({
            searchValue: "",
            issuingCountry: "all",
            metal: "all",
            priceFrom: "",
            priceTo: "",
            yearFrom: "",
            yearTo: ""
        }));

        const id = +this.props.match.params.id;

        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coin: state.currentCoin });
        })

        store.dispatch(getData(id));
    }

    render() {
        const coin = this.state.coin;
        return (
                <div className="body">
                    {
                        coin?
                        <div className="coinpage">
                        <div className="coin-images">
                            <img src={require("./../../"+coin[0][0].first.toString().substring("C:/Users/Administrator/Desktop/catalog-of-precious-coins/coins/src/".length).replaceAll('\\','/'))} alt="first" className="coin-image"/>
                            <img src={require("./../../"+coin[0][0].second.toString().substring("C:/Users/Administrator/Desktop/catalog-of-precious-coins/coins/src/".length).replaceAll('\\','/'))} alt="second" className="coin-image"/>
                        </div>
                        <div className="coin-description">
                            <div className="about-coin">
                                <h1 className="coin-name">{coin[0][0].name}</h1>
                                <p className="coin-info">{coin[0][0].description}
                                    {coin[1].map(info => <>
                                        <br /> <br />
                                        {info.info}
                                    </>)}
                                </p>
                                <table className="coin-table">
                                    <tbody>
                                        <tr className="coin-table_odd">
                                            <td className="top left">Issuing Country</td>
                                            <td className="top right">{coin[0][0].issuing_country}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Composition</td>
                                            <td className="right">{coin[0][0].composition}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="left">Quality</td>
                                            <td className="right">{coin[0][0].quality}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Denomition</td>
                                            <td className="right">{coin[0][0].denomition}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="left">Year</td>
                                            <td className="right">{coin[0][0].year}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Weight</td>
                                            <td className="right">{coin[0][0].weight}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="bottom left">Price</td>
                                            <td className="bottom right">{coin[0][0].price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <a href="/coins" className="back-list">Back to the list</a>
                        </div>
                    </div>
                    :null
                    }
                    
                </div>
                )
    }
}