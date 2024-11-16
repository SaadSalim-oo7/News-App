import React, { useEffect, useState } from 'react';
import Card from './Card';

function Newsapp() {

  let [userSearch, setUserSearch] = useState("india");
  let [newsData, setNewsData] = useState([]);

  let API_KEY = "963a7d6067994b56817b99c6cf3cf7c5";

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${userSearch}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
}

  useEffect(() => {
    getData()
  }, [])

  const handleInput = (e) => {
    console.log(e.target.value);
    setUserSearch(e.target.value)
  }

  const userInput = (e) => {
    setUserSearch(e.target.value)
  }

  return (
    <div>
        <nav>
            <diiv>
                <h1>Trendy News</h1>
            </diiv>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={userSearch} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
         <div>
            <p className='head'>Stay Updated With Trending News</p>
         </div>
        <div className='categoryBtn mt-3'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
            <Card newsData = {newsData}/>
        </div>
    </div>
  )
}

export default Newsapp;