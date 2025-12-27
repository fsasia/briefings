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
                        If you've explored flying around the world in VATSIM, you might've stumbled into instances where
                        ATC expects you to be familiar with a particular procedure, only to be pointed toward a Pilot Briefing
                        that you didn't know existed.
                    </p>
                    <p className={"tracking-tight"}>
                        VatBrief.com is an effort to put all the wonderfully prepared pilot briefings by VATSIM facilities
                        &amp; organisers around the world into one clear, simple, easily-searched list.
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
                        Can I add (or correct) my facility's briefings?
                    </h2>
                    <p className={"tracking-tight"}>
                        Yes, please! Join our Development Discord, or e-mail{" "}
                        <a href={"mailto:ezn@flightsim.asia"} className={"font-bold"}>ezn@flightsim.asia</a>{" "}
                        to get write access. You will need to verify your VATSIM or facility staff credentials, or be
                        authorised by such a person.
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
                        See the roadmap below.
                    </p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <h2 className={"text-xl font-bold"}>
                        Is there a development roadmap?
                    </h2>
                    It's early days, but this is the rough outline:
                    <div className={"pl-3 flex flex-col gap-3"}>
                        <div className={"flex flex-col gap-1"}>
                            <h3 className={"text-lg font-bold"}>
                                1) Initial
                            </h3>
                            <p className={"tracking-tight"}>
                                Our focus is on site refinement, bug fixing, and improving data completeness.
                            </p>
                        </div>

                        <div className={"flex flex-col gap-1"}>
                            <h3 className={"text-lg font-bold"}>
                                2) API Access
                            </h3>
                            <p className={"tracking-tight"}>
                                We will open the VatBrief.com API for integration with external projects.
                            </p>
                        </div>

                        <div className={"flex flex-col gap-1"}>
                            <h3 className={"text-lg font-bold"}>
                                2) Single Source of Truth
                            </h3>
                            <div className={"tracking-tight py-0.5"}>
                                Facilities may choose to contribute documentation as:
                                <ol className={"flex flex-col gap-1.5 pl-3"}>
                                    <li>
                                        <span className={"font-bold"}>1. Hosted repository. </span>
                                        Contribute directly to a central repository maintained by VatBrief.com.
                                    </li>
                                    <li>
                                        <span className={"font-bold"}>2. Private repository. </span>
                                        Have your own docs repository mirrored on VatBrief.com.
                                    </li>
                                    <li>
                                        <span className={"font-bold"}>3. Off-site links. </span>
                                        Maintain your docs elsewhere, VatBrief.com will link users to your site.
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
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