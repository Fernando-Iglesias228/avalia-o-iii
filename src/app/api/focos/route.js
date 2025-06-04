import { getAllFocos, insertFoco, deleteFoco } from '@/lib/db';

export async function GET() {
  try {
    const focos = await getAllFocos();
    return Response.json(focos);
  } catch (error) {
    return Response.json(
      { error: 'Erro ao buscar focos no banco de dados' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const novoFoco = await insertFoco(body);
    return Response.json(novoFoco, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: 'Erro ao inserir foco no banco de dados' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const result = await deleteFoco(id);
    
    if (result.changes === 0) {
      return Response.json({ error: 'Foco não encontrado' }, { status: 404 });
    }
    
    return Response.json({ message: 'Foco deletado com sucesso' });
  } catch (error) {
    return Response.json(
      { error: 'Erro ao deletar foco' },
      { status: 500 }
    );
  }
}