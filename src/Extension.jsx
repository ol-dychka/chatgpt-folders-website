import WebStore from "./assets/webstore.svg";

const Extension = () => {
  return (
    <div className="bg-white flex justify-around font-medium p-24 text-slate-700 text-xl shadow-xl">
      <div className="flex gap-4 items-center">
        <img src={WebStore} alt="extension icon" className=" h-12 w-12" />
        <a
          href="https://chromewebstore.google.com/detail/chatgpt-folders/akgpkjgpdobkagnipbohfpagjmbpjnfb"
          target="_blank"
          className="hover:text-slate-900"
        >
          My extension in Chrome Web Store
        </a>
      </div>
      <a href="https://ko-fi.com/G2G51BOHXW" target="_blank">
        <img
          height="36"
          className="h-12"
          src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </div>
  );
};

export default Extension;
