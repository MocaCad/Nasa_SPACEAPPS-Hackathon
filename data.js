// All story text and facts live here. Check every fact against the NASA sources listed in README.md.
const D={
chapters:{
moon:{c:"#ffd166",tag:"The Moon · Part 1",title:"Eagle, the Moon lander",
 svg:`<rect width="300" height="200" fill="#0a0d24"/><circle cx="250" cy="35" r="18" fill="#8ab4ff"/><path d="M0 160 Q150 140 300 160 V200 H0Z" fill="#9a9aa8"/>
<g class="land"><g stroke="#ffd166" stroke-width="3"><path d="M110 120 L85 160M170 120 L195 160M120 120 L120 160M160 120 L160 160"/></g><polygon points="105,95 175,95 185,122 95,122" fill="#ffd166"/><rect x="118" y="70" width="44" height="25" rx="6" fill="#c9d0ee"/><text x="118" y="62">Ascent stage</text><text x="100" y="188">Descent stage (left behind)</text></g>
<path d="M30 160 V105" stroke="#fff" stroke-width="2"/><rect x="30" y="105" width="30" height="18" fill="#fc3d21"/><text x="20" y="98">Flag</text><rect x="225" y="150" width="30" height="10" fill="#e8ecff"/><text x="218" y="143">Laser mirror</text>`,
 photo:"Photo slot: Apollo 11 Eagle during development at Grumman, then on the Moon (images.nasa.gov). Credit: NASA.",
 fact:"Fun fact: the Moon drifts away from Earth at about the speed your fingernails grow.",
 beats:[["Hook","Imagine parking a spaceship and leaving half of it behind, *left* there for good."],
 ["Origin","Eagle was built by the company Grumman to land two astronauts. It had two parts: a descent stage for landing and an ascent stage for coming home."],
 ["Mission","On 20 July 1969, Apollo 11's Eagle touched down in the Sea of Tranquility. Neil Armstrong and Buzz Aldrin walked on the Moon while Michael Collins circled above."],
 ["Discovery","The astronauts set up experiments, including a seismometer to listen for moonquakes and a mirror panel for bouncing lasers off the Moon."],
 ["Final status","The ascent stage carried the astronauts home. The descent stage, a plaque and the experiments stayed on the Moon."],
 ["Why it matters","Mirror panels left on the Moon helped show it drifts away from Earth by about 3.8 cm a year."]]},
moon2:{c:"#ffd166",tag:"The Moon · Part 2",title:"The Moon buggies",
 svg:`<rect width="300" height="200" fill="#0a0d24"/><circle cx="50" cy="35" r="14" fill="#8ab4ff"/><path d="M0 160 Q150 140 300 160 V200 H0Z" fill="#9a9aa8"/>
<g class="roll"><rect x="110" y="128" width="80" height="14" rx="4" fill="#ffd166"/><rect x="125" y="116" width="16" height="12" fill="#c9d0ee"/><rect x="160" y="116" width="16" height="12" fill="#c9d0ee"/><path d="M190 128 L215 108" stroke="#e8ecff" stroke-width="2"/><circle cx="218" cy="105" r="9" fill="none" stroke="#e8ecff" stroke-width="2"/>
<g fill="#222" stroke="#e8ecff"><circle cx="122" cy="150" r="9"/><circle cx="178" cy="150" r="9"/></g><text x="108" y="108">Lunar Roving Vehicle</text><text x="212" y="90">Dish</text></g>`,
 photo:"Photo slot: the Lunar Roving Vehicle being built and driven on the Moon (images.nasa.gov). Credit: NASA.",
 fact:"Three Lunar Roving Vehicles are still parked on the Moon, right where the Apollo 15, 16 and 17 astronauts left them.",
 beats:[["Hook","What if your car had to fold up to fit inside a spaceship, then drive on another world?"],
 ["Origin","The Lunar Roving Vehicle was built by Boeing. It folded flat against the side of the lunar module and unfolded on the Moon."],
 ["Mission","Apollo 15, 16 and 17 each took a rover in 1971 and 1972. Astronauts could drive kilometres away from the lander to collect rocks."],
 ["Discovery","On Apollo 17, Gene Cernan and Harrison Schmitt drove about 36 km and found orange soil made by ancient volcanic eruptions."],
 ["Final status","Each rover ran on batteries that could not be recharged. When the missions ended, all three were left on the Moon."],
 ["Why it matters","The rovers showed how much more we can explore with wheels, an idea used on every Mars rover since."]]},
mars:{c:"#ff7a45",tag:"Mars · Part 1",title:"Pathfinder and Sojourner",sound:"launch",
 fact:"Press the button for a launch countdown, then picture mission control cheering when the signal came back.",
 photo:"Video slot: Pathfinder engineers at work, the launch and first images from Mars (images.nasa.gov). Credit: NASA/JPL.",
 beats:[["Hook","A robot about the size of a small microwave oven *rolled* across another planet."],
 ["Origin","Mars Pathfinder launched on 4 December 1996 as a low-cost test. Its rover was named Sojourner after a student essay contest won by 12-year-old Valerie Ambroise."],
 ["Mission","On 4 July 1997 it bounced onto Mars inside giant airbags. The lander opened like petals and Sojourner drove out."],
 ["Discovery","Sojourner tested rocks with an X-ray instrument. Rounded pebbles and the landscape suggested floods of water once rushed through the area."],
 ["Final status","Sojourner was planned for about a week and worked for around three months. Pathfinder's last signal arrived on 27 September 1997. Both remain on Mars."],
 ["Why it matters","It proved a rover could work on Mars and led the way to Spirit, Opportunity, Curiosity and Perseverance."]],
 svg:`<rect width="300" height="200" fill="#2a1410"/><circle cx="60" cy="40" r="3" fill="#fff"/><path d="M0 150 Q150 130 300 150 V200 H0Z" fill="#c1532b"/>
<g class="bounce"><g fill="#e8ecff" stroke="#8ab4ff" stroke-width="2"><polygon points="70,150 120,100 150,150"/><polygon points="150,150 180,100 230,150"/></g>
<rect x="115" y="125" width="40" height="22" fill="#ffd166"/><text x="75" y="95">Pathfinder lander</text></g>
<g class="drive"><rect x="200" y="148" width="50" height="15" rx="4" fill="#ffd166"/><rect x="205" y="140" width="40" height="8" fill="#3566c9"/>
<g fill="#222"><circle cx="208" cy="166" r="6"/><circle cx="225" cy="166" r="6"/><circle cx="242" cy="166" r="6"/></g><text x="195" y="135">Sojourner rover</text></g>`},
mars2:{c:"#ff7a45",tag:"Mars · Part 2",title:"Spirit and Opportunity",
 svg:`<rect width="300" height="200" fill="#2a1410"/><circle cx="240" cy="40" r="3" fill="#fff"/><path d="M0 150 Q150 130 300 150 V200 H0Z" fill="#c1532b"/>
<g class="roll"><g><rect x="40" y="132" width="50" height="14" rx="4" fill="#ffd166"/><rect x="45" y="124" width="40" height="8" fill="#3566c9"/><path d="M85 128 L100 112" stroke="#e8ecff" stroke-width="2"/><g fill="#222"><circle cx="48" cy="150" r="6"/><circle cx="65" cy="150" r="6"/><circle cx="82" cy="150" r="6"/></g><text x="35" y="118">Spirit</text></g>
<g><rect x="150" y="150" width="50" height="14" rx="4" fill="#ffd166"/><rect x="155" y="142" width="40" height="8" fill="#3566c9"/><path d="M195 146 L210 130" stroke="#e8ecff" stroke-width="2"/><g fill="#222"><circle cx="158" cy="168" r="6"/><circle cx="175" cy="168" r="6"/><circle cx="192" cy="168" r="6"/></g><text x="140" y="136">Opportunity</text></g></g>`,
 photo:"Photo slot: Spirit and Opportunity in testing, and selfies on Mars (images.nasa.gov). Credit: NASA/JPL-Caltech.",
 fact:"Each rover was planned to work for about 90 Mars days. Opportunity kept going for nearly 15 years.",
 beats:[["Hook","Two robot geologists were sent to Mars for three months. One of them drove a whole marathon."],
 ["Origin","NASA launched the twin rovers Spirit and Opportunity in the summer of 2003, each landing on the opposite side of Mars."],
 ["Mission","Both bounced down inside airbags in January 2004 and started studying rocks with cameras, drills and spectrometers."],
 ["Discovery","Opportunity found tiny iron-rich spheres nicknamed blueberries that formed in water. Spirit found silica soil that hints at ancient hot springs."],
 ["Final status","Spirit got stuck in soft sand and last called home in 2010. A huge dust storm ended Opportunity in 2018, after it drove more than 45 km."],
 ["Why it matters","They proved Mars was once wet and helped plan Curiosity and Perseverance, which still explore today."]]},
deep:{c:"#2ee6c5",tag:"Deep space",title:"Voyager 1",sound:"radio",
 fact:"Its radio signal now takes about a day to reach us. Check NASA's live distance counter before presenting.",
 photo:"Photo slot: Voyager being built at JPL, its launch and the Golden Record (images.nasa.gov). Credit: NASA/JPL-Caltech.",
 beats:[["Hook","It was launched in 1977, built to last a few years, and it is *flying* still."],
 ["Origin","Voyager 1 launched on 5 September 1977 to visit Jupiter and Saturn. It has a nuclear power source and carries a Golden Record of Earth's sounds and pictures."],
 ["Mission","It flew past Jupiter in 1979 and Saturn in 1980, then kept going."],
 ["Discovery","It found active volcanoes on Jupiter's moon Io. In 2012 it became the first human-made object to enter interstellar space."],
 ["Final status","Still working in 2026, more than 24 billion km away. Its power slowly fades, so engineers switch off parts to keep it going."],
 ["Why it matters","Careful engineering can outlive its plan, and Voyager carries a message from Earth to the stars."]],
 svg:`<rect width="300" height="200" fill="#050a1c"/><g fill="#fff"><circle cx="30" cy="30" r="1.5"/><circle cx="260" cy="40" r="1.5"/><circle cx="270" cy="160" r="1.5"/></g>
<g class="fly"><circle class="ring" cx="130" cy="75" r="6" fill="none" stroke="#2ee6c5" stroke-width="1"/><ellipse cx="130" cy="75" rx="55" ry="40" fill="#e8ecff" stroke="#2ee6c5" stroke-width="3"/><rect x="110" y="105" width="45" height="35" fill="#ffd166"/>
<path d="M155 120 L245 150" stroke="#e8ecff" stroke-width="3"/><circle cx="248" cy="151" r="6" fill="#fc3d21"/><path d="M110 125 L40 150" stroke="#e8ecff" stroke-width="3"/>
<text x="85" y="22">Dish antenna</text><text x="165" y="138">Magnetometer boom</text><text x="12" y="168">Power (RTG) boom</text><text x="113" y="170">Golden Record</text></g>`},
lessons:{c:"#7cfc9a",tag:"Learning from mistakes",title:"Every machine teaches the next one",
 chain:["Try","Mistake","*learned*","Better machine"],
 cards:[["Mars Climate Orbiter, 1999","One team used imperial units and another used metric, so the spacecraft was lost. Now teams cross-check every unit."],
 ["Sojourner beat its plan","It lasted far longer than the week planned, so NASA dared to build bigger, longer-lived rovers."],
 ["Voyager 1's glitch","In 2023 it sent unreadable data. Engineers fixed it from billions of kilometres away, and by April 2024 it worked again."],
 ["Spirit's memory glitch","Weeks after landing in 2004, Spirit kept restarting because its memory was full. Engineers fixed it from Earth and it drove for years."]]},
legacy:{c:"#ff5fa2",tag:"The legacy",title:"Still working. Still teaching.",
 cards:[["Still operating","Voyager 1 and 2 still send signals. NASA's Curiosity and Perseverance rovers still explore Mars, built on lessons from earlier rovers."],
 ["Still being used","Mirror panels left by Apollo astronauts still help scientists measure the distance to the Moon."],
 ["Still waiting","Sojourner and Pathfinder sit silent on Mars like time capsules, waiting for future explorers."]],
 final:'Machines we <mark data-w="left">left</mark> behind <mark data-w="rolled">rolled</mark> across Mars and kept <mark data-w="flying">flying</mark>, and what we <mark data-w="learned">learned</mark> helps us <mark data-w="explore">explore</mark> more.',
 quiz:[["Which part of Eagle stayed on the Moon?",["Ascent stage","Descent stage"],1],["What was Sojourner?",["A Mars rover","A Moon camera"],0],["How long was Opportunity planned to work?",["About 90 Mars days","About 15 years"],0],["Which spacecraft entered interstellar space in 2012?",["Voyager 1","Pathfinder"],0]]}},
// Home page stars: [name, kind, launched, ended, purpose, x%, y%]  (all NOT operational)
missions:[
["Eagle descent stage","Moon lander","16 Jul 1969 (Apollo 11)","21 Jul 1969, left on the Moon","Landed two astronauts on the Moon. Its landing stage was left behind.",30,52],
["Apollo 11 seismometer","Moon experiment","16 Jul 1969 (Apollo 11)","1969","Listened for moonquakes at the landing site.",22,22],
["Surveyor 3","Moon lander","1967","1967","A robot lander that scooped lunar soil. Apollo 12 astronauts later visited it.",40,30],
["Lunar Roving Vehicle","Moon rover","1971 (Apollo 15)","1972 (Apollo 17)","Three electric buggies that carried astronauts across the Moon.",48,58],
["Mariner 4","Mars flyby probe","1964","1967","The first spacecraft to fly past Mars and send back close-up pictures.",55,18],
["Viking 1","Mars lander","1975","1982","The first successful US Mars lander. It sent pictures and tested soil.",64,40],
["Pathfinder and Sojourner","Mars lander and rover","1996","1997","Tested low-cost landing and drove the first rover on Mars.",72,22],
["Mars Global Surveyor","Mars orbiter","1996","2006","Mapped Mars from orbit for nearly ten years.",80,48],
["Spirit","Mars rover","2003","2010","Found signs of ancient hot springs before getting stuck in sand.",88,28],
["Opportunity","Mars rover","2003","2018","Drove more than a marathon and found evidence of past water.",76,68],
["Pioneer 10","Deep-space probe","1972","2003","The first spacecraft to cross the asteroid belt and fly past Jupiter.",58,74],
["Pioneer 11","Deep-space probe","1973","1995","The first spacecraft to fly past Saturn.",92,60]]};
