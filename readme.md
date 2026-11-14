# Abandoned but Not Forgotten (NASA Space Apps 2026)
A story-style website about NASA hardware left on the Moon, on Mars and in deep space.

## Files
- `index.html` home page: title, then a clickable constellation of non-operational machines (appears on scroll)
- `moon.html`, `moon-2.html`, `mars.html`, `mars-2.html` two pages each for the Moon and Mars
- `deep-space.html` Voyager 1 page
- `lessons.html`, `legacy.html` closing pages
- `style.css` all styling and animations
- `data.js` ALL text, facts and star data (edit here)
- `script.js` page builder, Next buttons, background sky, audio cues
- `earth.jpg` Earth photo on the home page (Pexels, photographer "zelch")

## Home page content
- The 13 stars and the 13 small pictures around the title are both built from `missions` in `data.js` (pictures are in the `I` object at the top of the file). The pictures are simple illustrations, not photos.

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
- NASA Science pages for Surveyor, ALSEP, Viking, Phoenix, InSight, Dawn, NEAR Shoemaker, Pioneer, Ingenuity and Kepler; NASA History (Apollo 11, Apollo 15–17 Lunar Roving Vehicle, Surveyor 3), NASA Science / Mars Exploration (Pathfinder, Sojourner, Viking, Pioneer 10 and 11, Voyager 1 (JPL), MGS, Mariner 4, Spirit, Opportunity), NASA Mars Climate Orbiter mishap report, NASA Image and Video Library (images.nasa.gov) for all media.


## Disclosure 
- This is the first ever hackathon attended by this team
   - it may include unecessary stuff unrelated to this website or even repetitive stuff.
- We have used Ai to take out the main point from NASA's research library, Some data might not be labeled
- Ai was used in this project :
    - Claude (Anthropic) drafted the code and SVG illustrations
    - ChatGPT (Open AI) & Claude (Anthropic) were used to draft facts for the story.
    - The team verified facts against the sources above.
    - The story was complied by a team member.

