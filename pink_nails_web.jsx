import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Instagram } from "lucide-react";

export default function PinkNailsBet() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [service, setService] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleConfirm = () => {
    if (!date || !service || !name || !time) return;
    const formattedDate = date.toLocaleDateString("es-CR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const message = `Hola! Soy ${name} y quiero confirmar mi cita en *Pink Nails Bet* para el día ${formattedDate} a las ${time}, para el servicio de *${service}*. 💅✨`;
    const whatsappUrl = `https://wa.me/50660000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-pink-300 to-pink-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Pink Nails Bet</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Tu espacio para uñas hermosas ✨ Agenda tu cita fácil y rápido.
        </p>
      </header>

      {/* Servicios */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Manicure Básico", "Uñas Acrílicas", "Decoraciones Personalizadas"].map(
            (srv, i) => (
              <Card
                key={i}
                onClick={() => setService(srv)}
                className={`rounded-2xl shadow-md cursor-pointer transition border-2 ${
                  service === srv ? "border-pink-500" : "border-transparent"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-2">{srv}</h3>
                  <p className="text-sm text-gray-600">
                    Agenda este servicio y luce unas uñas increíbles.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Agenda */}
      <section className="py-12 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
          Agenda tu Cita
        </h2>
        <div className="flex flex-col items-center gap-4">
          <Input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-sm border-pink-300 focus:ring-pink-500"
          />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="max-w-sm border-pink-300 focus:ring-pink-500"
          />
          <Button
            onClick={handleConfirm}
            disabled={!service || !date || !name || !time}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full disabled:opacity-50"
          >
            Confirmar cita en WhatsApp
          </Button>
          {(!service || !date || !name || !time) && (
            <p className="text-sm text-red-500 mt-2">
              Ingresa tu nombre, selecciona un servicio, fecha y hora para confirmar.
            </p>
          )}
        </div>
      </section>

      {/* Contacto */}
      <footer className="py-8 bg-pink-100 text-center">
        <h3 className="text-lg font-semibold mb-4 text-pink-700">
          Contáctanos
        </h3>
        <div className="flex justify-center gap-6 text-pink-600">
          <a href="mailto:pinknailsbet@gmail.com"><Mail /></a>
          <a href="tel:+50660000000"><Phone /></a>
          <a href="https://instagram.com/pinknailsbet"><Instagram /></a>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          © 2025 Pink Nails Bet - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
