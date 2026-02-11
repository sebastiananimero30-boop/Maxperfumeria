 // ========== DATOS DE PRODUCTOS ==========
const products = [
    {
        id: 1,
        name: "Noir Étoile",
        brand: "CHANEL",
        price: 450000,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80",
        featured: true
    },
    {
        id: 2,
        name: "Lumière Divine",
        brand: "DIOR",
        price: 520000,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
        featured: true
    },
    {
        id: 3,
        name: "Velvet Rose",
        brand: "TOM FORD",
        price: 680000,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
        featured: true
    },
    {
        id: 4,
        name: "Amber Mystique",
        brand: "VERSACE",
        price: 380000,
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&q=80",
        featured: false
    },
    {
        id: 5,
        name: "Ocean Breeze",
        brand: "GIORGIO ARMANI",
        price: 420000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcGjpDOZ5x259Z9C4jqk8OUg_BKhOJXJvqw&s",
        featured: false
    },
    {
        id: 6,
        name: "Golden Essence",
        brand: "PRADA",
        price: 550000,
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80",
        featured: true
    },
    {
        id: 7,
        name: "Wild Orchid",
        brand: "YVES SAINT LAURENT",
        price: 490000,
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80",
        featured: false
    },
    {
        id: 8,
        name: "Midnight Bloom",
        brand: "GUCCI",
        price: 470000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa13VeqRiy9Z9OKBdlgLZi0LROpKywNso3wg&s",
        featured: false
    },
    
];

// ========== VARIABLES GLOBALES ==========
let cart = [];
let currentUser = null;

// ========== FUNCIONES DE AUTENTICACIÓN ==========

/**
 * Alterna la visibilidad del modal de login
 */
function toggleLogin() {
    const loginModal = document.getElementById('loginModal');
    loginModal.classList.toggle('active');
    
    // Si el usuario está logueado, mostrar perfil
    if (currentUser) {
        showUserProfile();
    } else {
        showLogin();
    }
}

/**
 * Cierra el modal de login al hacer clic fuera
 */
function closeLoginOnOutsideClick(event) {
    if (event.target.id === 'loginModal') {
        toggleLogin();
    }
}

/**
 * Muestra el formulario de login
 */
function showLogin(event) {
    if (event) event.preventDefault();
    
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('userProfileContainer').style.display = 'none';
}

/**
 * Muestra el formulario de registro
 */
function showRegister(event) {
    if (event) event.preventDefault();
    
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('userProfileContainer').style.display = 'none';
}

/**
 * Muestra el perfil del usuario
 */
function showUserProfile() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('userProfileContainer').style.display = 'block';
    
    // Actualizar información del perfil
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
        
        // Mostrar inicial del nombre en el avatar
        const initial = currentUser.name.charAt(0).toUpperCase();
        document.getElementById('userAvatar').textContent = initial;
    }
}

/**
 * Maneja el inicio de sesión
 */
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Simulación de login (en producción esto se haría con un backend)
    // Verificar si el usuario existe en localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = {
            name: user.name,
            email: user.email
        };
        
        // Guardar sesión
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        updateUserUI();
        showNotification('¡Bienvenido de nuevo!');
        toggleLogin();
        
        // Limpiar formulario
        document.getElementById('loginForm').reset();
    } else {
        alert('Credenciales incorrectas. Por favor intenta nuevamente.');
    }
}

/**
 * Maneja el registro de nuevos usuarios
 */
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
    
    // Validaciones
    if (password !== passwordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    if (!acceptTerms) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }
    
    // Verificar si el email ya existe
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
        alert('Este email ya está registrado');
        return;
    }
    
    // Crear nuevo usuario
    const newUser = {
        name: name,
        email: email,
        password: password // En producción esto debería estar hasheado
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login después del registro
    currentUser = {
        name: newUser.name,
        email: newUser.email
    };
    
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateUserUI();
    showNotification('¡Cuenta creada exitosamente!');
    toggleLogin();
    
    // Limpiar formulario
    document.getElementById('registerForm').reset();
}

/**
 * Login con redes sociales (simulado)
 */
