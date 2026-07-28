import { NextResponse } from "next/server";

/**
 * POST /api/register
 *
 * Validates a registration and forwards it to whatever service you use.
 * Set FORM_WEBHOOK_URL in .env.local to a Formspree, Zapier, Make,
 * Power Automate or Mailchimp endpoint — the payload below is plain JSON,
 * so any of them will take it.
 *
 * Without FORM_WEBHOOK_URL set, submissions are logged to the server
 * console and the visitor still gets a success response. That is fine for
 * local development and wrong for production — set the variable before
 * you launch, or nobody's registration reaches you.
 */

const ROUTES = ["parliamentary", "researcher", "patient", "press", "public"];

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const organisation = String(body.organisation ?? "").trim();
  const route = String(body.route ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();
  const consent = body.consent === "on" || body.consent === true;

  // A bot filled the hidden field. Accept silently so it does not retry.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!ROUTES.includes(route)) {
    return NextResponse.json({ error: "Please choose how you are getting in touch." }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: "Please tick the consent box." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Please shorten your message." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    organisation,
    route,
    message,
    consent: true,
    source: "amrinterface.org/engage",
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.FORM_WEBHOOK_URL;

  if (!webhook) {
    console.warn("[register] FORM_WEBHOOK_URL is not set — submission logged only:", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!forwarded.ok) {
      throw new Error(`Webhook responded ${forwarded.status}`);
    }
  } catch (err) {
    console.error("[register] forwarding failed:", err);
    return NextResponse.json(
      { error: "We could not save your registration just now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
