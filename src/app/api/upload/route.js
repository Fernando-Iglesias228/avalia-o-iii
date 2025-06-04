import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const timestamp = Date.now();
    const ext = path.extname(file.name);
    const filename = `foco_${timestamp}${ext}`;
    const filePath = path.join(uploadDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.promises.writeFile(filePath, buffer);

    return NextResponse.json({ 
      url: `/uploads/${filename}` 
    });

  } catch (error) {
    console.error('Erro no upload:', error);
    return NextResponse.json(
      { error: 'Erro durante o upload' }, 
      { status: 500 }
    );
  }
}