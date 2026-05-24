/* Design 9 — Financial Times Weekend
 * Salmon paper, navy ink, serif headlines. Authoritative newspaper aesthetic.
 * Multi-column flow, classifieds-style tables, rule-heavy layout.
 */

const ftTokens = {
  bg: '#FFF1E5',          // FT signature salmon
  paper: '#FFE9D6',
  ink: '#161616',
  navy: '#1B2733',
  inkSoft: '#4A4A4A',
  inkFaint: '#85827D',
  rule: '#D4C5B3',
  ruleStrong: '#1B2733',
  accent: '#990F3D',      // FT pink-red
  serif: '"Newsreader", "Source Serif Pro", Georgia, serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function FTDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = ftTokens;

  const RuleH = ({ thick }) => (
    <div style={{ height: thick ? 3 : 1, background: t.ruleStrong, margin: 0 }} />
  );

  const Kicker = ({ children, color }) => (
    <div style={{
      fontFamily: t.sans, fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
      textTransform: 'uppercase', color: color || t.accent, marginBottom: 8,
    }}>{children}</div>
  );

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.serif }}>
      {/* MASTHEAD ------------------------------------------------------- */}
      <header style={{ padding: '12px 56px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 0.5, paddingBottom: 8 }}>
          <span>WEEKEND EDITION · BANGALORE</span>
          <span style={{ letterSpacing: 1 }}>NO. 2,608</span>
          <span>Tuesday, 26 May MMXXVI</span>
        </div>
        <RuleH thick />
        <div style={{
          padding: '20px 0 16px',
          display: 'grid', gridTemplateColumns: '160px 1fr 160px', alignItems: 'center',
        }}>
          <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            mohnishnagar.com<br />
            <span style={{ color: t.accent }}>● Available</span>
          </div>
          <div style={{
            fontFamily: t.serif, fontSize: 56, textAlign: 'center', fontWeight: 600,
            letterSpacing: -1, color: t.navy, lineHeight: 1,
          }}>
            THE MOHNISH NAGAR
          </div>
          <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase', textAlign: 'right' }}>
            Portfolio Edition<br />
            ₹ Free with subscription
          </div>
        </div>
        <RuleH />
        <div style={{
          padding: '10px 0', display: 'flex', justifyContent: 'space-between',
          fontFamily: t.sans, fontSize: 12, color: t.navy, letterSpacing: 0.4,
        }}>
          {['Profile', 'Experience', 'Workshop', 'Skills', 'Index', 'Correspondence'].map((s) => (
            <span key={s} style={{ fontWeight: 500 }}>{s}</span>
          ))}
        </div>
        <RuleH thick />
      </header>

      {/* LEDE / above-the-fold ------------------------------------------- */}
      <section style={{ padding: '32px 56px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 40 }}>
          {/* Main story */}
          <div style={{ borderRight: `1px solid ${t.rule}`, paddingRight: 40 }}>
            <Kicker>The Operator · A Portfolio</Kicker>
            <h1 style={{
              fontFamily: t.serif, fontSize: 88, fontWeight: 600, lineHeight: 0.96,
              letterSpacing: -2.4, margin: '0 0 16px', color: t.navy,
            }}>
              Growth and monetization, <span style={{ color: t.accent, fontStyle: 'italic', fontWeight: 500 }}>shipped 0 → 1.</span>
            </h1>
            <p style={{
              fontFamily: t.serif, fontSize: 22, fontStyle: 'italic', lineHeight: 1.4,
              color: t.inkSoft, margin: '0 0 24px', letterSpacing: -0.3,
            }}>
              From the founder's office at LH2 Holdings, Mohnish Nagar is shipping monetization across 35+ U.S. content properties — subscriptions, payments, GA4 instrumentation, and funnel optimization.
            </p>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkFaint, letterSpacing: 1.2, textTransform: 'uppercase', paddingBottom: 16, borderBottom: `1px solid ${t.rule}` }}>
              By <span style={{ color: t.navy, fontWeight: 600 }}>Mohnish Nagar</span> in Bangalore · <span>5 min read</span> · Updated 14:42 IST
            </div>

            {/* Drop cap body — two columns */}
            <div style={{
              columnCount: 2, columnGap: 32, columnRule: `1px solid ${t.rule}`,
              marginTop: 24, fontFamily: t.serif, fontSize: 16, lineHeight: 1.65, color: t.ink,
            }}>
              <p style={{ margin: 0 }}>
                <span style={{
                  fontFamily: t.serif, fontSize: 72, fontWeight: 600, color: t.accent,
                  float: 'left', lineHeight: 0.85, paddingRight: 10, paddingTop: 6, letterSpacing: -2,
                }}>G</span>
                rowth is a discipline of compounding. For Mr Nagar — currently in the Founder's Office at LH2 Holdings, a U.S.-based digital media operator — the compounding manifests as a "Go Ad-Free" subscription on Shark Tank Blog priced at $1–2 per month, instrumented end-to-end with Stripe checkout, SSO via Google One Tap, and a custom WordPress membership plugin.
              </p>
              <p style={{ marginTop: 16 }}>
                Across four assets — Inquisitr, AllMusic, Shark Tank Blog, and Vintage Aviation News — Mr Nagar instrumented GA4 conversion funnels and Stripe webhook tracking that have contributed to a 10%+ revenue uplift through pricing experiments, CTA placement tests, and audience segmentation.
              </p>
              <p style={{ marginTop: 16 }}>
                Before LH2 came Opinium.ai, where he was the first employee at the AI/ML social-intelligence startup that raised approximately ₹40 Lakh in pre-seed capital. Before that, ecosystem programming at PedalStart and investor relations work at Cyntra. The career arc — fundraising, data, growth — reads as an operator built for the seams between product and revenue.
              </p>
            </div>

            <div style={{ marginTop: 24, padding: '16px 0', borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                {D.headlineStats.map((s, i) => (
                  <div key={i} style={{ borderRight: i < 3 ? `1px solid ${t.rule}` : 'none', paddingRight: 16 }}>
                    <div style={{ fontFamily: t.serif, fontSize: 40, fontWeight: 600, lineHeight: 1, letterSpacing: -1.2, color: i === 0 ? t.accent : t.navy }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, marginTop: 8, letterSpacing: 1, textTransform: 'uppercase' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — currently / quick facts */}
          <div>
            {/* Portrait box */}
            <div style={{
              aspectRatio: '4 / 5', marginBottom: 16,
              background: `linear-gradient(160deg, ${t.accent}30, ${t.navy}20), ${t.paper}`,
              border: `1px solid ${t.ruleStrong}`,
              position: 'relative',
              display: 'flex', alignItems: 'flex-end', padding: 20,
            }}>
              <div style={{
                position: 'absolute', top: 20, left: 20, fontFamily: t.serif, fontSize: 42, color: t.navy, fontStyle: 'italic',
              }}>MN</div>
              <div style={{ fontFamily: t.serif, fontSize: 14, fontStyle: 'italic', color: t.navy }}>
                Mohnish Nagar in his Bangalore studio · 2026
              </div>
            </div>

            {/* Quick facts table */}
            <Kicker color={t.navy}>The Subject · At a glance</Kicker>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.serif, fontSize: 14 }}>
              <tbody>
                {[
                  ['Position',  "Founder's Office, LH2 Holdings"],
                  ['Discipline', 'Growth & Monetization'],
                  ['Location',  'Bangalore, India · UTC+5:30'],
                  ['Education', `${D.education.school}`],
                  ['Degree',    D.education.degree],
                  ['Status',    'Available for opportunities'],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: `1px dotted ${t.rule}` }}>
                    <td style={{
                      padding: '8px 8px 8px 0', verticalAlign: 'top', width: 92,
                      fontFamily: t.sans, fontSize: 11, color: t.inkFaint, letterSpacing: 1, textTransform: 'uppercase',
                    }}>{k}</td>
                    <td style={{ padding: '8px 0', color: t.ink }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Box: in this edition */}
            <div style={{
              marginTop: 20, padding: '16px 16px',
              background: t.paper, border: `1px solid ${t.ruleStrong}`,
            }}>
              <Kicker color={t.accent}>In this edition</Kicker>
              <ol style={{ margin: '8px 0 0', paddingLeft: 18, fontFamily: t.serif, fontSize: 14, lineHeight: 1.6, color: t.navy }}>
                <li>Career file — four roles, three industries</li>
                <li>The workshop — selected projects</li>
                <li>Notebook — toolkit & competencies</li>
                <li>Correspondence — get in touch</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER FILE ---------------------------------------------------- */}
      <section style={{ padding: '48px 56px 0' }}>
        <RuleH thick />
        <div style={{ padding: '16px 0' }}>
          <Kicker>Section II · Career File</Kicker>
        </div>
        <RuleH />

        <h2 style={{
          fontFamily: t.serif, fontSize: 64, fontWeight: 600, lineHeight: 0.96,
          letterSpacing: -1.8, color: t.navy, margin: '40px 0 8px', maxWidth: 900,
        }}>
          A four-year arc through publishing, AI, and the early-stage ecosystem.
        </h2>
        <p style={{
          fontFamily: t.serif, fontSize: 20, fontStyle: 'italic', lineHeight: 1.4,
          color: t.inkSoft, margin: '0 0 32px', maxWidth: 800, letterSpacing: -0.3,
        }}>
          From investor relations at Cyntra in 2023 to LH2 Holdings today — a survey of the work.
        </p>

        {D.experience.map((e, i) => (
          <article key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr 280px', gap: 40,
            padding: '32px 0', borderTop: `1px solid ${t.ruleStrong}`,
            borderBottom: i === D.experience.length - 1 ? `1px solid ${t.ruleStrong}` : 'none',
          }}>
            <div>
              <div style={{ fontFamily: t.serif, fontSize: 56, color: t.accent, lineHeight: 0.85, letterSpacing: -1.5, fontWeight: 600 }}>
                {String(D.experience.length - i).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, marginTop: 10, letterSpacing: 1.2, textTransform: 'uppercase', lineHeight: 1.4 }}>
                {e.period}
              </div>
              {e.current && (
                <div style={{
                  marginTop: 12, fontFamily: t.sans, fontSize: 10, fontWeight: 700,
                  color: t.accent, letterSpacing: 1.5, textTransform: 'uppercase',
                  padding: '4px 8px', display: 'inline-block', border: `1.5px solid ${t.accent}`,
                }}>
                  ● Latest
                </div>
              )}
            </div>

            <div>
              <h3 style={{
                fontFamily: t.serif, fontSize: 28, fontWeight: 600, lineHeight: 1.15,
                letterSpacing: -0.7, color: t.navy, margin: '0 0 4px',
              }}>
                {e.role}
              </h3>
              <div style={{ fontFamily: t.serif, fontSize: 16, fontStyle: 'italic', color: t.inkSoft, marginBottom: 16, letterSpacing: -0.2 }}>
                <span style={{ color: t.accent, fontWeight: 600, fontStyle: 'normal' }}>{e.company}</span>, {e.location}
              </div>
              <p style={{ fontFamily: t.serif, fontSize: 15.5, lineHeight: 1.65, color: t.ink, margin: '0 0 16px' }}>
                {e.body}
              </p>
              {e.highlight && (
                <div style={{ padding: '16px 0', borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}`, margin: '16px 0' }}>
                  <Kicker>★ The Launch</Kicker>
                  <p style={{ fontFamily: t.serif, fontSize: 16, fontStyle: 'italic', lineHeight: 1.55, color: t.navy, margin: 0, letterSpacing: -0.2 }}>
                    {e.highlight.body}
                  </p>
                </div>
              )}
              <div style={{
                fontFamily: t.sans, fontSize: 11, color: t.inkSoft, marginTop: 12,
                letterSpacing: 0.3,
              }}>
                <span style={{ color: t.inkFaint, letterSpacing: 1.2, textTransform: 'uppercase', marginRight: 10 }}>Tools</span>
                {e.stack.join(' · ')}
              </div>
            </div>

            <div>
              {e.metrics ? (
                <>
                  <Kicker color={t.navy}>By the numbers</Kicker>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.serif, marginTop: 8 }}>
                    <tbody>
                      {e.metrics.map((m, j) => (
                        <tr key={j} style={{ borderTop: `1px solid ${t.rule}` }}>
                          <td style={{
                            padding: '10px 0', fontFamily: t.serif, fontSize: 24, fontWeight: 600, letterSpacing: -0.6,
                            color: j === 0 ? t.accent : t.navy, width: 90,
                          }}>{m.value}</td>
                          <td style={{ padding: '10px 0', fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 0.8, textTransform: 'uppercase', textAlign: 'right' }}>
                            {m.label}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <div style={{ padding: '12px 16px', background: t.paper, border: `1px solid ${t.rule}` }}>
                  <Kicker color={t.navy}>Précis</Kicker>
                  <p style={{ fontFamily: t.serif, fontSize: 14, fontStyle: 'italic', lineHeight: 1.5, color: t.navy, margin: '4px 0 0', letterSpacing: -0.2 }}>
                    {e.summary}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* WORKSHOP / PROJECTS -------------------------------------------- */}
      <section style={{ padding: '48px 56px 0' }}>
        <RuleH thick />
        <div style={{ padding: '16px 0' }}>
          <Kicker>Section III · The Workshop</Kicker>
        </div>
        <RuleH />

        <h2 style={{
          fontFamily: t.serif, fontSize: 64, fontWeight: 600, lineHeight: 0.96,
          letterSpacing: -1.8, color: t.navy, margin: '40px 0 16px',
        }}>
          Things I've built.
        </h2>
        <p style={{
          fontFamily: t.serif, fontSize: 18, fontStyle: 'italic', color: t.inkSoft,
          margin: '0 0 32px', maxWidth: 760, lineHeight: 1.45, letterSpacing: -0.2,
        }}>
          A selection of recent work — newsletter analytics, subscription pipelines, and AI tooling. Nineteen repositories in total.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: `1px solid ${t.ruleStrong}` }}>
          {D.featuredProjects.map((p, i) => (
            <article key={p.num} style={{
              padding: '24px 24px',
              borderRight: i % 2 === 0 ? `1px solid ${t.rule}` : 'none',
              borderBottom: `1px solid ${t.rule}`,
              paddingLeft: i % 2 === 1 ? 24 : 0,
              paddingRight: i % 2 === 0 ? 24 : 0,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                <Kicker>{p.num} · {p.tag}</Kicker>
                <span style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft }}>{p.stack}</span>
              </div>
              <h3 style={{
                fontFamily: t.serif, fontSize: 30, fontWeight: 600, lineHeight: 1.1,
                letterSpacing: -0.8, color: t.navy, margin: '8px 0 12px',
              }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: t.serif, fontSize: 15, lineHeight: 1.6, color: t.ink, margin: '0 0 12px' }}>
                {p.desc}
              </p>
              <div style={{ fontFamily: t.sans, fontSize: 11, color: t.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
                Read more ↗
              </div>
            </article>
          ))}
        </div>

        {/* Classifieds — by stack */}
        <div style={{ marginTop: 48 }}>
          <Kicker>The Classifieds · Additional Repositories</Kicker>
          <RuleH />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 40px', paddingTop: 16 }}>
            {D.projectCategories.map((c) => (
              <div key={c.cat} style={{ breakInside: 'avoid', marginBottom: 24 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  paddingBottom: 6, borderBottom: `1.5px solid ${t.navy}`, marginBottom: 6,
                }}>
                  <div style={{ fontFamily: t.serif, fontSize: 18, fontWeight: 600, color: t.navy, letterSpacing: -0.3 }}>
                    {c.cat}
                  </div>
                  <span style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft, letterSpacing: 0.5 }}>
                    {String(c.count).padStart(2, '0')} listings
                  </span>
                </div>
                {c.items.map((it) => (
                  <div key={it.title} style={{
                    padding: '8px 0', borderBottom: `1px dotted ${t.rule}`,
                    display: 'grid', gridTemplateColumns: '1fr 60px',
                    fontFamily: t.serif, fontSize: 13, color: t.ink, gap: 12, alignItems: 'baseline',
                  }}>
                    <div>
                      <span style={{ fontWeight: 600, color: t.navy }}>{it.title}.</span>{' '}
                      <span style={{ color: t.inkSoft, fontStyle: 'italic' }}>{it.desc}</span>
                    </div>
                    <span style={{ fontFamily: t.sans, fontSize: 10, color: t.accent, letterSpacing: 0.8, textTransform: 'uppercase', textAlign: 'right' }}>
                      {it.stack}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS / TOOLKIT ----------------------------------------------- */}
      <section style={{ padding: '48px 56px 0' }}>
        <RuleH thick />
        <div style={{ padding: '16px 0' }}>
          <Kicker>Section IV · The Notebook</Kicker>
        </div>
        <RuleH />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, marginTop: 32 }}>
          <div>
            <h2 style={{
              fontFamily: t.serif, fontSize: 56, fontWeight: 600, lineHeight: 0.95,
              letterSpacing: -1.6, color: t.navy, margin: '0 0 16px',
            }}>
              The toolkit.
            </h2>
            <p style={{
              fontFamily: t.serif, fontSize: 17, fontStyle: 'italic', color: t.inkSoft,
              lineHeight: 1.5, margin: 0, letterSpacing: -0.2,
            }}>
              Five disciplines, organized by where they live in the working day — domain, measurement, build, platform, and operations.
            </p>
          </div>
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.serif, borderTop: `1px solid ${t.ruleStrong}` }}>
              <tbody>
                {D.skills.map((s, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${t.rule}` }}>
                    <td style={{
                      padding: '20px 16px 20px 0', verticalAlign: 'top', width: 220,
                    }}>
                      <div style={{ fontFamily: t.serif, fontSize: 18, fontWeight: 600, color: t.navy, letterSpacing: -0.3 }}>
                        {s.group}
                      </div>
                      <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkFaint, marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>
                        {String(i + 1).padStart(2, '0')} · {s.caption}
                      </div>
                    </td>
                    <td style={{ padding: '20px 0', fontFamily: t.serif, fontSize: 15, lineHeight: 1.6, color: t.ink, verticalAlign: 'top' }}>
                      <span style={{ fontWeight: 600 }}>{s.primary.join(' · ')}</span>
                      {s.more.length > 0 && (
                        <span style={{ color: t.inkSoft }}>{' · '}{s.more.join(' · ')}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CORRESPONDENCE -------------------------------------------------- */}
      <section style={{ padding: '64px 56px 0' }}>
        <RuleH thick />
        <div style={{ padding: '16px 0' }}>
          <Kicker color={t.accent}>Section V · Correspondence</Kicker>
        </div>
        <RuleH />

        <div style={{ background: t.navy, color: '#FFF1E5', padding: '56px 56px', marginTop: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <Kicker color="#E8C7A4">Get in touch</Kicker>
              <h2 style={{
                fontFamily: t.serif, fontSize: 80, fontWeight: 600, lineHeight: 0.95,
                letterSpacing: -2.4, margin: '12px 0 24px',
              }}>
                Let's build <span style={{ color: t.accent, fontStyle: 'italic', fontWeight: 500 }}>something good.</span>
              </h2>
              <p style={{
                fontFamily: t.serif, fontSize: 20, fontStyle: 'italic', lineHeight: 1.5,
                color: '#E8C7A4', margin: '0 0 32px', maxWidth: 600, letterSpacing: -0.3,
              }}>
                Open to growth & monetization roles, founding-team work, and 0→1 product opportunities.
              </p>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255,241,229,0.15)', paddingLeft: 40 }}>
              <Kicker color="#E8C7A4">By all means</Kicker>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: t.serif, marginTop: 12 }}>
                <tbody>
                  {[
                    ['Electronic mail', D.email],
                    ['Telephone',       D.phone],
                    ['LinkedIn',        'in/mohnish-nagar'],
                    ['GitHub',          'nagarmohnish'],
                    ['Post',            'Bangalore, IN'],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderTop: '1px solid rgba(255,241,229,0.15)' }}>
                      <td style={{
                        padding: '12px 0', fontFamily: t.sans, fontSize: 11, color: '#A9947A',
                        letterSpacing: 1.2, textTransform: 'uppercase', width: 140,
                      }}>{k}</td>
                      <td style={{ padding: '12px 0', fontFamily: t.serif, fontSize: 17, color: '#FFF1E5', letterSpacing: -0.2 }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div style={{
          padding: '20px 0 24px', display: 'flex', justifyContent: 'space-between',
          fontFamily: t.sans, fontSize: 10, color: t.inkSoft, letterSpacing: 1.2, textTransform: 'uppercase',
        }}>
          <span>© MMXXVI The Mohnish Nagar</span>
          <span>Set in Newsreader · Printed in Bangalore</span>
          <span>Vol. 04 · End of edition</span>
        </div>
      </section>
    </div>
  );
}

window.FTDesign = FTDesign;
