const coordenacao = [
  {
    name: 'Dra. Dyana Melkys Borges da Silva',
    role: 'Coordenação Geral e Científica',
    institution: 'Médica Dermatologista · CRM-PA 9310 · RQE 5394 (Dermatologia) · RQE 6065 (Hansenologia)',
    bio: 'Graduada em Medicina pela UEPA, Mestra em Cirurgia Experimental (CIPE-UEPA) e orientadora da LIMDERM. Membro da SBH, SBD, SBCD, GBM e SBC. Idealizadora do ADHAM.',
  },
  {
    name: 'Dra. Milene Silveira Ferreira',
    role: 'Coordenação Científica',
    institution: 'Biomédica · Doutora em Biologia de Agentes Infecciosos e Parasitários',
    bio: 'Pós-doutora em Ciência da Saúde (FIOCRUZ-MG), docente da UEPA e pesquisadora do Instituto Evandro Chagas. Líder de grupo de pesquisa em doenças humanas e saúde única.',
  },
];

export default function Palestrantes() {
  return (
    <section id="palestrantes" className="py-8 sm:py-10 bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="rule-label mb-4">Coordenação científica</p>
        <div className="grid md:grid-cols-2 gap-4">
          {coordenacao.map((s, i) => (
            <div key={s.name} className="rounded-xl border border-line bg-canvas p-4 sm:p-5">
              <span className="font-[family-name:var(--font-display)] font-bold text-brand-strong text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-base leading-snug mt-0.5">
                {s.name}
              </h3>
              <p className="text-brand-strong font-semibold text-sm mt-1">{s.role}</p>
              <p className="text-muted text-xs mt-0.5">{s.institution}</p>
              <p className="text-ink-soft text-sm mt-2 leading-relaxed">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
