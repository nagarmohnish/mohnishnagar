/* Design 2 — Operator Terminal
 * Dark, monospace-heavy, data-dense. Bloomberg/shadcn vibe.
 * Leans into Mohnish's analytics/Stripe/GA4/Python signal.
 */

const terminalTokens = {
  bg: '#0A0B0D',
  panel: '#101216',
  panelHi: '#15181E',
  border: '#1F2228',
  borderHi: '#2A2E36',
  ink: '#E6E4DF',
  inkSoft: '#9B968C',
  inkFaint: '#5E5A52',
  accent: '#C8FF5C',     // lime — terminal "ok"
  accent2: '#FF7A29',    // amber — "running"
  red: '#FF4D4D',
  blue: '#7AB8FF',
  mono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace',
  sans: '"Inter", system-ui, sans-serif',
};

function TerminalDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = terminalTokens;

  const Cell = ({ children, label, valueColor, big, style }) => (
    <div style={{ padding: '20px 24px', ...style }}>
      <div style={{
        fontFamily: t.mono, fontSize: 10, letterSpacing: 1.5,
        color: t.inkFaint, textTransform: 'uppercase', marginBottom: 12,
      }}>{label}</div>
      <div style={{
        fontFamily: t.mono, fontSize: big ? 32 : 16, color: valueColor || t.ink,
        letterSpacing: -0.5,
      }}>{children}</div>
    </div>
  );

  const Tag = ({ children, color }) => (
    <span style={{
      fontFamily: t.mono, fontSize: 11, padding: '3px 8px',
      background: 'rgba(255,255,255,0.04)', border: `1px solid ${t.border}`,
      color: color || t.inkSoft, letterSpacing: 0.3,
    }}>{children}</span>
  );

  const SectionHead = ({ id, name, count, status }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '14px 24px', borderBottom: `1px solid ${t.border}`,
      background: t.panel,
      fontFamily: t.mono, fontSize: 12,
    }}>
      <span style={{ color: t.accent }}>$</span>
      <span style={{ color: t.inkSoft }}>cat</span>
      <span style={{ color: t.ink }}>{id}/</span>
      <span style={{ color: t.accent2 }}>{name}.md</span>
      {count && <span style={{ color: t.inkFaint, marginLeft: 'auto' }}>{count}</span>}
      {status && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: t.accent }} />
          <span style={{ color: t.accent }}>{status}</span>
        </span>
      )}
    </div>
  );

  return (
    <div style={{
      width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans,
      backgroundImage: `linear-gradient(${t.border} 1px, transparent 1px), linear-gradient(90deg, ${t.border} 1px, transparent 1px)`,
      backgroundSize: '48px 48px', backgroundPosition: '-1px -1px',
    }}>
      {/* Top status bar ---------------------------------------------------- */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 32px', borderBottom: `1px solid ${t.border}`,
        background: t.bg, fontFamily: t.mono, fontSize: 11, color: t.inkSoft, letterSpacing: 0.3,
      }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: t.ink }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: t.accent }} />
            MOHNISH.NAGAR / OPERATOR
          </span>
          <span>v2026.01</span>
          <span>BLR · UTC+5:30</span>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          <span>./about</span>
          <span>./experience</span>
          <span>./projects</span>
          <span>./contact</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <span style={{ color: t.accent }}>● AVAILABLE</span>
          <span>26.05.26 14:42 IST</span>
        </div>
      </div>

      {/* Hero --------------------------------------------------------------- */}
      <section style={{ padding: '64px 32px 48px', position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 480px', gap: 64,
          background: t.panel, border: `1px solid ${t.border}`, padding: 56,
        }}>
          <div>
            <div style={{
              fontFamily: t.mono, fontSize: 12, color: t.accent2,
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 32,
            }}>
              {'> whoami'}
            </div>
            <h1 style={{
              fontFamily: t.mono, fontWeight: 500, fontSize: 88, lineHeight: 0.96,
              letterSpacing: -3, color: t.ink, margin: 0,
            }}>
              mohnish_<br />nagar<span style={{ color: t.accent }}>.</span>
            </h1>
            <div style={{
              fontFamily: t.mono, fontSize: 18, color: t.inkSoft,
              marginTop: 32, lineHeight: 1.5,
            }}>
              <span style={{ color: t.accent }}>{'→'}</span> growth &amp; monetization operator<br />
              <span style={{ color: t.accent }}>{'→'}</span> shipping <span style={{ color: t.ink }}>0 → 1</span> products at scale<br />
              <span style={{ color: t.accent }}>{'→'}</span> currently @ <span style={{ color: t.accent2 }}>LH2_Holdings</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <a style={{
                fontFamily: t.mono, fontSize: 13, padding: '12px 20px',
                background: t.accent, color: '#0A0B0D', textDecoration: 'none', fontWeight: 600,
              }}>./view_resume.pdf</a>
              <a style={{
                fontFamily: t.mono, fontSize: 13, padding: '12px 20px',
                border: `1px solid ${t.borderHi}`, color: t.ink, textDecoration: 'none',
              }}>./contact</a>
            </div>
          </div>

          {/* terminal panel */}
          <div style={{
            background: t.bg, border: `1px solid ${t.border}`,
            fontFamily: t.mono, fontSize: 13, lineHeight: 1.7,
          }}>
            <div style={{
              padding: '10px 14px', borderBottom: `1px solid ${t.border}`,
              display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: t.inkFaint,
            }}>
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FEBC2E' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28C840' }} />
              <span style={{ marginLeft: 12 }}>~ /mohnish — bash</span>
            </div>
            <div style={{ padding: 18, color: t.inkSoft }}>
              <div><span style={{ color: t.accent }}>mohnish@lh2</span><span style={{ color: t.inkFaint }}>:~$</span> <span style={{ color: t.ink }}>status --now</span></div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: t.accent2 }}>role</span>      = "Founder's Office, LH2"<br />
                <span style={{ color: t.accent2 }}>location</span>  = "Bangalore, IN"<br />
                <span style={{ color: t.accent2 }}>shipping</span>  = ["Go Ad-Free sub",<br />
                <span style={{ paddingLeft: 88, display: 'inline-block' }}> "GA4 + Stripe funnels",</span><br />
                <span style={{ paddingLeft: 88, display: 'inline-block' }}> "Newsletter monetization"]</span><br />
                <span style={{ color: t.accent2 }}>stack</span>     = stripe · ga4 · fastapi<br />
                <span style={{ color: t.accent2 }}>available</span> = <span style={{ color: t.accent }}>true</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <span style={{ color: t.accent }}>mohnish@lh2</span><span style={{ color: t.inkFaint }}>:~$</span> <span style={{ color: t.ink }}>_</span>
                <span style={{ display: 'inline-block', width: 8, height: 16, background: t.ink, verticalAlign: 'middle', marginLeft: 2 }} />
              </div>
            </div>
          </div>
        </div>

        {/* metric strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          marginTop: 32, background: t.panel, border: `1px solid ${t.border}`,
        }}>
          {D.headlineStats.map((s, i) => (
            <Cell key={i} label={s.label} valueColor={i === 0 ? t.accent : i === 2 ? t.accent2 : t.ink} big
              style={{ borderRight: i < 3 ? `1px solid ${t.border}` : 'none' }}>
              {s.value}
            </Cell>
          ))}
        </div>
      </section>

      {/* About ------------------------------------------------------------- */}
      <section style={{ padding: '32px 32px' }}>
        <SectionHead id="00" name="about" status="OK" />
        <div style={{
          background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none',
          padding: 40, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 56,
        }}>
          <div>
            <h2 style={{
              fontFamily: t.mono, fontSize: 32, fontWeight: 500, color: t.ink,
              margin: '0 0 24px', letterSpacing: -0.8,
            }}>
              # know_me_better.md
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: t.inkSoft, margin: '0 0 16px' }}>
              {D.bioLong}
            </p>
            <div style={{
              marginTop: 32, padding: '20px 24px',
              background: 'rgba(200,255,92,0.04)', border: `1px solid ${t.accent}33`,
            }}>
              <div style={{ fontFamily: t.mono, fontSize: 11, color: t.accent, letterSpacing: 1.5, marginBottom: 8 }}>
                {'// CURRENT ROLE'}
              </div>
              <div style={{ fontFamily: t.mono, fontSize: 15, color: t.ink, lineHeight: 1.6 }}>
                Founder's Office @ LH2 Holdings · 0→1 monetization across 35+ U.S. content properties.
              </div>
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${t.border}`, paddingLeft: 32 }}>
            <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 1.5, marginBottom: 16 }}>{'// META'}</div>
            <table style={{ width: '100%', fontFamily: t.mono, fontSize: 13, color: t.ink, borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['edu',    'IIT Kanpur'],
                  ['deg',    'B.Sc. Earth Sci. + MBA Minor'],
                  ['loc',    'Bangalore, IN'],
                  ['tz',     'UTC+5:30'],
                  ['focus',  'growth · monetization · 0→1'],
                  ['status', 'available'],
                ].map(([k, v], i) => (
                  <tr key={k} style={{ borderTop: i ? `1px dashed ${t.border}` : 'none' }}>
                    <td style={{ padding: '10px 0', color: t.accent2, width: 64 }}>{k}</td>
                    <td style={{ padding: '10px 0', color: t.ink, textAlign: 'right' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* skills table */}
        <div style={{ marginTop: 32 }}>
          <SectionHead id="00" name="skills_matrix" count={`[${D.skills.length}] groups`} />
          <div style={{ background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none' }}>
            {D.skills.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '240px 1fr',
                borderBottom: i < D.skills.length - 1 ? `1px solid ${t.border}` : 'none',
              }}>
                <div style={{
                  padding: '24px 24px', borderRight: `1px solid ${t.border}`,
                  background: t.panelHi,
                }}>
                  <div style={{ fontFamily: t.mono, fontSize: 14, color: t.accent, marginBottom: 6 }}>
                    {String(i + 1).padStart(2, '0')} · {s.group.toLowerCase().replace(/\s+/g, '_')}
                  </div>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint }}>{s.caption}</div>
                </div>
                <div style={{ padding: '24px 24px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.primary.map((p) => <Tag key={p} color={t.ink}>{p}</Tag>)}
                  {s.more.map((p) => <Tag key={p} color={t.inkFaint}>{p}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience -------------------------------------------------------- */}
      <section style={{ padding: '32px 32px' }}>
        <SectionHead id="01" name="experience" count={`[${D.experience.length}] roles`} />
        <div style={{ background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none' }}>
          {D.experience.map((e, i) => (
            <div key={i} style={{
              padding: 32,
              borderBottom: i < D.experience.length - 1 ? `1px solid ${t.border}` : 'none',
              display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40,
            }}>
              <div>
                <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, marginBottom: 8 }}>
                  {e.period}
                </div>
                {e.current ? (
                  <Tag color={t.accent}>● ACTIVE</Tag>
                ) : (
                  <Tag color={t.inkFaint}>○ ARCHIVED</Tag>
                )}
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: t.mono, fontSize: 20, color: t.ink, margin: 0, fontWeight: 500, letterSpacing: -0.3 }}>
                    {e.role}
                  </h3>
                  <div style={{ fontFamily: t.mono, fontSize: 13 }}>
                    <span style={{ color: t.accent2 }}>{e.company}</span>
                    <span style={{ color: t.inkFaint }}> · {e.location}</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: t.inkSoft, margin: '12px 0 16px' }}>
                  {e.body}
                </p>
                {e.highlight && (
                  <div style={{
                    padding: '16px 20px', background: 'rgba(255,122,41,0.05)',
                    border: `1px solid ${t.accent2}40`, marginTop: 16,
                  }}>
                    <div style={{ fontFamily: t.mono, fontSize: 11, color: t.accent2, letterSpacing: 1.5, marginBottom: 8 }}>
                      ◆ {e.highlight.label}
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: t.ink, margin: 0 }}>
                      {e.highlight.body}
                    </p>
                  </div>
                )}
                {e.metrics && (
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    marginTop: 20, background: t.bg, border: `1px solid ${t.border}`,
                  }}>
                    {e.metrics.map((m, j) => (
                      <div key={j} style={{
                        padding: '14px 16px',
                        borderRight: j < 3 ? `1px solid ${t.border}` : 'none',
                      }}>
                        <div style={{ fontFamily: t.mono, fontSize: 22, color: j === 0 ? t.accent : j === 3 ? t.accent2 : t.ink, letterSpacing: -0.5 }}>
                          {m.value}
                        </div>
                        <div style={{ fontFamily: t.mono, fontSize: 10, color: t.inkFaint, letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                  {e.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects ---------------------------------------------------------- */}
      <section style={{ padding: '32px 32px' }}>
        <SectionHead id="02" name="projects" count={`[${D.featuredProjects.length + D.projectCategories.reduce((a, c) => a + c.count, 0)}] repos`} />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none',
        }}>
          {D.featuredProjects.map((p, i) => (
            <div key={p.num} style={{
              padding: 28,
              borderRight: i % 2 === 0 ? `1px solid ${t.border}` : 'none',
              borderBottom: i < 2 ? `1px solid ${t.border}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ fontFamily: t.mono, fontSize: 11, color: t.accent, letterSpacing: 1 }}>
                  {p.num} / {p.tag.toUpperCase()}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint }}>{p.stack}</span>
                  <span style={{ color: t.accent2 }}>↗</span>
                </div>
              </div>
              <h3 style={{ fontFamily: t.mono, fontSize: 22, color: t.ink, margin: '0 0 10px', letterSpacing: -0.4, fontWeight: 500 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: t.inkSoft, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <SectionHead id="02" name="repos_by_stack" />
          <div style={{ background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none' }}>
            {D.projectCategories.map((c, i) => (
              <div key={i} style={{
                padding: 24,
                borderBottom: i < D.projectCategories.length - 1 ? `1px solid ${t.border}` : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                  <div style={{ fontFamily: t.mono, fontSize: 15, color: t.ink }}>
                    <span style={{ color: t.accent }}>{'> '}</span>
                    {c.cat}
                  </div>
                  <Tag color={t.accent2}>{c.count} {c.count === 1 ? 'repo' : 'repos'}</Tag>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 8,
                }}>
                  {c.items.map((it) => (
                    <div key={it.title} style={{
                      padding: '10px 14px', background: t.bg, border: `1px solid ${t.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <span style={{ fontFamily: t.mono, fontSize: 12, color: t.ink }}>{it.title}</span>
                      <span style={{ fontFamily: t.mono, fontSize: 10, color: t.inkFaint }}>{it.stack}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact ----------------------------------------------------------- */}
      <section style={{ padding: '32px 32px 48px' }}>
        <SectionHead id="03" name="contact" status="READY" />
        <div style={{
          background: t.panel, border: `1px solid ${t.border}`, borderTop: 'none',
          padding: 56,
        }}>
          <div style={{
            fontFamily: t.mono, fontSize: 12, color: t.accent2, letterSpacing: 2, marginBottom: 24,
          }}>
            {'> ./connect.sh --new-opportunity'}
          </div>
          <h2 style={{
            fontFamily: t.mono, fontSize: 64, fontWeight: 500, color: t.ink,
            margin: '0 0 24px', letterSpacing: -2, lineHeight: 1,
          }}>
            let's build<br />something<span style={{ color: t.accent }}>.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: t.inkSoft, maxWidth: 640, margin: '0 0 40px' }}>
            Open to growth & monetization roles, founding-team work, and 0→1 product opportunities.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            background: t.bg, border: `1px solid ${t.border}`,
          }}>
            {[
              ['email',    D.email,            'best for everything'],
              ['phone',    D.phone,            'ist business hours'],
              ['linkedin', 'mohnish-nagar',    'professional network'],
              ['github',   'nagarmohnish',     'code & projects'],
            ].map(([k, v, sub], i) => (
              <div key={k} style={{
                padding: '24px 28px',
                borderRight: i % 2 === 0 ? `1px solid ${t.border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${t.border}` : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.accent, marginBottom: 6, letterSpacing: 1.5 }}>
                    {k.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: t.mono, fontSize: 17, color: t.ink, letterSpacing: -0.3 }}>{v}</div>
                  <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkFaint, marginTop: 4 }}>{sub}</div>
                </div>
                <span style={{ color: t.accent2, fontSize: 20 }}>↗</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 24, padding: '12px 24px', background: t.panel, border: `1px solid ${t.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: t.mono, fontSize: 11, color: t.inkFaint, letterSpacing: 0.5,
        }}>
          <span>© 2026 mohnish_nagar · bangalore.india</span>
          <span style={{ color: t.accent }}>● session active · process_id 4291</span>
          <span>last_compiled 26.05.26</span>
        </div>
      </section>
    </div>
  );
}

window.TerminalDesign = TerminalDesign;
