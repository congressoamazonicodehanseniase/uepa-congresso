import nodemailer from 'nodemailer';
import { CONTATO } from '../../lib/config';

const CAMPOS_OBRIGATORIOS = ['nomeCompleto', 'nomeCracha', 'categoria', 'tipoParticipacao', 'cidade', 'instituicao', 'contato', 'email'] as const;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: 'Formulário inválido' }, { status: 400 });
  }

  const campo = (nome: string) => {
    const valor = form.get(nome);
    return typeof valor === 'string' ? valor : undefined;
  };

  const dados = {
    nomeCompleto: campo('nomeCompleto'),
    nomeCracha: campo('nomeCracha'),
    categoria: campo('categoria'),
    especialidade: campo('especialidade'),
    empresa: campo('empresa'),
    tipoParticipacao: campo('tipoParticipacao'),
    cidade: campo('cidade'),
    instituicao: campo('instituicao'),
    contato: campo('contato'),
    email: campo('email'),
    postoSaude: campo('postoSaude'),
    funcao: campo('funcao'),
  };
  const comprovanteUrl = campo('comprovanteUrl');
  const comprovanteVinculoUrl = campo('comprovanteVinculoUrl');

  for (const obrigatorio of CAMPOS_OBRIGATORIOS) {
    if (!dados[obrigatorio]) {
      return Response.json({ error: `Campo obrigatório ausente: ${obrigatorio}` }, { status: 400 });
    }
  }
  if (!comprovanteUrl) {
    return Response.json({ error: 'URL do comprovante de pagamento ausente' }, { status: 400 });
  }

  const linhas: [string, string | undefined][] = [
    ['Nome completo', dados.nomeCompleto],
    ['Nome para o crachá', dados.nomeCracha],
    ['Categoria', dados.categoria],
    ['Especialidade', dados.especialidade],
    ['Empresa', dados.empresa],
    ['Posto de Saúde', dados.postoSaude],
    ['Função', dados.funcao],
    ['Palestrante ou participante/ouvinte', dados.tipoParticipacao],
    ['Cidade', dados.cidade],
    ['Instituição', dados.instituicao],
    ['E-mail', dados.email],
    ['Contato', dados.contato],
  ];

  const corpoTexto = linhas
    .filter(([, valor]) => valor)
    .map(([label, valor]) => `${label}: ${valor}`)
    .join('\n');

  const corpoHtml = linhas
    .filter(([, valor]) => valor)
    .map(([label, valor]) => `<tr><td style="padding:4px 12px 4px 0;color:#574a39;font-weight:600">${label}</td><td style="padding:4px 0">${valor}</td></tr>`)
    .join('');

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.warn(`GMAIL_USER/GMAIL_APP_PASSWORD não configurados — inscrição + comprovante de ${dados.nomeCompleto} não foram enviados por e-mail:`);
    console.warn(corpoTexto);
    return Response.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const textoAnexos = `Comprovante de pagamento: ${comprovanteUrl}\n` + (comprovanteVinculoUrl ? `Comprovante de vínculo: ${comprovanteVinculoUrl}\n` : '');
  const htmlAnexos = `<p style="font-family:sans-serif;font-size:14px"><strong>Comprovante de pagamento:</strong> <a href="${comprovanteUrl}">${comprovanteUrl}</a><br />` + 
                     (comprovanteVinculoUrl ? `<strong>Comprovante de vínculo:</strong> <a href="${comprovanteVinculoUrl}">${comprovanteVinculoUrl}</a></p>` : '</p>');

  try {
    await transporter.sendMail({
      from: `"Inscrições · Congresso Amazônico de Hanseníase" <${GMAIL_USER}>`,
      to: CONTATO.email,
      replyTo: GMAIL_USER,
      subject: `Inscrição + comprovante: ${dados.nomeCompleto}`,
      text: `${corpoTexto}\n\n${textoAnexos}`,
      html: `<table style="font-family:sans-serif;font-size:14px">${corpoHtml}</table>${htmlAnexos}`,
    });
  } catch (err) {
    console.error('Falha ao enviar e-mail de inscrição + comprovante', err);
    return Response.json({ error: 'Falha ao enviar e-mail' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
