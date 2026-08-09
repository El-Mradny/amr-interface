import {StatsSection} from "@/types/components/homeComponents";

interface StatsProp {
    data: StatsSection;
}

const Stats = async ({data}:StatsProp) => {
  return (
      <div className="statband">
          <div className="wrap">
              <p className="motto">
                  {data.motto_p1}<br/>{data.motto_p2}
                  <span>{data.motto_span}</span>
              </p>
              {
                  data.stats.map((s, i) => (
                      <div key={i} className="stat"><b>{s.n}</b><span>{s.span}</span></div>
                  ))
              }
              {/*<div className="stat"><b>20+</b><span>Senior stakeholders</span></div>*/}
              {/*<div className="stat"><b>5</b><span>Actionable recommendations</span></div>*/}
              {/*<div className="stat"><b>4</b><span>Outputs per cycle</span></div>*/}
              {/*<div className="stat"><b>2×</b><span>Roundtables a year</span></div>*/}
          </div>
      </div>
  )
}
export default Stats