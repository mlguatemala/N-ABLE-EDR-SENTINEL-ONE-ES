import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1E1433] py-6">
        <div className="container">
          <Image
            src="/logo.svg"
            alt="N-able and Licencias OnLine logos"
            width={280}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/background_landing.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container py-20 relative z-10">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-8 text-white">
              <h1 className="text-[44px] font-bold leading-tight text-[#8C58ED]">
                Potencia tu <br />seguridad N-able EDR<br />
                powered by SentinelOne<sup>®</sup>
              </h1>
              <p className="text-2xl font-bold text-[#241C3A]">
                Descubre cómo la inteligencia artificial y la automatización pueden proteger tu negocio en tiempo real
              </p>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-[#241C3A]">
                  La ciberseguridad es una prioridad para las empresas tecnológicas, y proteger sus activos digitales
                  nunca ha sido tan crucial. <span className="font-bold">Con N-able EDR by SentinelOne<sup>®</sup>,</span> podrás detectar, mitigar y responder a
                  ciberamenazas como el ransomware en segundos.
                </p>
                <p className="text-base leading-relaxed text-[#241C3A]">
                  Descarga este documento técnico que explica cómo esta solución respaldada por inteligencia artificial
                  puede garantizar la continuidad de tu negocio y simplificar la gestión de la seguridad.
                </p>
              </div>
            </div>

            {/* Form Card */}
            <div className="rounded-md bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10">
              <p className="mb-8 text-sm text-gray-600">
                Llena el formulario para descargar el PDF exclusivo y recibir asesoramiento personalizado del equipo de Licencias OnLine y N-able
              </p>
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input placeholder="Nombre*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                  <Input placeholder="Apellido*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                </div>
                <Input type="email" placeholder="Correo electrónico*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                <Input type="tel" placeholder="Número de teléfono" className="border-0 border-b border-[#575757] rounded-none bg-white" />
                <Input placeholder="Nombre de la empresa*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                <Input placeholder="País*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                <Input placeholder="Cargo*" required className="border-0 border-b border-[#575757] rounded-none bg-white" />
                <Textarea 
                  placeholder="Consulta / Comentario" 
                  className="min-h-[40px] bg-white resize-none border-0 border-b border-[#575757] rounded-none" 
                />
                <div>
                  <Button className="h-12 px-8 text-base font-medium bg-[#2BCFF3] text-[#241C3A] hover:bg-[#2BCFF3]/90 rounded-md">
                    Descargar ahora
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-16 text-3xl font-bold text-[#312542]">Además</h2>
          <div className="grid gap-16 md:grid-cols-2">
            {/* Features Cards Column */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <FeatureCard
                icon="/icon1.png"
                title="Conoce por qué el 42% de los ciberataques"
                description="más frecuentes están relacionados con ransomware y cómo enfrentarlos."
              />
              <FeatureCard
                icon="/icon2.png"
                title="Descubre cómo la reversión automática"
                description="(rollback) protege tus endpoints ante ataques maliciosos."
              />
              <FeatureCard
                icon="/icon3.png"
                title="Aprende a implementar políticas"
                description="de seguridad en minutos con una solución totalmente integrada y fácil de usar."
              />
              <FeatureCard
                icon="/icon4.png"
                title="Comprende las ventajas"
                description="tangibles que hacen de N-able EDR by SentinelOne® una herramienta imprescindible para tu empresa."
              />
            </div>
            
            {/* Dashboard Preview Column */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6B21DF] transform rotate-[-10deg]" />
              <Image
                src="/img_ademas.png"
                alt="SentinelOne Dashboard"
                width={1200}
                height={675}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6B21DF] transform rotate-[-10deg]" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#6B21DF] transform rotate-[-10deg]" />
              <Image
                src="/sobre_licencias.png"
                alt="Professional working"
                width={600}
                height={400}
                className="rounded-lg relative z-10"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#312542]">Sobre Licencias OnLine y N-able</h2>
              <p className="text-lg text-[#241C3A] leading-relaxed">
                Licencias OnLine y N-able son líderes en la distribución y provisión de soluciones tecnológicas
                avanzadas para empresas en América Latina. Juntos, traen al mercado la poderosa solución N-able EDR by
                SentinelOne<sup>®</sup>, diseñada para maximizar la protección de tu negocio frente a las ciberamenazas más
                complejas.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">¿Tienes preguntas o quieres más información?</h3>
                <p className="text-lg text-[#241C3A] leading-relaxed">
                  Contacta a nuestro equipo para recibir asesoramiento personalizado y descubre cómo proteger tus
                  activos digitales con la tecnología líder del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1433] py-6">
        <div className="container">
          <Image
            src="/logo.svg"
            alt="N-able and Licencias OnLine logos"
            width={280}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg space-y-6">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={icon} alt={title} width={48} height={48} className="w-full h-full object-contain" />
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold leading-tight text-[#241C3A]">{title}</h3>
        <p className="text-base text-[#241C3A] leading-relaxed">{description}</p>
      </div>
    </div>
  )
} 