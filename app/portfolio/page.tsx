import Link from "next/link"
import { ArrowLeft, BarChart2, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Portfolio() {
  // Datos de guiones con descripciones para tooltips
  const scripts = [
    {
      id: "vamo-de-robo",
      title: "VAMO DE ROBO",
      description: "Un tigre de barrio roba un producto y es perseguido por la policía.",
      genre: "Acción/Comedia",
      tooltip:
        "Una persecución intensa por los callejones del barrio tras el robo de una caja misteriosa. La acción mezcla humor, cultura urbana y parkour. Al final, se revela que lo robado eran vapes de Vizzel. Propósito: Desarrollar una publicidad dinámica, con ritmo de película de acción, que combine adrenalina con un giro inesperado centrado en el producto.",
    },
    {
      id: "baca",
      title: "BACA", 
      description: "Dos amigos borrachos se encuentran con un ser sobrenatural en el campo.",
      genre: "Terror/Suspenso",
      tooltip: "Guion estilo suspenso dominicano, donde dos amigos ebrios se encuentran con una figura sobrenatural en medio de una niebla espesa. El clímax ocurre cuando una criatura misteriosa aparece y, en lugar de atacar, enciende un Vizzel Propósito: Crear una publicidad de vape con una narrativa inesperada y atmósfera inquietante, para atrapar la atención del espectador antes de revelar el producto.",
    },
    {
      id: "entrevista-secreta",
      title: "ENTREVISTA SECRETA",
      description: "Una mujer es engañada para revelar información personal en un supermercado.",
      genre: "Drama/Comedia",
      tooltip: "Una mujer aparentemente participa en un experimento social dentro de un supermercado, pero diferentes personas le hacen preguntas personales que al final resultan ser usadas para vaciarle la cuenta… para comprar cientos de vapes. Propósito: Diseñar una publicidad creativa para vape, en formato de video viral estilo experimento, con un giro cómico y absurdo que deja una impresión memorable del producto.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xs">
          <ArrowLeft className="h-3 w-3 mr-2" />
          Volver
        </Link>
        <div className="font-light text-sm">PORTFOLIO</div>
        <div className="w-16"></div> {/* Espacio para equilibrar el header */}
      </header>

      {/* Instagram Stats */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-light mb-8 text-center">Estadísticas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Estadística 1 */}
          <div className="bg-black text-white p-4 rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadisticas%201-nRf3BE1S1Zkl6F7vgb3ECs0PqZwVHe.png"
              alt="Estadísticas de visualizaciones"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Estadística 2 */}
          <div className="bg-black text-white p-4 rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadisticas%202-CLRg67x1N3U1zGybkfXEdr4rTM6730.png"
              alt="Estadísticas de seguidores"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Estadística 3 */}
          <div className="bg-black text-white p-4 rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadisticas%204-219KaIUfewBdrHIYRupnr0XTIsPztC.png"
              alt="Estadísticas de visualizaciones por origen"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Estadística 4 */}
          <div className="bg-black text-white p-4 rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estadisticas%203-rJhtdNIFmPIWyNmqJoMsSI2MIJnizm.png"
              alt="Estadísticas de alcance"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        <h3 className="text-lg font-light mb-6 text-center">Contenido viral</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Meme 1 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%201%20para%20meme-CBptjRa6zz2ehiZJhxAUYrYwsVsiui.png"
              alt="Meme 1"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Meme 2 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%202-xSQaEj47eeyRY9Vsvj5WaDGWaGtcvT.png"
              alt="Meme 2"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Meme 3 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%203-UJaPcuTPDQnIBfzKkLCfAonp3LlH6M.png"
              alt="Meme 3"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Meme 4 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%204-o199BhlLvmyV9TIzr0MqIx5QlXEh7R.png"
              alt="Meme 4"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Meme 5 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%205-YGfBh0MDPyj8QEPEKwHzy0JwDg0L5K.png"
              alt="Meme 5"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Nuevo Meme 6 */}
          <div className="overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new%20img-rNt4DjyAbUxy0jpHgS1mklGBBNxA4c.png"
              alt="Meme 6"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Scripts Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-xl font-light mb-8 text-center">Guiones</h2>

        <TooltipProvider>
          <Tabs defaultValue="vamo-de-robo" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {scripts.map((script) => (
                <Tooltip key={script.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={script.id} className="text-xs group relative">
                      {script.title}
                      <Info className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-50" />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">{script.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TabsList>

            <TabsContent value="vamo-de-robo" className="mt-0">
              <div className="bg-white p-6 text-sm leading-relaxed space-y-4 font-light">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-normal">VAMO DE ROBO</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Acción/Comedia</span>
                </div>

                <div className="space-y-4 text-xs">
                  <p className="text-gray-500">ESCENA 1 – EL ROBO</p>
                  <p>(Barrio, 2:00 PM. Calor sofocante. Ruido de motores, bocinas y gente en los colmados.)</p>

                  <p>PLANO DETALLE: Manos sudorosas se aferran a la puerta trasera de un camión.</p>
                  <p>
                    PLANO MEDIO: RAMÓN, flaco, con cara de tigre de barrio, observa su objetivo: una mujer impresionante
                    coquetea con el guardia del vehículo que tiene los productos. Cámara lenta: ella se ríe, juega con
                    su cabello.
                  </p>
                  <p>PLANO CERRADO: Ramón sonríe. Se desliza hasta la parte trasera.</p>

                  <p>Dentro, varias cajas con el logo llamativo: "VIZZEL".</p>
                  <p>PLANO DETALLE: Su mano entra. Saca una caja.</p>

                  <p>De repente, GRITOS.</p>

                  <p>
                    GUARDIA:
                    <br />
                    ¡UN LADRÓN!
                  </p>

                  <p className="text-gray-500">ESCENA 2 – LA PERSECUCIÓN A PIE</p>
                  <p>PLANO SECUENCIA: Ramón corre. Cámara en mano, vibrante, estilo documental.</p>

                  <p>
                    PRIMEROS OBSTÁCULOS:
                    <br />
                    Enfoque rápido a un juego de dominó al que Ramón va a interrumpir. Salta la mesa de dominó. ¡Las
                    fichas vuelan!
                    <br />
                    Un tipo se levanta, aprovechando que la conmoción resultó a su favor:
                    <br />
                    "¡Eta mano no cuenta!"
                  </p>

                  <p>Derriba una silla plástica. Un policía tropieza.</p>

                  <p>
                    CALLEJÓN ESTRECHO:
                    <br />
                    Se impulsa contra una pared y brinca un tanque de basura.
                    <br />
                    Gira en el aire y cae firme (parkour básico).
                    <br />
                    La policía sigue, pero uno se resbala en agua porque el piso es de cerámica.
                  </p>

                  <p>
                    CORTES RÁPIDOS:
                    <br />
                    Una doña grita:
                    <br />
                    "¡Ese hijo del diablo, AHI ESTÁ!"
                    <br />
                    (poner a la vieja de Resident Evil 4)
                  </p>

                  <p>Ramón agarra una bicicleta abandonada y la empuja hacia atrás. Policía cae de boca.</p>

                  <p>
                    TECHO Y ESCAPADA:
                    <br />
                    Ramón sube por una escalera vieja y salta a un techo.
                    <br />
                    Corre por la azotea. Salta al otro lado.
                    <br />
                    La caja sigue firme en su brazo.
                  </p>

                  <p>
                    FINAL DE PERSECUCIÓN:
                    <br />
                    Baja unas escaleras en un solo brinco.
                    <br />
                    Empuja una pila de tanques de basura.
                    <br />
                    Los policías chocan.
                  </p>

                  <p>Silencio. Ramón desaparece.</p>

                  <p className="text-gray-500">ESCENA 3 – EL FINAL</p>
                  <p>
                    PLANO ABIERTO: Entra a su casa, exhausto.
                    <br />
                    Un coro de tígueres, con el mono encaramao, lo miran y no se inmutan por su estado.
                  </p>

                  <p>
                    RAMÓN (tirando la caja en la mesa):
                    <br />
                    Wa, lo' tiguere, ya no tengo que poner ni uno pal' romo.
                  </p>

                  <p>PLANO FINAL: La caja se abre. Un vape estilizado brilla con la luz.</p>

                  <p>CORTA A NEGRO.</p>

                  <p>
                    LEMA EN PANTALLA:
                    <br />
                    "Vizzel en mano, estrés lejano."
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="baca" className="mt-0">
              <div className="bg-white p-6 text-sm leading-relaxed space-y-4 font-light">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Terror/Suspenso</span>
                </div>

                <div className="space-y-4 text-xs">
                  <p>
                    Dos amigos, de noche, en un campo de RD, bebiendo pila de cerveza, deciden pararse a caminar
                    borrachos. El área es frondosa, muchos árboles por doquier, mucha oscuridad. No hay señales de vida
                    más que los insectos y animales de la zona, y por alguna razón hay mucha niebla, bien espesa, como
                    en Silent Hill.
                  </p>

                  <p>1: Loco, no sé si es el jumo, pero yo toy en para con to' eta niebla.</p>

                  <p>
                    2: Eso es porque tamo en diciembre, manito. Ya en RD pasa de todo… el otro día cayó nieve en
                    Constanza, y ahora aquí tenemo to' eta niebla.
                  </p>

                  <p>1: Eso e' que se va a acabar el mundo.</p>

                  <p>Ambos: se ríen</p>

                  <p>
                    Voz misteriosa: Yo no estuviera andando a esta hora por aquí si fuera ustedes, menos hoy, día de San
                    Miguel.
                  </p>

                  <p>2 (voceando): ¿Quién fue que habló?</p>

                  <p>Puro silencio. Nadie responde.</p>

                  <p>
                    1 (poniéndose la mano en la frente como si se estuviera tapando del sol): Ay mi madre, compai, con
                    eta niebla no veo a nadie.
                  </p>

                  <p>
                    La cámara los enfoca a ambos, uno al lado del otro, con algo de espacio entre ellos, lo suficiente
                    para que el viejo que habló les aparezca detrás de sorpresa, sonriendo. Le faltan muchos dientes, no
                    tiene cejas y es calvo. Está bien encorvado y anda con ropas de pordiosero.
                  </p>

                  <p>Viejo: Cuida'o con el bacá de Don Andrés.</p>

                  <p>Los tígueres se asustan y se alejan un poco del viejo.</p>

                  <p>2: Coño, don, no asuste así a uno.</p>

                  <p>
                    Viejo: Es por su bien. Si se meten en la parcela de Andrés, se van a encontrar con el bacá de él.
                  </p>

                  <p>Los dos amigos se miran y, a los dos segundos, se echan a reír.</p>

                  <p>1: Viejo, nadie cree en eso. To' el mundo sabe que eso son cuento.</p>

                  <p>2: Ojalá yo jallármelo pa' hacerle una foto y venderla.</p>

                  <p>
                    Se dan media vuelta y siguen su camino, ignorando el consejo del viejo. La cámara enfoca donde
                    estaba el viejo, pero ya no está ahí. Solo se ve una sombra moviéndose rápido.
                  </p>

                  <p>
                    Mientras caminan, van hablando y mirándose a los ojos, sin preocuparse por lo que tienen delante. La
                    cámara enfoca a uno de ellos de perfil, caminando mientras mira a su amigo, hasta que choca con un
                    hombre muy alto.
                  </p>

                  <p>
                    La cabeza de nuestro protagonista le da por la mitad de la espalda a este nuevo personaje. Solo está
                    vistiendo un pantalón formal, correa y zapatos. Lo que se alcanza a ver de su espalda está muy
                    maltratado por lo que parecen ser latigazos.
                  </p>

                  <p>
                    Este tipo se voltea y está bien fuerte. Solo se ve su abdomen marcado, y los dos protagonistas
                    mirando hacia arriba, aterrados. El plano no muestra la cara de este hombre, pero sí se ve que
                    también su abdomen y pecho están muy maltratados, con latigazos.
                  </p>

                  <p>Con voz increíblemente grave, este se dirige a nuestros protagonistas:</p>

                  <p>Hombre alto: ¿Se quieren morir?</p>

                  <p>
                    Los chicos están en shock. Y mientras todo esto pasa, la niebla se ha reducido un poco… a lo que el
                    hombre alto dirige un Vape marca Vizzel que tiene en la mano a su boca, inhala y exhala muchísimo
                    humo… tanto, que toda la pantalla queda cubierta con la niebla.
                  </p>

                  <p>FIN</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="entrevista-secreta" className="mt-0">
              <div className="bg-white p-6 text-sm leading-relaxed space-y-4 font-light">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-normal">ENTREVISTA SECRETA</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Drama/Comedia</span>
                </div>

                <div className="space-y-4 text-xs">
                  <p className="text-gray-500">ESCENA 1 – INTERIOR DE SUPERMERCADO</p>
                  <p>
                    Cámara en mano, estilo vertical. Protagonista (una mujer de 40 años, sencilla) camina por el pasillo
                    con alguien grabándola desde cerca.
                  </p>

                  <p>
                    MUJER 1 (grabando):
                    <br />
                    Ok, señora, ¿cuáles son los últimos 4 números de su cédula?
                  </p>

                  <p>
                    PROTAGONISTA (confundida pero riendo):
                    <br />
                    Umm… 2240.
                  </p>

                  <p>
                    MUJER 1:
                    <br />
                    Perfecto, tiene RD$2240 para gastar ahora mismo en lo que quiera. ¡Una mini compra!
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    ¿En serio? ¡Ay qué chulo!
                  </p>

                  <p>
                    MUJER 1:
                    <br />
                    Pero si me sigue… se lo duplicamos.
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    Yo te sigo a ti en instagram, eres muy famosa
                  </p>

                  <p>
                    MUJER 1:
                    <br />
                    ¡Ella me sigue en Instagram! Señora, tiene RD$4480 ahora. ¡Vámonos!
                  </p>

                  <p className="text-gray-500">ESCENA 2 – ENTRE LOS PRODUCTOS DE LIMPIEZA</p>
                  <p>Aparece una joven llorando.</p>

                  <p>
                    MUJER 2 (llorando):
                    <br />
                    Señora… ¿usted ha visto una perrita por aquí? Era mi primera perrita… se llama Jeffy.
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    Ay no, no he visto ninguna perrita, lo siento.
                  </p>

                  <p>
                    MUJER 2 (sollozando):
                    <br />
                    ¿Y cómo se llamaba su primer perrito?
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    Mi perrita se llamaba Amber…
                  </p>

                  <p>
                    MUJER 2:
                    <br />
                    Qué lindo nombre… gracias, señora. Voy a seguir buscando.
                  </p>

                  <p>La mujer se va hacia el fondo del pasillo, y se queda mirando a la señora y a la que graba</p>

                  <p className="text-gray-500">ESCENA 3 – FRENTE A LOS CEREALES</p>
                  <p>Se acerca un señor mayor.</p>

                  <p>
                    HOMBRE 2:
                    <br />
                    ¡Ay dios! ¿Tía María?
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    No, no, disculpe. Se confundió.
                  </p>

                  <p>
                    HOMBRE 2:
                    <br />
                    Es que usted se parece mucho. Ella creció en la calle El Conde. ¿Y usted, dónde creció?
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    En la calle 27 de Febrero.
                  </p>

                  <p>
                    HOMBRE 2:
                    <br />
                    Ah ok, disculpe. Qué pena. Gracias.
                  </p>

                  <p>Se va lentamente… y también se une a la tipa del fondo.</p>

                  <p className="text-gray-500">ESCENA 4 – ENCAJES Y PLÁSTICOS</p>
                  <p>Se acerca otra mujer, con celular en mano, en modo chismoso.</p>

                  <p>
                    MUJER 3:
                    <br />
                    ¿Dijo usted que creció en la 27? Yo también. ¿usted es de los Batista?
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    No, yo soy apellido Rodríguez, por mi marido pero mi primer segundo apellido es Ramírez.
                  </p>

                  <p>
                    MUJER 3:
                    <br />
                    Ahhh... ya entiendo. Gracias, vecina.
                  </p>

                  <p>También se marcha al fondo, uniéndose al resto.</p>

                  <p className="text-gray-500">ESCENA 5 – CARNICERÍA</p>
                  <p>Un joven se le acerca, angustiado y le habla a la que graba</p>

                  <p>
                    HOMBRE 3:
                    <br />
                    Loco, se me olvidó la clave de TikTok ahora no se que hacer con mi vida.
                  </p>

                  <p>
                    MUJER 2:
                    <br />
                    No sabría decirte…
                  </p>

                  <p>
                    PROTAGONISTA:
                    <br />A mí me funciona poner el apellido de mi mamá con la calle donde crecí y un numerito al final…
                    como "Ramirez27#1". Eso nunca falla.
                  </p>

                  <p>
                    El joven se va caminando hacia el fondo. En ese momento, la protagonista se detiene. Mira su
                    celular.
                  </p>

                  <p>
                    PROTAGONISTA (voceando):
                    <br />
                    ¿Que!!? Alguien acaba de usar mi tarjeta ¿RD$50,000? ¿Cómo así...?
                  </p>

                  <p>Se queda congelada.</p>

                  <p>CORTE EN SECO.</p>

                  <p className="text-gray-500">ESCENA FINAL – GALERIA DE LA CASA DE LA PROTAGONISTA</p>
                  <p>
                    Un delivery con uniforme de Vizzel baja la ultima caja de muchas que ya puso en la galeria de la
                    protagonista.
                  </p>

                  <p>
                    DELIVERY:
                    <br />
                    Esta es la ultima ya, firme aqui.
                  </p>

                  <p>
                    La cámara se abre desde el piso, mostrando una pila gigante de cajas de Vizzel apiladas, como si
                    fueran sacos de arroz.
                  </p>

                  <p>
                    Encima de una de las cajas está sentada la protagonista, ahora tranquila, con el pelo desarreglado,
                    en pijama todavía, pero ya resignada.
                  </p>

                  <p>A su lado hay una cajita abierta llena de vapes de diferentes colores.</p>

                  <p>Ella agarra uno, lo enciende, le da una calada larga. Exhala el humo.</p>

                  <p>
                    PROTAGONISTA:
                    <br />
                    Bueno… al menos saben más bueno que el diablo.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TooltipProvider>
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
