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