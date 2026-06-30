import nodemailer from 'nodemailer';
import { CONTATO } from '../../lib/config';

type Inscricao = {
  nomeCompleto: string;
  nomeCracha: string;
  categoria: string;
  especialidade?: string;
  empresa?: string;
  tipoParticipacao: string;
  cidade: string;
  instituicao: string;
};

const CAMPOS_OBRIGATORIOS: (keyof Inscricao)[] = [
  'nomeCompleto',
  'nomeCracha',
  'categoria',
  'tipoParticipacao',
  'cidade',
  'instituicao',
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

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;

  const linhas: [string, string | undefined][] = [
    ['Nome completo', dados.nomeCompleto],
    ['Nome para o crachá', dados.nomeCracha],
    ['Categoria', dados.categoria],
    ['Especialidade', dados.especialidade],
    ['Empresa', dados.empresa],
    ['Palestrante ou participante/ouvinte', dados.tipoParticipacao],
    ['Cidade', dados.cidade],
    ['Instituição', dados.instituicao],
  ];

  const corpoTexto = linhas
    .filter(([, valor]) => valor)
    .map(([label, valor]) => `${label}: ${valor}`)
    .join('\n');

  const corpoHtml = linhas
    .filter(([, valor]) => valor)
    .map(([label, valor]) => `<tr><td style="padding:4px 12px 4px 0;color:#574a39;font-weight:600">${label}</td><td style="padding:4px 0">${valor}</td></tr>`)
    .join('');

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.warn('GMAIL_USER/GMAIL_APP_PASSWORD não configurados — inscrição registrada apenas no log:');
    console.warn(corpoTexto);
    return Response.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Inscrições · Congresso Amazônico de Hanseníase" <${GMAIL_USER}>`,
      to: CONTATO.email,
      replyTo: GMAIL_USER,
      subject: `Nova inscrição: ${dados.nomeCompleto}`,
      text: corpoTexto,
      html: `<table style="font-family:sans-serif;font-size:14px">${corpoHtml}</table>`,
    });
  } catch (err) {
    console.error('Falha ao enviar e-mail de inscrição', err);
    return Response.json({ error: 'Falha ao enviar e-mail' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
