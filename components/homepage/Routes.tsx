import Link from "next/link";
import {RoutesSection} from "@/types/components/homeComponents";

interface RoutesProps{
    data: RoutesSection
}

const Routes = async ({data}:RoutesProps) => {
  return (
      <section className="routes" aria-labelledby="routes-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">{data.sec_head_p}</p>
                  <h2 id="routes-title">{data.sec_head_h2}</h2>
              </div>
              <div className="routes-grid">
                  {data.routes.map((r) => (
                      <Link className="route" href={r.href} key={r.href}>
                          <p className="who">{r.who}</p>
                          <h3>{r.title}</h3>
                          <p>{r.d}</p>
                          <p className="go">{r.go}</p>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Routes;