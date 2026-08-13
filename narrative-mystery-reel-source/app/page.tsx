const youtubeEmbed =
  "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0&modestbranding=1";

const soundcloudEmbed =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308845709&color=%23111111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false";

function Video({ title }: { title: string }) {
  return (
    <div className="video-frame">
      <iframe src={youtubeEmbed} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <header className="masthead">
          <a className="name" href="https://max-mccormick.com">Max McCormick</a>
          <p>Composer for games and film</p>
        </header>

        <section className="introduction" aria-labelledby="page-title">
          <p className="eyebrow">Selected work · Narrative mystery</p>
          <h1 id="page-title">Music for stories that reveal themselves slowly.</h1>
          <p className="lede">A short selection of atmospheric, character-led work—music shaped around ambiguity, place, and the quiet machinery of a narrative.</p>
        </section>

        <section className="feature" aria-labelledby="hitchhiker-title">
          <Video title="Hitchhiker — A Mystery Game trailer" />
          <div className="caption">
            <div>
              <h2 id="hitchhiker-title">Hitchhiker — A Mystery Game</h2>
              <p>Official trailer · Theme music by Max McCormick</p>
            </div>
            <p className="duration">1:28</p>
          </div>
          <p className="context">A journey along lost highways in which conversations, landscapes, and small inconsistencies gradually disclose a larger mystery.</p>
        </section>

        <section className="supporting" aria-labelledby="supporting-title">
          <div className="section-heading">
            <p className="eyebrow">Further scenes</p>
            <h2 id="supporting-title">Different tensions, the same world.</h2>
          </div>
          <div className="clip-list">
            <article className="clip">
              <Video title="Narrative scene — supporting clip one" />
              <div className="caption">
                <div><h3>Scene title</h3><p>Dialogue scene · restrained unease</p></div>
                <p className="duration">0:54</p>
              </div>
            </article>
            <article className="clip">
              <Video title="Narrative scene — supporting clip two" />
              <div className="caption">
                <div><h3>Scene title</h3><p>Environmental sequence · slow discovery</p></div>
                <p className="duration">1:12</p>
              </div>
            </article>
          </div>
        </section>

        <section className="listen" aria-labelledby="listen-title">
          <div className="section-heading">
            <p className="eyebrow">Listen separately</p>
            <h2 id="listen-title">Selected cues</h2>
          </div>
          <iframe className="soundcloud" title="Selected narrative mystery cues on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" src={soundcloudEmbed} loading="lazy" />
          <p className="small-note">Three cues presented without dialogue or game audio. Headphones recommended.</p>
        </section>

        <footer>
          <p>I’m particularly interested in projects where music is treated as integral to the game experience.</p>
          <div className="links">
            <a href="mailto:max@max-mccormick.com">→ Email</a>
            <a href="https://max-mccormick.com">max-mccormick.com</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
