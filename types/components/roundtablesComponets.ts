export interface CalendarSection {
    label: string
    ref: string
    sec_head_P: string
    sec_head_h2: string
    sec_head_P2: string
    calendars:Calendars[]
}
export interface Calendars {
    date: string
    place: string
    title: string
    description: string
    tags: string[]
    status: string
    link_href: string
    link_text: string
}

export interface RunOfSessionSection {
    label: string
    ref: string
    sec_head_P: string
    sec_head_h2: string
    sec_head_P2: string
    note: string
    slots: Slots[]
}
interface Slots {
    m:string
    t:string
    d:string
}

export interface MonthDetailSection {
    label: string
    ref: string
    sec_head_P: string
    sec_head_h2: string
    sec_head_P2: string
    people: People[]
    people_note: string
    recommendation_title: string
    recommendations: string[]
    recommendations_note: string
    records:Records[]
}
interface People {
    n: string
    r: string
}
interface Records {
    k: string
    v: string
}


export interface CycleProduceSection {
    label: string
    ref: string
    sec_head_P: string
    sec_head_h2: string
    produces:Produces[]
}
interface Produces {
    n: string
    t: string
    d: string
}