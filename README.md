# Static narrative-mystery reel

This is a complete static version of max-mccormick.com plus the narrative-mystery reel. It uses plain HTML and one shared CSS file: no TypeScript, React, packages, compilation, or build action.

## Files

    index.html
    assets/
      css/
        site.css
    reels/
      narrative-mystery/
        index.html

Copy the contents into the existing repository. The included root index.html reproduces the current home page using the same shared stylesheet as the reel. The reel will then be available at:

    https://max-mccormick.com/reels/narrative-mystery/

## Update the Recent section

The home page contains a short Recent section rather than a permanent portfolio. Add the newest item above the existing entries using the commented example in index.html, and remove older entries when they no longer feel current.

The page contains noindex and nofollow metadata, so cooperative search engines should not list it. The URL remains unlisted rather than access-controlled: anyone who receives the link can open it.

## Replace the media

In reels/narrative-mystery/index.html, replace:

- VIDEO_ID_MAIN
- VIDEO_ID_SECONDARY_1
- VIDEO_ID_SECONDARY_2
- SOUNDCLOUD_PLAYLIST_ID

For YouTube, the video ID is the part after youtu.be/ or after watch?v=.

For SoundCloud, the most reliable approach is to open the playlist, choose Share → Embed, and replace the complete src value of the SoundCloud iframe with the URL from SoundCloud's generated embed.

## Company-specific variants

Copy the reel directory and rename it:

    reels/
      narrative-mystery/
      narrative-mystery-cobalt-lane/
      narrative-mystery-lost-lantern/

Each directory becomes a separately measurable URL. Change only the introduction or media selection when useful; assets/css/site.css stays unchanged.

## Analytics

GitHub repository traffic is useful only as a rough check: it covers the previous 14 days and is not intended as durable per-reel outreach analytics.

Recommended setup: Cloudflare Web Analytics. It is free and can monitor a GitHub Pages custom domain without moving DNS or proxying the site.

1. Create a Cloudflare account and open Web Analytics.
2. Add max-mccormick.com.
3. Copy the generated JavaScript snippet.
4. Paste it into each reel page at the marked analytics location immediately before the closing body tag.
5. Publish the change to GitHub Pages.

Cloudflare will distinguish company variants by their page paths. Because the reel paths themselves identify the target, no personal information needs to be put into query parameters.

Analytics is evidence that a URL was loaded, not proof that a particular recipient personally viewed it. Email security scanners and link-preview services can generate visits.

## Local preview

Double-clicking index.html will usually work, but embedded media can behave differently on local file pages. A small local web server is more faithful:

    python3 -m http.server 8000

Then open:

    http://localhost:8000/reels/narrative-mystery/
