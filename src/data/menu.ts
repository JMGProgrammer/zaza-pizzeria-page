import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  // --- PIZZAS CLÁSICAS ---
  {
    id: "margarita",
    name: "Margarita",
    category: "clasicas",
    description:
      "Salsa de tomate, muzzarella, albahaca fresca y aceite de oliva.",
    price: 380,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Albahaca fresca",
      "Aceite de oliva",
    ],
    isFeatured: true,
    image: "/assets/Menu/menu4-margarita.jpeg",
    badge: "Tradicional",
  },
  {
    id: "muzza",
    name: "Muzza",
    category: "clasicas",
    description: "Salsa de tomate, doble muzzarella, orégano y aceitunas.",
    price: 450,
    ingredients: [
      "Salsa de tomate",
      "Doble muzzarella",
      "Orégano",
      "Aceitunas",
    ],
    isFeatured: true,
    badge: "Clásica",
  },
  {
    id: "napolitana",
    name: "Napolitana",
    category: "clasicas",
    description: "Salsa de tomate, muzzarella, tomate, orégano y aceitunas.",
    price: 450,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Tomate fresco",
      "Orégano",
      "Aceitunas",
    ],
  },
  {
    id: "jamon-y-morrones",
    name: "Jamón y Morrones",
    category: "clasicas",
    description: "Salsa de tomate, muzzarella, jamón, morrón rojo y aceitunas.",
    price: 450,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Jamón",
      "Morrón rojo",
      "Aceitunas",
    ],
  },

  // --- PIZZAS ESPECIALES ---
  {
    id: "cuatro-quesos",
    name: "Cuatro Quesos",
    category: "especiales",
    description:
      "Salsa de tomate, muzzarella, queso azul, queso parmesano y queso provolone.",
    price: 680,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Queso azul",
      "Parmesano",
      "Provolone",
    ],
    isFeatured: true,
    image: "/assets/Menu/menu3-4-quesos.jpeg",
    badge: "Gourmet",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    category: "especiales",
    description: "Salsa de tomate, muzzarella, pepperoni y orégano.",
    price: 350,
    ingredients: ["Salsa de tomate", "Muzzarella", "Pepperoni", "Orégano"],
  },
  {
    id: "capresse",
    name: "Capresse",
    category: "especiales",
    description:
      "Salsa de tomate, muzzarella, tomate cherry, albahaca y aceite de oliva.",
    price: 450,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Tomate cherry",
      "Albahaca",
      "Aceite de oliva",
    ],
    isFeatured: true,
    image: "/assets/Menu/menu2-capresse.jpeg",
    badge: "Frescura",
  },
  {
    id: "pi-zaza",
    name: "Pi-ZAZA",
    category: "especiales",
    description:
      "Salsa de tomate, muzzarella, jamón, pepperoni, morrón, aceitunas y orégano.",
    price: 450,
    ingredients: [
      "Salsa de tomate",
      "Muzzarella",
      "Jamón",
      "Pepperoni",
      "Morrón",
      "Aceitunas",
      "Orégano",
    ],
    isFeatured: true,
    image: "/assets/Menu/menu1-pi-zaza.jpeg",
    badge: "Especial de la Casa",
  },

  // --- PARA ACOMPAÑAR ---
  {
    id: "papas-fritas",
    name: "Papas Fritas",
    category: "acompanamientos",
    description: "Papas fritas.",
    price: 150,
    ingredients: ["Papas seleccionadas"],
  },
  {
    id: "papas-noisette",
    name: "Papas Noisette",
    category: "acompanamientos",
    description: "Papas noisette.",
    price: 150,
    ingredients: ["Papas noisette"],
  },

  // --- BEBIDAS ---
  {
    id: "refresco-1-5l",
    name: "Refrescos 1.5L",
    category: "bebidas",
    description: "Refrescos de 1.5 litros.",
    price: 200,
  },
  {
    id: "agua-1l",
    name: "Agua 1L",
    category: "bebidas",
    description: "Agua de 1 litro.",
    price: 150,
  },
  {
    id: "patagonia-700ml",
    name: "Cerveza Patagonia 700ml",
    category: "bebidas",
    description: "Cerveza Patagonia de 700 ml.",
    price: 350,
    badge: "Cerveza",
  },
];

export const categoriesMap = [
  { id: "clasicas", label: "Pizzas Clásicas" },
  { id: "especiales", label: "Pizzas Especiales" },
  { id: "acompanamientos", label: "Para Acompañar" },
  { id: "bebidas", label: "Bebidas" },
] as const;
