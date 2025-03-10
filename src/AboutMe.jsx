import { useState } from "react";
export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <div
        className="flex cursor-pointer rounded-lg p-2 font-mono text-lg font-semibold text-slate-500 hover:text-slate-700"
        onClick={() => setOpen(!open)}
      >
        About Me&nbsp;
        <p
          className={
            open
              ? "translate-y-0.75 rotate-0 transition duration-100"
              : "-translate-y-0.5 rotate-180 transition duration-100"
          }
        >
          ^
        </p>
      </div>
      {open && (
        <div className="text-md max-w-3xl space-y-4 font-mono text-slate-500 sm:text-lg">
          <p>
            Hello! I’m Alex, a Front-End developer based in Toronto, Canada.
            Originally from Ukraine, I moved here after studying Computer
            Science for two years at a university back home.
          </p>
          <p>
            Though I couldn’t complete my degree, I continued developing my
            skills by building small projects to enhance my resume.
          </p>
          <p>
            The idea for this extension came from a good friend of mine who
            noticed the lack of convenient and affordable ChatGPT organizers.
            Most were either poorly made or expensive. I set out to create a
            quality product at a reasonable price, but just before finishing,
            OpenAI announced a similar feature.
          </p>
          <p>
            Instead of letting my work go to waste, I modified the code and
            decided to release it for free. Hope you find it useful!
          </p>
          <p>
            You can still support me with a small donation, which I would
            appreciate! Just click on a button below.
          </p>
        </div>
      )}
    </div>
  );
}
