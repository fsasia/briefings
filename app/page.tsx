import {ClientWrapper} from "@/app/filtering";

export default function Home() {
    return (
        <div className={"flex flex-col gap-3 py-3"}>
            {/* Header and Navigation */}
            <Header />

            {/* Main Content - List */}
            <main className={"flex flex-col gap-3"}>
                <ClientWrapper/>
            </main>

            <Footer />
        </div>
    );
}

export function Header() {
    return (
        <header className={"flex flex-col gap-1.5 xl:pt-3"}>

            <a href={"/"}>
                <h1 className={"text-2xl md:text-6xl lg:text-7xl font-thin text-center mx-auto"}>
                    VatBrief
                </h1>
                <h6 className={"muted-text text-xs uppercase tracking-widest text-center mx-auto"}>
                    Global Directory of VATSIM Pilot Briefings
                </h6>
            </a>

            <nav className={"text-center mx-auto flex gap-4 lg:gap-3"}>
                <a href={"/about"} className={"link"}>About &amp; FAQ</a>
                <a href={"/about"} className={"link"}>Support Us</a>
                <a href={"https://github.com/fsasia/briefings"} className={"link"}>GitHub</a>
            </nav>

        </header>
    )
}

export function Footer() {
    return (
        <footer className={"muted-text uppercase text-xs tracking-widest flex justify-between"}>
            <a href={"/about"} className={"hover:underline"}>About, Privacy, &amp; Contact</a>
            <a href={"#"} className={"hover:underline"}>VatBrief.com</a>
        </footer>
    )
}