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
    <template>
  <div id="app">
    <Navbar />
    <!-- El resto de tu aplicación -->
    <router-view />
  </div>
</template>
    <main>
      <h1>Tienda de Productos</h1>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Producto 1",
          price: "$10.00",
          image: "link-to-image-1",
        },
        {
          id: 2,
          name: "Producto 2",
          price: "$20.00",
          image: "link-to-image-2",
        },
        // Puedes agregar más productos aquí o conectar con la base de datos más adelante.
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  color: #007bff;
}

.main {
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
}

.product-item img {
  max-width: 100%;
  height: auto;
}

.product-item h2 {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-item p {
  color: #28a745;
  font-size: 1em;
}
</style>
