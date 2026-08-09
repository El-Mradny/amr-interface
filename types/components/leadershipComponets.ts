export interface LeadershipSection {
    label:string
    ref: string
    image_src: string
    image_alt: string
    figcaption: string
    bio_p:string
    bio_h2: string
    bio_role: string
    bio_paragraph1: string
    bio_paragraph2: string
    roles:Roles[]
}
interface Roles {
    r:string
    o:string
}

export interface GovernanceSection {
    label:string
    ref:string
    sec_head_p:string
    sec_head_h2:string
    sec_head_p2:string
    rules:Rules[]
}
interface Rules {
    n:string
    t:string
    d:string
}

export interface PortabilitySection {
    label:string
    ref:string
    sec_head_p:string
    sec_head_h2:string
    sec_head_p2:string
    points:Points[]
    hosting:Hosting[]
}
interface Points {
    t:string
    d:string
}
interface Hosting{
    k:string,
    v:string,
}

export interface FundingAndDeclarationsSection {
    label:string
    ref:string
    sec_head_p:string
    sec_head_h2:string
    sec_head_p2:string
    funds:Funds[]
    declarations:Declarations[]
}
interface Funds {
    k:string,
    v:string,
}
interface Declarations {
    k:string,
    v:string,
}