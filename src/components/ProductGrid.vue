<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div v-for="product in products" :key="product.id" class="border p-4 rounded">
      <img :src="product.images[0]" alt="Product Image" class="w-full h-48 object-cover rounded mb-4" />
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.description }}</p>
      <p class="text-blue-600 font-bold">Q{{ product.price }}</p>
      <button class="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
        Enviar Mensaje
      </button>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // Asegúrate de que la ruta sea correcta

export default {
  data() {
    return {
      products: []
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "products"));
    this.products = querySnapshot.docs.map(doc => doc.data());
  }
};
</script>
