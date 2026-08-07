export interface FooterSection {
    brand_name: string
    brand_sub: string
    brand_p: string,
    links: LinksSection[],
    email: string
    contact: ContactSection[]
}

export interface LinksSection {
    title: string,
    href: string,
}

export interface ContactSection {
    li: string,

}