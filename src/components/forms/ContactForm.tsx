"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { CheckCircle2, Send, Mail, MapPin, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-200 shadow-premium text-center flex flex-col items-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
          Message Received
        </h3>
        <p className="font-sans text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
          Thank you for reaching out, <strong>{name}</strong>. A member of the NexAgent engineering team will respond to <strong>{email}</strong> shortly.
        </p>
        <Button
          onClick={() => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setSubmitted(false);
          }}
          variant="outline"
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-premium space-y-5"
    >
      <h3 className="font-display font-bold text-xl text-slate-900 mb-4">
        Direct Inquiries
      </h3>

      {error && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
          {error}
        </div>
      )}

      <div>
        <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
          Your Name *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex Morgan"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="alex@company.com"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
          Inquiry Subject (Optional)
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Custom software inquiry, platform question, or general query"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-wider text-slate-600 block mb-1.5 font-medium">
          Message *
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we assist your business?"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-surface-ground font-sans text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full justify-center"
        icon={<Send className="w-4 h-4" />}
      >
        Send Message
      </Button>
    </form>
  );
}
