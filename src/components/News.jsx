import React, { Component } from 'react'
import Loading from './Loading';
import NewsCard from './NewsCard';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        pageSize: 9,
        category: 'general',
        country: 'in'
    }


    static propTypes = {
        pagesize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0
        }
        let title = this.props.category == "general" ? " " : this.capitalFirstLetter(this.props.category) + " - ";
        document.title = `${title}NewsDo`
    }

    async componentDidMount() {
        this.updatePage();
    }

    capitalFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async updatePage() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1
        })
    }
    render() {
        return (
            <>
                <h2 className='text-center my-4'>Newsdo - Today's Headlines</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className='container my-3'>
                        <div className="row">

                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsCard title={element.title != null ? element.title : ""} description={element.description != null ? element.description : ""} urlToImage={element.urlToImage} url={element.url} source={element.source.name} time={new Date(element.publishedAt)} author={element.author} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
