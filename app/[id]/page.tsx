export default function AirportDetailWrapper() {
    return (
        <>
            <div className={"container mx-auto my-6 px-2 p-1 lg:w-2/3 xl:w-1/3 flex flex-col gap-1.5 lg:gap-3 h-full bg-white/10 dark:bg-white/10 rounded-lg outline outline-white/30 dark:outline-white/30"}>

                <div className={"flex flex-row w-full justify-between place-items-baseline"}>
                    <h1 className={"text-base"}>
                        Soekarno-Hatta International Airport
                    </h1>
                    <h2 className={"font-[monospace] text-lg tracking-wide"}>
                        CGK // WIII
                    </h2>
                </div>

                <div className={"grid grid-cols-2 w-full divide-y divide-black/10 dark:divide-white/10"}>
                    <p>Elevation (m)</p>
                    <p className={"text-right"}>10</p>
                    <p>Elevation (ft)</p>
                    <p className={"text-right"}>34</p>
                    <p>Description</p>
                    <p className={"truncate"}>
                        Soekarno–Hatta International Airport (Indonesian: Bandar Udara Internasional Soekarno–Hatta)
                        (IATA: CGK, ICAO: WIII), abbreviated Soetta, is the primary airport serving the Jakarta metropolitan
                        area on the island of Java in Indonesia. Named after the first president and vice-president of Indonesia,
                        Soekarno and Mohammad Hatta, the airport is located at Benda, Tangerang, which is about 20 km northwest
                        of Central Jakarta."	"Soekarno–Hatta International Airport (Indonesian: Bandar Udara Internasional
                        Soekarno–Hatta) (IATA: CGK, ICAO: WIII), abbreviated Soetta, is the primary airport serving the
                        Jakarta metropolitan area on the island of Java in Indonesia. Named after the first president and
                        vice-president of Indonesia, Soekarno and Mohammad Hatta, the airport is located at Benda, Tangerang,
                        which is about 20 km northwest of Central Jakarta."	"Soekarno–Hatta International Airport (Indonesian:
                        Bandar Udara Internasional Soekarno–Hatta) (IATA: CGK, ICAO: WIII), abbreviated Soetta, is the primary
                        airport serving the Jakarta metropolitan area on the island of Java in Indonesia. Named after the
                        first president and vice-president of Indonesia, Soekarno and Mohammad Hatta, the airport is located
                        at Benda, Tangerang, which is about 20 km northwest of Central Jakarta.
                    </p>
                </div>

            </div>
        </>
    )
}