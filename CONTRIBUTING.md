# Contributing to VatBrief
Thank you for contributing to this project. For now, **maintaining the dataset** in `airports.json` is the most pressing concern. Read below for more details.

## Add or Correct Briefings &mdash; `airports.json`
Add missing briefings to `airports.json`. This file contains the main dataset.
- The file is sorted alphabetically by `icao` (which is the four-letter ICAO code, e.g. `EGLL`). `iata` is included for posterity, not currently implemented.
- `name` is the airport name. Mimic existing entries, especially for double-barrelled or otherwise wordily named airports.
- `countryIso` is the best available ISO 3166 alpha-2 code for that airport.
- `status: 'official'` is a label applied to briefings sourced directly from VATSIM ATC facilities. At the moment, we don't include any other types of entry.
- `url` &mdash; a valid URL pointing to the briefing source. More below.

### Pull Requests
- To **add new** entries: Ensure you are submitting resources that were published for **pilot consumption** by an official VATSIM facility (vACC, ARTCC, division, etc).
- To **correct/edit** entries: seek permission from the concerned facility first; otherwise, email me: matt at flightsim dot asia.

### Guidance: Choosing the Right URL
1. **Prefer** live doc sites with semantic URLs, _e.g._ `https://vatsim.example.org/knowledgebase/donlon-airport-briefing`
2. **Avoid** direct links to hosted PDF docs. These links tend to break when the doc is updated.
3. If PDF is the only option, preferably link to its parent page, not directly to the PDF
4. Link directly to a PDF or other media file **as the least-preferred option**

### Note about vats.im/ and other short links:
_Use with care._ If a facility maintains their short links, no problem. However, if a facility leaves them to break or fall out-of-date, we will enforce _no short links._

## Development Overview
- [x] JSON data set is maintained, and presented in a basic NextJS app on CloudFlare Pages.
- [ ] API access to the data set.
- [ ] Centralised global MkDocs site.

## Recognized Contributors
- @matthew-mcewen
- @HorizonWinangkoso