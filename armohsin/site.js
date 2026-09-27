/*
  SIMPLE EDIT AREA
  Add more items to HERO_MEDIA when you have more images/videos.
  Image example: { type: 'image', src: 'assets/my-image.webp', position: 'center' }
  Video example: { type: 'video', src: 'assets/hero-video.mp4', position: 'center' }
*/
const HERO_MEDIA = [
  { type: 'image', src: 'assets/hero-01.webp', position: 'center' },
  { type: 'image', src: 'assets/hero-02.webp', position: 'center' }
];

const STORAGE_KEY = 'armohsin.hero.state.v2';
const host = document.getElementById('heroMedia');

function getState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch (_) {
    return null;
  }
}

function saveState(index) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ visited: true, lastIndex: index }));
  } catch (_) {}
}

function chooseIndex() {
  const state = getState();

  // First-ever visit on this browser: always show the first image.
  if (!state || state.visited !== true) {
    saveState(0);
    return 0;
  }

  // Later visits/reloads: pick any item except the one shown last time.
  let choices = HERO_MEDIA.map((_, i) => i).filter(i => i !== state.lastIndex);
  if (!choices.length) choices = [0];

  const index = choices[Math.floor(Math.random() * choices.length)];
  saveState(index);
  return index;
}

function show(item) {
  let el;

  if (item.type === 'video') {
    el = document.createElement('video');
    el.muted = true;
    el.autoplay = true;
    el.loop = true;
    el.playsInline = true;
    el.preload = 'metadata';
    el.src = item.src;
    el.style.objectPosition = item.position || 'center';
    el.addEventListener('canplay', () => {
      el.classList.add('is-ready');
      el.play().catch(() => {});
    }, { once: true });
  } else {
    el = document.createElement('img');
    el.alt = '';
    el.decoding = 'async';
    el.src = item.src;
    el.style.objectPosition = item.position || 'center';
    el.addEventListener('load', () => el.classList.add('is-ready'), { once: true });
  }

  host.replaceChildren(el);
}

show(HERO_MEDIA[chooseIndex()]);
