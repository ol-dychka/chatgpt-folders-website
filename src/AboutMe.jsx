import { useState } from "react";
export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div
        className="p-2 font-mono rounded-lg text-lg text-slate-500 flex cursor-pointer font-semibold hover:text-slate-700"
        onClick={() => setOpen(!open)}
      >
        About Me&nbsp;
        <p
          className={
            open
              ? "rotate-0 transition duration-100 translate-y-0.75"
              : "rotate-180 transition duration-100 -translate-y-0.5"
          }
        >
          ^
        </p>
      </div>
      {open && (
        <p className="text-lg font-mono text-slate-500 max-w-3xl">
          Hello! I’m Alex, a junior Front-End developer based in Toronto,
          Canada. Originally from Ukraine, I moved here after studying Computer
          Science for two years at a top university back home. Though I couldn’t
          complete my degree, I continued developing my skills by building small
          projects to enhance my resume. <br /> The idea for this extension came
          from a friend who noticed the lack of good, affordable ChatGPT
          organizers. Most were either poorly made or expensive. I set out to
          create a quality product at a reasonable price, but just before
          finishing, OpenAI announced a similar feature for free. Instead of
          letting my work go to waste, I modified the code and decided to
          release it for free. Hope you find it useful!
        </p>
      )}
    </div>
  );
}
