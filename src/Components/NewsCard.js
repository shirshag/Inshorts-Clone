import React from "react";

export default function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fullDate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="flex justify-between mx-auto mt-10 space-x-40 py-3 px-5 bg-transparent border-2 w-8/12 drop-shadow-md ">
      <div className="flex flex-col h-fit w-fit lg:flex-row mx-auto">
        
        {/* left image */}
        <img
          className="w-full h-fit lg:w-72 lg:h-56"
          src={
            newsItem.image
              ? newsItem.image
              : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
          }
          alt={newsItem.title}
        />

        {/* right */}
        <div className="w-[70%] flex flex-col justify-between pl-10">
          <div className="flex flex-col container">
            {/* news heading */}
            <div className="text-xl font-normal text-[#44444d]">
              {newsItem.title}
            </div>
            {/* time */}
            <div className="text-sm mb-2 text-[#6b7280]">
              <a href={newsItem.url}>
                <b className="text-black">short</b> by{" "}
                {newsItem.author ? newsItem.author : "anonymous"} /{" "}
                {time
                  ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                  : `${hour}:${date[4].substring(3, 5)} am `}{" "}
                on {date[2]} {date[1]} {date[3]}, {date[0]}
              </a>
            </div>
            {/* description */}
            <div className="font-normal text-md text-[#44444d]">
              <p>{newsItem.description}</p>
            </div>
          </div>
          {/* read more */}
          {newsItem.url && (
            <div className="text-sm mt-5 container">
              read more at{" "}
              <a href={newsItem.url}>
                {" "}
                <b> {newsItem.source.name}</b>
              </a>
            </div>
          )} 
        </div>
      </div>
    </div>
  );
}
