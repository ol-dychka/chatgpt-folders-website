import { Link } from "wouter";
const PrivacyPolicy = () => {
  return (
    <div className="font-mono p-8 space-y-8">
      <p className="text-3xl font-semibold">
        Privacy Policy for ChatGPT Folders
      </p>
      <div>
        <p>
          At ChatGPT Folders, we value your privacy. This Chrome extension
          operates entirely on your local machine and does not collect, store,
          or transmit any personal data or user information.
        </p>
      </div>
      <div>
        <p className="text-2xl font-semibold text-slate-700">Data Collection</p>
        <p>
          We do not collect or share any personal information, browsing data, or
          any other data while you use this extension. All functionality of the
          extension happens locally on your device, and no data is sent to
          external servers.
        </p>
      </div>
      <div>
        <p className="text-2xl font-semibold text-slate-700">
          Third-Party Services
        </p>
        <p>
          Our extension does not interact with any third-party services or APIs.
          All operations are performed on your local browser environment.
        </p>
      </div>
      <div>
        <p className="text-2xl font-semibold text-slate-700">
          Changes to This Policy
        </p>
        <p>
          We may update this privacy policy from time to time. If there are any
          significant changes, we will notify you via an update to the
          extension. If you have any questions or concerns about this privacy
          policy, feel free to contact us at georgepozdman@gmail.com.
        </p>
      </div>
      <p>Last Updated: 24.02.2025</p>
      <div className="flex justify-center">
        <Link
          href="/"
          className="cursor-pointer underline font-bold text-slate-700 hover:text-slate-900"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
