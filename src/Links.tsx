import React from "react";

const Links = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-2">
      <p className="text-3xl my-4 font-semibold">Useful Links</p>
      <div className="flex justify-around gap-24 text-xl font-mono font-semibold">
        <a
          href="https://github.com/ol-dychka/chatgpt-folders-local"
          target="_blank"
          className="text-slate-700 hover:text-slate-900"
        >
          Extension GitHub repository
        </a>
        <a
          href="https://ol-dychka.netlify.app"
          target="_blank"
          className="text-teal-700 hover:text-teal-900"
        >
          My Portfolio
        </a>
        <a
          href="https://github.com/ol-dychka"
          target="_blank"
          className="text-slate-700 hover:text-slate-900"
        >
          My GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ol-dychka/"
          target="_blank"
          className="text-blue-700 hover:text-blue-900"
        >
          My LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Links;
