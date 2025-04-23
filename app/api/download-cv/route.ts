import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Ruta al archivo PDF en la carpeta public
    const filePath = path.join(process.cwd(), "public", "cv-javier-nunez.pdf")

    // Leer el archivo
    const fileBuffer = fs.readFileSync(filePath)

    // Configurar los headers para la respuesta
    const headers = new Headers()
    headers.set("Content-Type", "application/pdf")
    headers.set("Content-Disposition", 'attachment; filename="CV_Javier_Nunez.pdf"')

    // Devolver el archivo como respuesta
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error al descargar el CV:", error)
    return NextResponse.json({ error: "Error al descargar el CV" }, { status: 500 })
  }
}
