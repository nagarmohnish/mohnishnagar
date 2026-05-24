// Wires the five portfolio designs into a DesignCanvas with one section.

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="portfolio-directions"
        title="Mohnish Nagar — Portfolio · 5 Directions"
        subtitle="Click any artboard to focus · pan/zoom the canvas to compare side-by-side"
      >
        <DCArtboard id="d1-editorial" label="01 · Swiss Editorial" width={1440} height={4800}>
          <EditorialDesign />
        </DCArtboard>
        <DCArtboard id="d2-terminal" label="02 · Operator Terminal" width={1440} height={4800}>
          <TerminalDesign />
        </DCArtboard>
        <DCArtboard id="d3-brutalist" label="03 · Brutalist Magazine" width={1440} height={5200}>
          <BrutalistDesign />
        </DCArtboard>
        <DCArtboard id="d4-saas" label="04 · Modern SaaS" width={1440} height={4800}>
          <SaasDesign />
        </DCArtboard>
        <DCArtboard id="d5-dossier" label="05 · Document Dossier" width={1440} height={4800}>
          <DossierDesign />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
