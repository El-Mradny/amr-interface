import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="brand-name">
              The AMR Interface
              <span className="brand-sub">Research · Policy · Practice</span>
            </span>
            <p>
              An evidence-based, researcher-led standing channel between UK
              antimicrobial resistance research and Parliament. Founded and led
              by Dr Rasha Abdelsalam Elshenawy.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/roundtables">Roundtables</Link></li>
              <li><Link href="/outputs">Outputs &amp; publications</Link></li>
              <li><Link href="/leadership">Leadership &amp; governance</Link></li>
              <li><Link href="/engage">Engage with us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:r.elshenawy@herts.ac.uk">
                  r.elshenawy@herts.ac.uk
                </a>
              </li>
              <li>University of Hertfordshire</li>
              <li>Hosted under the ESRC Impact Acceleration Account</li>
            </ul>
          </div>
        </div>

        <div className="foot-bar">
          <p>© {new Date().getFullYear()} The AMR Interface</p>
          <p>For the public good. For future generations.</p>
        </div>
      </div>
    </footer>
  );
}
