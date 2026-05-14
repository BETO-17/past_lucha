// ==========================================
// LOCALSTORAGE DATA MANAGEMENT
// Ready for migration to Database
// ==========================================

const STORAGE_KEYS = {
  PRODUCTS: 'products',
  CART: 'cart',
  BOOKINGS: 'bookings',
  TESTIMONIALS: 'testimonials',
  CONTACTS: 'contacts',
  USERS: 'users',
  SESSION: 'session',
  SELECTED_DATE: 'selectedDate',
  SELECTED_TIME: 'selectedTime'
};

// ==========================================
// INITIAL DATA (Seeds)
// ==========================================

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Tarta de Chocolate Belga",
    price: 35.00,
    category: "pasteles",
    image: "/images/tarta-chocolate.jpg",
    description: "Tarta de chocolate belga con ganache y decoración artesanal",
    stock: 10,
    featured: true
  },
  {
    id: 2,
    name: "Cheesecake de Frutos Rojos",
    price: 40.00,
    category: "pasteles",
    image: "/images/cheesecake-frutos.jpg",
    description: "Cheesecake cremoso con coulis de frutos rojos frescos",
    stock: 8,
    featured: true
  },
  {
    id: 3,
    name: "Caja de Galletas Surtidas (12u)",
    price: 18.00,
    category: "galletas",
    image: "/images/galletas-surtidas.jpg",
    description: "Selección de 12 galletas artesanales variadas",
    stock: 20,
    featured: true
  },
  {
    id: 4,
    name: "Cupcakes Gourmet (6u)",
    price: 22.00,
    category: "cupcakes",
    image: "/images/cupcakes-gourmet.jpg",
    description: "6 cupcakes decorados con buttercream de sabores surtidos",
    stock: 15,
    featured: true
  },
  {
    id: 5,
    name: "Tiramisú Artesanal",
    price: 15.00,
    category: "postres",
    image: "/images/tiramisu.jpg",
    description: "Clásico tiramisú italiano con café espresso y mascarpone",
    stock: 12,
    featured: true
  },
  {
    id: 6,
    name: "Alfajores de Maicena",
    price: 12.00,
    category: "galletas",
    image: "/images/alfajores.jpg",
    description: "Tradicionales alfajores de maicena rellenos de dulce de leche",
    stock: 25,
    featured: true
  },
  {
    id: 7,
    name: "Pastel de Zanahoria",
    price: 32.00,
    category: "pasteles",
    image: "/images/pastel-zanahoria.jpg",
    description: "Pastel de zanahoria con frosting de queso crema y nueces",
    stock: 8,
    featured: false
  },
  {
    id: 8,
    name: "Macarons Franceses (8u)",
    price: 16.00,
    category: "postres",
    image: "/images/macarons.jpg",
    description: "Delicados macarons franceses en variedad de sabores",
    stock: 18,
    featured: false
  },
  {
    id: 9,
    name: "Brownies de Chocolate",
    price: 14.00,
    category: "postres",
    image: "/images/brownies.jpg",
    description: "Brownies densos de chocolate con nueces pecanas",
    stock: 20,
    featured: false
  },
  {
    id: 10,
    name: "Galletas de Chispas (10u)",
    price: 10.00,
    category: "galletas",
    image: "/images/galletas-chispas.jpg",
    description: "Clásicas galletas con chispas de chocolate belga",
    stock: 30,
    featured: false
  },
  {
    id: 11,
    name: "Cupcakes de Red Velvet (6u)",
    price: 24.00,
    category: "cupcakes",
    image: "/images/cupcakes-redvelvet.jpg",
    description: "Cupcakes red velvet con frosting de queso crema",
    stock: 12,
    featured: false
  },
  {
    id: 12,
    name: "Pastel de Tres Leches",
    price: 38.00,
    category: "pasteles",
    image: "/images/tres-leches.jpg",
    description: "Esponjoso pastel de tres leches con merengue",
    stock: 6,
    featured: false
  }
];

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    text: "¡El cheesecake de frutos rojos fue el éxito de mi fiesta! Todos quedaron encantados con el sabor y la presentación.",
    date: "2023-09-15",
    avatar: "/images/avatar1.jpg"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    rating: 5,
    text: "Pedí cupcakes para el cumpleaños de mi hija y superaron todas las expectativas. Hermosos y deliciosos.",
    date: "2023-10-02",
    avatar: "/images/avatar2.jpg"
  },
  {
    id: 3,
    name: "Ana Lucía Torres",
    rating: 5,
    text: "La consultoría para mi pastel de bodas fue increíble. Doña Lucha entendió exactamente lo que quería.",
    date: "2023-10-20",
    avatar: "/images/avatar3.jpg"
  }
];

// Demo users for testing
const INITIAL_USERS = [
  {
    id: 1,
    fullName: "Administrador",
    email: "admin@donalucha.com",
    password: "admin123",
    createdAt: "2023-01-01T00:00:00.000Z",
    role: "admin"
  },
  {
    id: 2,
    fullName: "Usuario Demo",
    email: "demo@donalucha.com",
    password: "demo123",
    createdAt: "2023-01-01T00:00:00.000Z",
    role: "customer"
  }
];

// ==========================================
// STORAGE FUNCTIONS - PRODUCTS
// ==========================================

