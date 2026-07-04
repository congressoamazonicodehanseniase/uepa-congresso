import { put } from '@vercel/blob';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

async function testUploadAndEmail() {
  const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (!BLOB_READ_WRITE_TOKEN) {
    console.error('Falta BLOB_READ_WRITE_TOKEN');
    return;
  }

  console.log('1. Criando um arquivo fictício de 6MB...');
  const largeBuffer = crypto.randomBytes(6 * 1024 * 1024);

  console.log('2. Fazendo upload para o Vercel Blob...');
  let blobUrl;
  try {
    const blob = await put('teste2-6mb.pdf', largeBuffer, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
      contentType: 'application/pdf'
    });
    blobUrl = blob.url;
    console.log('Upload bem sucedido! URL:', blobUrl);
  } catch (error) {
    console.error('Falha no upload para o Blob:', error);
    return;
  }

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.log('Credenciais do Gmail não configuradas, pulando envio de e-mail.');
    return;
  }

  console.log('3. Testando envio de e-mail com a URL...');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Teste Local" <${GMAIL_USER}>`,
      to: 'congressoamazonicodehanseniase@gmail.com', // Enviar para si mesmo
      subject: 'Teste de Upload de Arquivo Grande (6MB)',
      text: `Teste bem sucedido. O arquivo grande não foi anexado, mas aqui está o link gerado pelo Blob: ${blobUrl}`,
    });
    console.log('E-mail enviado com sucesso!');
  } catch (err) {
    console.error('Falha ao enviar e-mail:', err);
  }
}

testUploadAndEmail();
