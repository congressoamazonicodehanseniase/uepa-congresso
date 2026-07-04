import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Sem autenticação necessária para o upload público de comprovantes
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'image/heic', 'image/webp'],
          maximumSizeInBytes: 12 * 1024 * 1024, // 12MB limit
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log('Upload de comprovante via Blob concluído:', blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 } // Webhook will retry 5 times on errors
    );
  }
}
