export interface CTASection {

    "cta_title_h2": string
    "cta_title_p": string
    "btns": CTAButton[]

}

export interface CTAButton {
    href: string
    title: string
}