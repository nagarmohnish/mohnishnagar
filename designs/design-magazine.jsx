/* Design 7 — Editorial Magazine Feature
 * Like a feature article in a high-end magazine (Cereal, The Atlantic, Aperture).
 * Cream paper, serif display, drop caps, pullquotes, marginalia.
 */

const magTokens = {
  bg: '#F4EEE0',
  paper: '#FAF6EB',
  ink: '#1B1814',
  inkSoft: '#5A4F40',
  inkFaint: '#9B9080',
  rule: '#D9CFB8',
  ruleSoft: '#E8DEC8',
  accent: '#7A2E1F',     // oxblood
  accent2: '#3D5A3D',    // moss
  display: '"Newsreader", "Source Serif Pro", Georgia, serif',
  body: '"Newsreader", Georgia, serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function MagazineDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = magTokens;

  const RuleLabel = ({ children, color }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      fontFamily: t.sans, fontSize: 11, letterSpacing: 2.5,
      textTransform: 'uppercase', color: color || t.inkFaint, fontWeight: 500,
    }}>
      <span style={{ width: 24, height: 1, background: color || t.inkFaint }} />
      {children}
    </div>
  );

  return (
    <div style={{ width: 1440, background: t.bg, color: t.ink, fontFamily: t.body }}>
      {/* Masthead -------------------------------------------------------- */}
      <header style={{
        padding: '20px 80px', borderBottom: `1px solid ${t.rule}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: t.sans, fontSize: 12, color: t.inkSoft, letterSpacing: 0.5,
      }}>
        <span style={{ letterSpacing: 1.5, textTransform: 'uppercase' }}>The Quarterly · No. 04</span>
        <div style={{
          fontFamily: t.display, fontSize: 24, fontStyle: 'italic', letterSpacing: -0.5, color: t.ink,
        }}>
          Mohnish Nagar
        </div>
        <span style={{ letterSpacing: 1.5, textTransform: 'uppercase' }}>May · MMXXVI</span>
      </header>

      {/* Cover ---------------------------------------------------------- */}
      <section style={{ padding: '80px 80px 0', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56, marginBottom: 56 }}>
          <div style={{ paddingTop: 8 }}>
            <RuleLabel color={t.accent}>Feature 01</RuleLabel>
            <div style={{ fontFamily: t.sans, fontSize: 11, letterSpacing: 1, color: t.inkFaint, marginTop: 16, lineHeight: 1.8, textTransform: 'uppercase' }}>
              In this volume<br />
              <span style={{ color: t.ink }}>Portrait of an operator</span><br />
              <span style={{ color: t.ink }}>Career file · pp. 03–07</span><br />
              <span style={{ color: t.ink }}>Selected works · pp. 08–11</span><br />
              <span style={{ color: t.ink }}>Correspondence · pp. 12</span>
            </div>
          </div>
          <div>
            <RuleLabel>Portrait</RuleLabel>
            <h1 style={{
              fontFamily: t.display, fontSize: 132, fontWeight: 400, lineHeight: 0.92,
              letterSpacing: -3.5, margin: '24px 0 0',
            }}>
              The operator<br />
              behind the<br />
              <span style={{ fontStyle: 'italic', color: t.accent }}>0 → 1.</span>
            </h1>
            <p style={{
              fontFamily: t.display, fontSize: 24, fontStyle: 'italic', lineHeight: 1.4,
              color: t.inkSoft, letterSpacing: -0.3, margin: '40px 0 0', maxWidth: 880,
            }}>
              A profile of Mohnish Nagar — growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem.
            </p>
          </div>
        </div>

        {/* Byline rule */}
        <div style={{
          borderTop: `1px solid ${t.ink}`, borderBottom: `1px solid ${t.rule}`,
          padding: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32,
          fontFamily: t.sans, fontSize: 12, color: t.inkSoft,
        }}>
          {[
            ['Profile by',     'Mohnish Nagar'],
            ['Photographs',    'Bangalore, IN'],
            ['Issue',          'Vol. 04 · MMXXVI'],
            ['Status',         '● Available'],
            ['Reading time',   '6 minutes'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: t.inkFaint, marginBottom: 4 }}>{k}</div>
              <div style={{ fontFamily: t.display, fontSize: 16, color: t.ink, letterSpacing: -0.2 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Headline image area + intro ----------------------------------- */}
      <section style={{ padding: '64px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Frame — placeholder for portrait/imagery */}
          <div style={{
            aspectRatio: '4 / 5',
            background: `linear-gradient(135deg, ${t.accent}25, ${t.accent2}15), ${t.paper}`,
            border: `1px solid ${t.rule}`,
            position: 'relative',
            display: 'flex', alignItems: 'flex-end', padding: 32,
          }}>
            <div style={{
              position: 'absolute', top: 32, left: 32, width: 64, height: 64,
              border: `1px solid ${t.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: t.display, fontSize: 32, fontStyle: 'italic',
            }}>
              MN
            </div>
            <div style={{
              position: 'absolute', top: 32, right: 32,
              fontFamily: t.sans, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: t.inkSoft,
            }}>
              Pl. 01
            </div>
            <div style={{
              fontFamily: t.display, fontSize: 28, fontStyle: 'italic', color: t.ink, letterSpacing: -0.3, lineHeight: 1.2,
            }}>
              "Growth & monetization,<br />shipped 0 → 1."
              <div style={{ fontFamily: t.sans, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: t.inkSoft, marginTop: 12, fontStyle: 'normal' }}>
                — Bangalore, 2026
              </div>
            </div>
          </div>

          {/* Lede */}
          <div>
            <RuleLabel color={t.accent2}>The opening</RuleLabel>
            <p style={{
              fontFamily: t.display, fontSize: 24, lineHeight: 1.55, color: t.ink,
              margin: '24px 0 0', letterSpacing: -0.3,
            }}>
              <span style={{
                fontFamily: t.display, fontSize: 96, fontWeight: 400, color: t.accent,
                float: 'left', lineHeight: 0.85, paddingRight: 16, paddingTop: 8, letterSpacing: -3,
              }}>G</span>
              rowth is rarely a single move — it's a stack of decisions, instrumented, tested, and compounded. For Mohnish Nagar, that stack runs across 35+ U.S. content properties at LH2 Holdings, where he's shipped the "Go Ad-Free" subscription end-to-end, scaled a newsletter to 20K subscribers in three months, and lifted revenue by more than 10% through pricing and CTA experiments.
            </p>
            <p style={{
              fontFamily: t.body, fontSize: 17, lineHeight: 1.7, color: t.inkSoft,
              margin: '24px 0 0',
            }}>
              Before LH2, he was the first employee at Opinium.ai — an AI/ML social intelligence startup that raised ~40 Lakh pre-seed, where he built the product from zero. Before that, he assessed 500+ startups at PedalStart and worked investor relations at Cyntra.
            </p>

            <div style={{ marginTop: 36, padding: '20px 0', borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                {D.headlineStats.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: t.display, fontSize: 36, lineHeight: 1, color: i === 0 ? t.accent : t.ink, letterSpacing: -1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, marginTop: 8, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote ---------------------------------------------------- */}
      <section style={{ padding: '40px 160px 80px' }}>
        <div style={{ textAlign: 'center', maxWidth: 960, margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontFamily: t.display, fontSize: 200, lineHeight: 0.6, color: t.accent,
            position: 'absolute', top: -10, left: -20, opacity: 0.6,
          }}>"</div>
          <p style={{
            fontFamily: t.display, fontSize: 44, fontWeight: 400, lineHeight: 1.2,
            letterSpacing: -1, color: t.ink, margin: 0, fontStyle: 'italic',
          }}>
            Subscription systems, payment funnels, GA4 instrumentation —{' '}
            <span style={{ fontStyle: 'normal', color: t.accent }}>the systems that turn an audience into revenue.</span>
          </p>
          <div style={{ marginTop: 32, fontFamily: t.sans, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: t.inkFaint }}>
            — On the work
          </div>
        </div>
      </section>

      {/* Chapter 1: Profile body ---------------------------------------- */}
      <section style={{ padding: '40px 80px 80px', borderTop: `1px solid ${t.ink}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 200px', gap: 56, alignItems: 'start', paddingTop: 56 }}>
          <div>
            <div style={{
              fontFamily: t.display, fontSize: 96, lineHeight: 0.9, color: t.accent, letterSpacing: -3,
            }}>I.</div>
            <RuleLabel>The chapter</RuleLabel>
            <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', color: t.ink, marginTop: 12, lineHeight: 1.35 }}>
              On the operator, his work, and where it's pointed.
            </div>
          </div>

          <div>
            <h2 style={{
              fontFamily: t.display, fontSize: 72, fontWeight: 400, lineHeight: 0.96,
              letterSpacing: -2, margin: '0 0 32px',
            }}>
              Know me <span style={{ fontStyle: 'italic', color: t.accent }}>better.</span>
            </h2>

            <div style={{
              columnCount: 2, columnGap: 40, columnRule: `1px solid ${t.rule}`,
              fontFamily: t.body, fontSize: 16.5, lineHeight: 1.7, color: t.ink,
            }}>
              <p style={{ margin: 0, breakAfter: 'avoid' }}>
                <span style={{ fontFamily: t.display, fontSize: 64, fontWeight: 400, color: t.accent, float: 'left', lineHeight: 0.85, paddingRight: 12, paddingTop: 4, letterSpacing: -2 }}>H</span>
                ands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization. The work is unglamorous in description — webhook event maps, conversion funnels, paywall logic — but the compounding effect is anything but.
              </p>
              <p style={{ marginTop: 16 }}>
                At LH2, his recent launch — the "Go Ad-Free" subscription on Shark Tank Blog — combines Stripe-first checkout, SSO via Google One Tap, ad-suppression logic, and a custom WordPress membership plugin. Instrumented GA4 funnels and Stripe webhook tracking across four publishing assets back the experimentation loop.
              </p>
              <p style={{ marginTop: 16 }}>
                Before LH2 came Opinium.ai — first employee, NLP/LLM social intelligence, ten months of building before the company wound down post-PMF. Before that, ecosystem work at PedalStart and investor relations at Cyntra. The throughline is execution at the operator level: shipping, instrumenting, and learning from a live audience.
              </p>
            </div>

            <div style={{ marginTop: 48 }}>
              <RuleLabel color={t.accent2}>What I work on</RuleLabel>
              <div style={{ marginTop: 24, borderTop: `1px solid ${t.rule}` }}>
                {D.skills.map((s, i) => (
                  <div key={i} style={{
                    padding: '20px 0', borderBottom: `1px solid ${t.rule}`,
                    display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'baseline',
                  }}>
                    <div>
                      <div style={{ fontFamily: t.display, fontSize: 17, color: t.ink, fontStyle: 'italic' }}>{s.group}</div>
                      <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkFaint, marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{s.caption}</div>
                    </div>
                    <div style={{ fontFamily: t.body, fontSize: 14, lineHeight: 1.7, color: t.inkSoft }}>
                      {[...s.primary, ...s.more].join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Marginalia */}
          <aside style={{ paddingTop: 16 }}>
            <div style={{
              padding: '20px 20px', background: t.paper, border: `1px solid ${t.rule}`,
            }}>
              <RuleLabel>Notes</RuleLabel>
              <div style={{ marginTop: 16, fontFamily: t.body, fontSize: 13, lineHeight: 1.55, color: t.inkSoft }}>
                <p style={{ margin: '0 0 12px' }}>
                  <span style={{ color: t.accent, fontWeight: 600 }}>i.</span> The "Go Ad-Free" launch is priced at $1–2/mo — the kind of low-friction price point that requires very tight funnel work to make math.
                </p>
                <p style={{ margin: '0 0 12px' }}>
                  <span style={{ color: t.accent, fontWeight: 600 }}>ii.</span> ~50M monthly sessions across the LH2 portfolio means even small CRO wins compound at scale.
                </p>
                <p style={{ margin: 0 }}>
                  <span style={{ color: t.accent, fontWeight: 600 }}>iii.</span> All experimentation runs on a locked metric spec for cross-property comparability.
                </p>
              </div>
            </div>

            <div style={{
              marginTop: 16, padding: '20px 20px', background: t.ink, color: t.paper,
            }}>
              <div style={{ fontFamily: t.sans, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: '#C9C2B5', marginBottom: 12 }}>The Subject</div>
              <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', lineHeight: 1.4 }}>
                {D.education.school}<br />
                <span style={{ fontFamily: t.sans, fontSize: 12, fontStyle: 'normal', color: '#C9C2B5', letterSpacing: 0.2 }}>
                  {D.education.degree}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Chapter 2: Career file ----------------------------------------- */}
      <section style={{ padding: '40px 80px 80px', borderTop: `1px solid ${t.ink}`, background: t.paper }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56, paddingTop: 56 }}>
          <div>
            <div style={{
              fontFamily: t.display, fontSize: 96, lineHeight: 0.9, color: t.accent, letterSpacing: -3,
            }}>II.</div>
            <RuleLabel>The career file</RuleLabel>
            <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', color: t.ink, marginTop: 12, lineHeight: 1.35 }}>
              Four roles, three years, three industries.
            </div>
          </div>

          <div>
            <h2 style={{
              fontFamily: t.display, fontSize: 72, fontWeight: 400, lineHeight: 0.96,
              letterSpacing: -2, margin: '0 0 48px',
            }}>
              Where I've <span style={{ fontStyle: 'italic', color: t.accent }}>made impact.</span>
            </h2>

            {D.experience.map((e, i) => (
              <article key={i} style={{
                padding: '40px 0', borderTop: `1px solid ${t.rule}`,
                borderBottom: i === D.experience.length - 1 ? `1px solid ${t.rule}` : 'none',
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 40,
              }}>
                <div>
                  <div style={{ fontFamily: t.display, fontSize: 40, color: t.accent, letterSpacing: -1, lineHeight: 0.95 }}>
                    {String(D.experience.length - i).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft, marginTop: 8, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                    {e.period}
                  </div>
                  {e.current && (
                    <div style={{ marginTop: 12, fontFamily: t.sans, fontSize: 11, color: t.accent, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 600 }}>
                      ● Present
                    </div>
                  )}
                </div>

                <div>
                  <h3 style={{
                    fontFamily: t.display, fontSize: 32, fontWeight: 400,
                    letterSpacing: -0.8, margin: '0 0 6px', lineHeight: 1.15,
                  }}>
                    {e.role}
                  </h3>
                  <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', color: t.inkSoft, marginBottom: 20 }}>
                    <span style={{ color: t.accent }}>{e.company}</span> — {e.location}
                  </div>
                  <p style={{ fontFamily: t.body, fontSize: 16, lineHeight: 1.7, color: t.ink, margin: 0 }}>
                    {e.body}
                  </p>
                  {e.highlight && (
                    <div style={{ marginTop: 24, paddingLeft: 24, borderLeft: `2px solid ${t.accent}` }}>
                      <div style={{ fontFamily: t.sans, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: t.accent, fontWeight: 600, marginBottom: 8 }}>
                        ✦ {e.highlight.label}
                      </div>
                      <p style={{ fontFamily: t.display, fontSize: 17, fontStyle: 'italic', lineHeight: 1.55, color: t.ink, margin: 0, letterSpacing: -0.2 }}>
                        {e.highlight.body}
                      </p>
                    </div>
                  )}
                  {e.metrics && (
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
                      marginTop: 24, borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}`,
                    }}>
                      {e.metrics.map((m, j) => (
                        <div key={j} style={{
                          padding: '14px 0',
                          borderRight: j < 3 ? `1px solid ${t.rule}` : 'none',
                          paddingLeft: j > 0 ? 20 : 0, paddingRight: 20,
                        }}>
                          <div style={{ fontFamily: t.display, fontSize: 28, color: j === 0 ? t.accent : t.ink, letterSpacing: -0.8 }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkSoft, marginTop: 4, letterSpacing: 1.2, textTransform: 'uppercase' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ marginTop: 20, fontFamily: t.sans, fontSize: 12, color: t.inkSoft }}>
                    <span style={{ letterSpacing: 1.2, textTransform: 'uppercase', color: t.inkFaint, marginRight: 12 }}>Tools</span>
                    {e.stack.join(' · ')}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: Selected works -------------------------------------- */}
      <section style={{ padding: '40px 80px 80px', borderTop: `1px solid ${t.ink}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56, paddingTop: 56 }}>
          <div>
            <div style={{ fontFamily: t.display, fontSize: 96, lineHeight: 0.9, color: t.accent, letterSpacing: -3 }}>III.</div>
            <RuleLabel>Selected works</RuleLabel>
            <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', color: t.ink, marginTop: 12, lineHeight: 1.35 }}>
              Four featured projects, drawn from a library of nineteen.
            </div>
          </div>

          <div>
            <h2 style={{
              fontFamily: t.display, fontSize: 72, fontWeight: 400, lineHeight: 0.96,
              letterSpacing: -2, margin: '0 0 48px',
            }}>
              Things I've <span style={{ fontStyle: 'italic', color: t.accent }}>built.</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {D.featuredProjects.map((p, i) => (
                <article key={p.num} style={{
                  padding: '32px 0',
                  borderTop: `1px solid ${t.rule}`,
                  borderRight: i % 2 === 0 ? `1px solid ${t.rule}` : 'none',
                  borderBottom: i >= 2 ? `1px solid ${t.rule}` : 'none',
                  paddingLeft: i % 2 === 1 ? 40 : 0,
                  paddingRight: i % 2 === 0 ? 40 : 0,
                }}>
                  <RuleLabel color={t.accent}>{p.num} · {p.tag}</RuleLabel>
                  <h3 style={{
                    fontFamily: t.display, fontSize: 32, fontWeight: 400, lineHeight: 1.05,
                    letterSpacing: -0.8, margin: '20px 0 12px',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: t.body, fontSize: 15, lineHeight: 1.65, color: t.inkSoft, margin: '0 0 20px' }}>
                    {p.desc}
                  </p>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontFamily: t.sans, fontSize: 12, color: t.inkSoft, letterSpacing: 1, textTransform: 'uppercase',
                    paddingTop: 12, borderTop: `1px dashed ${t.rule}`,
                  }}>
                    <span>{p.stack}</span>
                    <span style={{ color: t.accent }}>Read more ↗</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Index */}
            <div style={{ marginTop: 48 }}>
              <RuleLabel>The index</RuleLabel>
              <div style={{ marginTop: 16, columnCount: 2, columnGap: 48, columnRule: `1px solid ${t.rule}` }}>
                {D.projectCategories.map((c) => (
                  <div key={c.cat} style={{ breakInside: 'avoid', marginBottom: 20 }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                      paddingBottom: 8, borderBottom: `1px solid ${t.rule}`,
                    }}>
                      <div style={{ fontFamily: t.display, fontSize: 17, color: t.ink, fontStyle: 'italic' }}>
                        {c.cat}
                      </div>
                      <span style={{ fontFamily: t.sans, fontSize: 11, color: t.inkFaint, letterSpacing: 1 }}>
                        {String(c.count).padStart(2, '0')}
                      </span>
                    </div>
                    {c.items.map((it) => (
                      <div key={it.title} style={{
                        padding: '8px 0', borderBottom: `1px dotted ${t.rule}`,
                        display: 'flex', justifyContent: 'space-between',
                        fontFamily: t.body, fontSize: 13, color: t.ink,
                      }}>
                        <span>{it.title}</span>
                        <span style={{ color: t.inkFaint, fontFamily: t.sans, fontSize: 11 }}>{it.stack}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Correspondence (contact) ---------------------------------------- */}
      <section style={{ padding: '0', borderTop: `1px solid ${t.ink}`, background: t.ink, color: t.paper }}>
        <div style={{ padding: '80px 80px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: t.display, fontSize: 96, lineHeight: 0.9, color: t.accent, letterSpacing: -3 }}>IV.</div>
            <RuleLabel color="#C9C2B5">Correspondence</RuleLabel>
            <div style={{ fontFamily: t.display, fontSize: 18, fontStyle: 'italic', color: t.paper, marginTop: 12, lineHeight: 1.35 }}>
              How to reach the operator.
            </div>
          </div>

          <div>
            <h2 style={{
              fontFamily: t.display, fontSize: 96, fontWeight: 400, lineHeight: 0.92,
              letterSpacing: -3, margin: '0 0 32px', color: t.paper,
            }}>
              Let's build<br />
              <span style={{ fontStyle: 'italic', color: t.accent }}>something good.</span>
            </h2>
            <p style={{
              fontFamily: t.display, fontSize: 22, fontStyle: 'italic', lineHeight: 1.5,
              color: '#C9C2B5', margin: '0 0 48px', maxWidth: 720, letterSpacing: -0.3,
            }}>
              Open to growth & monetization roles, founding-team work, and ambitious 0→1 product opportunities.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid rgba(255,255,255,0.15)' }}>
              {[
                ['By post',     'Bangalore, India · UTC+5:30'],
                ['By telephone', D.phone],
                ['By electronic mail', D.email],
                ['On the web',   'in/mohnish-nagar · gh/nagarmohnish'],
              ].map(([k, v], i) => (
                <div key={k} style={{
                  padding: '24px 28px',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}>
                  <div style={{ fontFamily: t.sans, fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: '#9E9286', marginBottom: 10 }}>{k}</div>
                  <div style={{ fontFamily: t.display, fontSize: 22, color: t.paper, letterSpacing: -0.4, fontStyle: 'italic' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colophon footer */}
        <div style={{
          padding: '24px 80px', borderTop: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: t.sans, fontSize: 11, color: '#9E9286', letterSpacing: 1.2, textTransform: 'uppercase',
        }}>
          <span>The Quarterly · Vol. 04</span>
          <span>Set in Newsreader · Printed in Bangalore</span>
          <span>© MMXXVI Mohnish Nagar · End</span>
        </div>
      </section>
    </div>
  );
}

window.MagazineDesign = MagazineDesign;
