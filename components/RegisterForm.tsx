"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
      setMessage(
        "Thank you — you are on the list. If you sent a message, the convenor will reply personally."
      );
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? `${err.message} You can also email r.elshenawy@herts.ac.uk directly.`
          : "Something went wrong. Please email r.elshenawy@herts.ac.uk directly."
      );
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">
          Name <span className="req" aria-hidden="true">*</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">
          Email <span className="req" aria-hidden="true">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="organisation">
          Organisation <span className="hint">(optional)</span>
        </label>
        <input id="organisation" name="organisation" type="text" autoComplete="organization" />
      </div>

      <div className="field">
        <label htmlFor="route">
          I am getting in touch as <span className="req" aria-hidden="true">*</span>
        </label>
        <select id="route" name="route" required defaultValue="">
          <option value="" disabled>Please choose…</option>
          <option value="parliamentary">Parliamentary or policy staff</option>
          <option value="researcher">Researcher</option>
          <option value="patient">Patient or advocate</option>
          <option value="press">Press or journalist</option>
          <option value="public">Member of the public</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor="message">
          Message{" "}
          <span className="hint">
            (optional — a topic proposal, a briefing request, or anything else)
          </span>
        </label>
        <textarea id="message" name="message" />
      </div>

      {/* spam trap: hidden from people, tempting to bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="check">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">
          I would like to receive policy briefs and the quarterly update by email, and I
          understand I can unsubscribe at any time.
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn-ink" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Register interest"}
        </button>
        <p className="note">We will never share your details with a third party.</p>
      </div>

      {message && (
        <p className="form-msg" role="status" aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
