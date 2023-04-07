import React, {Component} from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import NewsCard from './NewsCard';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import { useEffect } from 'react';

const QuerySearch = (props) => {
    const id = useParams();
    const [results, setResults] = useState({ articles: [], page: 1, totalResults: 0 });

    useEffect(() => {
        document.title = 'NewsDo'
        updatePage();
    },[])

    const updatePage = async () => {
        props.setProgress(0);

        let url = `https://newsapi.org/v2/everything?q=${id.query}&sortBy=relevancy&apiKey=${props.api_key}&page=${results.page}&pageSize=${props.pageSize}`;
        props.setProgress(10);

        let data = await fetch(url);
        props.setProgress(40);

        let parsedData = await data.json();
        props.setProgress(70);

        setResults({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: 1
        })
        props.setProgress(100);
    }


    const fetchMoreData = async () => {
        console.log(results)
        let url = `https://newsapi.org/v2/everything?q=${id.query}&sortBy=relevancy&apiKey=${props.api_key}&page=${results.page + 1}&pageSize=${props.pageSize}`;
        console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults({
            articles: results.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: results.page + 1
        })
    }

    return (
        <>
            <h2 className='text-center my-4'>Newsdo</h2>

            <InfiniteScroll
                dataLength={results.articles.length}
                next={fetchMoreData}
                hasMore={results.articles.length !== results.totalResults && results.page <= 10}
                loader={<Loading />}
            >
                <div className='container my-3'>
                    <div className="row">

                        {results.articles.map((element) => {
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

// function getId() {
//     let id = useParams();
//   return id;
// }

// export default class QuerySearch extends Component {

//     static defaultProps = {
//         pageSize: 9
//     }



//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             page: 1,
//             totalResults: 0,
//             query : ""
//         }
//         document.title = `NewsDo`
//     }

//     async componentDidMount() {
//         this.updatePage();
//     }


//     async updatePage() {
//         this.props.setProgress(0);
//         let id = getId();
//         let url = `https://newsapi.org/v2/everything?q=${this.state.query}&sortBy=relevancy&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.props.setProgress(10);

//         let data = await fetch(url);
//         this.props.setProgress(40);

//         let parsedData = await data.json();
//         this.props.setProgress(70);

//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             query: id.query
//         })
//         this.props.setProgress(100);
//     }

//     fetchMoreData = async () => {
//         let url = `https://newsapi.org/v2/everything?q=${this.state.query}&sortBy=relevancy&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         console.log(url)
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles: [...this.state.articles, parsedData.articles],
//             totalResults: parsedData.totalResults,
//             page: this.state.page + 1
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h2 className='text-center my-4'>Newsdo - Today's Headlines</h2>

//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Loading />}
//                 >
//                     <div className='container my-3'>
//                         <div className="row">

//                             {this.state.articles.map((element) => {
//                                 return <div className="col-md-4" key={element.url}>
//                                     <NewsCard title={element.title != null ? element.title : ""} description={element.description != null ? element.description : ""} urlToImage={element.urlToImage} url={element.url} source={element.source.name} time={new Date(element.publishedAt)} author={element.author} />
//                                 </div>
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>

//             </>
//         )
//     }
// }


export default QuerySearch
