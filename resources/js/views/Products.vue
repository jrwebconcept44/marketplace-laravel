<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-center mb-8">Nos Produits</h1>
            <div v-if="loading" class="text-center">
                <p class="text-gray-600">Chargement des produits...</p>
            </div>
            <div v-else-if="error" class="bg-red-100 p-4 rounded-md text-red-700">
                {{ error }}
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="bg-gray-200 h-48 flex items-center justify-center">
                        <span class="text-gray-500">Image du produit</span>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg font-semibold text-gray-800">{{ product.name }}</h2>
                        <p class="text-gray-600 mt-2 truncate">{{ product.description }}</p>
                        <div class="mt-3 flex justify-between items-center">
                            <span class="text-lg font-bold text-gray-900">{{ product.price }}€</span>
                            <button class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        // Pour les tests, on simule des produits
        setTimeout(() => {
            products.value = [
                { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 29.99 },
                { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 39.99 },
                { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 49.99 },
            ];
            loading.value = false;
        }, 1000);

        // Commenté jusqu'à ce que l'API soit prête
        // const response = await axios.get('/api/products');
        // products.value = response.data;
        // loading.value = false;
    } catch (err) {
        error.value = "Impossible de charger les produits. Veuillez réessayer plus tard.";
        console.error(err);
        loading.value = false;
    }
});
</script>
