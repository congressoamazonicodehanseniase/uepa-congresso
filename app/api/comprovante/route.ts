import nodemailer from 'nodemailer';
import { CONTATO } from '../../lib/config';

const TAMANHO_MAXIMO = 8 * 1024 * 1024; // 8MB

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: 'Formulário inválido' }, { status: 400 });
  }

  const nomeCompleto = form.get('nomeCompleto');
  const arquivo = form.get('comprovante');

  if (!nomeCompleto || typeof nomeCompleto !== 'string') {
    return Response.json({ error: 'Campo obrigatório ausente: nomeCompleto' }, { status: 400 });
  }
  if (!(arquivo instanceof File) || arquivo.size === 0) {
    return Response.json({ error: 'Anexe o comprovante de pagamento' }, { status: 400 });
  }
  if (arquivo.size > TAMANHO_MAXIMO) {
    return Response.json({ error: 'Arquivo muito grande (máximo 8MB)' }, { status: 400 });
  }
  if (!arquivo.type.startsWith('image/') && arquivo.type !== 'application/pdf') {
    return Response.json({ error: 'Envie uma imagem ou PDF' }, { status: 400 });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.warn(`GMAIL_USER/GMAIL_APP_PASSWORD não configurados — comprovante de ${nomeCompleto} não foi enviado por e-mail`);
    return Response.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const buffer = Buffer.from(await arquivo.arrayBuffer());

  try {
    await transporter.sendMail({
      from: `"Inscrições · Congresso Amazônico de Hanseníase" <${GMAIL_USER}>`,
      to: CONTATO.email,
      replyTo: GMAIL_USER,
      subject: `Comprovante de pagamento: ${nomeCompleto}`,
      text: `Comprovante de pagamento Pix enviado por: ${nomeCompleto}`,
      html: `<p>Comprovante de pagamento Pix enviado por: <strong>${nomeCompleto}</strong></p>`,
      attachments: [{ filename: arquivo.name || 'comprovante', content: buffer, contentType: arquivo.type }],
    });
  } catch (err) {
    console.error('Falha ao enviar e-mail de comprovante', err);
    return Response.json({ error: 'Falha ao enviar e-mail' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
