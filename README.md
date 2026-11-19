# Miezeer PR — hand-coded preview

Static rebuild of https://pr.miezeer.media (Miezeer Press and Media). Plain HTML, CSS and vanilla JS. No WordPress, no build step.

- Preview: https://miezeer-tech.github.io/miezeer-pr/
- `index.html` is the whole site (one page with anchors). `css/styles.css` holds the design tokens at the top. `js/main.js` runs the mobile menu and scroll reveals.
- **Preview only.** `index.html` has `<meta name="robots" content="noindex, nofollow">`. Remove it (and update the canonical/OG URLs) when this goes live. The live WordPress site has not been touched.

## Editing packages
Each tier is one `<article class="tier">` inside `#packages`. Each add-on is one `<li class="addon">` inside `#add-ons`. Change the text and the price line in place.

## Prices
Starting prices were set Nov 19, 2026 from 2025–2026 market research. The rationale and sources are in `PRICING-NOTES.md`, which isn't linked from the site.

## ⚠️ Still to confirm with Aaron
1. **Deliverable counts and timelines** in each tier (5 outlets per release, 3 and 6 features, 1–2 / 2–4 / 4–8 weeks). These are honest ranges but need his sign-off.
2. **Discovery call.** There's no booking link, so "Book a discovery call" is a `mailto:press@miezeer.media` with the subject "Discovery call request". Swap in a Calendly or similar link when one exists.
3. **NBK and Artist Uncut social pages.** There are no links to them yet, and the follower counts are unknown, so the $197 price could be low.
4. **FAQ answers.** Written from the old site's process. Aaron should confirm, especially the "you approve every piece" promise.
5. **Black Vine News, Varys Hollywood, Lifentimez** are listed without links: blackvine.news returned a blank page, and varyshollywood.com / lifentimez.com failed to connect on Nov 18, 2026.
6. **"Run an outlet? Partner with us."** tile is a mailto to press@miezeer.media.

## Content sources (all real)
- Copy, services, process, contact (press@miezeer.media, Hollywood Boulevard, LA) and the Deborah Pratt testimonial come from pr.miezeer.media.
- Intake: Typeform https://form.typeform.com/to/DqjB2T0G ("Miezeer Media PR", verified loading).
- Logo: MZR "Press and Media" wordmark from pr.miezeer.media (yellow #FFCC00).
- Covers: the "Our WORK" gallery on pr.miezeer.media/promo/.
- Proof: published articles found on Mogul StartUp, Nuntium, CEO in Her, WE Mag, Bleed, Artist Uncut and Black Media Zone.
- Socials: Instagram @miezeer and facebook.com/miezeertech (linked from www.miezeer.media). The YouTube channel @miezeertech has no videos, and no X/Twitter URL was found, so both are left out.
- Outlet icons are each site's own favicon or logo.
