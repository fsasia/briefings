"use client";
import { GlobalAirportsList } from "@/app/airports";
import { useState, useMemo } from "react";

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
            className="w-full lg:w-1/5 min-w-fit mx-auto rounded-lg bg-black/10 dark:bg-white/10 outline outline-black/30 dark:outline-white/30 focus:outline-black/50 dark:focus:outline-white/50 px-2 p-1.5"
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
                    className="label w-full min-w-fit mx-auto rounded-lg px-2 p-1.5 cursor-pointer block"
                >
                    <div className="flex gap-1.5 lg:gap-2 justify-between">
                        <h4 className="text-lg tracking-wide flex gap-1.5 lg:gap-2 items-center">
                            <i className={`fi text-xs fi-${airport.countryIso}`} />
                            <span className="text-black/80 dark:text-white/80 font-[monospace] uppercase">
                                {airport.icao} //
                            </span>
                            {airport.name}
                        </h4>
                        <p className="rounded-md text-xs my-auto items-center bg-black/10 dark:bg-white/10 outline outline-black/30 dark:outline-white/30 p-1 px-1.5 uppercase">
                            {airport.status}
                        </p>
                    </div>
                </a>
            ))}
        </>
    );
}