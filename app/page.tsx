"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Users,
  Target,
  Shield,
  BookOpen,
  BarChart3,
  Heart,
  Lightbulb,
  FlaskConical,
  MapPin,
} from "lucide-react"

export default function EnrootWebsite() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Enlace mailto con destinatario, asunto y cuerpo codificados
  const mailtoLink =
    "mailto:eduardogomez@enrootmotive.com" +
    "?subject=%C2%BFPodemos%20hablar%3F" +
    "&body=Hola%20Eduardo%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Enroot%2C%20conocer%20el%20proyecto%2C%20participar%20y%20colaborar%20con%20vosotros."

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="flex flex-col items-center space-y-12">
            <img src="/images/enroot-logo.jpg" alt="Enroot Logo" className="w-72 md:w-80 h-auto" />
            <h1 className="text-5xl md:text-7xl font-light text-[#0A19DC] leading-tight tracking-tight">
              Personas, ciencia y propósito en el centro de la organización
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-light">
            Una iniciativa para repensar el trabajo desde la evidencia, el bienestar y la inteligencia colectiva.
          </p>
          <div className="pt-8">
            <Button
              onClick={() => scrollToSection("quienes-somos")}
              className="bg-[#0A19DC] hover:bg-[#0A19DC]/90 text-white px-12 py-4 text-xl font-medium rounded-full border-0 shadow-none"
            >
              Conoce Enroot
            </Button>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">Quiénes somos</h2>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
              Enroot es un proyecto independiente que une conocimiento académico, práctica profesional y cultura
              organizacional. Analizamos la realidad laboral desde una perspectiva crítica y transformadora, promoviendo
              entornos más saludables, sostenibles y eficaces.
            </p>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mt-24">
            {/* ... valores omitidos por brevedad ... */}
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="py-32 px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          {/* ... contenido omitido por brevedad ... */}
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          {/* ... contenido omitido por brevedad ... */}
        </div>
      </section>

      {/* Participa */}
      <section className="py-32 px-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          {/* ... contenido omitido por brevedad ... */}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">Contacto</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex items-center justify-center">
              <a
                href={mailtoLink}
                className="inline-block w-full bg-[#0A19DC] hover:bg-[#0A19DC]/90 text-white py-4 text-xl font-medium rounded-2xl text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar correo
              </a>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <MapPin className="w-8 h-8 text-[#0A19DC] mt-2" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-3">Ubicación</h3>
                  <p className="text-xl text-gray-600 font-light">Madrid, España</p>
                </div>
              </div>

              <div className="bg-[#0A19DC]/5 p-8 rounded-3xl">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  Completa el formulario y nos pondremos en contacto contigo para explorar oportunidades de colaboración
                  y responder a tus consultas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-[#0A19DC]">
        <div className="max-w-6xl mx-auto text-center">
          {/* ... contenido omitido por brevedad ... */}
        </div>
      </footer>
    </div>
  )
}
