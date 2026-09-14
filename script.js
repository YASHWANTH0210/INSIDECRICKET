const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.final-card');
const finalPhotos = { 1975: '1975.webp', 1979: '1979.jpeg', 1983: '1983.jpeg', 1987: '1987.jpg', 1992: '1992.webp', 1996: '1996.jpg', 1999: '1999.webp', 2003: '2003.jpg', 2007: '2007.webp', 2011: '2011.avif', 2015: '2015.webp', 2019: '2019.jpg', 2023: '2023.avif' };
const hosts = { 1975: 'England', 1979: 'England', 1983: 'England & Wales', 1987: 'India & Pakistan', 1992: 'Australia & New Zealand', 1996: 'India, Pakistan & Sri Lanka', 1999: 'England, Wales, Scotland, Ireland & the Netherlands', 2003: 'South Africa, Zimbabwe & Kenya', 2007: 'West Indies', 2011: 'India, Sri Lanka & Bangladesh', 2015: 'Australia & New Zealand', 2019: 'England & Wales', 2023: 'India' };

const worldCups = {
  1975: { dates: '7–21 June 1975', participants: ['Australia', 'East Africa', 'England', 'India', 'New Zealand', 'Pakistan', 'Sri Lanka', 'West Indies'], champion: 'West Indies', runnerUp: 'Australia', semiFinalists: 'England, New Zealand', batter: 'Glenn Turner (New Zealand)', runs: '333 runs', bowler: 'Gary Gilmour (Australia)', wickets: '11 wickets', player: 'No official award', venues: ['Lord’s, London', 'The Oval, London', 'Edgbaston, Birmingham', 'Headingley, Leeds', 'Old Trafford, Manchester', 'Trent Bridge, Nottingham'], source: 'ICC historical overview and supplied final summary' },
  1979: { dates: '9–23 June 1979', participants: ['Australia', 'Canada', 'England', 'India', 'New Zealand', 'Pakistan', 'Sri Lanka', 'West Indies'], champion: 'West Indies', runnerUp: 'England', semiFinalists: 'New Zealand, Pakistan', batter: 'Gordon Greenidge (West Indies)', runs: '253 runs', bowler: 'Mike Hendrick (England)', wickets: '10 wickets', player: 'No official award', venues: ['Lord’s, London', 'The Oval, London', 'Edgbaston, Birmingham', 'Old Trafford, Manchester', 'Trent Bridge, Nottingham', 'Headingley, Leeds'], source: 'ICC historical overview and supplied final summary' },
  1983: { dates: '9–25 June 1983', participants: ['Australia', 'England', 'India', 'New Zealand', 'Pakistan', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'India', runnerUp: 'West Indies', semiFinalists: 'England, Pakistan', batter: 'David Gower (England)', runs: '384 runs', bowler: 'Roger Binny (India)', wickets: '18 wickets', player: 'No official award', venues: ['Lord’s, London', 'Trent Bridge, Nottingham', 'Headingley, Leeds', 'The Oval, London', 'Edgbaston, Birmingham', 'County Ground, Derby', 'County Ground, Bristol', 'County Ground, Taunton', 'County Ground, Chelmsford', 'St Helen’s, Swansea', 'Grace Road, Leicester', 'Old Trafford, Manchester', 'County Ground, Southampton', 'New Road, Worcester', 'Nevill Ground, Tunbridge Wells'], source: 'ICC historical overview and supplied final summary' },
  1987: { dates: '8 October–8 November 1987', participants: ['Australia', 'England', 'India', 'New Zealand', 'Pakistan', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'Australia', runnerUp: 'England', semiFinalists: 'India, Pakistan', batter: 'Graham Gooch (England)', runs: '471 runs', bowler: 'Craig McDermott (Australia)', wickets: '18 wickets', player: 'No official award', venues: ['Eden Gardens, Kolkata', 'Wankhede Stadium, Mumbai', 'M. A. Chidambaram Stadium, Chennai', 'Lal Bahadur Shastri Stadium, Hyderabad', 'M. Chinnaswamy Stadium, Bengaluru', 'Nehru Stadium, Indore', 'Arun Jaitley Ground, Delhi', 'Sardar Patel Stadium, Ahmedabad', 'Sector 16 Stadium, Chandigarh', 'Barabati Stadium, Cuttack', 'Vidarbha Ground, Nagpur', 'Green Park, Kanpur', 'Sawai Mansingh Stadium, Jaipur', 'Nehru Stadium, Pune', 'Iqbal Stadium, Faisalabad', 'Municipal Stadium, Gujranwala', 'Niaz Stadium, Hyderabad', 'National Stadium, Karachi', 'Gaddafi Stadium, Lahore', 'Arbab Niaz Stadium, Peshawar', 'Pindi Club Ground, Rawalpindi'], source: 'ICC historical overview and supplied final summary' },
  1992: { dates: '22 February–25 March 1992', participants: ['Australia', 'England', 'India', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'Pakistan', runnerUp: 'England', semiFinalists: 'New Zealand, South Africa', batter: 'Martin Crowe (New Zealand)', runs: '456 runs', bowler: 'Wasim Akram (Pakistan)', wickets: '18 wickets', player: 'Martin Crowe (New Zealand)', venues: ['Adelaide Oval', 'Lavington Sports Oval, Albury', 'Eastern Oval, Ballarat', 'Berri Oval', 'The Gabba, Brisbane', 'Manuka Oval, Canberra', 'Bellerive Oval, Hobart', 'Ray Mitchell Oval, Mackay', 'Melbourne Cricket Ground', 'WACA Ground, Perth', 'Sydney Cricket Ground', 'Eden Park, Auckland', 'Lancaster Park, Christchurch', 'Carisbrook, Dunedin', 'Seddon Park, Hamilton', 'McLean Park, Napier', 'Pukekura Park, New Plymouth', 'Basin Reserve, Wellington'], source: 'ICC historical overview and supplied final summary' },
  1996: { dates: '14 February–17 March 1996', participants: ['Australia', 'England', 'India', 'Kenya', 'Netherlands', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka', 'United Arab Emirates', 'West Indies', 'Zimbabwe'], champion: 'Sri Lanka', runnerUp: 'Australia', semiFinalists: 'India, West Indies', batter: 'Sachin Tendulkar (India)', runs: '523 runs', bowler: 'Anil Kumble (India)', wickets: '15 wickets', player: 'Sanath Jayasuriya (Sri Lanka)', venues: ['India: 17 host grounds, including Eden Gardens, Wankhede, Feroz Shah Kotla, M. Chinnaswamy, M. A. Chidambaram, Green Park and PCA Stadium', 'Pakistan: National Stadium, Karachi', 'Pakistan: Gaddafi Stadium, Lahore', 'Pakistan: Rawalpindi Cricket Stadium', 'Pakistan: Arbab Niaz Stadium, Peshawar', 'Pakistan: Iqbal Stadium, Faisalabad', 'Pakistan: Jinnah Stadium, Gujranwala', 'Sri Lanka: R. Premadasa Stadium, Colombo', 'Sri Lanka: Sinhalese Sports Club, Colombo', 'Sri Lanka: Asgiriya Stadium, Kandy'], source: 'Tournament venue records and supplied final summary' },
  1999: { dates: '14 May–20 June 1999', participants: ['Australia', 'Bangladesh', 'England', 'India', 'Kenya', 'New Zealand', 'Pakistan', 'Scotland', 'South Africa', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'Australia', runnerUp: 'Pakistan', semiFinalists: 'New Zealand, South Africa', batter: 'Rahul Dravid (India)', runs: '461 runs', bowler: 'Geoff Allott (New Zealand)', wickets: '20 wickets', player: 'Lance Klusener (South Africa)', venues: ['Edgbaston, Birmingham', 'County Ground, Bristol', 'St Lawrence Ground, Canterbury', 'County Ground, Chelmsford', 'Riverside Ground, Chester-le-Street', 'County Ground, Derby', 'County Ground, Hove', 'Headingley, Leeds', 'Grace Road, Leicester', 'Lord’s, London', 'The Oval, London', 'Old Trafford, Manchester', 'County Ground, Northampton', 'Trent Bridge, Nottingham', 'County Ground, Southampton', 'County Ground, Taunton', 'New Road, Worcester', 'Sophia Gardens, Cardiff', 'The Grange Club, Edinburgh', 'Clontarf, Dublin', 'VRA Ground, Amstelveen'], source: 'Tournament venue records and supplied final summary' },
  2003: { dates: '9 February–23 March 2003', participants: ['Australia', 'Bangladesh', 'Canada', 'England', 'India', 'Kenya', 'Namibia', 'Netherlands', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'Australia', runnerUp: 'India', semiFinalists: 'Kenya, Sri Lanka', batter: 'Sachin Tendulkar (India)', runs: '673 runs', bowler: 'Chaminda Vaas (Sri Lanka)', wickets: '23 wickets', player: 'Sachin Tendulkar (India)', venues: ['Wanderers, Johannesburg', 'Kingsmead, Durban', 'Newlands, Cape Town', 'Centurion Park', 'Goodyear Park, Bloemfontein', 'St George’s Park, Port Elizabeth', 'North West Cricket Stadium, Potchefstroom', 'Buffalo Park, East London', 'De Beers Diamond Oval, Kimberley', 'Boland Park, Paarl', 'Willowmoore Park, Benoni', 'Pietermaritzburg Oval', 'Harare Sports Club', 'Queens Sports Club, Bulawayo', 'Nairobi Gymkhana Club'], source: 'Tournament venue records and supplied final summary' },
  2007: { dates: '13 March–28 April 2007', participants: ['Australia', 'Bangladesh', 'Bermuda', 'Canada', 'England', 'India', 'Ireland', 'Kenya', 'Netherlands', 'New Zealand', 'Pakistan', 'Scotland', 'South Africa', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'Australia', runnerUp: 'Sri Lanka', semiFinalists: 'New Zealand, South Africa', batter: 'Matthew Hayden (Australia)', runs: '659 runs', bowler: 'Glenn McGrath (Australia)', wickets: '26 wickets', player: 'Glenn McGrath (Australia)', venues: ['Kensington Oval, Barbados', 'Sabina Park, Jamaica', 'National Cricket Stadium, Grenada', 'Daren Sammy Stadium, Saint Lucia', 'Warner Park, Saint Kitts', 'Queen’s Park Oval, Trinidad', 'Sir Vivian Richards Stadium, Antigua', 'Providence Stadium, Guyana'], source: 'ICC historical overview and supplied final summary' },
  2011: { dates: '19 February–2 April 2011', participants: ['Australia', 'Bangladesh', 'Canada', 'England', 'India', 'Ireland', 'Kenya', 'Netherlands', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka', 'West Indies', 'Zimbabwe'], champion: 'India', runnerUp: 'Sri Lanka', semiFinalists: 'Pakistan, New Zealand', batter: 'Tillakaratne Dilshan (Sri Lanka)', runs: '500 runs', bowler: 'Shahid Afridi (Pakistan)', wickets: '21 wickets', player: 'Yuvraj Singh (India)', venues: ['Eden Gardens, Kolkata', 'M. A. Chidambaram Stadium, Chennai', 'Feroz Shah Kotla, Delhi', 'Vidarbha Stadium, Nagpur', 'Sardar Patel Stadium, Ahmedabad', 'Wankhede Stadium, Mumbai', 'PCA Stadium, Mohali', 'M. Chinnaswamy Stadium, Bengaluru', 'R. Premadasa Stadium, Colombo', 'Pallekele International Stadium, Kandy', 'Mahinda Rajapaksa Stadium, Sooriyawewa', 'Zahur Ahmed Chowdhury Stadium, Chittagong', 'Sher-e-Bangla Stadium, Dhaka'], source: 'ICC historical overview and supplied final summary' },
  2015: { dates: '14 February–29 March 2015', participants: ['Afghanistan', 'Australia', 'Bangladesh', 'England', 'India', 'Ireland', 'New Zealand', 'Pakistan', 'Scotland', 'South Africa', 'Sri Lanka', 'United Arab Emirates', 'West Indies', 'Zimbabwe'], champion: 'Australia', runnerUp: 'New Zealand', semiFinalists: 'India, South Africa', batter: 'Martin Guptill (New Zealand)', runs: '547 runs', bowler: 'Mitchell Starc (Australia)', wickets: '22 wickets', player: 'Mitchell Starc (Australia)', venues: ['Adelaide Oval', 'Bellerive Oval, Hobart', 'The Gabba, Brisbane', 'Manuka Oval, Canberra', 'Melbourne Cricket Ground', 'WACA Ground, Perth', 'Sydney Cricket Ground', 'Eden Park, Auckland', 'University Oval, Dunedin', 'Seddon Park, Hamilton', 'McLean Park, Napier', 'Saxton Oval, Nelson', 'Hagley Oval, Christchurch', 'Wellington Regional Stadium'], source: 'ICC historical overview and supplied final summary' },
  2019: { dates: '30 May–14 July 2019', participants: ['Afghanistan', 'Australia', 'Bangladesh', 'England', 'India', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka', 'West Indies'], champion: 'England', runnerUp: 'New Zealand', semiFinalists: 'Australia, India', batter: 'Rohit Sharma (India)', runs: '648 runs', bowler: 'Mitchell Starc (Australia)', wickets: '27 wickets', player: 'Kane Williamson (New Zealand)', venues: ['County Ground, Bristol', 'Sophia Gardens, Cardiff', 'Riverside Ground, Chester-le-Street', 'Edgbaston, Birmingham', 'Headingley, Leeds', 'Lord’s, London', 'Old Trafford, Manchester', 'The Oval, London', 'County Ground, Taunton', 'Trent Bridge, Nottingham', 'Hampshire Bowl, Southampton'], source: 'ICC historical overview and supplied final summary' },
  2023: { dates: '5 October–19 November 2023', participants: ['Afghanistan', 'Australia', 'Bangladesh', 'England', 'India', 'Netherlands', 'New Zealand', 'Pakistan', 'South Africa', 'Sri Lanka'], champion: 'Australia', runnerUp: 'India', semiFinalists: 'New Zealand, South Africa', batter: 'Virat Kohli (India)', runs: '765 runs', bowler: 'Mohammed Shami (India)', wickets: '24 wickets', player: 'Virat Kohli (India)', venues: ['Narendra Modi Stadium, Ahmedabad', 'M. Chinnaswamy Stadium, Bengaluru', 'M. A. Chidambaram Stadium, Chennai', 'Arun Jaitley Stadium, Delhi', 'HPCA Stadium, Dharamsala', 'Rajiv Gandhi Stadium, Hyderabad', 'Eden Gardens, Kolkata', 'BRSABV Ekana Stadium, Lucknow', 'Wankhede Stadium, Mumbai', 'MCA Stadium, Pune'], source: 'ICC Cricket World Cup 2023 venue guide and supplied final summary' }
};

const modal = document.createElement('div');
modal.className = 'modal-backdrop';
modal.innerHTML = '<section class="tournament-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-top"><div><p class="eyebrow">Tournament profile</p><h2 id="modal-title"></h2><p id="modal-subtitle"></p></div><button class="modal-close" aria-label="Close tournament details">×</button></div><div class="modal-body"><div class="detail-grid"><article class="detail-card"><h3>Final standings</h3><div class="standings" id="modal-standings"></div></article><article class="detail-card"><h3>Individual leaders</h3><div class="leader-grid" id="modal-leaders"></div></article><article class="detail-card venues-card"><h3>Host venues</h3><div class="venue-list" id="modal-venues"></div></article><article class="detail-card participants-card"><h3>Participating countries <small id="participant-count"></small></h3><div class="participant-list" id="modal-participants"></div></article></div><p class="modal-source" id="modal-source"></p></div></section>';
document.body.append(modal);

function openDetails(year) {
  const cup = worldCups[year];
  document.getElementById('modal-title').textContent = `${year} World Cup`;
  document.getElementById('modal-subtitle').textContent = `${cup.dates} · Hosted by ${hosts[year]}.`;
  document.getElementById('modal-standings').innerHTML = `<div class="standing"><span>Champions</span><strong>${cup.champion}</strong></div><div class="standing"><span>Runners-up</span><strong>${cup.runnerUp}</strong></div><div class="standing"><span>Semi-finalists</span><strong>${cup.semiFinalists}</strong></div><div class="standing"><span>Host country / region</span><strong>${hosts[year]}</strong></div>`;
  document.getElementById('modal-leaders').innerHTML = `<div class="leader"><span>Most runs</span><strong>${cup.batter}</strong><small>${cup.runs}</small></div><div class="leader"><span>Most wickets</span><strong>${cup.bowler}</strong><small>${cup.wickets}</small></div><div class="leader"><span>Player of tournament</span><strong>${cup.player}</strong><small>Official award where awarded</small></div>`;
  document.getElementById('modal-venues').innerHTML = cup.venues.map((venue) => `<span class="venue">${venue}</span>`).join('');
  document.getElementById('participant-count').textContent = `(${cup.participants.length})`;
  document.getElementById('modal-participants').innerHTML = cup.participants.map((country) => `<span class="participant">${country}</span>`).join('');
  document.getElementById('modal-source').textContent = `Data note: ${cup.source}.`;
  modal.classList.add('open');
  modal.querySelector('.modal-close').focus();
}

function closeDetails() { modal.classList.remove('open'); }

cards.forEach((card) => {
  const year = card.querySelector('.final-year').textContent.trim();
  const photo = document.createElement('img');
  photo.className = 'final-photo';
  photo.src = `assets/finals/${finalPhotos[year]}`;
  photo.alt = `${year} Cricket World Cup champions lifting the trophy`;
  photo.loading = 'lazy';
  card.firstElementChild.prepend(photo);
  const trigger = document.createElement('button');
  trigger.className = 'detail-trigger';
  trigger.textContent = 'Tournament details';
  trigger.addEventListener('click', () => openDetails(year));
  card.firstElementChild.append(trigger);
});

modal.addEventListener('click', (event) => { if (event.target === modal || event.target.closest('.modal-close')) closeDetails(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDetails(); });

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const decade = filter.dataset.decade;
    filters.forEach((item) => item.classList.toggle('active', item === filter));
    cards.forEach((card) => card.classList.toggle('hidden', decade !== 'all' && card.dataset.decade !== decade));
  });
});

// Comprehensive Stadium Database with Format-Wise Scores & Unique Venue Images
const directoryStadiums = {
  'lords': { 
    name: "Lord's Cricket Ground", country: "England", loc: "London, England", cap: "31,000 Seats", bounds: "Sq: 65m | Str: 75m", 
    testScore: "315 Runs", odiScore: "262 Runs", t20Score: "175 Runs", pitch: "Balanced & Slopes", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Established in 1814 and owned by Marylebone Cricket Club (MCC), Lord's is known as the 'Home of Cricket' featuring a famous sloping outfield." 
  },
  'oval': { 
    name: "The Oval", country: "England", loc: "London, England", cap: "27,500 Seats", bounds: "Sq: 67m | Str: 73m", 
    testScore: "320 Runs", odiScore: "250 Runs", t20Score: "164 Runs", pitch: "Good Carry & Spin Later", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "The first ground in England to host Test cricket back in 1880, renowned for traditional end-of-summer matches." 
  },
  'edgbaston': { 
    name: "Edgbaston Stadium", country: "England", loc: "Birmingham, England", cap: "25,000 Seats", bounds: "Sq: 66m | Str: 74m", 
    testScore: "312 Runs", odiScore: "258 Runs", t20Score: "170 Runs", pitch: "Balanced & Swing", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Known for having one of the most electric, roaring atmospheres in English international cricket." 
  },
  'headingley': { 
    name: "Headingley Cricket Ground", country: "England", loc: "Leeds, England", cap: "18,350 Seats", bounds: "Sq: 64m | Str: 72m", 
    testScore: "298 Runs", odiScore: "252 Runs", t20Score: "168 Runs", pitch: "Seamer Friendly", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Famous for dramatic Test match finishes, historic comebacks, and passionate Yorkshire crowds." 
  },
  'oldtrafford': { 
    name: "Old Trafford Cricket Ground", country: "England", loc: "Manchester, England", cap: "26,000 Seats", bounds: "Sq: 68m | Str: 76m", 
    testScore: "320 Runs", odiScore: "265 Runs", t20Score: "173 Runs", pitch: "Pace & Bounce", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Historic venue hosting major international fixtures, legendary Ashes battles, and brilliant swing bowling." 
  },
  'trentbridge': { 
    name: "Trent Bridge", country: "England", loc: "Nottingham, England", cap: "17,500 Seats", bounds: "Sq: 63m | Str: 71m", 
    testScore: "325 Runs", odiScore: "295 Runs", t20Score: "185 Runs", pitch: "Swing & Batting Friendly", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Renowned for favoring seam movement early on before flattening out into a high-scoring run paradise." 
  },
  'mcg': { 
    name: "Melbourne Cricket Ground (MCG)", country: "Australia", loc: "Melbourne, Australia", cap: "100,024 Seats", bounds: "Sq: 84m | Str: 86m", 
    testScore: "340 Runs", odiScore: "278 Runs", t20Score: "168 Runs", pitch: "Pace & True Bounce", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "The largest stadium in the Southern Hemisphere, legendary for hosting major global cricket finals and packed crowds." 
  },
  'scg': { 
    name: "Sydney Cricket Ground (SCG)", country: "Australia", loc: "Sydney, Australia", cap: "48,000 Seats", bounds: "Sq: 82m | Str: 76m", 
    testScore: "325 Runs", odiScore: "260 Runs", t20Score: "166 Runs", pitch: "Famous for Spin Support", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Steeped in historical charm with its iconic members' pavilion, traditionally offering assistance to slow turners." 
  },
  'optus': { 
    name: "Optus Stadium", country: "Australia", loc: "Perth, Australia", cap: "60,000 Seats", bounds: "Sq: 78m | Str: 82m", 
    testScore: "340 Runs", odiScore: "275 Runs", t20Score: "168 Runs", pitch: "Extra Pace & Bounce", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "State-of-the-art modern venue offering formidable pace and bounce for fast bowlers." 
  },
  'gabba': { 
    name: "The Gabba", country: "Australia", loc: "Brisbane, Australia", cap: "42,000 Seats", bounds: "Sq: 77m | Str: 81m", 
    testScore: "345 Runs", odiScore: "264 Runs", t20Score: "165 Runs", pitch: "Green Top & Bounce", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Australia's traditional fortress with fiery pitches and steep bounce." 
  },
  'adelaide': { 
    name: "Adelaide Oval", country: "Australia", loc: "Adelaide, Australia", cap: "53,500 Seats", bounds: "Sq: 75m | Str: 95m", 
    testScore: "355 Runs", odiScore: "276 Runs", t20Score: "171 Runs", pitch: "Batting Friendly / Spin Later", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Stunning blend of heritage and modern architecture with very long straight boundaries." 
  },
  'eden': { 
    name: "Eden Gardens", country: "India", loc: "Kolkata, India", cap: "66,000 Seats", bounds: "Sq: 68m | Str: 72m", 
    testScore: "350 Runs", odiScore: "255 Runs", t20Score: "165 Runs", pitch: "Turning Track / Grip", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "The Colosseum of Indian cricket with a roaring fan base and a rich history of iconic Test matches and nail-biting finishes." 
  },
  'wankhede': { 
    name: "Wankhede Stadium", country: "India", loc: "Mumbai, India", cap: "33,108 Seats", bounds: "Sq: 64m | Str: 69m", 
    testScore: "330 Runs", odiScore: "285 Runs", t20Score: "182 Runs", pitch: "Batting Paradise / Dew", 
    img: "https://images.unsplash.com/photo-1624880357599-a41951c243bc?auto=format&fit=crop&w=1400&q=80", 
    desc: "Famous for its sea breeze assisting swing early on, and its electric batting atmosphere where India won the 2011 World Cup." 
  },
  'm_chinaswamy': { 
    name: "M. Chinnaswamy Stadium", country: "India", loc: "Bengaluru, India", cap: "40,000 Seats", bounds: "Sq: 62m | Str: 68m", 
    testScore: "300 Runs", odiScore: "290 Runs", t20Score: "190 Runs", pitch: "High Scoring / Flat", 
    img: "https://images.unsplash.com/photo-1624880357599-a41951c243bc?auto=format&fit=crop&w=1400&q=80", 
    desc: "Located in the heart of the garden city, famous for short boundaries, high-octane run chases, and passionate crowds." 
  },
  'narendra_modi': { 
    name: "Narendra Modi Stadium", country: "India", loc: "Ahmedabad, India", cap: "132,000 Seats", bounds: "Sq: 75m | Str: 80m", 
    testScore: "335 Runs", odiScore: "272 Runs", t20Score: "178 Runs", pitch: "Red & Black Soil Mix", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "The largest cricket stadium globally, featuring modern LED halo lights and multiple flexible pitch strips." 
  },
  'chepauk': { 
    name: "M.A. Chidambaram Stadium", country: "India", loc: "Chennai, India", cap: "50,000 Seats", bounds: "Sq: 66m | Str: 70m", 
    testScore: "340 Runs", odiScore: "245 Runs", t20Score: "162 Runs", pitch: "Dry & Spin-Friendly", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "One of India's oldest venues known for its knowledgeable crowd and traditional gripping surfaces for spinners." 
  },
  'arun_jaitley': { 
    name: "Arun Jaitley Stadium", country: "India", loc: "Delhi, India", cap: "40,000 Seats", bounds: "Sq: 62m | Str: 68m", 
    testScore: "340 Runs", odiScore: "280 Runs", t20Score: "175 Runs", pitch: "Low & Slow / Spin", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "Historical venue in the capital with traditionally sluggish surfaces helpful for spinners." 
  },
  'rajiv_gandhi': { 
    name: "Rajiv Gandhi Stadium", country: "India", loc: "Hyderabad, India", cap: "55,000 Seats", bounds: "Sq: 67m | Str: 73m", 
    testScore: "350 Runs", odiScore: "290 Runs", t20Score: "180 Runs", pitch: "True Bounce / Batting", 
    img: "https://images.unsplash.com/photo-1624880357599-a41951c243bc?auto=format&fit=crop&w=1400&q=80", 
    desc: "Modern stadium featuring excellent drainage and true bounce supporting big totals." 
  },
  'hpca_dharamshala': { 
    name: "HPCA Stadium", country: "India", loc: "Dharamshala, India", cap: "23,000 Seats", bounds: "Sq: 64m | Str: 70m", 
    testScore: "280 Runs", odiScore: "260 Runs", t20Score: "168 Runs", pitch: "High Altitude Seam", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "Picturesque ground nestled in the Himalayas with snow-capped mountain backdrops and swing assistance." 
  },
  'gaddafi': { 
    name: "Gaddafi Stadium", country: "Pakistan", loc: "Lahore, Pakistan", cap: "27,000 Seats", bounds: "Sq: 69m | Str: 74m", 
    testScore: "360 Runs", odiScore: "282 Runs", t20Score: "176 Runs", pitch: "Batting Friendly Track", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Designed by renowned architect Nayyar Ali Dada, this venue stands as a fortress of Pakistan cricket." 
  },
  'national_stadium': { 
    name: "National Stadium", country: "Pakistan", loc: "Karachi, Pakistan", cap: "34,228 Seats", bounds: "Sq: 68m | Str: 74m", 
    testScore: "350 Runs", odiScore: "270 Runs", t20Score: "170 Runs", pitch: "Flat & Batting Friendly", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "One of Pakistan's principal cricket fortresses with passionate crowds." 
  },
  'rawalpindi': { 
    name: "Rawalpindi Cricket Stadium", country: "Pakistan", loc: "Rawalpindi, Pakistan", cap: "15,000 Seats", bounds: "Sq: 66m | Str: 72m", 
    testScore: "365 Runs", odiScore: "285 Runs", t20Score: "178 Runs", pitch: "Pace & Batting Track", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Renowned venue hosting exciting limited-overs and Test showdowns." 
  },
  'wanderers': { 
    name: "The Wanderers Stadium", country: "South Africa", loc: "Johannesburg, South Africa", cap: "34,000 Seats", bounds: "Sq: 68m | Str: 78m", 
    testScore: "310 Runs", odiScore: "270 Runs", t20Score: "172 Runs", pitch: "Pace, Bounce & Altitude", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Nicknamed 'The Bullring', high altitude helps the ball travel further, making it a thrilling arena for fast bowling." 
  },
  'superport': { 
    name: "SuperSport Park", country: "South Africa", loc: "Centurion, South Africa", cap: "22,000 Seats", bounds: "Sq: 67m | Str: 75m", 
    testScore: "320 Runs", odiScore: "275 Runs", t20Score: "174 Runs", pitch: "Fast & Bouncy", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Exceptional modern stadium offering high bounce and energetic spectator vibe." 
  },
  'newlands': { 
    name: "Newlands", country: "South Africa", loc: "Cape Town, South Africa", cap: "25,000 Seats", bounds: "Sq: 65m | Str: 72m", 
    testScore: "310 Runs", odiScore: "260 Runs", t20Score: "165 Runs", pitch: "Scenic & Balanced", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Widely regarded as one of the most scenic cricket grounds in the world under Table Mountain." 
  },
  'eden_park': { 
    name: "Eden Park", country: "New Zealand", loc: "Auckland, New Zealand", cap: "50,000 Seats", bounds: "Sq: 55m | Str: 65m", 
    testScore: "290 Runs", odiScore: "265 Runs", t20Score: "180 Runs", pitch: "Short Boundaries / Flat", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Famous for its oval-rugby shape and very short boundaries leading to high-scoring thrillers." 
  },
  'hagley_oval': { 
    name: "Hagley Oval", country: "New Zealand", loc: "Christchurch, New Zealand", cap: "18,000 Seats", bounds: "Sq: 68m | Str: 74m", 
    testScore: "310 Runs", odiScore: "255 Runs", t20Score: "165 Runs", pitch: "Green & Seamer Friendly", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "Picturesque parkground offering great carry and traditional swing conditions." 
  },
  'basin_reserve': { 
    name: "Basin Reserve", country: "New Zealand", loc: "Wellington, New Zealand", cap: "11,600 Seats", bounds: "Sq: 72m | Str: 70m", 
    testScore: "305 Runs", odiScore: "235 Runs", t20Score: "158 Runs", pitch: "Windy & Seamer Friendly", 
    img: "https://images.unsplash.com/photo-1512716507519-7ac80524c94f?auto=format&fit=crop&w=1400&q=80", 
    desc: "A historic Test venue shaped like a basin, famous for stiff southerly winds and traditional swinging conditions." 
  },
  'kensington': { 
    name: "Kensington Oval", country: "West Indies", loc: "Bridgetown, Barbados", cap: "28,000 Seats", bounds: "Sq: 70m | Str: 76m", 
    testScore: "295 Runs", odiScore: "240 Runs", t20Score: "155 Runs", pitch: "Seam, Bounce & Pace", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "The Mecca of Caribbean cricket, hosting legendary achievements by West Indies pace batteries across generations." 
  },
  'queen_park_oval': { 
    name: "Queen's Park Oval", country: "West Indies", loc: "Trinidad and Tobago", cap: "20,000 Seats", bounds: "Sq: 66m | Str: 73m", 
    testScore: "300 Runs", odiScore: "245 Runs", t20Score: "158 Runs", pitch: "Low Bounce & Spin", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Historic Trinidadian ground with passionate Caribbean carnival atmosphere." 
  },
  'r_premadasa': { 
    name: "R. Premadasa Stadium", country: "Sri Lanka", loc: "Colombo, Sri Lanka", cap: "35,000 Seats", bounds: "Sq: 65m | Str: 71m", 
    testScore: "315 Runs", odiScore: "250 Runs", t20Score: "162 Runs", pitch: "Spin Friendly & Slow", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "Primary floodlit venue in Sri Lanka known for gripping pitches and passionate crowds." 
  },
  'galle': { 
    name: "Galle International Stadium", country: "Sri Lanka", loc: "Galle, Sri Lanka", cap: "15,000 Seats", bounds: "Sq: 60m | Str: 66m", 
    testScore: "320 Runs", odiScore: "248 Runs", t20Score: "160 Runs", pitch: "Spin Wizardry Paradise", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "Flanked by the historic Dutch Fort and Indian Ocean on two sides, it is one of the most picturesque grounds in world sport." 
  },
  'shere_bangla': { 
    name: "Sher-e-Bangla Stadium", country: "Bangladesh", loc: "Mirpur, Bangladesh", cap: "25,000 Seats", bounds: "Sq: 63m | Str: 69m", 
    testScore: "290 Runs", odiScore: "240 Runs", t20Score: "152 Runs", pitch: "Low Scoring & Turning", 
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1400&q=80", 
    desc: "Iconic cauldron of Bangladeshi cricket with loud crowds and spin-oriented tracks." 
  },
  'dubai_intl': { 
    name: "Dubai International Stadium", country: "UAE", loc: "Dubai, UAE", cap: "25,000 Seats", bounds: "Sq: 68m | Str: 75m", 
    testScore: "325 Runs", odiScore: "258 Runs", t20Score: "164 Runs", pitch: "Balanced / Ring of Fire Lights", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Modern venue featuring the unique 'Ring of Fire' lighting towers and evening dew factor." 
  },
  'sharjah': { 
    name: "Sharjah Cricket Stadium", country: "UAE", loc: "Sharjah, UAE", cap: "16,000 Seats", bounds: "Sq: 60m | Str: 67m", 
    testScore: "280 Runs", odiScore: "235 Runs", t20Score: "158 Runs", pitch: "Compact & Slow Track", 
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80", 
    desc: "Guinness World Record holder for hosting the most One Day Internationals." 
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const dirSelect = document.getElementById('dir-sel-stadium');
  console.log("Stadium selector found:", dirSelect); // Check if this prints in your console
  
  if(dirSelect) {
    dirSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      console.log("Selected stadium value:", val); // Check if this prints when you change options
      
      const data = directoryStadiums[val];
      if(data) {
        document.getElementById('dir-title').textContent = data.name;
        document.getElementById('dir-country-badge').textContent = data.country;
        document.getElementById('dir-loc').textContent = data.loc;
        document.getElementById('dir-capacity').textContent = data.cap;
        document.getElementById('dir-boundaries').textContent = data.bounds;
        document.getElementById('dir-test-score').textContent = data.testScore;
        document.getElementById('dir-odi-score').textContent = data.odiScore;
        document.getElementById('dir-t20-score').textContent = data.t20Score;
        document.getElementById('dir-pitch').textContent = data.pitch;
        document.getElementById('dir-desc').textContent = data.desc;
        document.getElementById('dir-bg').style.backgroundImage = `url('${data.img}')`;
        document.getElementById('dir-thumb').src = data.img;
      } else {
        console.warn("No data found for stadium key:", val);
      }
    });
  }
});


