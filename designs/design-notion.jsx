/* Design 8 — Notion Workspace
 * Block-based, functional aesthetic. Sidebar tree + main page with
 * properties, callouts, toggle blocks, database views. Monochrome + one accent.
 */

const notionTokens = {
  bg: '#FFFFFF',
  sidebar: '#F7F6F3',
  hoverBg: '#F1F0EE',
  ink: '#37352F',
  inkSoft: '#787774',
  inkFaint: '#9B9A97',
  rule: '#E9E9E7',
  ruleSoft: '#EDEBE7',
  accent: '#2383E2',     // notion blue
  red: '#E03E3E',
  yellow: '#DFAB01',
  green: '#0F7B6C',
  purple: '#6940A5',
  pink: '#AD1A72',
  orange: '#D9730D',
  sans: '"Inter", system-ui, sans-serif',
  serif: 'Georgia, serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function NotionDesign() {
  const D = window.PORTFOLIO_DATA;
  const t = notionTokens;

  const Property = ({ icon, label, children }) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '180px 1fr', gap: 12,
      padding: '6px 8px', borderRadius: 4, alignItems: 'center', minHeight: 32,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: t.inkFaint, fontSize: 14 }}>
        <span style={{ width: 16, fontSize: 14, opacity: 0.7 }}>{icon}</span>
        <span>{label}</span>
      </div>
      <div style={{ fontSize: 14, color: t.ink }}>{children}</div>
    </div>
  );

  const Tag = ({ children, color }) => {
    const palette = {
      blue:   { bg: '#DBEDFE', ink: '#0B6E99' },
      green:  { bg: '#DDEDEA', ink: '#0F7B6C' },
      red:    { bg: '#FBE4E4', ink: '#E03E3E' },
      yellow: { bg: '#FAEAB1', ink: '#8E5816' },
      purple: { bg: '#EAE4F2', ink: '#6940A5' },
      pink:   { bg: '#F4DFEB', ink: '#AD1A72' },
      orange: { bg: '#FAE6CA', ink: '#A36016' },
      gray:   { bg: '#EBECED', ink: '#37352F' },
    }[color || 'gray'];
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 12, padding: '2px 8px', borderRadius: 4,
        background: palette.bg, color: palette.ink, fontWeight: 500, lineHeight: 1.4,
      }}>{children}</span>
    );
  };

  const Block = ({ children, style }) => (
    <div style={{ marginBottom: 4, ...style }}>{children}</div>
  );

  const Heading = ({ children, level = 1, style }) => {
    const sizes = { 1: 30, 2: 24, 3: 20 };
    const margins = { 1: '32px 0 4px', 2: '28px 0 4px', 3: '20px 0 4px' };
    return (
      <div style={{
        fontFamily: t.sans, fontSize: sizes[level], fontWeight: 700,
        color: t.ink, letterSpacing: -0.5, lineHeight: 1.25,
        margin: margins[level], ...style,
      }}>{children}</div>
    );
  };

  const Callout = ({ icon, color, children, style }) => (
    <div style={{
      display: 'flex', gap: 12, padding: '14px 18px', borderRadius: 4,
      background: `${color || t.accent}10`, alignItems: 'flex-start',
      margin: '8px 0', ...style,
    }}>
      <span style={{ fontSize: 18, lineHeight: 1.4 }}>{icon}</span>
      <div style={{ fontSize: 14.5, color: t.ink, lineHeight: 1.55, flex: 1 }}>{children}</div>
    </div>
  );

  const ToggleRow = ({ title, count, color, children, defaultOpen = true }) => (
    <div style={{ marginBottom: 4 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px', borderRadius: 4,
      }}>
        <span style={{ fontSize: 10, color: t.inkFaint, width: 12, lineHeight: 1 }}>{defaultOpen ? '▼' : '▶'}</span>
        <span style={{ fontSize: 15, fontWeight: 500, color: t.ink, flex: 1 }}>{title}</span>
        <Tag color={color}>{count} {count === 1 ? 'repo' : 'repos'}</Tag>
      </div>
      {defaultOpen && (
        <div style={{ paddingLeft: 28, marginTop: 4 }}>
          {children}
        </div>
      )}
    </div>
  );

  // Sidebar items
  const sidePages = [
    { icon: '👤', label: 'About', sub: ['📍 Profile', '🎓 Education'] },
    { icon: '💼', label: 'Experience', sub: ['🏢 LH2 Holdings', '🤖 Opinium.ai', '🚀 PedalStart', '💰 Cyntra'], current: true },
    { icon: '🛠️', label: 'Skills', sub: ['📈 Growth', '📊 Analytics', '🐍 Python', '⚙️ Tools'] },
    { icon: '📦', label: 'Projects', sub: ['⭐ Featured', '📁 All repos'] },
    { icon: '📮', label: 'Contact', sub: [] },
  ];

  return (
    <div style={{
      width: 1440, background: t.bg, color: t.ink, fontFamily: t.sans,
      display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '100%',
    }}>
      {/* SIDEBAR ------------------------------------------------------- */}
      <aside style={{ background: t.sidebar, padding: '16px 12px', borderRight: `1px solid ${t.rule}` }}>
        {/* Workspace switcher */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
          borderRadius: 4, marginBottom: 16,
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: 4, background: t.ink, color: t.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 600,
          }}>MN</div>
          <span style={{ fontSize: 14, fontWeight: 600, color: t.ink, flex: 1 }}>Mohnish's Workspace</span>
          <span style={{ fontSize: 11, color: t.inkFaint }}>⌄</span>
        </div>

        {/* Search */}
        <div style={{ marginBottom: 16 }}>
          {['🔍 Search', '🕓 Updates', '⚙️ Settings & members', '＋ New page'].map((l) => (
            <div key={l} style={{
              padding: '6px 10px', fontSize: 14, color: t.inkSoft, borderRadius: 4,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              {l}
            </div>
          ))}
        </div>

        {/* Pages */}
        <div style={{ fontSize: 11, color: t.inkFaint, padding: '8px 10px', letterSpacing: 0.5 }}>
          PRIVATE
        </div>
        {sidePages.map((p) => (
          <div key={p.label}>
            <div style={{
              padding: '6px 10px', fontSize: 14, fontWeight: p.current ? 600 : 400, color: t.ink, borderRadius: 4,
              background: p.current ? t.hoverBg : 'transparent',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 10, color: t.inkFaint, width: 12 }}>▼</span>
              <span>{p.icon}</span>
              <span style={{ flex: 1 }}>{p.label}</span>
              <span style={{ fontSize: 11, color: t.inkFaint }}>＋</span>
            </div>
            <div style={{ paddingLeft: 18 }}>
              {p.sub.map((s, i) => (
                <div key={s} style={{
                  padding: '5px 10px', fontSize: 13.5, color: t.inkSoft, borderRadius: 4,
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: p.current && i === 0 ? t.hoverBg : 'transparent',
                  fontWeight: p.current && i === 0 ? 500 : 400,
                  color: p.current && i === 0 ? t.ink : t.inkSoft,
                }}>
                  <span style={{ fontSize: 10, color: t.inkFaint, width: 12 }}>·</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 20, fontSize: 11, color: t.inkFaint, padding: '8px 10px', letterSpacing: 0.5 }}>
          SHARED
        </div>
        {['🌐 Public profile', '📄 Résumé (PDF)', '🔗 LinkedIn import'].map((l) => (
          <div key={l} style={{
            padding: '6px 10px', fontSize: 14, color: t.inkSoft, borderRadius: 4,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>{l}</div>
        ))}

        <div style={{ marginTop: 'auto', position: 'absolute', bottom: 16, left: 12, right: 12, width: 236 }}>
          <div style={{
            padding: '10px 12px', borderRadius: 6, background: t.bg, border: `1px solid ${t.rule}`,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: t.green }} />
            <div style={{ fontSize: 12, flex: 1 }}>
              <div style={{ color: t.ink, fontWeight: 500 }}>Available</div>
              <div style={{ color: t.inkFaint }}>for new roles</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN PAGE ----------------------------------------------------- */}
      <main style={{ padding: 0 }}>
        {/* Topbar */}
        <div style={{
          padding: '10px 24px', borderBottom: `1px solid ${t.rule}`,
          display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: t.inkSoft,
        }}>
          <span style={{ color: t.inkFaint }}>👤 About</span>
          <span style={{ color: t.inkFaint }}>/</span>
          <span style={{ color: t.ink }}>📍 Profile</span>
          <span style={{ flex: 1 }} />
          <span style={{ color: t.inkFaint }}>Edited just now</span>
          <span style={{ padding: '4px 10px', borderRadius: 4, background: t.hoverBg }}>Share</span>
          <span style={{ padding: '4px 8px' }}>⋯</span>
        </div>

        {/* Cover image */}
        <div style={{
          height: 220,
          background: `linear-gradient(120deg, #FFB199 0%, #FFD37C 35%, #C9E4FF 70%, #B4D5FE 100%)`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', bottom: 12, right: 24, padding: '6px 10px',
            background: 'rgba(255,255,255,0.85)', borderRadius: 4,
            fontSize: 12, color: t.inkSoft,
          }}>
            🖼 Change cover
          </div>
        </div>

        {/* Page content */}
        <div style={{ padding: '0 96px 80px', maxWidth: 980 }}>
          {/* Icon */}
          <div style={{
            width: 80, height: 80, borderRadius: 8, marginTop: -40, marginBottom: 20,
            background: t.bg, border: `2px solid ${t.bg}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 56, lineHeight: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          }}>📈</div>

          {/* Title */}
          <h1 style={{
            fontSize: 44, fontWeight: 700, color: t.ink, letterSpacing: -1,
            margin: '12px 0 4px', lineHeight: 1.1,
          }}>
            Mohnish Nagar — Growth & Monetization Operator
          </h1>
          <div style={{ fontSize: 14, color: t.inkFaint, marginBottom: 24 }}>
            ＋ Add description / 💬 Add comment / 🎨 Customize
          </div>

          {/* Properties */}
          <div style={{ marginBottom: 24 }}>
            <Property icon="🏢" label="Currently">
              <Tag color="blue">LH2 Holdings · Founder's Office</Tag>
            </Property>
            <Property icon="📍" label="Location">
              Bangalore, India · UTC+5:30
            </Property>
            <Property icon="⚡" label="Status">
              <Tag color="green">● Available for opportunities</Tag>
            </Property>
            <Property icon="🎯" label="Focus">
              <Tag color="orange">Growth</Tag>
              <span style={{ marginLeft: 4 }}><Tag color="purple">Monetization</Tag></span>
              <span style={{ marginLeft: 4 }}><Tag color="pink">0 → 1</Tag></span>
            </Property>
            <Property icon="🎓" label="Education">
              <Tag color="gray">IIT Kanpur · B.Sc. Earth Sci. + MBA Minor</Tag>
            </Property>
            <Property icon="✉️" label="Email">
              <span style={{ color: t.accent, borderBottom: `1px solid ${t.accent}88` }}>{D.email}</span>
            </Property>
            <Property icon="🔗" label="Links">
              <span style={{ color: t.accent, borderBottom: `1px solid ${t.accent}88`, marginRight: 12 }}>linkedin.com/in/mohnish-nagar</span>
              <span style={{ color: t.accent, borderBottom: `1px solid ${t.accent}88` }}>github.com/nagarmohnish</span>
            </Property>
            <Property icon="📅" label="Last updated">
              <span style={{ color: t.inkSoft }}>May 26, 2026 · 2:42 PM IST</span>
            </Property>
          </div>

          <div style={{ height: 1, background: t.rule, margin: '24px 0' }} />

          {/* Intro */}
          <Block>
            <p style={{ fontSize: 16, color: t.ink, lineHeight: 1.6, margin: 0 }}>
              Growth and monetization operator across digital publishing, AI/ML data products, and the early-stage startup ecosystem. Currently in the <span style={{ background: '#FAEAB1', padding: '0 4px', borderRadius: 2 }}>Founder's Office at LH2 Holdings</span>, driving 0→1 monetization across 35+ U.S. content properties — hands-on across subscription systems, payments, GA4 instrumentation, and funnel optimization.
            </p>
          </Block>

          {/* Quick stats callout */}
          <Callout icon="📊" color={t.accent}>
            <strong style={{ fontWeight: 600 }}>Snapshot 2026 →</strong>{' '}
            <span style={{ color: t.inkSoft }}>
              35+ content properties · 20K+ newsletter subs in 3 months · 10%+ revenue uplift · ~50M monthly sessions managed.
            </span>
          </Callout>

          {/* Headline metrics — synced block / database */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 13, color: t.inkSoft }}>
              <span>🔢</span>
              <span style={{ fontWeight: 500 }}>Headline metrics</span>
              <span style={{ color: t.inkFaint }}>· 4 properties · linked database</span>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
              border: `1px solid ${t.rule}`, borderRadius: 4, overflow: 'hidden',
            }}>
              {D.headlineStats.map((s, i) => (
                <div key={i} style={{
                  padding: '16px 18px',
                  borderRight: i < 3 ? `1px solid ${t.rule}` : 'none',
                  background: t.bg,
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: t.ink, letterSpacing: -0.5, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Heading level={1}>About</Heading>
          <Block>
            <p style={{ fontSize: 16, color: t.ink, lineHeight: 1.7, margin: '4px 0' }}>
              Hands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, and funnel optimization. Launched the "Go Ad-Free" subscription on Shark Tank Blog, instrumented end-to-end conversion funnels across 4 assets, and scaled a newsletter to 20K subs in 3 months.
            </p>
            <p style={{ fontSize: 16, color: t.ink, lineHeight: 1.7, margin: '8px 0' }}>
              Previously the first employee at Opinium.ai (~40L pre-seed) where I built an NLP/LLM social intelligence product from 0→1, and assessed 500+ startups at PedalStart.
            </p>
          </Block>

          {/* Experience — table view */}
          <Heading level={1}>💼 Experience</Heading>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: t.inkSoft, marginBottom: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 14, height: 14, borderRadius: 3, background: t.accent, color: t.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>≡</span>
              Table
            </span>
            <span>🖼 Gallery</span>
            <span>📅 Timeline</span>
            <span style={{ flex: 1 }} />
            <span style={{ fontSize: 12, color: t.inkFaint }}>Filter · Sort · Search</span>
            <span style={{ padding: '4px 10px', borderRadius: 4, background: t.accent, color: t.bg, fontSize: 12, fontWeight: 500 }}>＋ New</span>
          </div>

          <div style={{ border: `1px solid ${t.rule}`, borderRadius: 4, overflow: 'hidden' }}>
            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '38px 1.7fr 1.2fr 1fr 100px 90px',
              background: t.sidebar, borderBottom: `1px solid ${t.rule}`,
              padding: '8px 12px', fontSize: 12, color: t.inkSoft, fontWeight: 500,
            }}>
              <span></span>
              <span>📝 Role</span>
              <span>🏢 Company</span>
              <span>📅 Period</span>
              <span>📍 Location</span>
              <span>🚦 Status</span>
            </div>
            {D.experience.map((e, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '38px 1.7fr 1.2fr 1fr 100px 90px',
                padding: '14px 12px', alignItems: 'center',
                borderBottom: i < D.experience.length - 1 ? `1px solid ${t.rule}` : 'none',
                fontSize: 14, color: t.ink,
              }}>
                <span style={{ color: t.inkFaint, fontSize: 18 }}>{['🟢', '🤖', '🚀', '💰'][i]}</span>
                <span style={{ fontWeight: 500, color: t.accent, borderBottom: `1px solid ${t.accent}33`, paddingBottom: 1 }}>
                  {e.role}
                </span>
                <span>{e.company}</span>
                <span style={{ color: t.inkSoft, fontSize: 13 }}>{e.period}</span>
                <span style={{ color: t.inkSoft, fontSize: 13 }}>{e.location}</span>
                <span><Tag color={e.current ? 'green' : 'gray'}>{e.current ? '● Active' : 'Archived'}</Tag></span>
              </div>
            ))}
            <div style={{ padding: '10px 12px', fontSize: 13, color: t.inkFaint }}>
              ＋ New
            </div>
          </div>

          {/* Toggle: current role expanded */}
          <div style={{ marginTop: 24 }}>
            <Heading level={2} style={{ margin: '20px 0 12px' }}>🟢 LH2 Holdings — Founder's Office</Heading>
            <Callout icon="✦" color={t.orange}>
              <div style={{ fontWeight: 600, marginBottom: 4, color: t.ink }}>Headline launch — "Go Ad-Free" Subscription</div>
              {D.experience[0].highlight.body}
            </Callout>
            <p style={{ fontSize: 15, color: t.ink, lineHeight: 1.7, margin: '12px 0' }}>
              {D.experience[0].body}
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
              border: `1px solid ${t.rule}`, borderRadius: 4, overflow: 'hidden', marginTop: 12,
            }}>
              {D.experience[0].metrics.map((m, j) => (
                <div key={j} style={{
                  padding: '12px 14px',
                  borderRight: j < 3 ? `1px solid ${t.rule}` : 'none',
                  background: j % 2 ? t.sidebar : t.bg,
                }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: t.ink, letterSpacing: -0.5 }}>{m.value}</div>
                  <div style={{ fontSize: 11, color: t.inkSoft, marginTop: 4 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
              {D.experience[0].stack.map((s) => (
                <code key={s} style={{
                  fontFamily: t.mono, fontSize: 12.5, padding: '2px 6px', borderRadius: 3,
                  background: '#F4F4F4', color: '#EB5757', border: `1px solid ${t.rule}`,
                }}>{s}</code>
              ))}
            </div>
          </div>

          {/* Skills — toggles */}
          <Heading level={1}>🛠️ Skills</Heading>
          <p style={{ fontSize: 14, color: t.inkSoft, lineHeight: 1.6, margin: '0 0 12px' }}>
            Five disciplines · linked from the <span style={{ color: t.accent }}>↗ Skills database</span>.
          </p>
          <div>
            {D.skills.map((s, i) => {
              const colors = ['orange', 'blue', 'green', 'purple', 'pink'];
              return (
                <ToggleRow key={i} title={`${s.group} — ${s.caption}`} count={s.primary.length + s.more.length} color={colors[i]}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '6px 0' }}>
                    {s.primary.map((p) => <Tag key={p} color={colors[i]}>{p}</Tag>)}
                    {s.more.map((p) => <Tag key={p}>{p}</Tag>)}
                  </div>
                </ToggleRow>
              );
            })}
          </div>

          {/* Projects — gallery view */}
          <Heading level={1}>📦 Projects</Heading>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: t.inkSoft, marginBottom: 12 }}>
            <span>≡ Table</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: t.ink, fontWeight: 500 }}>
              <span style={{ width: 14, height: 14, borderRadius: 3, background: t.accent, color: t.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>⊞</span>
              Gallery
            </span>
            <span>📅 Timeline</span>
            <span style={{ flex: 1 }} />
            <span style={{ fontSize: 12, color: t.inkFaint }}>4 of 19 featured</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {D.featuredProjects.map((p, i) => {
              const colors = ['orange', 'purple', 'green', 'blue'];
              return (
                <div key={p.num} style={{
                  borderRadius: 6, border: `1px solid ${t.rule}`, overflow: 'hidden',
                  background: t.bg,
                }}>
                  <div style={{
                    height: 120,
                    background: ['linear-gradient(135deg, #FFD9B3, #FFB199)', 'linear-gradient(135deg, #E5D6F0, #C8B0E0)', 'linear-gradient(135deg, #C8E6D9, #98D4B8)', 'linear-gradient(135deg, #C9E4FF, #95C5F5)'][i],
                    display: 'flex', alignItems: 'flex-end', padding: 16,
                  }}>
                    <span style={{
                      fontSize: 32, lineHeight: 1, padding: 8, background: 'rgba(255,255,255,0.85)', borderRadius: 6,
                    }}>{['📨', '💳', '📊', '🌐'][i]}</span>
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <Tag color={colors[i]}>{p.tag}</Tag>
                      <span style={{ fontSize: 11, color: t.inkFaint }}>{p.num}</span>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: t.ink, margin: '0 0 8px', letterSpacing: -0.2 }}>
                      {p.title}
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.5, color: t.inkSoft, margin: 0 }}>{p.desc}</p>
                    <div style={{ marginTop: 12, fontSize: 12, color: t.inkFaint, display: 'flex', justifyContent: 'space-between' }}>
                      <code style={{ fontFamily: t.mono, color: '#EB5757' }}>{p.stack}</code>
                      <span style={{ color: t.accent }}>Open ↗</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* All repos toggle */}
          <div style={{ marginTop: 20 }}>
            {D.projectCategories.map((c, i) => {
              const colors = ['orange', 'purple', 'green', 'blue'];
              return (
                <ToggleRow key={i} title={c.cat} count={c.count} color={colors[i]} defaultOpen={i === 2}>
                  {c.items.map((it) => (
                    <div key={it.title} style={{
                      padding: '6px 8px', borderRadius: 4,
                      display: 'flex', alignItems: 'center', gap: 10, fontSize: 14,
                    }}>
                      <span style={{ color: t.inkFaint, width: 16 }}>📄</span>
                      <span style={{ color: t.accent, borderBottom: `1px solid ${t.accent}33`, paddingBottom: 1, flex: 1 }}>{it.title}</span>
                      <span style={{ color: t.inkSoft, fontSize: 13 }}>{it.desc.slice(0, 56)}…</span>
                      <code style={{ fontFamily: t.mono, fontSize: 11, padding: '2px 6px', background: '#F4F4F4', color: '#EB5757', borderRadius: 3 }}>{it.stack}</code>
                    </div>
                  ))}
                </ToggleRow>
              );
            })}
          </div>

          {/* Contact */}
          <Heading level={1}>📮 Contact</Heading>
          <Callout icon="👋" color={t.green}>
            <strong style={{ fontWeight: 600 }}>Available for opportunities</strong> · Open to growth & monetization roles, founding-team work, and 0→1 product opportunities. Best reached by email.
          </Callout>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginTop: 16,
          }}>
            {[
              { icon: '✉️', label: 'Email',    value: D.email,       sub: 'Best for everything',  color: 'blue' },
              { icon: '☎️', label: 'Phone',    value: D.phone,       sub: 'IST business hours',   color: 'green' },
              { icon: '🔗', label: 'LinkedIn', value: 'mohnish-nagar', sub: 'Professional network', color: 'purple' },
              { icon: '🐙', label: 'GitHub',   value: 'nagarmohnish',  sub: 'Code & projects',      color: 'orange' },
            ].map((c) => (
              <div key={c.label} style={{
                padding: '14px 16px', borderRadius: 6, border: `1px solid ${t.rule}`,
                display: 'flex', alignItems: 'center', gap: 14, background: t.bg,
              }}>
                <span style={{ fontSize: 24 }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: t.inkFaint, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontSize: 14, color: t.accent, fontWeight: 500, borderBottom: `1px solid ${t.accent}33`, display: 'inline' }}>{c.value}</div>
                  <div style={{ fontSize: 12, color: t.inkSoft, marginTop: 2 }}>{c.sub}</div>
                </div>
                <span style={{ color: t.inkFaint, fontSize: 16 }}>↗</span>
              </div>
            ))}
          </div>

          {/* Slash hint */}
          <div style={{
            marginTop: 40, padding: '12px 14px', borderRadius: 6, background: t.sidebar,
            display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: t.inkFaint,
          }}>
            <span style={{ fontFamily: t.mono, padding: '2px 6px', background: t.bg, border: `1px solid ${t.rule}`, borderRadius: 3, color: t.ink }}>/</span>
            <span>Type a slash to add blocks — table, callout, embed, code, image…</span>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: 40, paddingTop: 16, borderTop: `1px solid ${t.rule}`,
            display: 'flex', justifyContent: 'space-between', fontSize: 12, color: t.inkFaint,
          }}>
            <span>Last edited by Mohnish · May 26, 2026</span>
            <span>2,847 words · 8 min read · 19 linked projects</span>
            <span>Workspace · v2026.06</span>
          </div>
        </div>
      </main>
    </div>
  );
}

window.NotionDesign = NotionDesign;
