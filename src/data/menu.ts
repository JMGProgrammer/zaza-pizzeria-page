import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // --- PIZZAS CLÁSICAS ---
  {
    id: 'margarita',
    name: 'Margarita',
    category: 'clasicas',
    description: 'Salsa de tomate casera, muzzarella fundida, hojas de albahaca fresca y aceite de oliva virgen extra.',
    price: 380,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Albahaca fresca', 'Aceite de oliva'],
    isFeatured: true,
    image: '/Assets/Menu/menu4-margarita.jpeg',
    badge: 'Tradicional'
  },
  {
    id: 'muzza',
    name: 'Muzza',
    category: 'clasicas',
    description: 'Nuestra clásica imperdible: abundante doble muzzarella, salsa de tomate de la casa, orégano seleccionado y aceitunas.',
    price: 450,
    ingredients: ['Salsa de tomate', 'Doble muzzarella', 'Orégano', 'Aceitunas'],
    isFeatured: true,
    badge: 'La más pedida'
  },
  {
    id: 'napolitana',
    name: 'Napolitana',
    category: 'clasicas',
    description: 'Salsa de tomate, muzzarella, rodajas finas de tomate fresco, orégano y aceitunas negras.',
    price: 450,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Tomate fresco', 'Orégano', 'Aceitunas']
  },
  {
    id: 'jamon-y-morrones',
    name: 'Jamón y Morrones',
    category: 'clasicas',
    description: 'Muzzarella de primera, jamón cocido seleccionado y morrones rojos asados al natural con aceitunas.',
    price: 450,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Jamón cocido', 'Morrón rojo asado', 'Aceitunas']
  },

  // --- PIZZAS ESPECIALES ---
  {
    id: 'cuatro-quesos',
    name: 'Cuatro Quesos',
    category: 'especiales',
    description: 'Armoniosa combinación de quesos seleccionados: muzzarella, queso azul intenso, parmesano curado y provolone fundido.',
    price: 680,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Queso azul', 'Parmesano', 'Provolone'],
    isFeatured: true,
    image: '/Assets/Menu/menu3-4-quesos.jpeg',
    badge: 'Gourmet'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    category: 'especiales',
    description: 'Base de salsa de tomate, muzzarella y lonjas doradas y crujientes de pepperoni con un toque de orégano.',
    price: 350,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Pepperoni', 'Orégano']
  },
  {
    id: 'capresse',
    name: 'Capresse',
    category: 'especiales',
    description: 'Muzzarella fundida, tomates cherry confitados, albahaca fresca del día y finas gotas de aceite de oliva.',
    price: 450,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Tomate cherry', 'Albahaca', 'Aceite de oliva'],
    isFeatured: true,
    image: '/Assets/Menu/menu2-capresse.jpeg',
    badge: 'Frescura'
  },
  {
    id: 'pi-zaza',
    name: 'Pi-ZAZA',
    category: 'especiales',
    description: 'La insignia y orgullo de la casa: muzzarella, jamón cocido, pepperoni crocante, morrón, aceitunas y orégano.',
    price: 450,
    ingredients: ['Salsa de tomate', 'Muzzarella', 'Jamón', 'Pepperoni', 'Morrón', 'Aceitunas', 'Orégano'],
    isFeatured: true,
    image: '/Assets/Menu/menu1-pi-zaza.jpeg',
    badge: 'Especial de la Casa'
  },

  // --- PARA ACOMPAÑAR ---
  {
    id: 'papas-fritas',
    name: 'Papas Fritas',
    category: 'acompanamientos',
    description: 'Papas fritas clásicas, crujientes por fuera y suaves por dentro.',
    price: 150,
    ingredients: ['Papas seleccionadas']
  },
  {
    id: 'papas-noisette',
    name: 'Papas Noisette',
    category: 'acompanamientos',
    description: 'Deliciosas papitas noisette doradas al punto justo.',
    price: 150,
    ingredients: ['Papas noisette']
  },

  // --- BEBIDAS ---
  {
    id: 'refresco-1-5l',
    name: 'Refrescos 1.5L',
    category: 'bebidas',
    description: 'Línea de refrescos familiares de 1.5 litros (sabores a consultar).',
    price: 200
  },
  {
    id: 'agua-1l',
    name: 'Agua 1L',
    category: 'bebidas',
    description: 'Agua mineral de 1 litro, con o sin gas.',
    price: 150
  },
  {
    id: 'patagonia-700ml',
    name: 'Cerveza Patagonia 700ml',
    category: 'bebidas',
    description: 'Cerveza Patagonia 700ml ideal para maridar con tu pizza artesanal.',
    price: 350,
    badge: 'Cerveza'
  }
];

export const categoriesMap = [
  { id: 'clasicas', label: 'Pizzas Clásicas' },
  { id: 'especiales', label: 'Pizzas Especiales' },
  { id: 'acompanamientos', label: 'Para Acompañar' },
  { id: 'bebidas', label: 'Bebidas' }
] as const;
