import WebStore from "./assets/webstore.svg";

const Extension = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-8 bg-white p-12 text-xl font-medium text-slate-700 shadow-xl sm:flex-row sm:p-24">
      <div className="flex items-center gap-4">
        <img src={WebStore} alt="extension icon" className="h-12 w-12" />
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
