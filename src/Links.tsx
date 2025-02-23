import React from "react";

const Links = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <p className="text-3xl font-semibold my-4">Useful Links</p>
      <a
        href="https://github.com/ol-dychka/chatgpt-folders-local"
        target="_blank"
        className="text-xl text-slate-700 hover:text-slate-800 font-semibold"
      >
        Extension GitHub repository
      </a>
      <a
        href="https://ol-dychka.netlify.app"
        target="_blank"
        className="text-xl text-teal-700 hover:text-teal-900 font-semibold"
      >
        My Portfolio
      </a>
      <a
        href="https://github.com/ol-dychka"
        target="_blank"
        className="text-xl text-slate-700 hover:text-slate-800 font-semibold"
      >
        My GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/ol-dychka/"
        target="_blank"
        className="text-xl text-blue-700 hover:text-blue-900 font-semibold"
      >
        My LinkedIn
      </a>
    </div>
  );
};

export default Links;
