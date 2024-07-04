import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  // URL of API
  const url = "https://newsapi.org/v2/top-headlines?"
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  
  
  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let ModifiedUrl = `${url}country=${props.country}&category=${props.category}&apiKey=${props.apiKey2}&page=${page}&pageSize=${props.pageSize}`; // meriAPI
    
    let data = await fetch(ModifiedUrl);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  //in place of componentDidMount
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News Station`;
    updateNews();
    // eslint-disable-next-line
  }, []);


  const fetchMoreData = async () => {
    let ModifiedUrl = `${url}country=${props.country}&category=${props.category}&apiKey=${props.apiKey2}&page=${page+1}&pageSize=${props.pageSize}`; // meriAPI
    setPage(page + 1);
    let data = await fetch(ModifiedUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };



  return (
    <>
      <h1 className='text-center' style={{ margin: "35px", marginTop: "90px" }}>News Station - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >

        <div className="container">

          <div className="row">
            {!loading && articles.map((element) => {
              return (<div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description ? element.description : "Click to read more"}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/09/breaking-news-template-6-1695344114-1695434677.jpg"}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  toggleMode={props.toggleMode} 
                  Mode={props.Mode}
                />
              </div>);
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

// News.defaultProps = {
//   country: 'in',
//   pageSize: 8,
//   category: 'general',
// }

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;