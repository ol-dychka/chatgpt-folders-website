export default function Header() {
  return (
    <div className="flex justify-center px-10 pt-10 sm:pt-40">
      <div className="text-center">
        <p className="text-6xl font-bold">ChatGPT Folders</p>
        <p className="text-2xl font-semibold text-slate-500">
          Organize your conversation history
        </p>
        <p className="mt-8 max-w-3xl text-lg font-medium text-slate-700">
          This extension helps to organize your ChatGPT responses into custom
          folders for easy access later. With a simple drag-and-drop interface,
          you can save and sort important conversations, making it effortless to
          manage and revisit key information.
        </p>
      </div>
    </div>
  );
}