export function initStorage() {
  // Initialize products if not exists
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  }

  // Initialize cart if not exists
  if (!localStorage.getItem(STORAGE_KEYS.CART)) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
  }

  // Initialize bookings if not exists
  if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify([]));
  }

  // Initialize testimonials if not exists
  if (!localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(INITIAL_TESTIMONIALS));
  }

  // Initialize contacts if not exists
  if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify([]));
  }

  // Initialize users if not exists
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
  } else {
    const users = getUsers();
    const adminIndex = users.findIndex(user => user.email === 'admin@donalucha.com');

    if (adminIndex === -1) {
      users.unshift(INITIAL_USERS[0]);
    } else {
      users[adminIndex] = {
        ...users[adminIndex],
        ...INITIAL_USERS[0],
      };
    }

    const normalizedUsers = users.map(user => ({
      ...user,
      email: user.email?.trim().toLowerCase() || user.email,
      role: user.role || 'customer',
    }));

    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(normalizedUsers));
  }

  console.log('✅ Storage initialized with seed data');
}

export function getProducts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS) || '[]');
}

export function getProductById(id) {
  return getProducts().find(p => p.id === id);
}

export function getProductsByCategory(category) {
  const products = getProducts();
  if (category === 'todos' || !category) return products;
  return products.filter(p => p.category === category);
}

export function addProduct(product) {
  const products = getProducts();
  product.id = Date.now();
  products.push(product);
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  return product;
}

export function updateProduct(id, updates) {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return products[index];
  }
  return null;
}

export function deleteProduct(id) {
  const products = getProducts().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

// ==========================================
// STORAGE FUNCTIONS - CART
// ==========================================

export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '[]');
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  return cart;
}

export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '[]');
}

export function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  return cart;
}

export function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }
  return cart;
}

export function clearCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
}

export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// ==========================================
// STORAGE FUNCTIONS - BOOKINGS
// ==========================================

export function addBooking(booking) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
  bookings.push({
    ...booking,
    id: Date.now(),
    status: 'pending',
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  return bookings;
}

export function getBookings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
}

export function getBookingById(id) {
  return getBookings().find(b => b.id === id);
}

export function updateBookingStatus(id, status) {
  const bookings = getBookings();
  const index = bookings.findIndex(b => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return bookings[index];
  }
  return null;
}

// ==========================================
// STORAGE FUNCTIONS - TESTIMONIALS
// ==========================================

export function addTestimonial(testimonial) {
  const testimonials = JSON.parse(localStorage.getItem(STORAGE_KEYS.TESTIMONIALS) || '[]');
  testimonials.push({
    ...testimonial,
    id: Date.now(),
    date: new Date().toISOString().split('T')[0]
  });
  localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  return testimonials;
}

export function getTestimonials() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.TESTIMONIALS) || '[]');
}

// ==========================================
// STORAGE FUNCTIONS - CONTACTS
// ==========================================

export function addContact(contact) {
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACTS) || '[]');
  contacts.push({
    ...contact,
    id: Date.now(),
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
  return contacts;
}

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACTS) || '[]');
}

// ==========================================
// STORAGE FUNCTIONS - USERS / AUTH
// ==========================================

export function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
}

export function getUserByEmail(email) {
  const normalizedEmail = email.trim().toLowerCase();
  return getUsers().find(u => u.email?.toLowerCase() === normalizedEmail);
}

export function getUserById(id) {
  return getUsers().find(u => u.id === id);
}

export function registerUser(userData) {
  initStorage();

  const users = getUsers();
  const normalizedEmail = userData.email.trim().toLowerCase();

  // Check if email already exists
  if (users.find(u => u.email?.toLowerCase() === normalizedEmail)) {
    throw new Error('Este correo ya está registrado');
  }

  const newUser = {
    id: Date.now(),
    ...userData,
    email: normalizedEmail,
    role: 'customer',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  return newUser;
}

export function loginUser(email, password) {
  initStorage();

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();
  const user = getUsers().find(u => u.email.toLowerCase() === normalizedEmail && u.password === normalizedPassword);
  if (!user) {
    throw new Error('Correo o contraseña incorrectos');
  }

  const session = {
    id: user.id,
    name: user.fullName,
    email: user.email,
    role: user.role,
    loggedInAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
  return session;
}

export function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
  sessionStorage.removeItem(STORAGE_KEYS.SESSION);
}

export function getSession() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION) || sessionStorage.getItem(STORAGE_KEYS.SESSION) || 'null');
}

export function isLoggedIn() {
  return getSession() !== null;
}

export function isAdmin() {
  const session = getSession();
  return session && session.role === 'admin';
}

export function updateUser(id, updates) {
  const users = getUsers();
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return users[index];
  }
  return null;
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export function clearAllStorage() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
  console.log('🗑️ All storage cleared');
}

export function exportAllData() {
  return {
    products: getProducts(),
    cart: getCart(),
    bookings: getBookings(),
    testimonials: getTestimonials(),
    contacts: getContacts(),
    users: getUsers(),
    exportedAt: new Date().toISOString()
  };
}

export function importAllData(data) {
  if (data.products) localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(data.products));
  if (data.cart) localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(data.cart));
  if (data.bookings) localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(data.bookings));
  if (data.testimonials) localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(data.testimonials));
  if (data.contacts) localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(data.contacts));
  if (data.users) localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(data.users));
  console.log('📥 Data imported successfully');
}

// ==========================================
// DATABASE MIGRATION HELPERS
// ==========================================

export async function migrateToDatabase(apiEndpoint) {
  const data = exportAllData();

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function syncFromDatabase(apiEndpoint) {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  importAllData(data);
  return data;
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  initStorage();
}
