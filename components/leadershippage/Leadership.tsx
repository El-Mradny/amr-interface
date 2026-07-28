
const ROLES = [
    { r: "Senior Lecturer in Postgraduate Medicine", o: "School of Health, Medicine and Life Sciences, University of Hertfordshire" },
    { r: "Associate Editor", o: "JAC-Antimicrobial Resistance, Oxford University Press" },
    { r: "Trustee and Council Member", o: "British Society for Antimicrobial Chemotherapy" },
    { r: "Director, Antimicrobial Stewardship School", o: "FADIC UK" },
];

const Leadership = () => {
  return (
      <section className="lead" aria-labelledby="lead-title">
          <div className="wrap">
              <div className="bio-grid">
                  <figure style={{ margin: 0 }}>
                      <div className="portrait">
                          {/* Swap the monogram for a photograph when you have one:
                      <Image src="/images/rasha-elshenawy.jpg" width={660} height={880}
                             alt="Dr Rasha Abdelsalam Elshenawy" /> */}
                          <span className="monogram" aria-hidden="true">RE</span>
                      </div>
                      <figcaption className="portrait-cap">
                          Founder &amp; Principal Investigator
                      </figcaption>
                  </figure>

                  <div className="bio">
                      <p className="eyebrow">The convenor</p>
                      <h2 id="lead-title">Dr Rasha Abdelsalam Elshenawy</h2>
                      <p className="role">
                          Senior Lecturer in Postgraduate Medicine · University of
                          Hertfordshire
                      </p>
                      <p>
                          Dr Elshenawy founded and leads the AMR Interface. Her work sits
                          at the point where antimicrobial resistance research meets
                          policy: antimicrobial stewardship implementation, AMR
                          surveillance, and the question of how evidence actually reaches
                          the people who decide.
                      </p>
                      <p>
                          She submitted written evidence to the UK Parliament&rsquo;s
                          inquiry into antimicrobial resistance, convened the May 2026
                          roundtable at the House of Commons, and is the author of the
                          translation method the programme runs on. She supervises
                          postgraduate research on AMR and stewardship, and works across
                          UK and global health policy settings.
                      </p>

                      <ul className="roles">
                          {ROLES.map((r) => (
                              <li key={r.r}>
                                  <b>{r.r}</b>
                                  <span>{r.o}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Leadership;