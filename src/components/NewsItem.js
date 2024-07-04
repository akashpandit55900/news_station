import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            {/* <div className="card" style={{ width: "23rem" }}> */}
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger"> {source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="" style={{ height: '175px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on  {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-d btn-select">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem;