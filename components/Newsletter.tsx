"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="p-2 scale-[1.2] origin-center"
        style={{ backgroundImage: "url('/grained pink email background.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="flex bg-white rounded-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Newsletter"
            required
            className="flex-1 px-4 py-1.5 text-sm text-[#002C45] placeholder-[#002C45] focus:outline-none font-[family-name:var(--font-poppins)] font-light"
          />
          <button
            type="submit"
            className="px-4 py-1.5 text-[#002C45] hover:opacity-70 transition-opacity"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
