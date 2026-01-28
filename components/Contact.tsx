import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  WHATSAPP_BASE_URL,
  WHATSAPP_NUMBER,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  LINKEDIN_URL,
} from "../constants";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to send email. Please check your Service ID and Template ID in constants.tsx",
      );
      setStatus("idle");
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-6 md:w-8 h-[1px] bg-blue-500"></div>
            <span className="text-blue-500 dark:text-blue-400 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold font-black">
              Secure Uplink
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-none dark:text-white text-slate-900">
            INITIALIZE <br />{" "}
            <span className="gradient-text">COMMUNICATION</span>.
          </h2>
          <p className="text-base md:text-xl dark:text-gray-400 text-slate-600 leading-relaxed font-medium">
            Ready to integrate a decade of senior-level engineering into your
            roadmap. Let's discuss your architectural objectives and system
            requirements.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <a
            href="mailto:snehal@sukhadeve.dev"
            className="flex items-center gap-4 md:gap-6 group cursor-pointer p-2 rounded-3xl hover:bg-blue-500/5 transition-all"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl dark:bg-white/5 bg-white flex items-center justify-center border dark:border-white/10 border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-xl">
              <i className="fa-solid fa-envelope text-blue-500 group-hover:text-white text-lg md:text-xl"></i>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] dark:text-gray-600 text-slate-400 uppercase tracking-widest font-black">
                Email Protocol
              </p>
              <p className="text-sm md:text-lg font-bold dark:text-white text-slate-900 group-hover:text-blue-500 transition-colors">
                snehal@sukhadeve.dev
              </p>
            </div>
          </a>

          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 md:gap-6 group cursor-pointer p-2 rounded-3xl hover:bg-[#25D366]/5 transition-all"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl dark:bg-white/5 bg-white flex items-center justify-center border dark:border-white/10 border-slate-200 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all shadow-xl">
              <i className="fa-brands fa-whatsapp text-[#25D366] group-hover:text-white text-xl md:text-2xl"></i>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] dark:text-gray-600 text-slate-400 uppercase tracking-widest font-black">
                Instant Link
              </p>
              <p className="text-sm md:text-lg font-bold dark:text-white text-slate-900 group-hover:text-[#25D366] transition-colors">
                +91 97651 79473
              </p>
            </div>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 md:gap-6 group cursor-pointer p-2 rounded-3xl hover:bg-blue-500/5 transition-all"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl dark:bg-white/5 bg-white flex items-center justify-center border dark:border-white/10 border-slate-200 group-hover:bg-blue-700 group-hover:border-blue-700 transition-all shadow-xl">
              <i className="fa-brands fa-linkedin-in text-blue-700 group-hover:text-white text-lg md:text-xl"></i>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] dark:text-gray-600 text-slate-400 uppercase tracking-widest font-black">
                Professional Ledger
              </p>
              <p className="text-sm md:text-lg font-bold dark:text-white text-slate-900 group-hover:text-blue-700 transition-colors">
                Connect on LinkedIn
              </p>
            </div>
          </a>
        </div>

        <div className="pt-8 md:pt-12 border-t dark:border-white/5 border-slate-200">
          <div className="flex gap-4 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <p className="text-[9px] md:text-[10px] font-mono dark:text-gray-500 text-slate-400 uppercase tracking-widest font-black">
              System Status: Accepting Priority Requests
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {status === "success" ? (
          <div className="electric-card p-10 md:p-16 text-center animate-in zoom-in fade-in duration-700 h-full flex flex-col justify-center items-center dark:bg-zinc-900 bg-white border dark:border-white/10 border-slate-200 shadow-2xl">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-green-500/20 shadow-inner">
              <i className="fa-solid fa-check-double text-3xl md:text-4xl text-green-500"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black mb-4 dark:text-white text-slate-900">
              Transmission Success
            </h3>
            <p className="dark:text-gray-400 text-slate-600 max-w-xs mx-auto mb-8 md:mb-10 text-base md:text-lg font-medium">
              Data packet received. Standard response interval: 12-24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-8 py-4 md:px-10 md:py-5 border dark:border-white/10 border-slate-200 rounded-full dark:hover:bg-white/5 hover:bg-slate-50 transition-all dark:text-white text-slate-900"
            >
              RESET TERMINAL
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="electric-card p-6 md:p-14 space-y-6 md:space-y-8 dark:bg-zinc-900 bg-white border dark:border-white/10 border-slate-200 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase dark:text-gray-600 text-slate-400 tracking-widest ml-1">
                  Identity Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="STAKEHOLDER NAME"
                  className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm focus:outline-none focus:border-blue-500 transition-all dark:text-white text-slate-900 placeholder:text-gray-400 font-bold"
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase dark:text-gray-600 text-slate-400 tracking-widest ml-1">
                  Comm Protocol
                </label>
                <input
                  required
                  type="email"
                  placeholder="EMAIL@ENDPOINT.COM"
                  className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm focus:outline-none focus:border-blue-500 transition-all dark:text-white text-slate-900 placeholder:text-gray-400 font-bold"
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-black uppercase dark:text-gray-600 text-slate-400 tracking-widest ml-1">
                Integration Subject
              </label>
              <input
                type="text"
                placeholder="TECHNICAL INQUIRY / PROJECT ARCHITECTURE"
                className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm focus:outline-none focus:border-blue-500 transition-all dark:text-white text-slate-900 placeholder:text-gray-400 font-bold"
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-black uppercase dark:text-gray-600 text-slate-400 tracking-widest ml-1">
                System Log / Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="DESCRIBE TECHNICAL OBJECTIVES..."
                className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-2xl md:rounded-3xl px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm focus:outline-none focus:border-blue-500 transition-all dark:text-white text-slate-900 placeholder:text-gray-400 resize-none font-bold"
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black text-white font-black py-4 md:py-6 rounded-xl md:rounded-2xl transition-all flex items-center justify-center gap-3 md:gap-4 group disabled:opacity-50 shadow-2xl shadow-blue-500/20 text-xs md:text-sm uppercase tracking-widest"
            >
              {status === "submitting" ? (
                <i className="fa-solid fa-circle-notch animate-spin text-lg md:text-xl"></i>
              ) : (
                <>
                  TRANSMIT DATA PACKET
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></i>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
