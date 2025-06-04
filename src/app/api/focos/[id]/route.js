import { NextResponse } from "next/server";
import { deleteFoco, getFocoById } from "@/lib/db";
import fs from "fs";
import path from "path";


export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    const foco = await getFocoById(id);
    if (!foco) {
      return NextResponse.json({ error: "Foco não encontrado" }, { status: 404 });
    }

    const result = await deleteFoco(id);
    if (result.changes === 0) {
      return NextResponse.json({ error: "Foco não foi deletado" }, { status: 500 });
    }

    const imagePath = path.join(process.cwd(), "public", foco.imagem);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Erro ao deletar a imagem:", err);
      }
    });

    return NextResponse.json({ message: "Foco deletado com sucesso" });

  } catch (error) {
    console.error("Erro no DELETE:", error);
    return NextResponse.json({ error: "Erro ao deletar foco" }, { status: 500 });
  }
}