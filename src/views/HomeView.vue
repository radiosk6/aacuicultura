<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><a href="/seller">Vendedor</a></li>
          <li><a href="/login">Iniciar sesión</a></li>
        </ul>
      </nav>
    </header>

    <div class="flex">
      <Sidebar />
      <div class="flex-1">
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-4">Novedades</h2>
          <!-- Aquí podrías agregar novedades personalizadas -->
        </div>
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-4">Sugerencias de Hoy</h2>
          <ProductGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import ProductGrid from '../components/ProductGrid.vue';

export default {
  components: {
    Sidebar,
    ProductGrid
  }
};
</script>
