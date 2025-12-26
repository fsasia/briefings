import Image from "next/image";

export default function Home() {

    return (
        <>
            <div className={"container mx-auto lg:w-2/3 xl:w-1/3 min-w-fit"}>
                <div className={"flex flex-col gap-3 xl:gap-4"}>

                    {/*Header and Navigation*/}
                    <header className={"flex flex-col gap-3 py-6 xl:pt-9"}>

                        <h1 className={"text-2xl lg:text-4xl xl:text-7xl font-thin text-center mx-auto"}>Pilot Briefings</h1>
                        <h6 className={"text-sm uppercase tracking-wide text-center mx-auto text-black/80 dark:text-white/80"}>The International Directory of Flight Sim Airport Guides</h6>

                        <nav className={"text-center mx-auto flex gap-1.5 lg:gap-2"}>
                            <a href={""} className={"text-blue-400/80 hover:text-blue-400 dark:text-blue-300/90 dark:hover:text-blue-300"}>Discord</a>
                            <a href={""} className={"text-blue-400/80 hover:text-blue-400 dark:text-blue-300/90 dark:hover:text-blue-300"}>About</a>
                        </nav>

                        <input
                            type={"text"} id={"main-search"} placeholder={"Search by ICAO Code"} maxLength={4}
                            className={"w-full lg:w-1/5 min-w-fit mx-auto rounded-lg bg-black/10 dark:bg-white/10 outline outline-black/30 dark:outline-white/30 focus:outline-black/50 dark:focus:outline-white/50 px-2 p-1.5"}
                        />

                    </header>

                    {/*List*/}
                    <main className={"flex flex-col gap-3"}>
                        <div className={"mx-auto flex flex-col text-center"}>

                            <h2 className={"text-xl text-center"}>
                                Index
                            </h2>
                            <div className={"flex gap-1.5 lg:gap-2 place-items-baseline"}>
                                <p className={"text-sm"}>Sort by:</p>
                                <button type={"button"} className={"text-xs uppercase tracking-tight px-1.5 p-1 bg-black/10 dark:bg-white/10 rounded"}>
                                    A-Z
                                </button>
                                <button type={"button"} className={"text-xs uppercase tracking-tight px-1.5 p-1 bg-black/10 dark:bg-white/10 rounded"}>
                                    popular
                                </button>
                            </div>

                        </div>

                        <div className={"w-full min-w-fit mx-auto rounded-lg bg-gradient-to-r from-white/10 to-transparent outline outline-black/30 dark:outline-white/30 hover:outline-2 px-2 p-1.5 cursor-pointer"}>
                            <div className={"flex gap-1.5 lg:gap-2 justify-between"}>
                                <h4 className={"text-lg tracking-wide flex gap-1.5 lg:gap-2"}>
                                    <i className={"fi fi-gb-sct text-xs"}/>
                                    <span className={"text-black/80 dark:text-white/80 font-[monospace] uppercase"}>ABCD //</span>
                                    Donlon Intl Airport
                                </h4>
                                <p className={"rounded-md text-xs my-auto items-center bg-black/10 dark:bg-white/10 outline outline-black/30 dark:outline-white/30 p-1 px-1.5 uppercase"}>
                                    Auto
                                </p>
                            </div>
                        </div>

                        <div className={"w-full min-w-fit mx-auto rounded-lg bg-gradient-to-r from-white/10 to-transparent outline outline-black/30 dark:outline-white/30 hover:outline-2 px-2 p-1.5 cursor-pointer"}>
                            <div className={"flex gap-1.5 lg:gap-2 justify-between"}>
                                <h4 className={"text-lg tracking-wide flex gap-1.5 lg:gap-2"}>
                                    <i className={"fi fi-mg text-xs"}/>
                                    <span className={"text-black/80 dark:text-white/80 font-[monospace] uppercase"}>DEFG //</span>
                                    Mountdort Airport
                                </h4>
                                <p className={"rounded-md text-xs my-auto items-center bg-green-400/30 outline outline-green-200/40 text-green-100 p-1 px-1.5 uppercase"}>
                                    Official
                                </p>
                            </div>
                        </div>

                        <div className={"w-full min-w-fit mx-auto rounded-lg bg-gradient-to-r from-white/10 to-transparent outline outline-black/30 dark:outline-white/30 hover:outline-2 px-2 p-1.5 cursor-pointer"}>
                            <div className={"flex gap-1.5 lg:gap-2 justify-between"}>
                                <h4 className={"text-lg tracking-wide flex gap-1.5 lg:gap-2"}>
                                    <i className={"fi fi-et text-xs"}/>
                                    <span className={"text-black/80 dark:text-white/80 font-[monospace] uppercase"}>HIJK //</span>
                                    King Smith Airport
                                </h4>
                                <p className={"rounded-md text-xs my-auto items-center bg-blue-400/30 outline outline-blue-200/40 text-blue-100 p-1 px-1.5 uppercase"}>
                                    Verified
                                </p>
                            </div>
                        </div>

                    </main>

                </div>
            </div>
        </>
    );
}
