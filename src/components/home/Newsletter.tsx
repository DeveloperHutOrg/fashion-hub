"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E5DFD5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#72202B] font-semibold">
          The Private Register
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#121212] mt-3">
          Stay In The Know
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#6B7280] font-light max-w-lg mx-auto leading-relaxed">
          Be the first to discover new collections, exclusive drops, and special offers.
        </p>

        {isSubmitted ? (
          <div className="mt-8 p-6 bg-[#F2EDE4] border border-[#E5DFD5] inline-flex items-center gap-3 text-xs tracking-wider uppercase font-medium text-[#121212] animate-in fade-in">
            <div className="w-6 h-6 rounded-full bg-[#72202B] text-white flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>You have been registered for FASHION HUB private dispatches.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-[#FAF8F5] border border-[#121212]/30 px-5 py-3.5 text-xs tracking-wider placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#72202B] transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#121212] text-[#FAF8F5] hover:bg-[#72202B] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 group shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-[#6B7280]/70">
          By subscribing, you agree to receive digital communications from FASHION HUB. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
