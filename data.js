// All story text and facts live here. Check every fact against the NASA sources listed in README.md.
// Small SVG pictures of each machine (shown around the home title)
const I={
"lm": "<polygon points=\"14,20 34,20 38,32 10,32\" fill=\"#ffd166\"/><rect x=\"18\" y=\"10\" width=\"12\" height=\"10\" rx=\"3\" fill=\"#c9d0ee\"/><path d=\"M13 32L7 44M35 32L41 44M20 32L18 44M28 32L30 44\" stroke=\"#ffd166\" stroke-width=\"2.5\"/><path d=\"M4 44H44\" stroke=\"#9a9aa8\" stroke-width=\"2\"/>",
"lrv": "<rect x=\"9\" y=\"26\" width=\"30\" height=\"6\" rx=\"2\" fill=\"#ffd166\"/><rect x=\"14\" y=\"20\" width=\"7\" height=\"6\" fill=\"#c9d0ee\"/><rect x=\"26\" y=\"20\" width=\"7\" height=\"6\" fill=\"#c9d0ee\"/><path d=\"M39 26L44 16\" stroke=\"#e8ecff\" stroke-width=\"2\"/><circle cx=\"44\" cy=\"14\" r=\"4\" fill=\"none\" stroke=\"#e8ecff\" stroke-width=\"2\"/><g fill=\"#222\" stroke=\"#e8ecff\" stroke-width=\"1.5\"><circle cx=\"14\" cy=\"36\" r=\"5\"/><circle cx=\"34\" cy=\"36\" r=\"5\"/></g>",
"alsep": "<rect x=\"16\" y=\"28\" width=\"16\" height=\"10\" fill=\"#ffd166\"/><path d=\"M24 28V12\" stroke=\"#e8ecff\" stroke-width=\"2\"/><path d=\"M14 10Q24 4 34 10Q24 14 14 10Z\" fill=\"#e8ecff\"/><rect x=\"36\" y=\"32\" width=\"8\" height=\"6\" fill=\"#ff7a45\"/><path d=\"M32 35H36\" stroke=\"#e8ecff\" stroke-width=\"1.5\"/><path d=\"M6 42H42\" stroke=\"#9a9aa8\" stroke-width=\"2\"/>",
"sur": "<path d=\"M24 22L10 42M24 22L38 42M24 22V42\" stroke=\"#c9d0ee\" stroke-width=\"2.5\"/><circle cx=\"10\" cy=\"43\" r=\"2.5\" fill=\"#ffd166\"/><circle cx=\"38\" cy=\"43\" r=\"2.5\" fill=\"#ffd166\"/><rect x=\"18\" y=\"14\" width=\"12\" height=\"10\" fill=\"#ffd166\"/><path d=\"M24 14V6\" stroke=\"#e8ecff\" stroke-width=\"2\"/><rect x=\"21\" y=\"3\" width=\"6\" height=\"4\" fill=\"#e8ecff\"/>",
"soj": "<rect x=\"10\" y=\"24\" width=\"28\" height=\"9\" rx=\"2\" fill=\"#ffd166\"/><rect x=\"12\" y=\"18\" width=\"24\" height=\"6\" fill=\"#3566c9\"/><g fill=\"#222\" stroke=\"#e8ecff\" stroke-width=\"1\"><circle cx=\"13\" cy=\"37\" r=\"4\"/><circle cx=\"24\" cy=\"37\" r=\"4\"/><circle cx=\"35\" cy=\"37\" r=\"4\"/></g>",
"mer": "<rect x=\"12\" y=\"26\" width=\"24\" height=\"8\" rx=\"2\" fill=\"#ffd166\"/><rect x=\"6\" y=\"22\" width=\"36\" height=\"4\" fill=\"#3566c9\"/><path d=\"M30 22V10\" stroke=\"#e8ecff\" stroke-width=\"2\"/><rect x=\"27\" y=\"6\" width=\"8\" height=\"5\" fill=\"#e8ecff\"/><g fill=\"#222\" stroke=\"#e8ecff\" stroke-width=\"1\"><circle cx=\"14\" cy=\"38\" r=\"4\"/><circle cx=\"24\" cy=\"38\" r=\"4\"/><circle cx=\"34\" cy=\"38\" r=\"4\"/></g>",
"vik": "<polygon points=\"14,24 34,24 38,32 10,32\" fill=\"#c9d0ee\"/><path d=\"M12 32L6 44M36 32L42 44M24 32V44\" stroke=\"#e8ecff\" stroke-width=\"2.5\"/><path d=\"M30 24L40 12\" stroke=\"#e8ecff\" stroke-width=\"2\"/><ellipse cx=\"41\" cy=\"11\" rx=\"5\" ry=\"3\" fill=\"#ffd166\" transform=\"rotate(-40 41 11)\"/><rect x=\"18\" y=\"16\" width=\"10\" height=\"8\" fill=\"#ff7a45\"/>",
"phx": "<rect x=\"18\" y=\"24\" width=\"12\" height=\"8\" fill=\"#c9d0ee\"/><circle cx=\"10\" cy=\"22\" r=\"8\" fill=\"#3566c9\" stroke=\"#e8ecff\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"22\" r=\"8\" fill=\"#3566c9\" stroke=\"#e8ecff\" stroke-width=\"1.5\"/><path d=\"M20 32L16 44M28 32L32 44\" stroke=\"#e8ecff\" stroke-width=\"2.5\"/><path d=\"M24 24V14\" stroke=\"#e8ecff\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"12\" r=\"3\" fill=\"#ffd166\"/>",
"dawn": "<rect x=\"19\" y=\"18\" width=\"10\" height=\"12\" fill=\"#ffd166\"/><rect x=\"2\" y=\"21\" width=\"16\" height=\"6\" fill=\"#3566c9\"/><rect x=\"30\" y=\"21\" width=\"16\" height=\"6\" fill=\"#3566c9\"/><path d=\"M24 18V10\" stroke=\"#e8ecff\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"9\" r=\"3\" fill=\"#e8ecff\"/><path d=\"M24 30V38\" stroke=\"#2ee6c5\" stroke-width=\"3\"/><path d=\"M20 44L24 36L28 44Z\" fill=\"#2ee6c5\" opacity=\".6\"/>",
"near": "<rect x=\"14\" y=\"20\" width=\"12\" height=\"12\" fill=\"#ffd166\"/><rect x=\"28\" y=\"14\" width=\"16\" height=\"24\" fill=\"#3566c9\" stroke=\"#e8ecff\"/><path d=\"M14 26H6\" stroke=\"#e8ecff\" stroke-width=\"2\"/><ellipse cx=\"20\" cy=\"14\" rx=\"6\" ry=\"3\" fill=\"#e8ecff\"/>",
"pio": "<path d=\"M8 14Q24 2 40 14Q24 22 8 14Z\" fill=\"#e8ecff\"/><rect x=\"20\" y=\"20\" width=\"8\" height=\"10\" fill=\"#ffd166\"/><path d=\"M28 24L44 36M20 24L6 38\" stroke=\"#e8ecff\" stroke-width=\"2\"/><circle cx=\"45\" cy=\"37\" r=\"3\" fill=\"#ff7a45\"/><circle cx=\"5\" cy=\"39\" r=\"3\" fill=\"#ff7a45\"/>",
"ing": "<path d=\"M6 12H42M24 12V22\" stroke=\"#e8ecff\" stroke-width=\"2.5\"/><rect x=\"16\" y=\"22\" width=\"16\" height=\"9\" rx=\"2\" fill=\"#ffd166\"/><rect x=\"20\" y=\"8\" width=\"8\" height=\"4\" fill=\"#3566c9\"/><path d=\"M18 31L14 42M30 31L34 42\" stroke=\"#e8ecff\" stroke-width=\"2\"/>",
"kep": "<rect x=\"17\" y=\"8\" width=\"14\" height=\"30\" rx=\"3\" fill=\"#c9d0ee\"/><rect x=\"2\" y=\"20\" width=\"14\" height=\"10\" fill=\"#3566c9\"/><rect x=\"32\" y=\"20\" width=\"14\" height=\"10\" fill=\"#3566c9\"/><circle cx=\"24\" cy=\"13\" r=\"4\" fill=\"#0a2159\" stroke=\"#e8ecff\"/>"
};
const D={
glossary:{"seismometer": "an instrument that feels shaking in the ground, such as moonquakes", "magnetometer": "an instrument that measures magnetic fields", "moonquake": "an earthquake on the Moon", "lunar module": "the small spacecraft that carried two astronauts down to the Moon and back up to orbit", "ultraviolet": "a kind of light that our eyes cannot see", "nuclear generator": "a machine that makes electricity from the heat of a special material, so it works without sunlight", "Cold War": "a long, tense rivalry between the United States and the Soviet Union after the Second World War", "Soviet Union": "a large country, led from Moscow, that existed from 1922 to 1991 and included Russia", "satellite": "an object that travels around a planet or moon", "thumper": "a tool that made small bangs in the ground so scientists could study the rock underneath", "plaque": "a flat metal sign with words on it", "orbit": "the curved path an object takes around a planet or moon", "rover": "a vehicle that drives across the surface of another world", "airbags": "big cushions that protect a spacecraft when it lands", "geologist": "a scientist who studies rocks and land"},
sources:{title:"Sources and AI use",summary:"Where the facts, pictures and sounds come from, and how AI helped build this site.",sections:[{"h": "NASA challenge resource", "li": ["<b>To be added by the team:</b> the NASA data source(s) from this challenge's Resources tab, and how this project uses them."]}, {"h": "Facts and story", "li": ["Moon: Part 1 (Apollo lunar modules): NASA Apollo mission records and the <a href=\"https://www.nasa.gov/history/alsj/a15/a15mr-1.htm\" target=\"_blank\" rel=\"noopener\">Apollo Lunar Surface Journal</a>.", "Moon: Part 2 (Lunar Roving Vehicle): <a href=\"https://www.nasa.gov/history/alsj/a15/a15mr-1.htm\" target=\"_blank\" rel=\"noopener\">Apollo 15 mission summary</a> and <a href=\"https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm\" target=\"_blank\" rel=\"noopener\">NASA SP-4029, Apollo 15 summary</a>.", "Moon: Part 3 (ALSEP science stations): <a href=\"https://www.nasa.gov/history/alsj/HamishALSEP.html\" target=\"_blank\" rel=\"noopener\">Apollo Lunar Surface Journal, ALSEP</a>.", "Moon: Part 4 (Surveyors): <a href=\"https://science.nasa.gov/mission/surveyor-7\" target=\"_blank\" rel=\"noopener\">NASA Science, Surveyor 7</a>, <a href=\"https://www.nasa.gov/feature/50-years-ago-surveyor-7-launches\" target=\"_blank\" rel=\"noopener\">NASA, 50 Years Ago: Surveyor 7 Launches</a> and <a href=\"https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-5-4.html\" target=\"_blank\" rel=\"noopener\">NASA SP-350, Apollo Expeditions to the Moon</a>.", "Mars: Parts 1 and 2, Lessons and the home star map: NASA Science and Mars Exploration pages for Mars Pathfinder, Sojourner, Spirit, Opportunity, Viking, Phoenix, InSight and Ingenuity; the NASA Mars Climate Orbiter mishap report; NASA pages for Dawn, NEAR Shoemaker, Pioneer 10 and 11 and Kepler.", "The story text, its structure and the choice of pictures are by the team."]}, {"h": "Pictures and audio", "li": ["All space photographs: NASA, from the <a href=\"https://images.nasa.gov\" target=\"_blank\" rel=\"noopener\">NASA Image and Video Library</a>. Each picture is credited \"Picture by NASA\".", "Audio recordings, where used: NASA. Other sounds on the site are made by the browser.", "Earth background photograph: Pexels, photographer \"zelch\".", "Spacecraft drawings and animations: made for this project."]}, {"h": "Fonts and tools", "li": ["Fonts: Space Grotesk, Manrope and Lora, from Google Fonts (open licence).", "Read aloud uses the speech feature built into the visitor's own browser."]}, {"h": "How AI was used", "li": ["<b>Claude (Anthropic)</b> wrote and edited the website code (HTML, CSS and JavaScript), drew the spacecraft illustrations, built the animated background and highlight effects, searched the web to cross-check facts, suggested fact corrections, and fixed spelling in the team's story text.", "<b>An AI editing assistant on Netlify</b> was used by the team for some layout changes.", "The team decided the story, the structure and what to include, and reviewed the results."]}]},
chapters:{
moon:{c:"#ffd166",tag:"The Moon · Part 1",title:"The Race to the Moon",
 conclude:"Six landers took us to the Moon, and the machines we left behind are not forgotten.",
 audio:{"src": "audio-one-small-step.mp3", "label": "▶ Hear “One small step”"},
 facts:[["Type", "Lunar modules (Apollo landers)"], ["First / last landing", "20 July 1969 / 11 December 1972"], ["Destination", "The Moon"], ["Objective", "Land astronauts on the Moon and bring them home"]],
 intro:"Listen closely. In this story, the machines speak for themselves. Every voice you hear belongs to a s telling its own tale.",
 fact:"Six Apollo landers touched down on the Moon: Apollo 11, 12, 14, 15, 16 and 17.",
 pics:[{"src": "apollo11-eagle.jpg", "alt": "The Apollo 11 lunar module Eagle on the Moon, with astronaut Buzz Aldrin beside its landing leg", "cap": "A view of the Lunar Module \"Eagle\" on the Moon. Aldrin is opening the stowage area and preparing to unload the scientific experiments package. Beyond the right leg is the solar wind experiment, and beyond that the lunar surface TV camera.", "id": "NASA photo ID AS11-40-5927 · Image: NASA, from the NASA Image and Video Library"}],
 story:[
{
"t": "narr",
"h": "The Race",
"p": [
"After the Second World War, America and the Soviet Union became rivals. Each wanted to beat the other at everything: weapons, money, medicine and science. This was the Cold War. It started a race to the Moon.",
"At first, the Soviets were ahead. They launched the first satellite in 1957. In 1961, they sent the first person into space.",
"Then President Kennedy made a huge promise. ==America would land on the Moon before 1970.== That promise started the Apollo space mission's."
]
},
{
"t": "voice",
"h": "Eagle",
"m": "Apollo 11 · July 1969 · The Eagle's launchpad",
"p": [
"I came to life while people were building the next spacecraft, with one hope: \"=='Please make it happen.'==\" I could understand that i wasnt the first. Many people before me tried to reach the Moon and but, could not. Some even died whilst in those space missions. So now their hopes were on me.",
"I decided to give it my all. The three astronauts who came to my launchpad were Neil Armstrong, Michael Collins and Buzz Aldrin. They were the most enthusiastic bunch, and their faces glimmered with hope. Then in July, the giant Saturn V rocket fired its engines and we left the ground. I could hear the people below encouraging us to go to the Moon.",
"Then everything went silent. We had entered space. I could see the Earth below, a blue ball that became smaller and smaller.",
"We stayed in orbit around the Moon for many hours. I could see its surface becoming larger and larger. Then I used my engine to guide myself down onto the surface, and then... clack. I touched the Moon.",
"They opened my hatch to see the Moon for themselves. Neil stepped out first, saying, \"==One small step for man, one giant leap for mankind.==\" They walked about for around two and a half hours, then they came back.",
"I knew my mission was over. When they lifted off again, I watched them move far away, leaving me here on the Moon. They left me a memory of peace: a golden olive branch and a goodwill disc, carrying voices from all around the world. They called me Eagle, after the American bald eagle, a bird that flies high.",
"I watched them drift back towards the Earth, a beautiful blue orb shining alone in the darkness. ==Then I went to sleep, never to wake up again.=="
]
},
{
"t": "voice",
"h": "Intrepid",
"m": "Apollo 12 · November 1969",
"pic": {
"src": "apollo12-intrepid.jpg",
"wide": true,
"alt": "The Apollo 12 lunar module Intrepid above the grey, cratered surface of the Moon",
"cap": "The Apollo 12 Lunar Module \"Intrepid\" above the Moon. NSSDCA/COSPAR ID: 1969-099C",
"id": "Picture by NASA"
},
"p": [
"My former Model, =='Eagle'== had just proved it was possible. Now it was my turn. I felt the pressure.",
"=='Please do it again.'==",
"I sucessfully landed on the moon. Pete Conrad and Alan Bean walked out of the rocket. Richard Gordon waited above. They put up a flag and a TV camera. They also set up tools to study the Moon: one measured its magnetic field, one caught particles from the Sun, and one sniffed the thin gas near the ground.",
"Then they flew home. ==They left me with their momento, So that i wasnt left alone.=="
]
},
{
"t": "voice",
"h": "Aquarius",
"m": "Apollo 13 · April 1970",
"p": [
"People were trying again to reach the sky. They built me but, ==I never landed==. Something broke on the way to the Moon.",
"Jim Lovell, Jack Swigert and Fred Haise could not walk on the Moon. ==But I kept them alive, and they got home safely. I am proud of that.=="
]
},
{
"t": "voice",
"h": "Antares",
"m": "Apollo 14 · February 1971",
"p": [
"After Apollo 13, the whole world was nervous. ==So i proved my worth==, Alan Shepard, Edgar Mitchell and Stuart Roosa made it safely.",
"Shepard set up a \"thumper\". It made small bangs in the ground, so scientists could study the rock below. He also had a small cart for carrying rocks.",
"Then he did something fun. ==He hit two golf balls across the Moon.=="
]
},
{
"t": "voice",
"h": "Falcon",
"m": "Apollo 15 · July 1971",
"p": [
"I was made next now quipped with even more things! David Scott and James Irwin climbed down. Alfred Worden stayed in orbit.",
"I brought the first moon buggy. ==For the first time, people drove on another world.==",
"They left a drill, a heat probe and a dust detector. They also left small personal things, like a falcon feather. They left a tiny statue of a fallen astronaut too, with ==a plaque for everyone who never came home==. It is still here with me."
]
},
{
"t": "voice",
"h": "Orion",
"m": "Apollo 16 · April 1972",
"p": [
"I am the successor to Apollo 15. I Brought John Young, Charles Duke and Ken Mattingly to the ==Moon==.",
"I carried the second moon buggy. I watched it drive away and come back. They also set up a camera that took photos of stars in ultraviolet light.",
"Charles Duke left a photo of his family. ==It is the thing I think about most.=="
]
},
{
"t": "voice",
"h": "Challenger",
"m": "Apollo 17 · December 1972",
"p": [
"I was the last. ==After my crew left, nobody walked on the Moon again.==",
"Together, the missions left behind three moon buggies, flags, tools and small personal items. On 30 September 1977, NASA switched off almost all the science equipment. ==The Moon went quiet.==",
"But not completely. A few mirrors still work. When a laser from Earth hits them, the light bounces back. People still use it to measure the distance to the Moon.",
"==We were left behind. But we are not forgotten.=="
]
}
]},
moon2:{c:"#ffd166",tag:"The Moon · Part 2",title:"The Moon Buggy",
 conclude:"A folding buggy took astronauts farther than their feet could go, and three still wait on the Moon.",
 summary:"How a folding electric car let astronauts drive on another world.",
 facts:[["Type", "Lunar Roving Vehicle (moon buggy)"], ["First / last drive", "31 July 1971 / December 1972"], ["Destination", "The Moon (Apollo 15, 16 and 17 sites)"], ["Objective", "Carry astronauts farther across the Moon"]],
 fact:"Apollo 15's buggy was driven 27.9 km in three trips. All three moon buggies are still on the Moon.",
 gallery:[
{
"src": "lrv-development.jpg",
"alt": "A Lunar Roving Vehicle on the ground during testing before launch, with its dish antenna and TV camera",
"id": "Testing on Earth · Picture by NASA"
},
{
"src": "apollo15-falcon.jpg",
"alt": "The Apollo 15 lunar module Falcon in the distance, with tracks across the dusty Moon plain in front",
"id": "Apollo 15 landing site · Picture by NASA"
},
{
"src": "apollo17-lrv.jpg",
"alt": "A Lunar Roving Vehicle parked on the Moon with its dish antenna and TV camera, hills behind",
"id": "Left on the Moon · Picture by NASA"
}
],
 story:[
{
"t": "voice",
"h": "Moon Buggy",
"m": "Lunar Roving Vehicle · Apollo 15 · July 1971",
"p": [
"Before me, astronauts had to walk Laboriously on the Moon. They could only go as far as their legs could.",
"I was built by Boeing. I ran on batteries and I had four wheels, and every wheel having its own electric motor.",
"To get to the Moon, I had to fold up small and ride tucked against the side of the lunar module, Falcon. On 31 July 1971, David Scott and James Irwin unfolded me. ==I was the first vehicle ever driven by people on another world.==",
"I was fast but not too fast, about 12 kilometres an hour at most. But I took them much farther than their legs could. In three trips, I carried them 27.9 kilometres across the Hadley and Apennine region.",
"I had a TV camera too, and scientists on Earth could point it from their control room. On 2 August, when the astronauts blasted off, my camera showed Earth the very first liftoff from the Moon.",
"Then I was left behind, parked near Falcon. My batteries cannot be recharged, so I could never drive again. Two more buggies followed me, on Apollo 16 and Apollo 17. All three of us are still on the Moon.",
"I took my astronauts far from home, and ==I am still here, waiting.=="
]
}
]},
moon3:{c:"#ffd166",tag:"The Moon · Part 3",title:"The Science Stations",
 conclude:"The science stations listened to the Moon for years, until they were switched off in 1977.",
 summary:"The nuclear-powered stations that kept studying the Moon after the astronauts left.",
 facts:[["Type", "Science stations (ALSEP)"], ["Switched on / off", "19 November 1969 / 30 September 1977"], ["Destination", "The Moon (five landing sites)"], ["Objective", "Study the Moon and the space around it"]],
 fact:"Five science stations were left on the Moon. Each was designed to work for at least a year.",
 gsm:true,
 gallery:[{"src": "easep-apollo11.jpg", "alt": "Astronaut Buzz Aldrin carrying the Apollo 11 science package across the Moon", "id": "Apollo 11 · Early science package (EASEP) · Picture by NASA"}, {"src": "alsep-apollo12.jpg", "alt": "An Apollo 12 astronaut beside the lunar module with the science package cables", "id": "Apollo 12 · ALSEP · Picture by NASA"}, {"src": "pse-apollo16.jpg", "alt": "The Apollo 16 Passive Seismic Experiment on the Moon with its gold-coloured box and silver shield", "id": "Apollo 16 · Passive Seismic Experiment · Picture by NASA"}],
 story:[
{
"t": "voice",
"h": "The Science Stations",
"m": "ALSEP · Apollo 12, 14, 15, 16 and 17 · 1969–1972",
"p": [
"We are the science stations. Our full name is long: the Apollo Lunar Surface Experiments Package. Everyone calls us ALSEP. There are five of us, one for each of Apollo 12, 14, 15, 16 and 17.",
"The astronauts carried us out of the lander, set us up on the dusty ground and joined our instruments together with cables. A small nuclear generator gave us power, so we could keep working even when the Sun went down.",
"==Our instruments were like senses, each having their own purpose==. Seismometers listened for moonquakes. Magnetometers felt the Moon's weak magnetic field. Detectors caught particles streaming from the Sun, and gauges sniffed the very thin gas near the ground. Some of us even measured heat flowing out of the Moon.",
"We were built to work for at least a year. Some of us kept going for almost eight years.",
"==We learned that the Moon is not a dead rock.== It has moonquakes. When NASA crashed a used part of an Apollo 12 lander into the Moon, our seismometers heard the Moon ring like a bell.",
"On 30 September 1977, NASA switched us off for good because of budget cuts. ==The Moon went quiet.==",
"But what we heard still matters. We taught people about the Moon, the wind from the Sun and the space around us, and that helped them get ready to explore even farther."
]
}
]},
moon4:{c:"#ffd166",tag:"The Moon · Part 4",title:"The Surveyors",
 conclude:"The Surveyors went first, so that astronauts could follow.",
 summary:"The robot scouts that checked the Moon was safe before the astronauts arrived.",
 facts:[["Type", "Robot landers (Surveyor 1 to 7)"], ["First launch / last contact", "May 1966 / February 1968"], ["Destination", "The Moon"], ["Objective", "Prove spacecraft can land softly and scout for Apollo"]],
 fact:"Five of the seven Surveyors landed softly, and together they sent back more than 87,000 pictures of the Moon.",
 pics:[
{
"src": "surveyor3-apollo12.jpg",
"wide": true,
"alt": "An astronaut beside the Surveyor 3 spacecraft on the Moon, with the Apollo 12 lunar module on the horizon",
"cap": "This unusual photograph, taken during the second Apollo 12 extravehicular activity (EVA), shows two U.S. spacecraft on the surface of the Moon. The Apollo 12 Lunar Module (LM) is in the background. The unmanned Surveyor 3 spacecraft is in the foreground.",
"id": "Picture by NASA"
}
],
 story:[
{
"t": "voice",
"h": "The Surveyors",
"m": "Surveyor 1–7 · 1966–1968",
"p": [
"We went first so that, others could land safely on moon, NASA wanted to know one thing: could a spacecraft land safely, or would it sink into deep dust?",
"Seven of us were sent between 1966 and 1968. We were robot landers, built to scout the Moon for the Apollo astronauts. Two of us were lost on the way. Five of us landed softly.",
"Surveyor 1 touched down on 2 June 1966. It was the first American spacecraft to land softly on the Moon. Over the next two years, we sent back more than 87,000 photographs of the Moon's surface.",
"Surveyor 3 carried a little scoop arm. It dug a trench in the soil and pressed on it, to test whether the ground could hold the weight of a lander. Some of us also had a tool that told scientists what the Moon's soil is made of.",
"In November 1969, something wonderful happened. Apollo 12's astronauts, Pete Conrad and Alan Bean, landed their lander, Intrepid, within walking distance of me, Surveyor 3. They walked over, took my TV camera and some other parts, and carried them back to Earth. ==It is still the only time people have visited a robot they sent to another world.==",
"My camera is now in a museum, so a piece of me made it home. The rest of me is still on the Moon.",
"The last of us, Surveyor 7, went quiet in February 1968. ==We went first, so that they could follow.=="
]
}
]},
mars:{c:"#ff7a45",tag:"Mars · Part 1",title:"Pathfinder and Sojourner",sound:"launch",
 conclude:"Sojourner rolled across Mars and showed that a rover could work there.",
 audio:{"src": "audio-launch-countdown.mp3", "label": "▶ Hear a real NASA countdown"},
 summary:"A lander and a rover about the size of a microwave oven, and what they showed us about Mars.",
 facts:[["Type", "Lander and rover"], ["Landing / last signal", "4 July 1997 / 27 September 1997"], ["Destination", "Ares Vallis, Mars"], ["Objective", "Test low-cost landing and drive the first rover on Mars"]],
 fact:"Press the button for a launch countdown, then picture mission control cheering when the signal came back.",
 photo:"Video slot: Pathfinder engineers at work, the launch and first images from Mars (images.nasa.gov). Credit: NASA/JPL.",
 beats:[["Hook","==A robot about the size of a small microwave oven rolled across another planet.=="],
 ["Origin","Mars Pathfinder launched on 4 December 1996 as a low-cost test. Its rover was named Sojourner after a student essay contest won by 12-year-old Valerie Ambroise."],
 ["Mission","On 4 July 1997 it bounced onto Mars inside giant airbags. The lander opened like petals and Sojourner drove out."],
 ["Discovery","Sojourner tested rocks with an X-ray instrument. Rounded pebbles and the landscape suggested floods of water once rushed through the area."],
 ["Final status","Sojourner was planned for about a week and worked for around three months. Pathfinder's last signal arrived on 27 September 1997. ==Both remain on Mars.=="],
 ["Why it matters","==It proved a rover could work on Mars== and led the way to Spirit, Opportunity, Curiosity and Perseverance."]],
 svg:`<rect width="300" height="200" fill="#2a1410"/><circle cx="60" cy="40" r="3" fill="#fff"/><path d="M0 150 Q150 130 300 150 V200 H0Z" fill="#c1532b"/>
<g class="bounce"><g fill="#e8ecff" stroke="#8ab4ff" stroke-width="2"><polygon points="70,150 120,100 150,150"/><polygon points="150,150 180,100 230,150"/></g>
<rect x="115" y="125" width="40" height="22" fill="#ffd166"/><text x="75" y="95">Pathfinder lander</text></g>
<g class="drive"><rect x="200" y="148" width="50" height="15" rx="4" fill="#ffd166"/><rect x="205" y="140" width="40" height="8" fill="#3566c9"/>
<g fill="#222"><circle cx="208" cy="166" r="6"/><circle cx="225" cy="166" r="6"/><circle cx="242" cy="166" r="6"/></g><text x="195" y="135">Sojourner rover</text></g>`},
mars2:{c:"#ff7a45",tag:"Mars · Part 2",title:"Spirit and Opportunity",
 conclude:"Two rovers planned for three months explored Mars for years.",
 summary:"Two robot geologists planned to work for about three months. They kept going far longer.",
 facts:[["Type", "Rovers"], ["First landing / last contact", "January 2004 / 2010 and 2018"], ["Destination", "Gusev Crater and Meridiani Planum, Mars"], ["Objective", "Search for signs of past water"]],
 svg:`<rect width="300" height="200" fill="#2a1410"/><circle cx="240" cy="40" r="3" fill="#fff"/><path d="M0 150 Q150 130 300 150 V200 H0Z" fill="#c1532b"/>
<g class="roll"><g><rect x="40" y="132" width="50" height="14" rx="4" fill="#ffd166"/><rect x="45" y="124" width="40" height="8" fill="#3566c9"/><path d="M85 128 L100 112" stroke="#e8ecff" stroke-width="2"/><g fill="#222"><circle cx="48" cy="150" r="6"/><circle cx="65" cy="150" r="6"/><circle cx="82" cy="150" r="6"/></g><text x="35" y="118">Spirit</text></g>
<g><rect x="150" y="150" width="50" height="14" rx="4" fill="#ffd166"/><rect x="155" y="142" width="40" height="8" fill="#3566c9"/><path d="M195 146 L210 130" stroke="#e8ecff" stroke-width="2"/><g fill="#222"><circle cx="158" cy="168" r="6"/><circle cx="175" cy="168" r="6"/><circle cx="192" cy="168" r="6"/></g><text x="140" y="136">Opportunity</text></g></g>`,
 photo:"Photo slot: Spirit and Opportunity in testing, and selfies on Mars (images.nasa.gov). Credit: NASA/JPL-Caltech.",
 fact:"Each rover was planned to work for about 90 Mars days. Opportunity kept going for nearly 15 years.",
 beats:[["Hook","Two robot geologists were sent to Mars for three months. ==One of them drove a whole marathon.=="],
 ["Origin","NASA launched the twin rovers Spirit and Opportunity in the summer of 2003, each landing on the opposite side of Mars."],
 ["Mission","Both bounced down inside airbags in January 2004 and started studying rocks with cameras, drills and spectrometers."],
 ["Discovery","Opportunity found tiny iron-rich spheres nicknamed blueberries that formed in water. Spirit found silica soil that hints at ancient hot springs."],
 ["Final status","Spirit got stuck in soft sand and last called home in 2010. A huge dust storm ended Opportunity in 2018, after it drove more than 45 km."],
 ["Why it matters","They ==found strong evidence that Mars was once wet== and helped plan Curiosity and Perseverance, which still explore today."]]},
lessons:{c:"#7cfc9a",tag:"Learning from mistakes",title:"Every machine teaches the next one",
 conclude:"Every mistake taught NASA something, and the next machine was better.",
 summary:"How mistakes made the next machines better.",
 chain:["Try","Mistake","*learned*","Better machine"],
 cards:[["Mars Climate Orbiter, 1999","One team used imperial units and another used metric, so the spacecraft was lost. ==Now teams cross-check every unit.=="],
 ["Sojourner beat its plan","It lasted far longer than the week planned, so ==NASA dared to build bigger, longer-lived rovers.=="],
 ["Voyager 1's glitch","In 2023 it sent unreadable data. Engineers fixed it from billions of kilometres away, and by April 2024 it worked again."],
 ["Spirit's memory glitch","Weeks after landing in 2004, Spirit kept restarting because its memory was full. ==Engineers fixed it from Earth and it drove for years.=="]]},
legacy:{c:"#ff5fa2",tag:"The legacy",title:"Still working. Still teaching.",
 conclude:"Machines we left behind rolled across Mars, and what we learned helps us explore more.",
 summary:"What still works, what still waits, and what comes next.",
 cards:[["Still operating","Voyager 1 and 2 still send signals. NASA's Curiosity and Perseverance rovers still explore Mars, ==built on lessons from earlier rovers==."],
 ["Still being used","Mirror panels left by Apollo astronauts ==still help scientists measure the distance to the Moon==."],
 ["Still waiting","Sojourner and Pathfinder sit silent on Mars ==like time capsules==, waiting for future explorers."]],
 quiz:[["Which part of Eagle stayed on the Moon?",["Ascent stage","Descent stage"],1],["What was Sojourner?",["A Mars rover","A Moon camera"],0],["How long was Opportunity planned to work?",["About 90 Mars days","About 15 years"],0]]}},
// Home page stars: [name, kind, launched, ended, purpose, x%, y%, picture]  (all NOT operational)
missions:[
["Apollo Lunar Modules","Moon landers","1969–1972 (six Apollo landings)","1969–1972, left on the Moon","Six landers carried 12 astronauts to the Moon. Each lander's landing stage was left behind.",20,24,I.lm],
["Lunar Roving Vehicles","Moon rovers","1971 (Apollo 15)","1972, parked on the Moon","Three battery-powered buggies carried astronauts across the Moon. All three were left behind.",34,46,I.lrv],
["ALSEP packages","Moon science stations","1969 (Apollo 12)","1977","Nuclear-powered instrument sets left by Apollo 12, 14, 15, 16 and 17. They studied the Moon until NASA switched them off in 1977.",11,42,I.alsep],
["Surveyor landers","Moon landers","1966–1968","1968","Five robot landers checked the Moon's surface before astronauts arrived. Apollo 12 astronauts later visited Surveyor 3.",42,24,I.sur],
["Sojourner","Mars rover","1996 (Pathfinder)","1997","The first rover to drive on Mars. It tested rocks beside the Pathfinder lander.",52,44,I.soj],
["Spirit and Opportunity","Mars rovers","2003","2010 (Spirit) and 2018 (Opportunity)","Twin rovers found signs of past water on Mars. Opportunity drove more than a marathon.",62,18,I.mer],
["Viking 1 and 2","Mars landers","1975","1980 (Viking 2) and 1982 (Viking 1)","The first successful US Mars landers. They sent pictures and tested soil for signs of life.",70,40,I.vik],
["Phoenix and InSight","Mars landers","2007 (Phoenix) and 2018 (InSight)","2008 (Phoenix) and 2022 (InSight)","Phoenix dug up water ice near Mars's north pole. InSight listened for marsquakes.",80,20,I.phx],
["Ingenuity","Mars helicopter","2020 (with Perseverance)","18 January 2024 (last flight)","The first powered flight on another planet, in Jezero Crater. It completed 72 flights between 19 April 2021 and 18 January 2024.",58,66,I.ing],
["Dawn","Asteroid-belt orbiter","2007","2018","The first spacecraft to orbit two bodies in the asteroid belt, Vesta and Ceres.",88,48,I.dawn],
["NEAR Shoemaker","Asteroid probe","1996","2001","The first spacecraft to orbit and then land on an asteroid, Eros.",74,64,I.near],
["Pioneer 10 and 11","Deep-space probes","1972 and 1973","2003 (Pioneer 10) and 1995 (Pioneer 11)","Pioneer 10 was first to cross the asteroid belt and fly past Jupiter. Pioneer 11 was first to fly past Saturn.",93,24,I.pio],
["Kepler","Space telescope","2009","2018","Watched about 150,000 stars and found thousands of planets around them until it ran out of fuel.",91,70,I.kep]]};
