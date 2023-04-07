import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import QuerySearch from './components/QuerySearch';

export class App extends Component {
    api_key = process.env.REACT_APP_News_API_KEY;
    constructor() {
        super();
        this.state = {
            progress: 0
        }
    }

    setProgress = (value) =>{
        this.setState({progress: value})
    }


    render() {
        return (
            <BrowserRouter>
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setProgress(0)}
                />
                <Navbar />
                <Routes>

                    <Route exact path="/" element={<News setProgress={this.setProgress} api_key={this.api_key} key="general" pageSize={9} category="general" country="in" />} />
                    <Route exact path="/business" element={<News setProgress={this.setProgress} api_key={this.api_key} key="business" pageSize={9} category="business" country="in" />} />
                    <Route exact path="/entertainment" element={<News setProgress={this.setProgress} api_key={this.api_key} key="entertainment" pageSize={9} category="entertainment" country="in" />} />
                    <Route exact path="/health" element={<News setProgress={this.setProgress} api_key={this.api_key} key="health" pageSize={9} category="health" country="in" />} />
                    <Route exact path="/science" element={<News setProgress={this.setProgress} api_key={this.api_key} key="science" pageSize={9} category="science" country="in" />} />
                    <Route exact path="/sports" element={<News setProgress={this.setProgress} api_key={this.api_key} key="sports" pageSize={9} category="sports" country="in" />} />
                    <Route exact path="/technology" element={<News setProgress={this.setProgress} api_key={this.api_key} key="technology" pageSize={9} category="technology" country="in" />} />
                    <Route path="/search/:query" element={<QuerySearch  setProgress={this.setProgress} api_key={this.api_key} pageSize={9}/>} />

                </Routes>
            </BrowserRouter>
        )
    }
}

export default App
