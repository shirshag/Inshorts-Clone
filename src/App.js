import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewsContent from "./Components/NewsContent";

export default function App() {
  // const key = "488e92deecca4835b1892c9ef8bd0cc0";

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(10);

  const newsApi = async () => {
    const newsResponse = await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
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
    <div>
      <Header />
      <NewsContent
        setLoadMore={setLoadMore}
        loadMore={loadMore}
        newsResult={newsResult}
        newsArray={newsArray}
      />
      <Footer />
    </div>
  );
}

// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=488e92deecca4835b1892c9ef8bd0cc0
