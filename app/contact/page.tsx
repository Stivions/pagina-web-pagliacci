import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvDownloadButton } from "@/components/cv-download-button"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xs">
          <ArrowLeft className="h-3 w-3 mr-2" />
          Volver
        </Link>
        <div className="font-light text-sm">CONTACTO</div>
        <div className="w-16"></div>
      </header>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-light mb-8 text-center">Contacto</h1>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h2 className="text-lg font-light mb-4">Información de contacto</h2>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="text-gray-500">Email:</span> latinpagliacci@gmail.com
                </p>
                <div className="pt-2">
                  <a href="mailto:latinpagliacci@gmail.com">
                    <Button className="rounded-full text-xs w-full">
                      <Mail className="mr-2 h-3 w-3" />
                      Enviar email
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h2 className="text-lg font-light mb-4">Currículum</h2>
              <p className="text-sm text-gray-500 mb-4">
                Descarga mi CV para conocer mi experiencia profesional y habilidades.
              </p>
              <CvDownloadButton />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 border-t mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-400">© {new Date().getFullYear()}</div>
          <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
            <Link href="#" className="text-gray-400 hover:text-black">
              Instagram
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black">
              Vimeo
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
