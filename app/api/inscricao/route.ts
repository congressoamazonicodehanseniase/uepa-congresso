type Inscricao = {
  nomeCompleto: string;
  nomeCracha: string;
  categoria: string;
  especialidade?: string;
  empresa?: string;
  tipoParticipacao: string;
  cidade: string;
  instituicao: string;
  contato: string;
  email: string;
};

const CAMPOS_OBRIGATORIOS: (keyof Inscricao)[] = [
  'nomeCompleto',
  'nomeCracha',
  'categoria',
  'tipoParticipacao',
  'cidade',
  'instituicao',
  'contato',
  'email',
];

export async function POST(request: Request) {
  let dados: Partial<Inscricao>;
  try {
    dados = await request.json();
  } catch {
    return Response.json({ error: 'JSON inválido' }, { status: 400 });
  }

  for (const campo of CAMPOS_OBRIGATORIOS) {
    if (!dados[campo] || typeof dados[campo] !== 'string') {
      return Response.json({ error: `Campo obrigatório ausente: ${campo}` }, { status: 400 });
    }
  }

  // O e-mail só é enviado depois, em /api/comprovante, junto com o comprovante
  // de pagamento — texto e anexo precisam chegar na mesma mensagem.
  return Response.json({ ok: true });
}
