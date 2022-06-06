import React from "react";

import store from './../../redux/store';

import SearchBox from "../SearchBox";

import './assets/styles/Homepage.css';

import filterSign from './assets/images/filter-sign.svg';

export default class Homepage extends React.Component {
    state = {
        isFiltered: false,
        searchValue: "",
        hasChangedFilter: false
    }

    // componentDidUpdate() {
    //     const state = store.getState();
    //     if (this.state.isFiltered !== state.isFiltered || this.state.searchValue !== state.searchValue || this.state.hasChangedFilter !== state.hasChangedFilter)
    //     this.setState({ isFiltered: state.isFiltered, searchValue: state.searchValue, hasChangedFilter: state.hasChangedFilter });
    // }

    // componentDidMount() {
    //     store.subscribe(_ => {
    //         const state = store.getState();
    //         this.setState({ isFiltered: state.isFiltered, searchValue: state.searchValue, hasChangedFilter: state.hasChangedFilter });
    //     });
    // }

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
    }

    // searchChange = (event) => {
    //     // store.dispatch({
    //     //     type: "HAS_CHANGED"
    //     // });
    //     store.dispatch({
    //         type: "CHANGE_SEARCH_VALUE",
    //         payload: event.target.value
    //     });
    // }

    filterClick = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STATUS",
            payload: !store.getState().isFiltered
        });
    }

    // searchClick = (event) => {
    //     // event.preventDefault();
    //     const state = store.getState();
    //     localStorage.setItem("state", JSON.stringify({
    //         searchValue: state.searchValue,
    //         issuingCountry: state["issuing-country"],
    //         metal: state.metal,
    //         priceFrom: state["price-from"],
    //         priceTo: state["price-to"],
    //         yearFrom: state["year-from"],
    //         yearTo: state["year-to"]
    //     }));
    // }

    render() {
        return (
            <header className="homepage">
                <h1 className="homepage-header">Homepage</h1>
                <SearchBox />
                {/* <form action="/coins" className="search-form">
                    <label htmlFor="search" className="search-label">Input field</label>
                        <input value={this.state.searchValue} type="text" className="search-input" onChange={this.searchChange} />
                    <button disabled={!this.state.hasChangedFilter} type="submit" className="search-button" onClick={this.searchClick}>Search</button>
                </form> */}
                <div className="filter" onClick={this.filterClick}>
                    <div className="filter-link">Advanced filter</div>
                    <img src={filterSign} alt="sign" className="filter-sign"/>
                </div>
            </header>
        );
    }
}