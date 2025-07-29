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
            <div className="text-center space-y-6">
              <div className="w-12 h-12 mx-auto">
                <Search className="w-12 h-12 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Rigor en el análisis</h3>
            </div>
            <div className="text-center space-y-6">
              <div className="w-12 h-12 mx-auto">
                <Users className="w-12 h-12 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Autonomía intelectual</h3>
            </div>
            <div className="text-center space-y-6">
              <div className="w-12 h-12 mx-auto">
                <Target className="w-12 h-12 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Impacto medible</h3>
            </div>
            <div className="text-center space-y-6">
              <div className="w-12 h-12 mx-auto">
                <Shield className="w-12 h-12 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Compromiso ético</h3>
            </div>
            <div className="text-center space-y-6">
              <div className="w-12 h-12 mx-auto">
                <BookOpen className="w-12 h-12 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Perspectiva interdisciplinar</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="py-32 px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">Qué hacemos</h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Estudiamos el comportamiento organizacional, identificamos patrones y facilitamos procesos de cambio con
              base en datos y experiencia aplicada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-3xl">
              <div className="w-16 h-16 mb-8">
                <BarChart3 className="w-16 h-16 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-[#0A19DC] mb-6">People Analytics</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Modelos e indicadores para comprender dinámicas internas y orientar decisiones estratégicas.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl">
              <div className="w-16 h-16 mb-8">
                <Heart className="w-16 h-16 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-[#0A19DC] mb-6">Bienestar organizacional</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Evaluación y diseño de políticas centradas en el equilibrio personal y colectivo.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl">
              <div className="w-16 h-16 mb-8">
                <Lightbulb className="w-16 h-16 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-[#0A19DC] mb-6">Transformación cultural</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Intervenciones que refuerzan el sentido, la confianza y la cohesión en los equipos.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl">
              <div className="w-16 h-16 mb-8">
                <FlaskConical className="w-16 h-16 text-[#0A19DC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-[#0A19DC] mb-6">Investigación aplicada</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Colaboraciones con universidades y redes de conocimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">
              Proyectos destacados
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Diseñamos e impulsamos proyectos que generan utilidad real y conocimiento replicable. Cada iniciativa
              responde a un contexto concreto y busca trasladar evidencia a la acción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="overflow-hidden rounded-3xl mb-8">
                <img
                  src="/images/organizational-climate-analysis.png"
                  alt="Análisis de clima organizacional - Profesional trabajando con datos"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#0A19DC] mb-4">Análisis de clima organizacional</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Evaluación integral del bienestar y la satisfacción laboral en organizaciones del sector público.
              </p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-3xl mb-8">
                <img
                  src="/images/people-analytics-dashboard.png"
                  alt="Dashboard de People Analytics - Visualización de datos y métricas"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#0A19DC] mb-4">Dashboard de People Analytics</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Herramienta de visualización de datos para la toma de decisiones basada en evidencia.
              </p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-3xl mb-8">
                <img
                  src="/images/conscious-leadership-program.png"
                  alt="Programa de liderazgo consciente - Espacio de colaboración moderna"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#0A19DC] mb-4">Programa de liderazgo consciente</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Formación y acompañamiento para líderes enfocados en el bienestar y la inteligencia colectiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Participa */}
      <section className="py-32 px-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">Colabora con Enroot</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-16 leading-relaxed font-light">
            Buscamos alianzas con personas e instituciones que compartan inquietudes por el bienestar, la inteligencia
            colectiva y la transformación cultural.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#0A19DC] hover:bg-[#0A19DC]/90 text-white px-12 py-4 text-xl font-medium rounded-full border-0 shadow-none"
            >
              Contacta con nosotros
            </Button>
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="outline"
              className="border-[#0A19DC] text-[#0A19DC] hover:bg-[#0A19DC] hover:text-white px-12 py-4 text-xl font-medium rounded-full bg-transparent"
            >
              Suma tu organización
            </Button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">Contacto</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              < {/* Contacto */}
            <section id="contacto" className="py-32 px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-24">
                  <h2 className="text-5xl md:text-6xl font-light text-[#0A19DC] mb-12 tracking-tight">
                    Contacto
                  </h2>
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
                        Completa el formulario y nos pondremos en contacto contigo para explorar oportunidades de
                        colaboración y responder a tus consultas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
          <img src="/images/enroot-logo.jpg" alt="Enroot Logo" className="w-40 h-auto mx-auto mb-6" />
          <p className="text-xl text-blue-100 font-light mb-4">
            Personas, ciencia y propósito en el centro de la organización
          </p>
          <p className="text-lg text-blue-200 font-light">© 2025 Asociación Enroot. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
      {/* Contacto */}
      <section id="contacto" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">...
