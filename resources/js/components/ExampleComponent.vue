<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h2>
        <p class="text-gray-600">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Exemple de composant Vue.js',
            message: 'Votre application Laravel avec Vue.js et Tailwind CSS fonctionne correctement !'
        }
    }
}
</script>
