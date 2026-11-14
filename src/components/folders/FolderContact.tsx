"use client";
import { useState } from "react";

export default function FolderContact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 space-y-8">
        <h2 className="font-serif text-4xl lg:text-6xl text-charcoal leading-tight">
          Let's create something beautiful.
        </h2>
        <div className="w-12 h-[1px] bg-burgundy/30" />
        <div className="space-y-4 font-sans text-sm tracking-widest uppercase text-charcoal">
          <a href="mailto:hello@example.com" className="block hover:text-burgundy transition-colors">hello@example.com</a>
          <a href="#" className="block hover:text-burgundy transition-colors">LinkedIn</a>
          <a href="#" className="block hover:text-burgundy transition-colors">Instagram</a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-warm-ivory p-8 rounded-xl shadow-paper border border-black/5 text-charcoal">
        {status === "success" ? (
          <div className="h-full flex items-center justify-center min-h-[300px]">
            <p className="font-serif text-2xl text-burgundy">Message received. Thank you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-[10px] tracking-widest uppercase text-muted-brown">Name</label>
              <input name="name" required className="w-full border-b border-charcoal/20 bg-transparent py-2 font-serif text-xl focus:outline-none focus:border-charcoal" />
            </div>
            <div>
              <label className="text-[10px] tracking-widest uppercase text-muted-brown">Email</label>
              <input name="email" type="email" required className="w-full border-b border-charcoal/20 bg-transparent py-2 font-serif text-xl focus:outline-none focus:border-charcoal" />
            </div>
            <div>
              <label className="text-[10px] tracking-widest uppercase text-muted-brown">Subject</label>
              <input name="subject" required className="w-full border-b border-charcoal/20 bg-transparent py-2 font-serif text-xl focus:outline-none focus:border-charcoal" />
            </div>
            <div>
              <label className="text-[10px] tracking-widest uppercase text-muted-brown">Message</label>
              <textarea name="message" rows={3} required className="w-full border-b border-charcoal/20 bg-transparent py-2 font-serif text-xl focus:outline-none focus:border-charcoal resize-none" />
            </div>
            <button disabled={status === "submitting"} className="px-8 py-3 rounded-lg bg-burgundy text-white text-xs tracking-widest uppercase w-full hover:bg-charcoal transition-colors shadow-sm">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
