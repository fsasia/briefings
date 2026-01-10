import {Footer, Header} from "@/app/page";

export default function AboutPage() {
    return (
        <div className={"flex flex-col gap-3 xl:gap-6 py-3"}>
            <Header />
            <main className={"flex flex-col gap-6"}>
                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        What is VatBrief?
                    </h2>
                    <p className={"tracking-tight"}>
                        VatBrief.com is an effort to put all the wonderfully prepared pilot briefings by VATSIM facilities
                        &amp; organisers around the world into one clear, simple, easily-searched list.
                    </p>
                    <p className={"tracking-tight"}>
                        If you've explored flying internationally on VATSIM, you might've stumbled into instances where
                        you're expected to be familiar with some particular procedure, and get pointed toward a Pilot Briefing
                        that you didn't know existed (or where to check if it did).
                    </p>
                    <p className={"tracking-tight"}>
                        Now? Just check VatBrief.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Can I add (or correct) my facility's briefings?
                    </h2>
                    <p className={"tracking-tight"}>
                        Yes! Please see the instructions on GitHub.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Can I support the project?
                    </h2>
                    <p className={"tracking-tight"}>
                        Yes, please! We'll include some links here soon.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Airports only?
                    </h2>
                    <p className={"tracking-tight"}>
                        At the moment, airports only. We want to add event briefings and distinct airspace briefings
                        (e.g. oceanic) available in the future.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Can I have API access?
                    </h2>
                    <p className={"tracking-tight"}>
                        See the roadmap in GitHub.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Privacy Notice
                    </h2>
                    <p className={"tracking-tight"}>
                        Last updated: 27 Dec 2025<br/>
                        At the moment, this website does not store cookies on your device nor collect any personal
                        information from you. Interactions you make with external sites or services,
                        including Discord, GitHub, FlightSim.asia, VATSIM.net (and its subordinates), and any of the
                        briefings that we provide links to, are external from this website &mdash; refer to those services'
                        respective privacy policies for information on how they may collect, handle &amp; store your personal data.
                        If you have any queries about this Privacy Notice, contact ezn@flightsim.asia.
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    )
}