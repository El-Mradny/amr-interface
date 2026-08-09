import RegisterForm from "@/components/RegisterForm";
import {RigesterSection} from "@/types/components/engageComponents";

interface RegisterProps {
    data: RigesterSection
}

const Register = async ({data}: RegisterProps) => {
    return (
        <section className="form-band" id="register" aria-labelledby="form-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{data.sec_head_p}</p>
                    <h2 id="form-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                <div className="form-layout">
                    <div className="form-card">
                        <RegisterForm/>
                    </div>

                    <div className="panel">
                        <h3>What we do with your details</h3>
                        <ul className="record">
                            {data.privacy.map((p) => (
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