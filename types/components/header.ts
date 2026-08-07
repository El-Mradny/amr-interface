export interface HeaderSection {
    nav: NavbarSection[],
    cta_link:string
    cta_text: string
}

export interface NavbarSection {
    href: string;
    label: string;
}