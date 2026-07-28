
const ROUTES = [
    {
        id: "parliament",
        n: "Route 01",
        who: "Parliamentary & policy staff",
        title: "Brief us, or be briefed",
        body: "Request a briefing for a member or a committee, ask for evidence on a specific question, or invite the Interface to give evidence to a Select Committee. We can also supply background for a written question or a debate.",
        send: [
            "The member or committee, and the deadline you are working to",
            "The question you need answered, in one line",
            "Whether you need a written note, a meeting or an oral briefing",
        ],
        pill: "pill-done",
        pillText: "Priority route",
        cta: "Email the convenor →",
        href: "mailto:r.elshenawy@herts.ac.uk?subject=Parliamentary%20briefing%20request",
    },
    {
        id: "researchers",
        n: "Route 02",
        who: "Researchers",
        title: "Submit evidence or propose a topic",
        body: "Propose a subject for a future roundtable, send a written reflection for the record, or ask about co-authoring the methodology paper. Proposals are assessed on the strength of the evidence and on whether a parliamentary decision is genuinely open on the question.",
        send: [
            "A title and a paragraph on the policy question at stake",
            "Two or three references, or a link to your published work",
            "Who else would need to be in the room for it to be useful",
        ],
        pill: "pill-plan",
        pillText: "Agenda open",
        cta: "Send a proposal →",
        href: "mailto:r.elshenawy@herts.ac.uk?subject=Roundtable%20topic%20proposal",
    },
    {
        id: "patients",
        n: "Route 03",
        who: "Patients & advocates",
        title: "Share your voice",
        body: "Contribute lived experience of antimicrobial resistance, or join the standing patient and public involvement panel. Lived experience is a standing part of every evidence session, and nothing is published in your name without your written agreement.",
        send: [
            "As much or as little of your experience as you want to share",
            "Whether you are willing to be named, or would rather contribute anonymously",
            "Whether you would consider speaking at a roundtable",
        ],
        pill: "pill-plan",
        pillText: "Panel open",
        cta: "Get in touch →",
        href: "mailto:r.elshenawy@herts.ac.uk?subject=Patient%20and%20public%20involvement",
    },
    {
        id: "press",
        n: "Route 04",
        who: "Public & press",
        title: "Receive the outputs, or request comment",
        body: "Register below to receive each policy brief on release and a quarterly update on AMR and Parliament. Journalists can request comment, an interview or background on any published output.",
        send: [
            "For press: your outlet, the angle and your deadline",
            "For everyone else: just the registration form is enough",
        ],
        pill: "pill-next",
        pillText: "Open to all",
        cta: "Register below →",
        href: "#register",
    },
];

const FourRoutes = () => {
  return (
      <section className="calendar" aria-labelledby="routes-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">What to send, and where it goes</p>
                  <h2 id="routes-title">The four routes</h2>
                  <p>
                      Everything arrives in the same inbox and is read by the convenor.
                      Please allow up to ten working days for a reply during
                      parliamentary recess.
                  </p>
              </div>

              {ROUTES.map((r) => (
                  <div className="cal-group" id={r.id} key={r.id}>
                      <article className="entry">
                          <div className="kind-col">
                              <b>{r.n}</b>
                              <span>{r.who}</span>
                          </div>
                          <div>
                              <h3>{r.title}</h3>
                              <p>{r.body}</p>
                              <ul className="send">
                                  {r.send.map((s) => (
                                      <li key={s}>{s}</li>
                                  ))}
                              </ul>
                          </div>
                          <div className="side">
                              <span className={`pill ${r.pill}`}>{r.pillText}</span>
                              <a className="go" href={r.href}>{r.cta}</a>
                          </div>
                      </article>
                  </div>
              ))}
          </div>
      </section>
  )
}
export default FourRoutes;