import React from "react";

function Card({newsData}) {

    const readMore = (url) => {
        window.open(url)
    }

   return(
     <div className="cardContainer">
        {newsData.map((item, i) => {
            if (!item.urlToImage) {
                return null
            } else {
                return(
                    <div className='card'>
                       <img src={item?.urlToImage}/>
                       <div className="cardContent">
                         <a onClick={() => window.open(item.url)}>{item?.title}</a>
                         <p>{item?.description}</p>
                         <button onClick={() => window.open(item.url)}>Read More</button>
                       </div>
                    </div>
                )
            }
            
        })}
     </div>
    )
}

export default Card;