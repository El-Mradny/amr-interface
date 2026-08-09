export interface FourRoutesSection {
    label: string;
    ref: string;
    sec_head_p: string;
    sec_head_h2: string;
    sec_head_p2: string;
    routes:Routes[]
}
interface Routes {
    id: string;
    n: string;
    who: string;
    title: string;
    body: string;
    send: string[];
    pill: string;
    pillText: string;
    cta: string;
    href:string;
}

export interface RigesterSection {
    label: string;
    ref: string;
    sec_head_p: string;
    sec_head_h2: string;
    sec_head_p2: string;
    privacy:Privacy[]
}
interface Privacy {
    k: string;
    v: string;
}

export interface WhatToExpectSection {
    label: string;
    ref: string;
    sec_head_p: string;
    sec_head_h2: string;
    after:After[]
}
interface After {
    n: string;
    t: string;
    d: string;

}