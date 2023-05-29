import React from "react";
import NewsCard from "./NewsCard";

export default function NewsContent({
  setLoadMore,
  loadMore,
  newsResult,
  newsArray,
}) {
  const handleClick = () => {
    setLoadMore(loadMore + 10);
  };

  return (
    <>
      <div className="flex justify-between mx-auto my-10 w-8/12 space-x-32 py-2 px-10 bg-[#ef4444] drop-shadow-md">
        <div className="flex items-center">
          <p className="text-sm text-white">
            For the best experience use{" "}
            <span className="font-bold">inshorts</span> app on your smartphone
          </p>
        </div>
        <div className="flex space-x-2 ">
          <img
            className="h-10"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt=""
          />
        </div>
      </div>

      {/* {console.log(newsArray)} */}

      {/* renders the first 10 set of news */}

      <div className="mb-8">
        {newsArray.slice(0, loadMore).map((newsItem, i) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {/* at the end loads more news cards when btn is clicked */}
        {loadMore <= newsResult && (
          <div className="flex">
            <div className="flex items-center mx-auto">
              <hr />
              <button
                onClick={handleClick}
                className="mt-8 shadow-md shadow-gray-400 bg-white px-5 py-2 text-black text-sm"
              >
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
