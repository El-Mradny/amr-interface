export interface HeroSectionData {
    label: string;
    ref: string;

    title_p?: string;
    title_h1?: string;
    title_span?: string;

    hero_lede?: string;
    "solid_button_text"?: string;
    "solid_button_href"?: string;
    "soft_button_text"?: string;
    "soft_button_href"?: string;
    "hero_meta"?: string;
    "hero_image_src"?: string;
    "hero_image_alt"?: string;
    "hero_image_width"?: number;
    "hero_image_height"?: number;
    "figure_caption"?: string;
    "ribbon_label_1_h3"?: string;
    "ribbon_label_1_p"?: string;
    "ribbon_label_2_h3"?: string;
    "ribbon_label_2_p"?: string;
    "ribbon_label_3_h3"?: string;
    "ribbon_label_3_p"?: string;
    "facts": Facts[];
}

export interface Facts {
    n: string;
    t: string;
    cta?: string;
    href?: string;
}