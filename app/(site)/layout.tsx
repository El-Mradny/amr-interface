import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (

        <>

            <SiteHeader/>

            {children}

            <SiteFooter/>
        </>

    );
}
