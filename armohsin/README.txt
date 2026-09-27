M.M. VOHRA — CLOUDFLARE PAGES UPLOAD
=====================================

THIS FOLDER IS READY TO DEPLOY.

FASTEST WAY
1. Sign in to Cloudflare.
2. Open Workers & Pages.
3. Create a Pages project using Direct Upload / drag-and-drop.
4. Upload this entire folder (or extract the ZIP first and upload the folder).
5. Deploy.

CUSTOM DOMAIN
After the temporary *.pages.dev site works:
1. Open the Pages project.
2. Go to Custom domains.
3. Add armohsin.com.
4. Follow Cloudflare's DNS instructions.

HOW THE HERO WORKS
- First-ever visit in a browser: hero-01.
- Later reloads/visits: chooses another media item.
- It never repeats the previous item when there is more than one.
- With only two images, this means they alternate.
- The image always touches all four browser edges using object-fit: cover.
- It automatically adapts to desktop, tablet and mobile sizes.

ADD MORE IMAGES
1. Put the new file inside /assets.
2. Open site.js.
3. Add another line inside HERO_MEDIA, for example:
   { type: 'image', src: 'assets/hero-03.jpg', position: 'center' },

ADD A VIDEO
1. Put a compressed MP4 in /assets.
2. Add this in site.js:
   { type: 'video', src: 'assets/hero-video.mp4', position: 'center' },
3. Keep the video muted for reliable autoplay.

CHANGE THE CROP / FOCUS
In site.js, change position for a media item:
- 'center'
- 'center top'
- '40% center'
- '70% center'

CHANGE NAME OR TEXT
Open index.html and edit:
- M.M. VOHRA
- Architecture / Design
- About text

IMPORTANT
Do not upload only index.html. Upload the whole folder so styles.css,
site.js, favicon.svg and the assets folder are included.
