import React, { Component } from 'react'

export class NextAndPrev extends Component {

    handleNextClick= async()=>{
        this.setState({
            page: this.props.page + 1
        }) 
        let pageAddUrl = `&page=${this.state.page}`;
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7e31d33c50af4090821f6df7babedd67&${pageAddUrl}&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json();
    }
    handlePrevClick= async()=>{

    }
    render() {
        return (
            <div className=" container d-flex justify-content-between">
                <button type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        )
    }
}

export default NextAndPrev;