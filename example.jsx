import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1E1433] py-4">
        <div className="container mx-auto px-4">
          <Image
            src="/logo.svg"
            alt="N-able and Licencias OnLine logos"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#1E1433]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Potencia tu <br />seguridad N-able EDR<br />
                powered by SentinelOne<sup>®</sup>
              </h1>
              <p className="text-lg">
                Descubre cómo la inteligencia artificial y la automatización pueden proteger tu negocio en tiempo real
              </p>
              <p className="text-sm opacity-90">
                La ciberseguridad es una prioridad para las empresas tecnológicas, y proteger sus activos digitales
                nunca ha sido tan crucial. Con N-able EDR by SentinelOne<sup>®</sup>, podrás detectar, mitigar y responder a
                ciberamenazas como el ransomware en segundos.
              </p>
              <p className="text-sm opacity-90">
                Descarga este documento técnico que explica cómo esta solución respaldada por inteligencia artificial
                puede garantizar la continuidad de tu negocio y simplificar la gestión de la seguridad.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-lg bg-white p-8 shadow-xl">
              <p className="mb-6 text-sm">
                Llena el formulario para descargar el PDF exclusivo y recibir asesoramiento personalizado del equipo de Licencias OnLine y N-able
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Nombre*" required />
                  <Input placeholder="Apellido*" required />
                </div>
                <Input type="email" placeholder="Correo electrónico*" required />
                <Input type="tel" placeholder="Número de teléfono" />
                <Input placeholder="Nombre de la empresa*" required />
                <Input placeholder="País*" required />
                <Input placeholder="Cargo*" required />
                <Textarea placeholder="Consulta / Comentario" className="min-h-[100px]" />
                <Button className="w-full bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90">
                  Descargar ahora
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-2xl font-bold">Además</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Image
            src="/img_ademas.png"
            alt="SentinelOne Dashboard"
            width={1000}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Image
                src="/sobre_licencias.png"
                alt="Professional working"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Sobre Licencias OnLine y N-able</h2>
              <p className="text-gray-600">
                Licencias OnLine y N-able son líderes en la distribución y provisión de soluciones tecnológicas
                avanzadas para empresas en América Latina. Juntos, traen al mercado la poderosa solución N-able EDR by
                SentinelOne<sup>®</sup>, diseñada para maximizar la protección de tu negocio frente a las ciberamenazas más
                complejas.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">¿Tienes preguntas o quieres más información?</h3>
                <p className="text-gray-600">
                  Contacta a nuestro equipo para recibir asesoramiento personalizado y descubre cómo proteger tus
                  activos digitales con la tecnología líder del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="space-y-4 rounded-lg p-6">
      <Image src={icon} alt={title} width={32} height={32} className="text-[#5A00FF]" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

