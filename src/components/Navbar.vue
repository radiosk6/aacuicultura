<template>
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-white text-lg font-bold">Mi Plataforma Acuícola</a>
        <div>
          <input
            type="text"
            placeholder="Buscar..."
            class="px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  