import { Link } from "wouter";
const Footer = () => {
  return (
    <div className="flex justify-between gap-4 bg-slate-900 p-8 text-white">
      <p>&copy; 2025 ChatGPT Folders. All rights reserved.</p>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
