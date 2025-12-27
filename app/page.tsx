import {ClientWrapper} from "@/app/filtering";

export default function Home() {

    return (
        <>
            <div className={"container mx-auto lg:w-2/3 xl:w-1/3 min-w-fit"}>
                <div className={"flex flex-col gap-3 xl:gap-6 py-3"}>

                    {/*Header and Navigation*/}
                    <header className={"flex flex-col gap-3 xl:pt-3"}>
                        <h1 className={"text-2xl md:text-6xl lg:text-7xl font-thin text-center mx-auto"}>VatBrief</h1>
                        <h6 className={"text-sm uppercase tracking-wide text-center mx-auto text-black/80 dark:text-white/80"}>Global Directory of VATSIM Airport Briefings</h6>
                        <nav className={"text-center mx-auto flex gap-1.5 lg:gap-2"}>
                            <a href={""} className={"text-blue-400/80 hover:text-blue-400 dark:text-blue-300/90 dark:hover:text-blue-300"}>About</a>
                            <a href={""} className={"text-blue-400/80 hover:text-blue-400 dark:text-blue-300/90 dark:hover:text-blue-300"}>Contribute</a>
                            <a href={""} className={"text-blue-400/80 hover:text-blue-400 dark:text-blue-300/90 dark:hover:text-blue-300"}>Discord</a>
                        </nav>
                    </header>

                    {/*List*/}
                    <main className={"flex flex-col gap-3"}>

                        <ClientWrapper/>

                    </main>

                </div>
            </div>
        </>
    );
}


{/*<div className={"mx-auto flex flex-col text-center"}>*/}
{/*    <h2 className={"text-xl text-center"}>*/}
{/*        Airports Index*/}
{/*    </h2>*/}
{/*    <div className={"flex gap-1.5 lg:gap-2 place-items-baseline"}>*/}
{/*        <p className={"text-sm"}>Sort by:</p>*/}
{/*        <button type={"button"} className={"text-xs uppercase tracking-tight px-1.5 p-1 bg-black/10 dark:bg-white/10 rounded"}>*/}
{/*            A-Z*/}
{/*        </button>*/}
{/*        <button type={"button"} className={"text-xs uppercase tracking-tight px-1.5 p-1 bg-black/10 dark:bg-white/10 rounded"}>*/}
{/*            popular*/}
{/*        </button>*/}
{/*    </div>*/}
{/*</div>*/}
