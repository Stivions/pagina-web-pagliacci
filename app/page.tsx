import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  // IDs de los videos de YouTube Shorts (solo usaremos 2 de ellos)
  const youtubeShorts = ["3D08FIcs4Jk", "BGliWTuvoko"]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icion-8p5uf3LvKRj0HElvNiTVARSFbRGbZk.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
          <span className="font-light text-sm">Latin Pagliacci</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-xs">
          <Link href="/portfolio" className="hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="#about" className="hover:underline underline-offset-4">
            Sobre mí
          </Link>
          <Link href="#contact" className="hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        <a href="https://api.whatsapp.com/send/?phone=18294540806&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="sm" className="rounded-full text-xs">
          <Mail className="h-3 w-3 mr-2" />
          Contacto WhatsApp
        </Button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extralight tracking-tight">Contenido con doble filo</h1>
          <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Creador de contenido especializado en contar historias a través del humor, la sátira y una edición detallista con intención.
          </p>
          <div className="pt-4">
            <Link href="/portfolio">
              <Button className="rounded-full text-xs" variant="outline">
                Ver portfolio
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-light mb-12 text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* YouTube Video Embed (16:9) */}
          <div className="md:col-span-3 aspect-video bg-gray-50 overflow-hidden mb-6">
            <iframe
              src="https://www.youtube.com/embed/TV6Ve22uZUo"
              title="YouTube video player"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* YouTube Shorts (9:16) - Primeros dos videos */}
          {youtubeShorts.map((videoId, index) => (
            <div key={index} className="group relative aspect-[9/16] bg-gray-50 overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube Short ${index + 1}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black/50 to-transparent">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white/80 text-xs">Short {index + 1}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Video MP4 proporcionado */}
          <div className="group relative aspect-[9/16] bg-gray-50 overflow-hidden">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-p1VzAdtzSmYwJswPtrO1Sci8Grzaka.mp4"
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            ></video>
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black/50 to-transparent">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white/80 text-xs">Short 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-light mb-6 text-center">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gray-200 rounded-full overflow-hidden max-w-[180px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icion-8p5uf3LvKRj0HElvNiTVARSFbRGbZk.png"
                alt="Editor de video"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
              Soy técnico en informática y diseño gráfico, con una sólida base creativa y técnica. Cuento con más de tres meses de experiencia desarrollando contenido visual y escribiendo guiones para un negocio con presencia en cuatro páginas de Instagram. Además, tengo una pasión genuina por la creación de contenido, la cual cultivo desde los 12 años. Actualmente gestiono una página de memes con más de 21,000 seguidores orgánicos y un alcance mensual de más de 2 millones de cuentas. Esta experiencia me ha permitido perfeccionar mis habilidades en narrativa visual, análisis de audiencia y producción de contenido original y de alto impacto.
              </p>
              <div className="pt-3">
                <h3 className="text-xs uppercase tracking-wider mb-2 text-gray-400">Especialidades</h3>
                <div className="flex flex-wrap gap-1">
                  {["Edición", "", "MEMES", "Guiones", ""].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-light mb-4">Contacto</h2>
          <p className="text-sm text-gray-500 mb-6">Disponible para nuevos proyectos.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:latinpagliacci@gmail.com">
              <Button className="rounded-full text-xs w-full sm:w-auto">
                <Mail className="mr-2 h-3 w-3" />
                latinpagliacci@gmail.com
              </Button>
            </a>

            
            <a href="/resume (nunez)-1.pdf" download>
              <Button variant="outline" className="rounded-full text-xs w-full sm:w-auto">
              <Download className="mr-2 h-3 w-3" />
              Descargar CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 border-t mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-400">© {new Date().getFullYear()}</div>
          <div className="flex space-x-4 mt-2 md:mt-0 text-xs">
            <a href="https://www.instagram.com/latin_pagliacci/" target="_blank" rel="noopener noreferrer">
            <Link href="https://www.instagram.com/latin_pagliacci/" className="text-gray-400 hover:text-black">
              Instagram
            </Link>
            </a>
            <a href="https://www.tiktok.com/@latinpagliaccipo" target="_blank" rel="noopener noreferrer">
            <Link href="https://www.tiktok.com/@latinpagliaccipo" className="text-gray-400 hover:text-black">
              TikTOK
            </Link>
            </a>
            <a href="https://www.youtube.com/@latinpagliacci" target="_blank" rel="noopener noreferrer">
            <Link href="https://www.youtube.com/@latinpagliacci" className="text-gray-400 hover:text-black">
              Youtube
            </Link>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
