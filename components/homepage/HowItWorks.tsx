export default function HowItWorks(){
    return (
        <section className="how" aria-labelledby="how-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">How the AMR Interface works</p>
                    <h2 id="how-title">Convene · Translate · Account</h2>
                    <p>Three functions, repeated on a fixed rhythm. Each one produces a public record.</p>
                </div>
                <div className="cards-3">
                    <article className="card">
                        <p className="num">01</p>
                        <h3>Convene</h3>
                        <p>
                            Bring researchers, parliamentarians, regulators, professional
                            bodies and patient advocates into the same room — twice a
                            year, on a shared agenda.
                        </p>
                    </article>
                    <article className="card">
                        <p className="num">02</p>
                        <h3>Translate</h3>
                        <p>
                            Convert convergent evidence into concrete recommendations for
                            the UK National Action Plan, each with a named owner and a
                            measurable indicator.
                        </p>
                    </article>
                    <article className="card">
                        <p className="num">03</p>
                        <h3>Account</h3>
                        <p>
                            Report annually to Parliament on uptake and implementation —
                            closing the loop the Public Accounts Committee identified as
                            missing.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}