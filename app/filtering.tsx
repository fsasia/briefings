"use client";
import { useState, useMemo } from "react";
import airports from "./airports.json";

const GlobalAirportsList: Airport[] = JSON.parse(JSON.stringify(airports));

interface Airport {
    icao: string;
    url: string;
    countryIso: string;
    name: string;
    status: string;
}

export function ClientWrapper() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredAirports = useMemo(() => {
        if (!searchTerm.trim()) return GlobalAirportsList;
        const term = searchTerm.toLowerCase();
        return GlobalAirportsList.filter(airport =>
            airport.icao.toLowerCase().includes(term)
        );
    }, [searchTerm]);

    return (
        <>
            <FilterInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <DisplayList airports={filteredAirports} />
        </>
    );
}

interface FilterInputProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

function FilterInput({ searchTerm, setSearchTerm }: FilterInputProps) {
    return (
        <input
            type="text"
            id="main-search"
            placeholder="Search by ICAO Code"
            maxLength={4}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
            className="w-full lg:w-1/3 min-w-fit mx-auto rounded-lg label px-2 p-1.5 text-center"
        />
    );
}

interface DisplayListProps {
    airports: Airport[];
}

function DisplayList({ airports }: DisplayListProps) {
    if (!airports.length) {
        return <p className="text-center text-black/60 dark:text-white/60">No airports found</p>;
    }

    return (
        <>
            {airports.map((airport) => (
                <a
                    key={airport.icao}
                    href={airport.url}
                    className="label w-full min-w-fit max-w-screen mx-auto rounded-lg px-2 p-1.5 cursor-pointer"
                >
                    <div className="flex gap-1.5 lg:gap-2 justify-between">
                        <h4 className="text-lg tracking-wide flex gap-1.5 lg:gap-2 items-center">
                            <i className={`fi text-xs fi-${airport.countryIso} self-center`} />
                            <span className="text-black/80 dark:text-white/80 font-[monospace] uppercase text-sm lg:text-base self-center text-nowrap tracking-tight">
                                {airport.icao} //
                            </span>
                            <span className={"truncate max-w-54 text-sm md:text-base"}>
                                {airport.name}
                            </span>
                        </h4>
                        <p className="rounded-md text-[0.675rem] my-auto items-center bg-black/10 dark:bg-white/10 outline outline-black/30 dark:outline-white/30 p-1 px-1.5 uppercase">
                            {airport.status}
                        </p>
                    </div>
                </a>
            ))}
        </>
    );
}