const stats = [
  { value: 'Iª', label: 'edição inaugural', note: 'bienal' },
  { value: '3', label: 'dias de programação', note: '27 a 29 de agosto' },
  { value: '2', label: 'sedes em Marabá', note: 'UEPA + CENTRO DE CONVENÇÕES' },
  { value: 'CNPq', label: 'apoio institucional', note: 'fomento à pesquisa' },
];

export default function Stats() {
  return (
    <section className="bg-canvas pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="rule-label mb-10">O evento em números</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-3 sm:px-8 first:pl-0 ${i > 0 ? 'sm:border-l sm:border-brand-tint' : ''}`}
            >
              <p className="display text-brand-strong" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}>
                {s.value}
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-ink leading-tight">{s.label}</p>
              <p className="text-muted text-sm">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
