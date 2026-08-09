export interface HowItWorksSection {
    label: string
    ref: string
    sec_head_p: string
    sec_head_h2: string
    sec_head_span: string
    cards: CardsSection[]
}

export interface CardsSection {
    n: string;
    h3: string;
    p: string;
}

export interface OutputsSection {
    label: string
    ref: string
    sec_head_p: string
    sec_head_h2: string
    sec_head_span: string
    outputCards: OutputCardsSection[]
}

export interface OutputCardsSection {
    href: string
    kind: string
    title: string
    meta: string
    go: string
}

export interface TestimonialSection {
    "label": string
    "ref": string
    "title_h2": string
    "quota": string,
    "cite": string,
    "span": string
}
export interface StatsSection {
    label: string
    ref: string
    motto_p1:string
    motto_p2:string
    motto_span: string
    stats:Stats[]
}
export interface Stats{
    n: string
    span: string
}

export interface ThesisSection {
    label: string
    ref: string
    title: string
    span: string
    p1: string
    p2: string
    note: string
}

export interface TranslationCycleSection {
    label: string
    ref: string
    sec_head_p: string
    sec_head_h1: string
    sec_head_span: string
    cycle_foot:string
    link_href: string
    link_text: string
    stages: Stages[]
}
export interface Stages {
    n: string
    t: string
    d:string
}

export interface RoundTablesSecton {
    label: string
    ref: string
    sec_head_p: string
    sec_head_h2: string
    sec_head_span: string
    rounds:RoundTable[]
}
export interface RoundTable {
    type:string
    href:string
    when:string
    status:string
    heading:string
    paragraph:string
    go:string
}

export interface RoutesSection {
    label: string
    ref: string
    sec_head_p: string
    sec_head_h2: string
    routes:Route[]
}
export interface Route {
    href:string
    who:string;
    title:string
    d:string
    go:string
}