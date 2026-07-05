// breaking-news ticker content, duplicated for seamless loop
const items = [
  "Coalition parties agree on new fiscal framework after marathon budget talks",
  "NEPSE closes above 2,600 as hydropower stocks rally on new export deal",
  "Nepal edges past Hong Kong in a tense finish at the ACC Cup qualifiers",
  "Monsoon floods displace thousands across the eastern Terai plains",
  "Central bank holds policy rate steady, cites easing inflation"
];
const track = document.getElementById('tickerTrack');
const html = items.map(t => `<span>${t}</span>`).join('<span style="opacity:.4">&nbsp;&nbsp;•&nbsp;&nbsp;</span>');
track.innerHTML = html + '<span style="opacity:.4">&nbsp;&nbsp;•&nbsp;&nbsp;</span>' + html;

// mobile menu toggle scrolls the nav links into a wrapped state
const toggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');
toggle.addEventListener('click', () => {
  navlinks.style.flexWrap = navlinks.style.flexWrap === 'wrap' ? 'nowrap' : 'wrap';
  navlinks.style.overflow = navlinks.style.flexWrap === 'wrap' ? 'visible' : 'auto';
});

// respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.ticker-track, .pulse').forEach(el => el.style.animation = 'none');
}
