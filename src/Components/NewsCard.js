import React from "react";

export default function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fullDate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="flex justify-between mx-auto mt-10 space-x-16 py-2 px-10 bg-transparent border-2 w-8/12 drop-shadow-md ">
      {/* left image */}
      <img
        className="w-72 h-fit md:h-56"
        src={newsItem.urlToImage}
        alt={newsItem.title}
      />
      {/* right */}
      <div className=" flex flex-col justify-between ">
        <div className="flex flex-col container">
          {/* news heading */}
          <div className="text-2xl font-normal">{newsItem.title}</div>
          {/* time */}
          <div className="text-sm mb-2 text-[#6b7280]">
            <a href={newsItem.url}>
              <b className="text-black">short</b> by{" "}
              {newsItem.author ? newsItem.author : "anonymous"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am `}{" "}
              on {date[2]}
              {date[1]} {date[3]}, {date[0]}
            </a>
          </div>
          {/* description */}
          <div className="font-normal text-lg">
            <p>{newsItem.description}</p>
          </div>
        </div>
        {/* read more */}
        <div className="text-sm mt-5 container">
          read more at{" "}
          <a href={newsItem.url}>
            {" "}
            <b> {newsItem.source.name}</b>
          </a>
        </div>
      </div>
    </div>
  );
}
