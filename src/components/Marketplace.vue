<template>
    <div class="flex">
      <!-- Barra Lateral Izquierda -->
      <aside class="w-64 bg-gray-100 p-4">
        <div class="mb-4">
          <img src="/logo.png" alt="Marketplace Logo" class="h-8 mb-4">
          <input
            type="text"
            placeholder="Buscar en Marketplace"
            class="w-full p-2 rounded border border-gray-300"
          />
        </div>
  
        <!-- Menú de Navegación -->
        <nav class="mb-4">
          <ul class="space-y-2">
            <li><a href="#" class="block p-2 bg-blue-500 text-white rounded">Explorar todo</a></li>
            <li><a href="#" class="block p-2">Notificaciones</a></li>
            <li><a href="#" class="block p-2">Bandeja de entrada</a></li>
            <li><a href="#" class="block p-2">Compra</a></li>
            <li><a href="#" class="block p-2">Venta</a></li>
            <li><a href="#" class="block p-2 bg-blue-500 text-white rounded">Crear publicación</a></li>
          </ul>
        </nav>
  
        <!-- Ubicación -->
        <div class="mb-4">
          <h3 class="text-gray-600 mb-2">Ubicación</h3>
          <p>Ciudad de Guatemala • En un radio de 17 km</p>
        </div>
  
        <!-- Categorías -->
        <div>
          <h3 class="text-gray-600 mb-2">Categorías</h3>
          <ul class="space-y-2">
            <li><a href="#" class="block p-2">Pescado</a></li>
            <li><a href="#" class="block p-2">Camarones</a></li>
            <li><a href="#" class="block p-2">Suministros</a></li>
            <li><a href="#" class="block p-2">Alevines</a></li>
            <li><a href="#" class="block p-2">Accesorios</a></li>
          </ul>
        </div>
      </aside>
  
      <!-- Sección Central -->
      <main class="flex-1 p-6">
        <!-- Novedades -->
        <section class="mb-6">
          <h2 class="text-2xl font-bold mb-4">Novedades para ti</h2>
          <div class="bg-white p-4 rounded-lg shadow">
            <p>Se acaban de agregar 40+ artículos a tus grupos de compraventa.</p>
          </div>
        </section>
  
        <!-- Sugerencias de Hoy -->
        <section>
          <h2 class="text-2xl font-bold mb-4">Sugerencias de Hoy</h2>
          <div class="grid grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <img src="/product1.jpg" alt="Producto 1" class="w-full h-32 object-cover mb-4">
              <h3 class="text-xl font-bold">Pescado Tilapia</h3>
              <p class="text-gray-600">Q20.00 por libra</p>
              <p class="text-gray-500">Ciudad de Guatemala</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <img src="/product2.jpg" alt="Producto 2" class="w-full h-32 object-cover mb-4">
              <h3 class="text-xl font-bold">Camarones Frescos</h3>
              <p class="text-gray-600">Q50.00 por libra</p>
              <p class="text-gray-500">Mixco, Guatemala</p>
            </div>
            <!-- Añadir más productos según sea necesario -->
          </div>
        </section>
      </main>
  
      <!-- Barra Lateral Derecha -->
      <aside class="w-64 bg-gray-100 p-4">
        <h3 class="text-gray-600 mb-2">Distancia</h3>
        <p>Mostrando productos en un radio de 17 km desde tu ubicación.</p>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Marketplace',
  }
  </script>
  
  <style scoped>
  /* Estilos personalizados aquí si es necesario */
  </style>
  