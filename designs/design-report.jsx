/* Design 10 — Pentagram Annual Report
 * Full-bleed chapter sections. Each chapter has its own dominant color and
 * a "Chapter N" cover. Bold color blocking, big diagrams, agency-grade.
 */

const reportTokens = {
  bg: '#F4F1EA',
  paper: '#FAF8F2',
  ink: '#141414',
  inkSoft: '#4A4A4A',
  inkFaint: '#8B8680',
  rule: '#D6D2C8',
  // chapter palette
  c1: '#0E2A47',  // navy — profile
  c2: '#C8541F',  // terracotta — experience
  c3: '#3E5C3A',  // sage — skills
  c4: '#D9A521',  // mustard — works
  c5: '#7A2E5A',  // plum — correspondence
  display: '"Newsreader", Georgia, serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function ReportDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = reportTokens;

  const ChapterCover = ({ num, color, title, body, kicker, contents }) => (
    <section style={{
      background: color, color: t.paper, padding: '80px 64px',
      position: 'relative', minHeight: 540,
    }}>
      <div style={{
        position: 'absolute', top: 32, left: 64, right: 64,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: t.sans, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
      }}>
        <span>Mohnish Nagar · Annual Report 2026</span>
        <span>{kicker}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 80, marginTop: 64 }}>
        <div>
          <div style={{
            fontFamily: t.display, fontSize: 320, lineHeight: 0.78, letterSpacing: -14,
            fontWeight: 400, marginTop: -24,
          }}>
            {num}
          </div>
          <h2 style={{
            fontFamily: t.display, fontSize: 80, fontWeight: 400, lineHeight: 0.96,
            letterSpacing: -2.4, margin: '24px 0 24px',
          }}>
            {title}
          </h2>
          <p style={{
            fontFamily: t.display, fontSize: 22, fontStyle: 'italic', lineHeight: 1.45,
            color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: 640, letterSpacing: -0.3,
          }}>
            {body}
          </p>
        </div>

        <div style={{ paddingTop: 100 }}>
          <div style={{ fontFamily: t.sans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
            In this chapter
          </div>
          {contents.map((c, i) => (
            <div key={i} style={{
              padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.18)',
              borderBottom: i === contents.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            }}>
              <div style={{ fontFamily: t.display, fontSize: 18, color: t.paper, letterSpacing: -0.3 }}>{c[0]}</div>
              <div style={{ fontFamily: t.mono, fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.5 }}>{c[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans }}>

      {/* =========================================================
         FRONT COVER
         ========================================================= */}
      <section style={{ background: t.c1, color: t.paper, padding: '80px 64px 64px', position: 'relative', minHeight: 720 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: t.sans, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
          paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.2)',
        }}>
          <span>Mohnish Nagar</span>
          <span>Annual Report · MMXXVI</span>
          <span>● Available for opportunities</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 72 }}>
          <div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c4, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, marginBottom: 24 }}>
              Annual Report
            </div>
            <h1 style={{
              fontFamily: t.display, fontSize: 160, fontWeight: 400, lineHeight: 0.86,
              letterSpacing: -6, margin: '0 0 32px',
            }}>
              Growth,<br />
              monetization,<br />
              <span style={{ color: t.c4 }}>shipped.</span>
            </h1>
            <p style={{
              fontFamily: t.display, fontSize: 24, lineHeight: 1.4, fontStyle: 'italic',
              color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: 560, letterSpacing: -0.3,
            }}>
              A four-year survey of work across digital publishing, AI/ML data products, and the early-stage startup ecosystem.
            </p>
          </div>

          <div style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Big year */}
            <div style={{
              fontFamily: t.display, fontSize: 280, lineHeight: 0.85, letterSpacing: -10, fontWeight: 400,
              color: t.c4, textAlign: 'right', marginTop: -32, marginRight: -8,
            }}>
              26
            </div>

            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontFamily: t.sans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                A report by
              </div>
              <div style={{ fontFamily: t.display, fontSize: 32, letterSpacing: -0.8, lineHeight: 1.1, marginBottom: 8 }}>
                Mohnish Nagar
              </div>
              <div style={{ fontFamily: t.sans, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                Founder's Office, LH2 Holdings<br />
                Bangalore, India · UTC+5:30
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div style={{
          position: 'absolute', bottom: 32, left: 64, right: 64,
          display: 'flex', justifyContent: 'space-between',
          fontFamily: t.sans, fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.5, textTransform: 'uppercase',
        }}>
          <span>Volume IV · Edition 01</span>
          <span>Designed in Bangalore</span>
          <span>P. 01 / 24</span>
        </div>
      </section>

      {/* =========================================================
         AT A GLANCE — TABLE OF CONTENTS + KEY NUMBERS
         ========================================================= */}
      <section style={{ padding: '80px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64 }}>
          <div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkFaint, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
              Contents
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.display }}>
              <tbody>
                {[
                  ['00', 'At a glance',         'P. 02', t.c1],
                  ['01', 'Profile',             'P. 04', t.c1],
                  ['02', 'Career file',         'P. 08', t.c2],
                  ['03', 'The toolkit',         'P. 14', t.c3],
                  ['04', 'Selected works',      'P. 18', t.c4],
                  ['05', 'Correspondence',      'P. 23', t.c5],
                ].map(([n, ch, p, c]) => (
                  <tr key={n} style={{ borderTop: `1.5px solid ${t.ink}` }}>
                    <td style={{ padding: '14px 0', fontFamily: t.mono, fontSize: 13, color: c, letterSpacing: 0.5, width: 36 }}>{n}</td>
                    <td style={{ padding: '14px 0', fontSize: 18, color: t.ink, letterSpacing: -0.3 }}>{ch}</td>
                    <td style={{ padding: '14px 0', fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5, textAlign: 'right' }}>{p}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: `1.5px solid ${t.ink}` }} />
              </tbody>
            </table>
          </div>

          <div>
            <h2 style={{
              fontFamily: t.display, fontSize: 80, fontWeight: 400, lineHeight: 0.96,
              letterSpacing: -2.4, margin: '0 0 16px', color: t.ink,
            }}>
              At a glance.
            </h2>
            <p style={{
              fontFamily: t.display, fontSize: 22, fontStyle: 'italic', lineHeight: 1.45,
              color: t.inkSoft, margin: '0 0 48px', maxWidth: 720, letterSpacing: -0.3,
            }}>
              The portfolio in five numbers. Subscription systems shipped, audiences scaled, and revenue compounded across thirty-five U.S. content properties.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
              borderTop: `2px solid ${t.ink}`,
            }}>
              {[
                ...D.headlineStats,
                { value: '04', label: 'Roles since 2023' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '28px 0',
                  borderBottom: `1px solid ${t.rule}`,
                  paddingLeft: i % 2 === 1 ? 32 : 0,
                  paddingRight: i % 2 === 0 ? 32 : 0,
                  borderRight: i % 2 === 0 ? `1px solid ${t.rule}` : 'none',
                }}>
                  <div style={{ fontFamily: t.display, fontSize: 96, lineHeight: 0.9, letterSpacing: -3, color: i === 0 ? t.c2 : i === 1 ? t.c3 : i === 2 ? t.c4 : i === 3 ? t.c5 : t.ink }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkSoft, marginTop: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         CHAPTER 01 — PROFILE
         ========================================================= */}
      <ChapterCover
        num="01" color={t.c1}
        kicker="Chapter 01 of 05"
        title={<>The <em style={{ color: t.c4 }}>operator.</em></>}
        body="A profile of Mohnish Nagar — growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem."
        contents={[
          ['Profile narrative', 'P. 05'],
          ['Quick facts',       'P. 06'],
          ['What I work on',    'P. 07'],
        ]}
      />

      <section style={{ background: t.paper, padding: '64px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c1, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
              § 01.1 — The narrative
            </div>
            <h3 style={{ fontFamily: t.display, fontSize: 52, fontWeight: 400, lineHeight: 1, letterSpacing: -1.6, margin: '0 0 24px' }}>
              Know me better.
            </h3>
            <p style={{ fontFamily: t.display, fontSize: 19, lineHeight: 1.6, color: t.ink, margin: '0 0 16px', letterSpacing: -0.2 }}>
              Hands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization.
            </p>
            <p style={{ fontFamily: t.display, fontSize: 16, lineHeight: 1.7, color: t.inkSoft, margin: 0 }}>
              Launched the "Go Ad-Free" subscription on Shark Tank Blog, instrumented end-to-end conversion funnels across 4 assets, and scaled a newsletter to 20K subs in 3 months. Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart.
            </p>
          </div>
          <div style={{ paddingTop: 16 }}>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c1, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
              § 01.2 — Quick facts
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.display, fontSize: 16, borderTop: `2px solid ${t.c1}` }}>
              <tbody>
                {[
                  ['Position',  "Founder's Office, LH2 Holdings"],
                  ['Discipline', 'Growth & Monetization · 0→1'],
                  ['Education', `${D.education.school}`],
                  ['Degree',    D.education.degree],
                  ['Location',  'Bangalore, India · UTC+5:30'],
                  ['Languages', 'English · Hindi'],
                  ['Status',    'Available for new opportunities'],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: `1px solid ${t.rule}` }}>
                    <td style={{ padding: '14px 0', fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 1.2, textTransform: 'uppercase', width: 140 }}>{k}</td>
                    <td style={{ padding: '14px 0', color: t.ink, letterSpacing: -0.2 }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What I work on — discipline cards in chapter color */}
        <div style={{ marginTop: 64 }}>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c1, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 24 }}>
            § 01.3 — What I work on · The toolkit (full breakdown follows in Ch. 03)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {D.skills.map((s, i) => (
              <div key={i} style={{
                padding: '20px 18px', background: i === 0 ? t.c1 : t.bg, color: i === 0 ? t.paper : t.ink,
                border: `1px solid ${i === 0 ? t.c1 : t.rule}`, minHeight: 200,
              }}>
                <div style={{ fontFamily: t.display, fontSize: 32, lineHeight: 1, color: i === 0 ? t.c4 : t.c1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: t.display, fontSize: 17, fontWeight: 500, letterSpacing: -0.3, margin: '14px 0 4px', lineHeight: 1.2 }}>
                  {s.group}
                </div>
                <div style={{ fontSize: 11, color: i === 0 ? 'rgba(255,255,255,0.6)' : t.inkSoft, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 12 }}>
                  {s.caption}
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.55, color: i === 0 ? 'rgba(255,255,255,0.85)' : t.inkSoft }}>
                  {s.primary.slice(0, 4).join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         CHAPTER 02 — CAREER FILE
         ========================================================= */}
      <ChapterCover
        num="02" color={t.c2}
        kicker="Chapter 02 of 05"
        title={<>The <em style={{ color: t.c4 }}>career</em> file.</>}
        body="Four years across digital publishing, AI/ML, and the early-stage startup ecosystem — from investor relations at Cyntra in 2023 to the Founder's Office at LH2 Holdings today."
        contents={[
          ['Career timeline', 'P. 09'],
          ['Headline launch', 'P. 11'],
          ['Past roles',      'P. 12'],
        ]}
      />

      <section style={{ background: t.paper, padding: '64px 64px' }}>
        {/* Timeline diagram */}
        <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c2, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 24 }}>
          § 02.1 — Career timeline · 2023 → 2026
        </div>
        <div style={{
          background: t.bg, border: `1px solid ${t.rule}`, padding: '32px 32px',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: 4,
            height: 80, marginBottom: 12,
          }}>
            {D.experience.slice().reverse().map((e, i) => {
              const cols = [t.inkFaint, t.c3, t.c5, t.c2];
              return (
                <div key={i} style={{
                  background: cols[i], color: t.paper, padding: '12px 16px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}>
                  <div style={{ fontFamily: t.mono, fontSize: 10, letterSpacing: 0.5, opacity: 0.85 }}>
                    {e.period.split(' — ')[0]} → {e.period.split(' — ')[1]}
                  </div>
                  <div style={{ fontFamily: t.display, fontSize: 18, letterSpacing: -0.3, fontWeight: 500 }}>
                    {e.company}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: 4,
          }}>
            {D.experience.slice().reverse().map((e, i) => (
              <div key={i} style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 0.5, padding: '4px 16px 0' }}>
                {e.role.split(' — ')[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Featured role — full case study */}
        <div style={{ marginTop: 48 }}>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c2, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
            § 02.2 — Headline role · {D.experience[0].period}
          </div>
          <div style={{
            background: t.c2, color: t.paper, padding: '48px 48px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
          }}>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c4, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
                ● Active engagement
              </div>
              <h3 style={{
                fontFamily: t.display, fontSize: 56, fontWeight: 400, letterSpacing: -1.6,
                lineHeight: 1, margin: '0 0 16px',
              }}>
                {D.experience[0].role}
              </h3>
              <div style={{ fontFamily: t.display, fontSize: 22, fontStyle: 'italic', marginBottom: 24, letterSpacing: -0.3 }}>
                <span style={{ color: t.c4 }}>{D.experience[0].company}</span> — {D.experience[0].location}
              </div>
              <p style={{ fontFamily: t.display, fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: '0 0 24px' }}>
                {D.experience[0].body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {D.experience[0].stack.map((s) => (
                  <span key={s} style={{
                    fontFamily: t.mono, fontSize: 11, padding: '3px 8px',
                    border: '1px solid rgba(255,255,255,0.3)', color: t.paper,
                  }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c4, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
                ★ Headline launch
              </div>
              <div style={{ fontFamily: t.display, fontSize: 28, fontWeight: 400, letterSpacing: -0.6, marginBottom: 12 }}>
                "Go Ad-Free" Subscription · Shark Tank Blog
              </div>
              <p style={{ fontFamily: t.display, fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', margin: '0 0 32px', letterSpacing: -0.2 }}>
                {D.experience[0].highlight.body}
              </p>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}>
                {D.experience[0].metrics.map((m, j) => (
                  <div key={j} style={{
                    padding: '20px 16px 20px 0',
                    borderRight: j % 2 === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    borderBottom: j < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                    paddingLeft: j % 2 === 1 ? 16 : 0,
                  }}>
                    <div style={{ fontFamily: t.display, fontSize: 44, lineHeight: 1, letterSpacing: -1.2, color: t.c4 }}>
                      {m.value}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 8, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Past roles */}
        <div style={{ marginTop: 48 }}>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c2, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
            § 02.3 — Past roles
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {D.experience.slice(1).map((e, i) => (
              <div key={i} style={{
                padding: '24px 24px', background: t.bg, border: `1px solid ${t.rule}`,
                minHeight: 240, display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkSoft, letterSpacing: 0.5, marginBottom: 12 }}>
                  {e.period}
                </div>
                <h4 style={{ fontFamily: t.display, fontSize: 22, fontWeight: 500, letterSpacing: -0.5, margin: '0 0 6px', lineHeight: 1.15 }}>
                  {e.role}
                </h4>
                <div style={{ fontFamily: t.display, fontSize: 15, fontStyle: 'italic', color: t.inkSoft, marginBottom: 14 }}>
                  <span style={{ color: t.c2 }}>{e.company}</span> · {e.location}
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: t.inkSoft, margin: 0, flex: 1 }}>
                  {e.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         CHAPTER 03 — THE TOOLKIT
         ========================================================= */}
      <ChapterCover
        num="03" color={t.c3}
        kicker="Chapter 03 of 05"
        title={<>The <em style={{ color: t.c4 }}>toolkit.</em></>}
        body="Five disciplines, organized by where they live in the working day — domain, measurement, build, platform, and operations."
        contents={[
          ['Growth & Monetization', 'P. 15'],
          ['Analytics & Product',   'P. 16'],
          ['Programming & Data',    'P. 16'],
          ['Platforms & Business',  'P. 17'],
        ]}
      />

      <section style={{ background: t.paper, padding: '64px 64px' }}>
        <div style={{ borderTop: `2px solid ${t.c3}` }}>
          {D.skills.map((s, i) => (
            <div key={i} style={{
              padding: '32px 0', borderBottom: `1px solid ${t.rule}`,
              display: 'grid', gridTemplateColumns: '80px 280px 1fr', gap: 32, alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: t.display, fontSize: 64, color: t.c3, lineHeight: 0.85, letterSpacing: -2, fontWeight: 400,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 style={{ fontFamily: t.display, fontSize: 28, fontWeight: 400, letterSpacing: -0.6, margin: '0 0 6px', color: t.ink, lineHeight: 1.1 }}>
                  {s.group}
                </h3>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c3, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 600 }}>
                  {s.caption}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: t.display, fontSize: 17, lineHeight: 1.6, color: t.ink, marginBottom: 8, letterSpacing: -0.2 }}>
                  {s.primary.join(' · ')}
                </div>
                <div style={{ fontFamily: t.display, fontSize: 14, lineHeight: 1.65, color: t.inkSoft, fontStyle: 'italic' }}>
                  {s.more.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         CHAPTER 04 — SELECTED WORKS
         ========================================================= */}
      <ChapterCover
        num="04" color={t.c4}
        kicker="Chapter 04 of 05"
        title={<>Selected <em style={{ color: t.c2 }}>works.</em></>}
        body="A library of nineteen repositories — newsletter analytics, subscription pipelines, AI tooling, and content infrastructure. Four featured."
        contents={[
          ['Featured works', 'P. 19'],
          ['By stack',       'P. 21'],
          ['Index of repos', 'P. 22'],
        ]}
      />

      <section style={{ background: t.paper, padding: '64px 64px' }}>
        <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c4, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 24 }}>
          § 04.1 — Featured works
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {D.featuredProjects.map((p, i) => {
            const cols = [t.c1, t.c2, t.c3, t.c5];
            return (
              <article key={p.num} style={{
                padding: '32px 32px', background: t.bg, border: `2px solid ${cols[i]}`,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: -2, left: -2,
                  background: cols[i], color: t.paper,
                  padding: '4px 12px', fontFamily: t.mono, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  {p.num} · {p.tag}
                </div>
                <h3 style={{ fontFamily: t.display, fontSize: 32, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, margin: '24px 0 16px' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: t.display, fontSize: 15, lineHeight: 1.6, color: t.inkSoft, margin: '0 0 20px' }}>
                  {p.desc}
                </p>
                <div style={{
                  paddingTop: 16, borderTop: `1px solid ${t.rule}`,
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: t.sans, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  <span style={{ color: t.inkSoft }}>{p.stack}</span>
                  <span style={{ color: cols[i], fontWeight: 600 }}>Read more ↗</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* By stack — diagram */}
        <div style={{ marginTop: 56 }}>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c4, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
            § 04.2 — By stack · {D.projectCategories.reduce((a, c) => a + c.count, 0)} additional repositories
          </div>
          {/* Stacked bar */}
          <div style={{ display: 'flex', height: 56, marginBottom: 16, border: `1px solid ${t.ink}` }}>
            {D.projectCategories.map((c, i) => {
              const cols = [t.c1, t.c2, t.c3, t.c5];
              const total = D.projectCategories.reduce((a, c) => a + c.count, 0);
              return (
                <div key={c.cat} style={{
                  background: cols[i], color: t.paper,
                  flex: c.count, padding: '12px 14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderRight: i < 3 ? `1px solid ${t.ink}` : 'none',
                }}>
                  <span style={{ fontFamily: t.sans, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>{c.cat.split(',')[0]}</span>
                  <span style={{ fontFamily: t.display, fontSize: 22, letterSpacing: -0.4 }}>{c.count}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 40px' }}>
            {D.projectCategories.map((c, i) => {
              const cols = [t.c1, t.c2, t.c3, t.c5];
              return (
                <div key={c.cat}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    paddingBottom: 8, borderBottom: `2px solid ${cols[i]}`, marginBottom: 8,
                  }}>
                    <div style={{ fontFamily: t.display, fontSize: 17, fontWeight: 500, color: t.ink, letterSpacing: -0.3 }}>
                      {c.cat}
                    </div>
                    <span style={{ fontFamily: t.mono, fontSize: 11, color: cols[i], letterSpacing: 0.5 }}>
                      {String(c.count).padStart(2, '0')} repos
                    </span>
                  </div>
                  {c.items.map((it) => (
                    <div key={it.title} style={{
                      padding: '8px 0', borderBottom: `1px dotted ${t.rule}`,
                      display: 'grid', gridTemplateColumns: '1fr 80px',
                      fontFamily: t.display, fontSize: 13.5, color: t.ink, gap: 12, alignItems: 'baseline',
                    }}>
                      <div>
                        <span style={{ fontWeight: 500 }}>{it.title}.</span>
                        <span style={{ color: t.inkSoft, fontStyle: 'italic' }}>{' '}{it.desc}</span>
                      </div>
                      <span style={{ fontFamily: t.mono, fontSize: 10.5, color: cols[i], letterSpacing: 0.5, textAlign: 'right' }}>
                        {it.stack}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
         CHAPTER 05 — CORRESPONDENCE
         ========================================================= */}
      <ChapterCover
        num="05" color={t.c5}
        kicker="Chapter 05 of 05"
        title={<>Let's <em style={{ color: t.c4 }}>build</em> something.</>}
        body="Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities. Best reached by email."
        contents={[
          ['Direct contact',  'P. 23'],
          ['Channels',        'P. 23'],
          ['Colophon',        'P. 24'],
        ]}
      />

      <section style={{ background: t.paper, padding: '64px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: `2px solid ${t.c5}` }}>
          {[
            { k: 'Electronic mail', v: D.email,         sub: 'Best for everything' },
            { k: 'Telephone',       v: D.phone,         sub: 'IST business hours' },
            { k: 'LinkedIn',        v: 'in/mohnish-nagar', sub: 'Professional network' },
            { k: 'GitHub',          v: 'nagarmohnish',     sub: 'Code & projects' },
            { k: 'Post',            v: 'Bangalore, India · UTC+5:30', sub: 'For postal correspondence' },
            { k: 'Résumé',          v: 'Download PDF · 2 pages',      sub: 'Updated May 2026' },
          ].map((c, i) => (
            <div key={c.k} style={{
              padding: '24px 24px',
              borderRight: i % 2 === 0 ? `1px solid ${t.rule}` : 'none',
              borderBottom: i < 4 ? `1px solid ${t.rule}` : 'none',
              paddingLeft: i % 2 === 1 ? 32 : 0,
            }}>
              <div style={{ fontFamily: t.sans, fontSize: 11, color: t.c5, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
                {c.k}
              </div>
              <div style={{ fontFamily: t.display, fontSize: 28, fontWeight: 500, color: t.ink, letterSpacing: -0.5, marginBottom: 6 }}>
                {c.v}
              </div>
              <div style={{ fontSize: 13, color: t.inkSoft }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Colophon */}
        <div style={{ marginTop: 48, padding: '24px 0', borderTop: `2px solid ${t.ink}`, borderBottom: `2px solid ${t.ink}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>Set in</div>
              <div style={{ fontFamily: t.display, fontSize: 17, color: t.ink, letterSpacing: -0.2 }}>Newsreader (display) · Inter (sans)</div>
            </div>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>Printed</div>
              <div style={{ fontFamily: t.display, fontSize: 17, color: t.ink, letterSpacing: -0.2 }}>Bangalore, India · MMXXVI</div>
            </div>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>Edition</div>
              <div style={{ fontFamily: t.display, fontSize: 17, color: t.ink, letterSpacing: -0.2 }}>Vol. IV · No. 01 · 24 pages</div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 16, fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 1.2, textTransform: 'uppercase',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>© MMXXVI Mohnish Nagar</span>
          <span>End of report</span>
        </div>
      </section>
    </div>
  );
}

window.ReportDesign = ReportDesign;
