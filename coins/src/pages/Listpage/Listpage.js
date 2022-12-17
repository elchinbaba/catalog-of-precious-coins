import React from "react";

import SearchBox from "../../components/SearchBox";
import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";

import store from '../../redux/store';
import getData from "../../redux/actions";

// import Listpage from './../../components/Listpage/Listpage';

import './assets/Listpage.css';

import filterSign from './assets/images/filter-sign.svg';
// import canadianBeaver from './assets/images/canadian-beaver.svg';
// import kennedy from './../../components/Listpage/assets/images/kennedy.svg';
// import looney from './../../components/Listpage/assets/images/looney.svg';
// import canadianCent from './../../components/Listpage/assets/images/canadian-cent.svg';
// import jefferson from './../../components/Listpage/assets/images/jefferson.svg';
// import aPenny from './../../components/Listpage/assets/images/a-penny.svg';

export default class Listpage extends React.Component {
    state = {
        coins: [

        ],

        isFiltered: false

        // coinType: this.props.match.params.coinType,
        // bullion: [
        //     {
        //         header: 'Canadian Beaver',
        //         info: '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
        //         photo: canadianBeaver
        //     }
        // ],
        // exclusive: [

        // ],
        // commemorative: [

        // ]
    }

    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coins: state.coins, isFiltered: state.isFiltered });
        })

        store.dispatch(getData());
    }

    homeClick = _ => {
        window.location.href="/"
    }

    filterClick = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STATUS",
            payload: !store.getState().isFiltered
        });
    }

    coinClick = id => {
        window.location.href=`/coins/${id}`;
    }

    render() {
        // return (
        //     <>
        //         {
        //             this.state[this.state.coinType]?
        //                 <Listpage coins={this.state[this.state.coinType]} />
        //                 :
        //                 null
        //         }
        //     </>
        // )

        return (
            <div className="listPage">
                <header className="listpage">
                    <h1 className="listpage-header">List of the coins</h1>
                    <div className="return-home"><span className="return-homepage" onClick={this.homeClick}>Homepage</span> - List of the coins</div>
                    <SearchBox />
                    {/* <form action="" className="search-form">
                        <label htmlFor="search" className="search-label">Input field</label>
                            <input type="text" className="search-input"/>
                        <button type="submit" className="search-button">Search</button>
                    </form> */}
                    <div className="filter" onClick={this.filterClick}>
                        <div className="filter-link">Advanced filter</div>
                        <img src={filterSign} alt="sign" className="filter-sign" />
                    </div>
                </header>
                {
                    !this.state.isFiltered?
                        <main>
                            <section className="coins">
                                {
                                    this.state.coins?
                                        this.state.coins.map(coin => 
                                            // console.log(require('./assets/images/a-penny.svg'), require('./../../images/canadian-beaver/1.png'))
                                            // console.log("./../../"+this.state.coins[0].first.toString().substring("C:/Users/Administrator/Desktop/catalog-of-precious-coins/coins/src/".length).replaceAll('\\','/'))
                                            (
                                            <article key={coin.id} className="coin">
                                                {/* <img src={require('./assets/images/a-penny.svg').default} alt="coin"/> */}
                                                <img src={require("./../../"+coin.first.toString().substring("C:/Users/Administrator/Desktop/catalog-of-precious-coins/coins/src/".length).replaceAll('\\','/'))} alt="coin" className="coin-picture"/>
                                                <div className="coin-descript">
                                                    <h2 className="coin-header" onClick={_ => this.coinClick(coin.id)}>{coin.name}</h2>
                                                    <p className="coin-info">{coin.description}</p>
                                                </div>
                                            </article>
                                        ))
                                        :
                                        null
                                }
                            </section>
                        </main>
                        :
                        <AdvancedFilter />
                }
            </div>
        );
    }
}