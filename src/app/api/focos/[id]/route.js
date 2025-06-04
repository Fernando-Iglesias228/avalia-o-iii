// app/api/focos/[id]/route.js
import { NextResponse } from "next/server";
import { deleteFoco } from "@/lib/db";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const result = await deleteFoco(id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Foco não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Foco deletado com sucesso" });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao deletar foco" }, { status: 500 });
  }
}