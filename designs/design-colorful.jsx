/* Design 12 — Creative & Colorful
 * Recent creative aesthetic — saturated palette, playful shapes, mixed type.
 * Cream base with color-block sections, sticker-like badges, big geometric punctuation.
 * Inspired by Stripe Press / Spotify / MoMA / contemporary editorial.
 */

const colorfulTokens = {
  bg: '#FFF7EB',
  ink: '#0F0F0F',
  inkSoft: '#454545',
  inkFaint: '#8E8881',
  rule: '#0F0F0F',
  // saturated palette
  lime:   '#C8FF3D',
  hot:    '#FF3D78',
  blue:   '#3D5BFF',
  yellow: '#FFD43D',
  lavender: '#C8A8FF',
  mint:   '#5EE6B0',
  cream:  '#FBF0DC',
  display: '"Archivo Black", "Anton", "Helvetica Neue", sans-serif',
  sans: '"Inter", system-ui, sans-serif',
  serif: '"Newsreader", Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function ColorfulDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = colorfulTokens;

  // Reusable sticker-shape SVGs
  const Squiggle = ({ color, width = 80, height = 16, style }) => (
    <svg viewBox="0 0 80 16" width={width} height={height} style={style}>
      <path d="M 2 8 Q 10 1 18 8 T 34 8 T 50 8 T 66 8 T 78 8"
        fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );

  const Star = ({ color, size = 24, style }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style}>
      <path d="M12 1 L14 9 L22 9 L16 14 L18 22 L12 17 L6 22 L8 14 L2 9 L10 9 Z" fill={color} />
    </svg>
  );

  const Burst = ({ color, size = 80, style, children }) => (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        <path d="M50,5 L57,32 L82,18 L70,42 L95,40 L73,57 L92,75 L65,68 L73,93 L52,78 L42,98 L37,72 L12,87 L23,62 L0,57 L21,42 L7,21 L33,30 L34,3 Z" fill={color} />
      </svg>
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </div>
  );

  const Sticker = ({ children, bg, color, rotate = -3, style }) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 14px', borderRadius: 999,
      background: bg, color: color || t.ink,
      fontFamily: t.sans, fontSize: 12, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase',
      border: `2px solid ${t.ink}`, transform: `rotate(${rotate}deg)`,
      ...style,
    }}>{children}</span>
  );

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans, position: 'relative', overflow: 'hidden' }}>
      {/* Top bar -------------------------------------------------------- */}
      <header style={{
        padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: `2px solid ${t.ink}`, background: t.lime,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 18, background: t.ink, color: t.lime,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: t.display, fontSize: 14,
          }}>MN</div>
          <span style={{ fontFamily: t.display, fontSize: 20, letterSpacing: -0.5 }}>MOHNISH NAGAR</span>
        </div>
        <nav style={{ display: 'flex', gap: 32, fontFamily: t.sans, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
          {['Hello!', 'Work', 'Projects', 'Toolkit', 'Say hi'].map((s, i) => (
            <a key={s} style={{ color: t.ink, textDecoration: 'none', position: 'relative' }}>
              {s}
              {i === 0 && <Squiggle color={t.hot} width={60} height={10} style={{ position: 'absolute', bottom: -10, left: -4 }} />}
            </a>
          ))}
        </nav>
        <Sticker bg={t.ink} color={t.lime} rotate={3}>● Available · Yay!</Sticker>
      </header>

      {/* HERO ---------------------------------------------------------- */}
      <section style={{ padding: '64px 40px 56px', position: 'relative' }}>
        {/* Decorative shapes */}
        <div style={{ position: 'absolute', top: 80, right: 100, transform: 'rotate(12deg)' }}>
          <Burst color={t.hot} size={140}>
            <span style={{ fontFamily: t.display, fontSize: 14, color: t.bg, textAlign: 'center', lineHeight: 1.1, transform: 'rotate(-12deg)' }}>
              0 → 1<br />SHIPPED!
            </span>
          </Burst>
        </div>
        <div style={{ position: 'absolute', top: 240, right: 300, width: 60, height: 60, borderRadius: 30, background: t.yellow, border: `2px solid ${t.ink}`, transform: 'rotate(-8deg)' }} />
        <Star color={t.blue} size={36} style={{ position: 'absolute', top: 140, right: 460, transform: 'rotate(15deg)' }} />

        <Sticker bg={t.yellow} rotate={-4}>Hello! It's nice to meet you 👋</Sticker>

        <h1 style={{
          fontFamily: t.display, fontSize: 200, fontWeight: 900, lineHeight: 0.86,
          letterSpacing: -8, margin: '32px 0 0', maxWidth: 1100, textTransform: 'uppercase',
        }}>
          <span>Growth &amp;</span>{' '}
          <span style={{
            display: 'inline-block', position: 'relative',
            background: t.lime, padding: '0 16px 4px', borderRadius: 12,
            transform: 'rotate(-1.5deg)', boxShadow: `6px 6px 0 ${t.ink}`,
          }}>monetization,</span>{' '}
          <br />
          <span>shipped</span>{' '}
          <span style={{
            display: 'inline-block', color: t.hot,
            textDecoration: 'underline', textDecorationColor: t.blue, textDecorationThickness: 8, textUnderlineOffset: 12,
          }}>0 → 1.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 64, marginTop: 48, alignItems: 'end' }}>
          <p style={{
            fontFamily: t.serif, fontSize: 22, lineHeight: 1.5, color: t.ink,
            margin: 0, letterSpacing: -0.2, maxWidth: 720,
          }}>
            I'm <span style={{ background: t.yellow, padding: '0 6px', fontWeight: 600 }}>Mohnish Nagar</span> — a growth & monetization operator currently in the Founder's Office at <span style={{ color: t.hot, fontWeight: 600 }}>LH2 Holdings</span>. I ship subscription systems, payment funnels, and the experimentation loops that make them compound. <span style={{ fontStyle: 'italic' }}>Currently shipping monetization across 35+ U.S. content properties.</span>
          </p>

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a style={{
                padding: '18px 24px', background: t.ink, color: t.bg, fontFamily: t.display, fontSize: 18,
                textDecoration: 'none', textAlign: 'center', borderRadius: 12, letterSpacing: 0.5,
                boxShadow: `6px 6px 0 ${t.hot}`, border: `2px solid ${t.ink}`,
              }}>
                ↓ DOWNLOAD MY CV
              </a>
              <a style={{
                padding: '18px 24px', background: t.bg, color: t.ink, fontFamily: t.display, fontSize: 18,
                textDecoration: 'none', textAlign: 'center', borderRadius: 12, letterSpacing: 0.5,
                boxShadow: `6px 6px 0 ${t.blue}`, border: `2px solid ${t.ink}`,
              }}>
                → SAY HELLO
              </a>
            </div>
          </div>
        </div>

        {/* Stats — colored chunks */}
        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
        }}>
          {[
            { v: '35+',  l: 'Content properties shipped',  bg: t.blue,     color: t.bg,  rot: -2 },
            { v: '20K+', l: 'Newsletter subs in 3 months', bg: t.yellow,   color: t.ink, rot: 1.5 },
            { v: '10%+', l: 'Revenue uplift',              bg: t.hot,      color: t.bg,  rot: -1 },
            { v: '~50M', l: 'Sessions managed monthly',    bg: t.lavender, color: t.ink, rot: 2 },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '24px 24px',
              background: s.bg, color: s.color,
              borderRadius: 20, border: `2px solid ${t.ink}`,
              transform: `rotate(${s.rot}deg)`,
              boxShadow: `4px 4px 0 ${t.ink}`,
            }}>
              <div style={{ fontFamily: t.display, fontSize: 64, lineHeight: 0.9, letterSpacing: -2.5 }}>{s.v}</div>
              <div style={{ fontFamily: t.sans, fontSize: 12, fontWeight: 700, marginTop: 12, letterSpacing: 0.3, textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT --------------------------------------------------------- */}
      <section style={{
        padding: '80px 40px', background: t.cream, position: 'relative', borderTop: `2px solid ${t.ink}`, borderBottom: `2px solid ${t.ink}`,
      }}>
        <Star color={t.hot} size={48} style={{ position: 'absolute', top: 60, left: '52%' }} />
        <Squiggle color={t.blue} width={140} height={22} style={{ position: 'absolute', top: 120, right: 80, transform: 'rotate(-12deg)' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <Sticker bg={t.lime} rotate={-3}>✨ Section 01 — About me!</Sticker>
            <h2 style={{
              fontFamily: t.display, fontSize: 120, fontWeight: 900, lineHeight: 0.88,
              letterSpacing: -5, margin: '24px 0 0', textTransform: 'uppercase',
            }}>
              A little<br />
              about <span style={{ color: t.hot, fontStyle: 'italic', fontFamily: t.serif, fontWeight: 400 }}>me.</span>
            </h2>
            <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.6, color: t.ink, margin: '32px 0 0' }}>
              <span style={{ fontFamily: t.display, fontSize: 64, color: t.blue, float: 'left', lineHeight: 0.85, paddingRight: 10, paddingTop: 4, letterSpacing: -2 }}>H</span>
              ands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization. Launched the "Go Ad-Free" subscription on Shark Tank Blog, instrumented end-to-end conversion funnels across 4 assets, and scaled a newsletter to 20K subs in 3 months.
            </p>
            <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.7, color: t.inkSoft, margin: '16px 0 0' }}>
              Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart.
            </p>
          </div>

          <div style={{ paddingTop: 80 }}>
            {/* Facts card */}
            <div style={{
              padding: '32px 32px', background: t.bg, borderRadius: 24, border: `2px solid ${t.ink}`,
              boxShadow: `8px 8px 0 ${t.lavender}`, position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -20, right: 24, transform: 'rotate(8deg)',
              }}>
                <Sticker bg={t.yellow} rotate={0}>✦ The facts</Sticker>
              </div>
              <div style={{ display: 'grid', gap: 20, marginTop: 16 }}>
                {[
                  ['Currently',  "Founder's Office, LH2 Holdings"],
                  ['Education',  `${D.education.school}`],
                  ['Degree',     D.education.degree],
                  ['Lives in',   'Bangalore, India · UTC+5:30'],
                  ['Loves',      'Subscription systems · clean GA4 funnels · shipping fast'],
                  ['Status',     '● Available for new things'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'baseline' }}>
                    <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkFaint, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>{k}</div>
                    <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink, letterSpacing: -0.2 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills — colored ribbons */}
        <div style={{ marginTop: 80 }}>
          <Sticker bg={t.hot} color={t.bg} rotate={-2}>🛠️ My toolkit</Sticker>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {D.skills.map((s, i) => {
              const bgColors = [t.blue, t.yellow, t.lime, t.lavender, t.mint];
              const inkColors = [t.bg, t.ink, t.ink, t.ink, t.ink];
              return (
                <div key={i} style={{
                  padding: '20px 28px', background: bgColors[i], color: inkColors[i],
                  borderRadius: 16, border: `2px solid ${t.ink}`,
                  display: 'grid', gridTemplateColumns: '280px 1fr 80px', gap: 24, alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontFamily: t.display, fontSize: 24, letterSpacing: -0.6, lineHeight: 1.1, textTransform: 'uppercase' }}>
                      {s.group}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: 11, opacity: 0.7, marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>
                      {s.caption}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {s.primary.map((p) => (
                      <span key={p} style={{
                        fontFamily: t.sans, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
                        background: t.ink, color: bgColors[i], letterSpacing: 0.3,
                      }}>{p}</span>
                    ))}
                    {s.more.map((p) => (
                      <span key={p} style={{ fontFamily: t.sans, fontSize: 12, fontWeight: 600, padding: '4px 10px', opacity: 0.7 }}>{p}</span>
                    ))}
                  </div>
                  <div style={{
                    fontFamily: t.display, fontSize: 56, textAlign: 'right', letterSpacing: -2, lineHeight: 0.9,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE ---------------------------------------------------- */}
      <section style={{ padding: '80px 40px', position: 'relative' }}>
        <Burst color={t.blue} size={100} style={{ position: 'absolute', top: 80, right: 60, transform: 'rotate(-15deg)' }}>
          <span style={{ fontFamily: t.display, fontSize: 14, color: t.bg, lineHeight: 1, textAlign: 'center' }}>4 ROLES<br />3 YRS</span>
        </Burst>

        <Sticker bg={t.lavender} rotate={2}>💼 Section 02 — Where I've been</Sticker>
        <h2 style={{
          fontFamily: t.display, fontSize: 120, fontWeight: 900, lineHeight: 0.88,
          letterSpacing: -5, margin: '24px 0 16px', textTransform: 'uppercase',
        }}>
          The <span style={{ background: t.lime, padding: '0 14px', borderRadius: 12, transform: 'rotate(-1.5deg)', display: 'inline-block', boxShadow: `6px 6px 0 ${t.ink}` }}>résumé.</span>
        </h2>
        <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.5, color: t.inkSoft, margin: '0 0 56px', maxWidth: 720 }}>
          Four stops across publishing, AI, and the early-stage startup ecosystem. Each one taught me something different about shipping.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {D.experience.map((e, i) => {
            const palette = [
              { bg: t.lime,     shadow: t.hot,      tag: t.ink },
              { bg: t.yellow,   shadow: t.blue,     tag: t.ink },
              { bg: t.lavender, shadow: t.mint,     tag: t.ink },
              { bg: t.cream,    shadow: t.yellow,   tag: t.ink },
            ][i];
            return (
              <article key={i} style={{
                padding: '32px 36px', background: palette.bg, borderRadius: 20,
                border: `2px solid ${t.ink}`, boxShadow: `8px 8px 0 ${palette.shadow}`,
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40,
                position: 'relative',
              }}>
                {e.current && (
                  <div style={{
                    position: 'absolute', top: -16, right: 24, transform: 'rotate(6deg)',
                  }}>
                    <Sticker bg={t.ink} color={t.lime} rotate={0}>● CURRENT ROLE</Sticker>
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: t.display, fontSize: 80, lineHeight: 0.85, letterSpacing: -3, color: t.ink }}>
                    {String(D.experience.length - i).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.ink, opacity: 0.7, marginTop: 8, letterSpacing: 0.5 }}>
                    {e.period}
                  </div>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: t.display, fontSize: 32, fontWeight: 900, letterSpacing: -1,
                    margin: '0 0 8px', lineHeight: 1.1, textTransform: 'uppercase',
                  }}>
                    {e.role}
                  </h3>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                    <span style={{ fontFamily: t.display, fontSize: 22, letterSpacing: -0.4 }}>
                      @ {e.company}
                    </span>
                    <span style={{ fontFamily: t.sans, fontSize: 13, opacity: 0.6 }}>· {e.location}</span>
                  </div>
                  <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.6, color: t.ink, margin: '0 0 16px' }}>
                    {e.body}
                  </p>
                  {e.highlight && (
                    <div style={{
                      padding: '20px 24px', background: t.ink, color: t.bg, borderRadius: 12,
                      marginTop: 16,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <Star color={t.yellow} size={20} />
                        <span style={{ fontFamily: t.display, fontSize: 14, letterSpacing: 1, color: t.yellow, textTransform: 'uppercase' }}>
                          The big launch
                        </span>
                      </div>
                      <p style={{ fontFamily: t.serif, fontSize: 15, lineHeight: 1.55, color: t.bg, margin: 0, letterSpacing: -0.1 }}>
                        {e.highlight.body}
                      </p>
                    </div>
                  )}
                  {e.metrics && (
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 16,
                    }}>
                      {e.metrics.map((m, j) => (
                        <div key={j} style={{
                          padding: '12px 14px', background: t.bg, borderRadius: 10,
                          border: `2px solid ${t.ink}`,
                        }}>
                          <div style={{ fontFamily: t.display, fontSize: 28, lineHeight: 1, letterSpacing: -0.8, color: [t.hot, t.blue, t.ink, t.ink][j] }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: t.sans, fontSize: 10, fontWeight: 700, color: t.ink, marginTop: 6, letterSpacing: 0.3, textTransform: 'uppercase' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {e.stack.map((s) => (
                      <span key={s} style={{
                        fontFamily: t.mono, fontSize: 11, padding: '3px 9px', borderRadius: 999,
                        background: t.bg, color: t.ink, border: `1.5px solid ${t.ink}`,
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROJECTS ------------------------------------------------------ */}
      <section style={{
        padding: '80px 40px', background: t.ink, color: t.bg,
        position: 'relative', borderTop: `2px solid ${t.ink}`, borderBottom: `2px solid ${t.ink}`,
      }}>
        <Star color={t.lime} size={48} style={{ position: 'absolute', top: 80, left: '40%' }} />
        <Burst color={t.hot} size={120} style={{ position: 'absolute', top: 60, right: 60, transform: 'rotate(20deg)' }}>
          <span style={{ fontFamily: t.display, fontSize: 14, color: t.bg, textAlign: 'center', lineHeight: 1.1, transform: 'rotate(-20deg)' }}>
            19 REPOS<br />SHIPPED
          </span>
        </Burst>

        <Sticker bg={t.lime} rotate={-2}>📦 Section 03 — Stuff I've made</Sticker>
        <h2 style={{
          fontFamily: t.display, fontSize: 120, fontWeight: 900, lineHeight: 0.88,
          letterSpacing: -5, margin: '24px 0 16px', color: t.bg, textTransform: 'uppercase',
        }}>
          Things I've{' '}
          <span style={{
            display: 'inline-block', background: t.hot, color: t.bg, padding: '0 14px',
            borderRadius: 12, transform: 'rotate(-1.5deg)', boxShadow: `6px 6px 0 ${t.lime}`,
          }}>built.</span>
        </h2>
        <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,247,235,0.7)', margin: '0 0 56px', maxWidth: 720 }}>
          Dashboards, pipelines, AI tools, content infrastructure — built mostly to ship, occasionally to learn, always to deploy.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {D.featuredProjects.map((p, i) => {
            const bg = [t.lime, t.hot, t.yellow, t.lavender][i];
            const text = [t.ink, t.bg, t.ink, t.ink][i];
            return (
              <article key={p.num} style={{
                padding: '32px 32px', background: bg, color: text, borderRadius: 24,
                position: 'relative', minHeight: 280,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{
                    fontFamily: t.display, fontSize: 96, lineHeight: 0.85, letterSpacing: -3, color: text,
                    opacity: 0.4,
                  }}>{p.num}</div>
                  <Sticker bg={t.ink} color={bg} rotate={4}>{p.tag}</Sticker>
                </div>
                <h3 style={{ fontFamily: t.display, fontSize: 36, fontWeight: 900, letterSpacing: -1.2, margin: '0 0 14px', lineHeight: 1, textTransform: 'uppercase' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: t.serif, fontSize: 16, lineHeight: 1.55, margin: 0, opacity: 0.9 }}>
                  {p.desc}
                </p>
                <div style={{
                  position: 'absolute', bottom: 24, left: 32, right: 32,
                  paddingTop: 16, borderTop: `2px solid ${text}`,
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: t.sans, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  <span>{p.stack}</span>
                  <span>→ View repo</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* More projects */}
        <div style={{ marginTop: 48 }}>
          <Sticker bg={t.yellow} rotate={-2}>🗂 Plus 15 more</Sticker>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {D.projectCategories.map((c, i) => {
              const bgs = [t.lime, t.hot, t.yellow, t.lavender];
              return (
                <div key={c.cat} style={{
                  padding: 24, background: 'rgba(255,255,255,0.04)', borderRadius: 16, border: `1.5px solid rgba(255,255,255,0.15)`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ fontFamily: t.display, fontSize: 18, color: t.bg, letterSpacing: -0.3, textTransform: 'uppercase' }}>
                      {c.cat}
                    </div>
                    <Sticker bg={bgs[i]} color={t.ink} rotate={3}>{c.count} repos</Sticker>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {c.items.map((it) => (
                      <span key={it.title} style={{
                        fontFamily: t.mono, fontSize: 11, padding: '3px 8px',
                        background: 'rgba(255,255,255,0.06)', color: 'rgba(255,247,235,0.85)',
                        borderRadius: 6,
                      }}>{it.title}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT ------------------------------------------------------- */}
      <section style={{
        padding: '100px 40px', position: 'relative',
        background: `repeating-linear-gradient(135deg, ${t.bg} 0 40px, ${t.cream} 40px 80px)`,
      }}>
        <Star color={t.hot} size={56} style={{ position: 'absolute', top: 80, left: '30%' }} />
        <Star color={t.blue} size={40} style={{ position: 'absolute', top: 200, right: '20%' }} />
        <Squiggle color={t.lime} width={200} height={32} style={{ position: 'absolute', bottom: 200, left: 60, transform: 'rotate(8deg)' }} />

        <div style={{ textAlign: 'center', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <Sticker bg={t.blue} color={t.bg} rotate={-3}>👋 Section 04 — Let's chat!</Sticker>
          <h2 style={{
            fontFamily: t.display, fontSize: 200, fontWeight: 900, lineHeight: 0.86,
            letterSpacing: -8, margin: '32px 0 24px', textTransform: 'uppercase',
          }}>
            Let's<br />
            <span style={{
              display: 'inline-block', background: t.hot, color: t.bg, padding: '0 24px',
              borderRadius: 16, transform: 'rotate(-2deg)', boxShadow: `8px 8px 0 ${t.ink}`,
            }}>build</span>{' '}
            <span style={{ fontStyle: 'italic', fontFamily: t.serif, fontWeight: 400 }}>something</span>
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              good!
              <Squiggle color={t.lime} width={200} height={20} style={{ position: 'absolute', bottom: -16, left: 0 }} />
            </span>
          </h2>
          <p style={{
            fontFamily: t.serif, fontSize: 22, lineHeight: 1.5, color: t.inkSoft,
            margin: '0 auto 48px', maxWidth: 680, letterSpacing: -0.2,
          }}>
            Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities. Pick a channel — any channel:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 32 }}>
          {[
            { k: 'Email',    v: D.email,         sub: 'My favorite!',  bg: t.lime,     shadow: t.hot,    icon: '✉️' },
            { k: 'Phone',    v: D.phone,         sub: 'IST hours',     bg: t.yellow,   shadow: t.blue,   icon: '☎️' },
            { k: 'LinkedIn', v: 'mohnish-nagar', sub: 'Connect!',      bg: t.hot,      shadow: t.yellow, icon: '🔗' },
            { k: 'GitHub',   v: 'nagarmohnish',  sub: 'View my code',  bg: t.lavender, shadow: t.mint,   icon: '🐙' },
          ].map((c, i) => (
            <a key={c.k} style={{
              padding: '32px 28px', background: c.bg, color: t.ink, borderRadius: 20,
              border: `2px solid ${t.ink}`, boxShadow: `6px 6px 0 ${c.shadow}`,
              textDecoration: 'none', transform: `rotate(${[-2, 1.5, -1, 2][i]}deg)`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
              <div style={{ fontFamily: t.sans, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>{c.k}</div>
              <div style={{ fontFamily: t.display, fontSize: 18, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 6 }}>{c.v}</div>
              <div style={{ fontFamily: t.serif, fontSize: 14, fontStyle: 'italic' }}>{c.sub}</div>
            </a>
          ))}
        </div>

        <div style={{
          marginTop: 80, padding: '24px 0', borderTop: `2px solid ${t.ink}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: t.display, fontSize: 14, letterSpacing: 0.5, textTransform: 'uppercase',
        }}>
          <span>© MMXXVI — Mohnish Nagar</span>
          <span>★ Made with love in Bangalore ★</span>
          <span>v2026.12 — Thanks for reading! ✨</span>
        </div>
      </section>
    </div>
  );
}

window.ColorfulDesign = ColorfulDesign;
