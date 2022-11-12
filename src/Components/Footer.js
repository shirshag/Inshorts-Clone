import React from "react";

export default function Footer() {
  return (
    <div class="container flex justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 bg-[#323232]">
      {/* left */}
      <div className="flex justify-end w-3/5 gap-4">
        {/* copyright col */}
        <div className="flex flex-col md:border-r-2 border-[#808290]">
          {/* inshorts clone img*/}
          <img
            className="w-40 h-12"
            src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
            alt=""
          />
          {/* clone by */}
          <span className="mt-8 text-white text-[#808290] font-[Conv_ClanPro-Bold] mr-4">
            Clone by{" "}
            <a target="_blank" href="https://abhipshapatro.netlify.app/">
              {" "}
              <b className="text-white">Abhipsha Patro</b>{" "}
            </a>
          </span>
          {/* copyright msg */}
          <span className=" text-sm text-[#808290]">@COPYRIGHT 2022</span>
        </div>
        {/* contact us col */}
        <div className="flex flex-col ml-2">
          {/* contact us img */}
          <img
            className="w-32 h-12 -mt-1.5"
            src="https://assets.inshorts.com/website_assets/images/contact_icon.png"
            alt=""
          />
          {/* terms & conditions */}
          <span className="mt-10 text-white text-sm">Terms & Conditions</span>
          {/* Privacy policies */}
          <span className="text-white text-sm">Privacy Policies</span>
        </div>
      </div>
      {/* social links */}
      <div class="flex justify-center  w-1/2 gap-20">
        {/*  */}
        <a
          target="_blank"
          className="self-end"
          href="https://www.github.com/abhipshapatro"
        >
          <img className="h-7" src="github.png" alt="" />
        </a>
        <a
          target="_blank"
          className="self-end"
          href="https://www.linkedin.com/in/abhipshapatro"
        >
          <img
            className="h-6"
            src="https://assets.inshorts.com/website_assets/images/linkedin.png"
            alt=""
          />
        </a>
        <a
          target="_blank"
          className="self-end"
          href="https://twitter.com/abhipsha_patro"
        >
          <img
            className="h-6"
            src="https://assets.inshorts.com/website_assets/images/twitter.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
