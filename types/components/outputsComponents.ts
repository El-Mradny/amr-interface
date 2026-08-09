export interface ArchiveSection {
    label:string;
    ref:string;
    sec_head_p:string;
    sec_head_h2:string;
    sec_head_p2:string;
    outputs:Outputs[]
}
interface Outputs {
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
}

export interface HowToCiteSection {
    label: string;
    ref: string;
    sec_head_p:string;
    sec_head_h2:string;
    sec_head_p2:string;
    articles:Articles[]
    panel_title:""
    reuses:Reuses[]
}
interface Articles {
    t:string;
    d:string;
    n:string;
}
interface Reuses {
    k:string;
    v:string;
}

export interface HowToPublishSection {
    label:string;
    ref:string;
    sec_head_p:string;
    sec_head_h2:string;
    principles:Principles[]

}
interface Principles {
    n:string;
    t:string;
    d:string;
}