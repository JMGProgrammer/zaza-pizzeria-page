import type { BusinessDetails } from "../types";

export const businessInfo: BusinessDetails = {
  name: "ZAZA",
  tagline: "Hecho con pasión, buenos ingredientes, sabor auténtico.",
  proposition:
    "Masa artesanal y casera, buenos ingredientes y cultura pizzera mixta.",
  location: {
    city: "Rosario",
    department: "Colonia",
    country: "Uruguay",
    policy:
      "Cocina exclusiva para delivery a puertas cerradas (no se dispone de atención presencial ni retiro en local).",
  },
  contact: {
    phone: "+59891214087",
    phoneFormatted: "+598 91 214 087",
    whatsappNumber: "59891214087",
    whatsappUrl: "https://wa.me/59891214087",
    defaultWhatsappMessage:
      "¡Hola ZAZA! Me gustaría consultar por el menú / realizar un pedido.",
    instagramHandle: "@lapizzeriazaza",
    instagramUrl: "https://www.instagram.com/lapizzeriazaza/",
  },
  schedule: {
    days: "Lunes a Domingo (todos los días)",
    hours: "20:00 a 01:00 hs",
    opens: "20:00",
    closes: "01:00",
  },
  delivery: {
    coverage: "Toda la localidad de Rosario, Colonia",
    modalities: ["100% Delivery a domicilio"],
    paymentMethods: [
      "Efectivo",
      "Transferencia bancaria",
      "Tarjetas",
      "Código QR",
      "Mercado Pago",
    ],
  },
};

export function whatsappLink(
  message = businessInfo.contact.defaultWhatsappMessage,
): string {
  return `${businessInfo.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