function socialLogin(provider) {
    showNotification(`Función de login con ${provider} disponible próximamente`);
}

/**
 * Maneja el cierre de sesión
 */
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    updateUserUI();
    toggleLogin();
    showNotification('Sesión cerrada exitosamente');
}

/**
 * Actualiza la UI del usuario en el header
 */
function updateUserUI() {
    const userIcon = document.getElementById('userIcon');
    const userNameHeader = document.getElementById('userNameHeader');
    
    if (currentUser) {
        userNameHeader.textContent = currentUser.name.split(' ')[0];
        userNameHeader.style.display = 'inline';
    } else {
        userNameHeader.style.display = 'none';
    }
}

/**
 * Verifica si hay una sesión activa al cargar
 */
function checkSession() {
    const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

// ========== FUNCIONES DE PRODUCTOS Y CARRITO ==========

/**
 * Formatea un precio a formato de moneda colombiana
 */
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

/**
 * Crea el HTML de una tarjeta de producto
 */
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

/**
 * Renderiza todos los productos en el DOM
 */
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const featuredGrid = document.getElementById('featuredProducts');
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    const featuredProducts = products.filter(p => p.featured);
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

/**
 * Agrega un producto al carrito
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    saveCart();
    showNotification('Producto agregado al carrito');
}

/**
 * Elimina un producto del carrito
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

/**
 * Actualiza la visualización del carrito
 */
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-brand">${item.brand}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} x ${item.quantity}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

/**
 * Guarda el carrito en localStorage
 */
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Carga el carrito desde localStorage
 */
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

/**
 * Alterna la visibilidad del carrito
 */
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
}

/**
 * Cierra el carrito al hacer clic fuera
 */
function closeCartOnOutsideClick(event) {
    if (event.target.id === 'cartModal') {
        toggleCart();
    }
}

/**
 * Procesa el checkout del carrito
 */
function handleCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Verificar si el usuario está logueado
    if (!currentUser) {
        toggleCart();
        setTimeout(() => {
            toggleLogin();
            showNotification('Por favor inicia sesión para continuar con tu compra');
        }, 300);
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`¡Gracias por tu compra, ${currentUser.name}!\n\nTotal: ${formatPrice(total)}\n\nTe contactaremos pronto a ${currentUser.email} para confirmar tu pedido.`);
    
    cart = [];
    saveCart();
    updateCart();
    toggleCart();
}

/**
 * Muestra una notificación temporal
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Hace scroll suave a la sección de productos
 */
function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Alterna el menú de navegación móvil
 */
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

/**
 * Maneja el envío del formulario de contacto
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`¡Gracias por contactarnos, ${name}!\n\nHemos recibido tu mensaje y te responderemos pronto a ${email}.`);
    
    document.getElementById('contactForm').reset();
}

// ========== INICIALIZACIÓN ==========

/**
 * Inicializa la aplicación cuando el DOM está cargado
 */
window.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión activa
    checkSession();
    
    // Cargar productos y carrito
    renderProducts();
    loadCart();
    
    // Smooth scroll para enlaces de ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                const nav = document.getElementById('mainNav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
});

/**
 * Cerrar modales con tecla ESC
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        const loginModal = document.getElementById('loginModal');
        
        if (cartModal.classList.contains('active')) {
            toggleCart();
        }
        
        if (loginModal.classList.contains('active')) {
            toggleLogin();
        }
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('userRole').value;

    if (role === 'administrador') {
        if (email === 'sebastianQgmail.com' && password === 'sebastiananimero93964') {
            alert('Inicio de sesión exitoso como Administrador');
            document.getElementById('loginFormContainer').style.display = 'none';
            document.getElementById('adminSection').style.display = 'block';
        } else {
            alert('Credenciales incorrectas para Administrador');
        }
    } else if (role === 'cliente') {
        // Simulación de inicio de sesión para clientes
        alert('Inicio de sesión exitoso como Cliente');
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userProfileContainer').style.display = 'block';
    } else {
        alert('Por favor selecciona un rol válido');
    }
});
