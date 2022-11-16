import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewsContent from "./Components/NewsContent";
import Hamburger from "./Components/Hamburger";

export default function App() {
  const key = "488e92deecca4835b1892c9ef8bd0cc0";

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(10);
  const [isOpen, setIsOpen] = useState(false)

  const newsApi = async () => {
    const newsResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`
    );
    const newsData = await newsResponse.json();

    setNewsArray(newsData.articles);
    setNewsResult(newsData.totalResults);

    
  };
  // console.log(newsArray);

  // newsApi();
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResult, category, loadMore]);

  return (

    <>
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hamburger setCategory={setCategory} isOpen={isOpen} setIsOpen={setIsOpen}  />
        <NewsContent
          setLoadMore={setLoadMore}
          loadMore={loadMore}
          newsResult={newsResult}
          newsArray={newsArray}
        />
        <Footer />
      </div>
    </>
  );
}


// className="flex flex-col "