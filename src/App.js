import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <MainContent />
            </Fragment>
        );
    }
}

export default App;
