import RegisterForm from "@/components/RegisterForm";

const PRIVACY = [
    { k: "Stored", v: "Your name, email, organisation and the route you selected" },
    { k: "Used for", v: "Sending policy briefs, the quarterly update, and replying to your message. Nothing else" },
    { k: "Shared", v: "Never sold, never shared with a third party [name your email provider here — it is a processor and should be disclosed]" },
    { k: "Kept", v: "Until you unsubscribe, or [confirm a retention period — 24 months of inactivity is a common choice]" },
    { k: "Unsubscribing", v: "One click in any email, or reply asking to be removed" },
    { k: "Your rights", v: "You can ask for a copy of your data or its deletion at any time by emailing the convenor" },
    { k: "Controller", v: "[Confirm whether the University of Hertfordshire or the programme is the data controller — this determines which privacy notice applies]" },
];

const Register = () => {
  return(
      <section className="form-band" id="register" aria-labelledby="form-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow on-ivory">One form, all four routes</p>
                  <h2 id="form-title">Register your interest</h2>
                  <p>
                      Registering puts you on the list for policy briefs and the
                      quarterly update. If you are proposing a topic or requesting a
                      briefing, add the detail in the message box and it will reach the
                      convenor directly.
                  </p>
              </div>

              <div className="form-layout">
                  <div className="form-card">
                      <RegisterForm />
                  </div>

                  <div className="panel">
                      <h3>What we do with your details</h3>
                      <ul className="record">
                          {PRIVACY.map((p) => (
                              <li key={p.k}>
                                  <b>{p.k}</b>
                                  <span>{p.v}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Register;