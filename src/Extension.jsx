import PayPal from "./assets/paypal.png";
import WebStore from "./assets/webstore.svg";

const Extension = () => {
  return (
    <div className="bg-white flex justify-around font-medium p-24 text-slate-700 text-xl">
      <div className="flex gap-4 items-center">
        <img src={WebStore} alt="extension icon" className=" h-12 w-12" />
        <a href="" target="_blank" className="hover:text-slate-800">
          My extension in Chrome Web Store
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <img src={PayPal} alt="extension icon" className=" h-12 w-12" />
        <a
          href="https://www.paypal.com/ncp/payment/AMMT6K9L6ZG76"
          target="_blank"
          className="hover:text-slate-800"
        >
          Contribute a small donation w/ PayPal
        </a>
      </div>
    </div>
  );
};

export default Extension;
