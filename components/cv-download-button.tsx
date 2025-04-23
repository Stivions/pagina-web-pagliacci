"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { jsPDF } from "jspdf"

export function CvDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Crear un nuevo documento PDF
      const doc = new jsPDF()

      // Añadir contenido al PDF
      doc.setFontSize(16)
      doc.text("Javier Nunez", 105, 20, { align: "center" })

      doc.setFontSize(12)
      doc.text("BILINGUAL CS & TECH SUPPORT SPECIALIST / APPOINTMENT SCHEDULER", 105, 30, { align: "center" })

      doc.setFontSize(10)
      doc.text("+1 829-454-0806 · javier_1102@outlook.es", 105, 40, { align: "center" })
      doc.text("C. Las flores 27, Brisa del este, Santo Domingo Este", 105, 45, { align: "center" })

      doc.setFontSize(12)
      doc.text("PROFESSIONAL EXPERIENCE", 20, 60)

      doc.setFontSize(10)
      doc.text("Concentrix, Santo Domingo, Dominican Republic", 20, 70)
      doc.text("Medical Insurance Support Agent", 20, 75)
      doc.text("April 2024 - September 2024", 150, 75, { align: "right" })
      doc.text(
        "• Skilled in providing exceptional customer service and resolving inquiries in a timely manner.",
        25,
        80,
      )
      doc.text(
        "• Experienced in interpreting insurance policies and explaining benefits to clients effectively.",
        25,
        85,
      )

      doc.text("UX centers, Santo Domingo, Dominican Republic", 20, 95)
      doc.text("Troubleshooting Agent", 20, 100)
      doc.text("March 2022 - April 2024", 150, 100, { align: "right" })
      doc.text("• In charge of making sure the customers are satisfied with their cable service.", 25, 105)
      doc.text("• Assisting customers with their billing inquiries.", 25, 110)

      // Más experiencia profesional...

      doc.setFontSize(12)
      doc.text("KEY COMPETENCIES", 20, 170)

      doc.setFontSize(10)
      doc.text("• Customer Service Excellence", 25, 180)
      doc.text("• Technical Troubleshooting", 25, 185)
      doc.text("• Billing and Account Management", 25, 190)
      doc.text("• Effective Communication", 25, 195)
      doc.text("• Conflict Resolution", 25, 200)

      doc.text("• Sales Transaction Processing", 105, 180)
      doc.text("• Appointment Scheduling", 105, 185)
      doc.text("• Record Keeping and Documentation", 105, 190)
      doc.text("• Multi-Channel Support (Phone, Email, Chat)", 105, 195)

      doc.setFontSize(12)
      doc.text("EDUCATION & CERTIFICATIONS", 20, 215)

      doc.setFontSize(10)
      doc.text("Politécnico Nuestra Señora del Carmen", 20, 225)
      doc.text("2012 - 2017", 150, 225, { align: "right" })

      doc.setFontSize(12)
      doc.text("LANGUAGES", 20, 240)

      doc.setFontSize(10)
      doc.text("Spanish: Native or Bilingual", 20, 250)
      doc.text("English: Native or Bilingual", 20, 255)
      doc.text("IT support", 20, 260)
      doc.text("Graphic Design", 20, 265)

      // Guardar el PDF
      doc.save("CV_Javier_Nunez.pdf")
    } catch (error) {
      console.error("Error al generar el PDF:", error)
      alert("Hubo un error al generar el CV. Por favor, intenta de nuevo.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      variant="outline"
      className="rounded-full text-xs w-full sm:w-auto"
      onClick={generatePDF}
      disabled={isGenerating}
    >
      <Download className="mr-2 h-3 w-3" />
      {isGenerating ? "Generando..." : "Descargar CV"}
    </Button>
  )
}
