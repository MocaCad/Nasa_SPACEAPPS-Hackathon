# Abandoned but Not Forgotten (NASA Space Apps 2026)
A story-style website about NASA hardware left on the Moon, on Mars and in deep space.

## Files
- `index.html` home page: title, then a clickable constellation of non-operational machines (appears on scroll)
- `moon.html` to `moon-4.html` (landers, buggy, ALSEP science stations, Surveyors), `mars.html` to `mars-5.html` (Viking 1; Pathfinder and Sojourner; Spirit and Opportunity; InSight and Ingenuity; Curiosity and Perseverance)
- - `lessons.html`, `legacy.html`, `sources.html` closing pages (Sources and AI use is edited in `data.js` under `sources`)
- `style.css` all styling and animations
- `data.js` ALL text, facts and star data (edit here)
- `script.js` page builder, Next buttons, background sky, audio cues
- `earth.webp` Earth photo on the home page (Pexels, photographer "zelch")

## Home page content
- The 13 stars and the 13 small pictures around the title are both built from `missions` in `data.js` (pictures are in the `I` object at the top of the file). The pictures are simple illustrations, not photos.

- `apollo11-eagle.jpg` NASA photo AS11-40-5927 on the Moon 1 page (credit: NASA)

## Real NASA audio (optional)
The site plays a real recording if the file sits next to `index.html`; if the file is missing, the button simply does not appear.
- `audio-one-small-step.mp3` for Moon: Part 1 (Armstrong's first words, from the NASA audio library at images.nasa.gov)
- `audio-launch-countdown.mp3` for Mars: Part 1 (a real NASA launch countdown; without it the page shows the synthesised launch sound)
Credit NASA for any audio you add.

## Reading help
Every topic page has A- / A+ text size buttons, a Read aloud button (the visitor's browser voice) and word help: the first time a hard word appears on a page it is underlined with dots, and tapping or hovering shows its meaning. Edit the word list in `glossary` in `data.js`.

## Highlighting
In `data.js`, wrap a famous line or impact phrase in `==double equals==` to give it the pull-quote highlight. Highlights sweep in as you scroll, and at the end of each page their letters float into the one-sentence conclusion (`conclude` in `data.js`). Wrap one word in `*stars*` for a solid highlight.

## Story pages
`moon.html` is built from the `story` list in `data.js` (a narrator section plus one voice per lander). Edit the text there.

- `apollo15-falcon.jpg` Apollo 15 photo on the Moon 2 page (credit: NASA)

- `apollo12-intrepid.jpg`, `surveyor3-apollo12.jpg`, `apollo17-lrv.jpg`, `lrv-development.jpg` NASA pictures (credit: NASA)

- `earth.webp` Earth photo with a transparent background (Pexels, photographer "zelch")
- `easep-apollo11.jpg`, `alsep-apollo12.jpg`, `pse-apollo16.jpg` NASA pictures on the Moon Part 3 page (credit: NASA)

## NASA challenge resource
This project uses the NASA Space Science Data Coordinated Archive (NSSDCA) from the challenge's Resources tab. Star cards link to each NASA record (`missions` in `data.js`), and the Moon pages show "From NASA's NSSDCA record" panels (`nasa` in `data.js`).

## Run
Open `index.html` in a browser (no build step).

## Publish with GitHub
    git init && git add . && git commit -m "Initial site"
    git branch -M main
    git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
    git push -u origin main
Then Settings → Pages → deploy from `main` / root.

## Sources (complete before submitting)
- NASA challenge Resources tab data source: TO FILL IN (required for Global Awards)
- NASA Apollo Lunar Surface Journal (Apollo 15 mission report, ALSEP history), NASA Science Surveyor 7 page, NASA RPS ALSEP page; NASA Science pages for Surveyor, ALSEP, Viking, Phoenix, InSight, Dawn, NEAR Shoemaker, Pioneer, Ingenuity and Kepler; NASA History (Apollo 11, Apollo 15–17 Lunar Roving Vehicle, Surveyor 3), NASA Science / Mars Exploration (Pathfinder, Sojourner, Viking, Pioneer 10 and 11, Voyager 1 (JPL), MGS, Mariner 4, Spirit, Opportunity), NASA Mars Climate Orbiter mishap report, NASA Image and Video Library (images.nasa.gov) for all media.

## AI disclosure
Claude (Anthropic) drafted the story text, code and SVG illustrations. The team verified facts against the sources above. List any other AI tools used.
