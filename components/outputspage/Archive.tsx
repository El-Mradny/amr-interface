import Link from "next/link";

type Output = {
    kind: string;
    meta: string;
    title: string;
    body: string;
    tags: string[];
    status: "Published" | "Under review" | "Forthcoming";
    pill: string;
    modifier: string;
    href: string;
    cta: string;
};
const OUTPUTS: Output[] = [
    {
        kind: "Policy brief",
        meta: "June 2026 · 1,650 words",
        title: "Five Recommendations for Translating AMR Evidence into Action",
        body: "The output of the May 2026 roundtable: five recommendations agreed in the room, each with a named owner and a measurable indicator. Distributed to Health Select Committee members, relevant APPGs and the Department of Health and Social Care.",
        tags: ["From the May 2026 roundtable", "Open access", "PDF · 1,650 words"],
        status: "Published",
        pill: "pill-done",
        modifier: "",
        href: "/outputs/five-recommendations",
        cta: "Read the brief →",
    },
    {
        kind: "Peer-reviewed paper",
        meta: "JAC-Antimicrobial Resistance",
        title: "The AMR Translation Cycle: a replicable method for research-to-parliament translation",
        body: "The methodology paper documenting the six-stage cycle, written so that the model can be replicated in other policy domains. Parliamentarians who took part in the roundtable are offered co-authorship.",
        tags: ["Methodology", "Co-authored with participants", "Preprint available"],
        status: "Under review",
        pill: "pill-plan",
        modifier: " is-planning",
        href: "/outputs/translation-cycle",
        cta: "Read the preprint →",
    },
    {
        kind: "Public roadmap",
        meta: "With BSAC and UKHSA",
        title: "Research → Action: a roadmap for AMR evidence in UK policy",
        body: "A short public-facing roadmap setting out where AMR evidence enters the policy system, where it stalls, and which decisions are open to influence at each stage.",
        tags: ["In drafting", "Public-facing"],
        status: "Forthcoming",
        pill: "pill-next",
        modifier: " is-future",
        href: "/engage#register",
        cta: "Get it on release →",
    },
    {
        kind: "Funder report",
        meta: "ESRC Impact Acceleration Account",
        title: "ESRC IAA final report",
        body: "The end-of-award account of what the funding produced: participation, distribution, citation and the uptake tracked against each recommendation. Published in full rather than summarised.",
        tags: ["Accountability", "Published in full"],
        status: "Forthcoming",
        pill: "pill-next",
        modifier: " is-future",
        href: "/engage#register",
        cta: "Get it on release →",
    },
];

const GROUPS: Output["status"][] = ["Published", "Under review", "Forthcoming"];


const Archive = () => {
  return (
      <section className="calendar" aria-labelledby="archive-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">Published · Under review · Forthcoming</p>
                  <h2 id="archive-title">The archive</h2>
                  <p>
                      Listed newest first within each status. Nothing is removed once
                      published; corrections are made on the page and dated.
                  </p>
              </div>

              <div className="legend" aria-hidden="true">
                  <span><i className="k-done" />Published</span>
                  <span><i className="k-review" />Under review</span>
                  <span><i className="k-soon" />Forthcoming</span>
              </div>

              {GROUPS.map((group) => (
                  <div key={group}>
                      <p className="group-label">{group}</p>
                      {OUTPUTS.filter((o) => o.status === group).map((o) => (
                          <div className="cal-group" role="group" aria-label={`${group} outputs`} key={o.title}>
                              <article className={`entry${o.modifier}`}>
                                  <div className="kind-col">
                                      <b>{o.kind}</b>
                                      <span>{o.meta}</span>
                                  </div>
                                  <div>
                                      <h3>{o.title}</h3>
                                      <p>{o.body}</p>
                                      <div className="tags">
                                          {o.tags.map((t) => (
                                              <span className="tag" key={t}>{t}</span>
                                          ))}
                                      </div>
                                  </div>
                                  <div className="side">
                                      <span className={`pill ${o.pill}`}>{o.status}</span>
                                      <Link className="go" href={o.href}>{o.cta}</Link>
                                  </div>
                              </article>
                          </div>
                      ))}
                  </div>
              ))}
          </div>
      </section>
  )
}
export default Archive