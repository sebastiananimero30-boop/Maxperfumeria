# 🌸 Élite Parfum - Tienda de Perfumería Online

Tienda online profesional de perfumería con diseño elegante y funcionalidad completa.

## 📁 Estructura de Archivos

```
perfumeria-elite/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Todos los estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Uso Local Simple
1. Descarga todos los archivos en la misma carpeta
2. Abre `index.html` en tu navegador
3. ¡Listo! La tienda está funcionando

### Opción 2: Servidor Local
Si quieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## ✨ Características

### 🎨 Diseño
- ✅ Diseño moderno y elegante
- ✅ Paleta de colores premium (negro, dorado, beige)
- ✅ Tipografías refinadas (Playfair Display + Poppins)
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y transiciones
- ✅ Efectos hover profesionales

### 🛒 Funcionalidad
- ✅ **Sistema de Login/Registro completo**
  - Inicio de sesión con email y contraseña
  - Registro de nuevos usuarios
  - Opción "Recordarme"
  - Login con redes sociales (simulado)
  - Gestión de sesiones (localStorage/sessionStorage)
  - Perfil de usuario con menú
  - Cierre de sesión
- ✅ Carrito de compras funcional
- ✅ Agregar/eliminar productos
- ✅ Contador de productos
- ✅ Cálculo automático de totales
- ✅ Modal de carrito lateral
- ✅ Notificaciones de confirmación
- ✅ Cierre con tecla ESC
- ✅ Formato de precios colombianos
- ✅ Persistencia de datos en localStorage

### 📱 Secciones
1. **Header**: Logo, navegación, login y carrito
2. **Hero**: Banner principal con llamado a la acción
3. **Destacados**: Productos premium seleccionados
4. **Catálogo**: 9 productos de marcas exclusivas
5. **Ofertas**: Sección de promociones
6. **Nosotros**: Historia de la perfumería
7. **Contacto**: Formulario funcional
8. **Footer**: Redes sociales e información
9. **Sistema de Login**: Registro, inicio de sesión y perfil

## 🔐 Sistema de Autenticación

### Funcionalidades del Login:
- **Registro de usuarios** con validación de contraseñas
- **Inicio de sesión** con email y contraseña
- **Recordar sesión** (localStorage vs sessionStorage)
- **Perfil de usuario** con información y menú
- **Cierre de sesión** seguro
- **Validación de compras** (requiere login para checkout)

### Cómo funciona:
1. **Registro**: Los usuarios crean cuenta con nombre, email y contraseña
2. **Login**: Autenticación con credenciales guardadas en localStorage
3. **Sesión**: Se guarda en localStorage (recordarme) o sessionStorage
4. **Perfil**: Acceso a pedidos, favoritos, direcciones y configuración
5. **Checkout**: Requiere usuario logueado para procesar compras

### Datos de prueba:
Para probar el sistema, registra un usuario nuevo o usa estos datos de ejemplo (si los has creado previamente):
```
Email: usuario@ejemplo.com
Contraseña: 123456
```

### 🎯 Productos Incluidos
1. Noir Étoile - CHANEL ($450,000)
2. Lumière Divine - DIOR ($520,000)
3. Velvet Rose - TOM FORD ($680,000)
4. Amber Mystique - VERSACE ($380,000)
5. Ocean Breeze - GIORGIO ARMANI ($420,000)
6. Golden Essence - PRADA ($550,000)
7. Wild Orchid - YVES SAINT LAURENT ($490,000)
8. Midnight Bloom - GUCCI ($470,000)
9. Crystal Aura - BURBERRY ($410,000)

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #1a1a1a;        /* Color principal */
    --color-secondary: #d4af37;      /* Color dorado */
    --color-accent: #c9a961;         /* Color de acento */
    --color-light: #f8f7f4;          /* Fondo claro */
    --color-white: #ffffff;          /* Blanco */
    --color-gray: #6b6b6b;           /* Gris para textos */
}
```

### Agregar Productos
Edita el array `products` en `script.js`:

```javascript
const products = [
    {
        id: 10,  // ID único
        name: "Nombre del Perfume",
        brand: "MARCA",
        price: 500000,
        image: "url-de-la-imagen",
        featured: true  // true para destacados
    },
    // ... más productos
];
```

### Cambiar Imágenes
Reemplaza las URLs de Unsplash con tus propias imágenes:
- En `styles.css` busca la imagen del hero
- En `script.js` cambia las URLs en el array de productos
- En `index.html` cambia la imagen de "Nosotros"

### Modificar Textos
Simplemente edita el contenido en `index.html`:
- Títulos de secciones
- Descripciones
- Información de contacto
- Textos del footer

## 🌐 Funciones JavaScript Principales

### Autenticación:
```javascript
toggleLogin()              // Abrir/cerrar modal de login
handleLogin(event)         // Procesar inicio de sesión
handleRegister(event)      // Procesar registro
handleLogout()             // Cerrar sesión
socialLogin(provider)      // Login con redes sociales
checkSession()             // Verificar sesión activa
updateUserUI()             // Actualizar interfaz de usuario
```

### Carrito y Productos:
```javascript
addToCart(productId)       // Agregar producto al carrito
removeFromCart(productId)  // Eliminar del carrito
toggleCart()               // Abrir/cerrar carrito
handleCheckout()           // Procesar compra
scrollToProducts()         // Scroll a productos
saveCart()                 // Guardar carrito en localStorage
loadCart()                 // Cargar carrito guardado
```

### Utilidades:
```javascript
toggleMenu()               // Menú móvil
showNotification(msg)      // Mostrar notificaciones
formatPrice(price)         // Formatear precios
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px (diseño completo)
- **Tablet**: 600px - 968px (adaptado)
- **Móvil**: < 600px (menú hamburguesa)

## 🎯 Navegadores Soportados

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Opera (últimas versiones)

## 💡 Mejoras Futuras Opcionales

### Backend Real
Para conectar con un backend real:

1. **API de Autenticación**: 
   - Implementar JWT tokens
   - Hash de contraseñas con bcrypt
   - Recuperación de contraseña
   - Verificación de email
   
2. **API de Productos**: Reemplaza el array estático con llamadas fetch/axios

3. **Sistema de Pago**: Integra Stripe, PayPal o pasarela local

4. **Base de Datos**: 
   - MySQL/PostgreSQL para datos relacionales
   - MongoDB para datos no estructurados
   - Redis para sesiones

5. **Panel Admin**: Crea dashboard para gestión de:
   - Productos
   - Usuarios
   - Pedidos
   - Inventario

### Características Adicionales
- 🔍 Buscador de productos
- 🏷️ Filtros por marca/precio
- ⭐ Sistema de valoraciones
- 📧 Newsletter subscription
- 🎁 Cupones de descuento
- 📦 Seguimiento de pedidos

## 📞 Soporte

Para personalizar aún más o agregar funcionalidades:
1. Revisa la documentación de cada función en `script.js`
2. Todos los estilos están comentados en `styles.css`
3. La estructura HTML es semántica y clara

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para proyectos personales o comerciales.

## 🎉 Créditos

- **Diseño y Desarrollo**: Élite Parfum Team
- **Imágenes**: Unsplash (licencia libre)
- **Fuentes**: Google Fonts
- **Iconos**: Emojis nativos

---

**¡Listo para vender!** 🚀

Abre `index.html` y empieza a personalizar tu tienda.
