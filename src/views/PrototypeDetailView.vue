<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

// Dados dos protótipos (Idealmente, isto estaria num ficheiro separado src/data/prototypes.js para ser importado aqui e na PrototypeView)
const prototypesData = [
    {
        id: 1,
        name: "Prototype I",
        status: "available",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80", // Imagem maior para o detalhe
        description: "Our first electric racing prototype featuring advanced battery technology and lightweight carbon fiber construction.",
        fullDescription: "This prototype marks the beginning of our journey. Built with a custom chassis and a proprietary battery management system, Prototype I demonstrated the viability of high-performance electric racing. The focus was on reliability and establishing a baseline for future developments.",
        specs: {
            power: "150 kW",
            range: "200 km",
            weight: "180 kg",
            topSpeed: "240 km/h",
            acceleration: "0-100 in 3.2s"
        },
        gallery: [
            "/images/prototype.jpeg",
            "/images/prototype2.jpeg",
             // Adiciona mais imagens reais aqui
        ]
    },
    {
        id: 2,
        name: "Prototype II",
        status: "coming-soon",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80",
        description: "Enhanced second-generation prototype with improved aerodynamics.",
        fullDescription: "Building on the lessons from Prototype I, this model introduces active aerodynamics and a more efficient cooling system.",
        specs: {
            power: "TBD",
            range: "TBD",
            weight: "TBD",
            topSpeed: "TBD",
            acceleration: "TBD"
        },
        gallery: []
    }
];

// Encontrar o protótipo atual baseado no ID da rota
const prototype = computed(() => {
    return prototypesData.find(p => p.id == route.params.id);
});

// Se não encontrar, volta para a lista (opcional)
onMounted(() => {
    if (!prototype.value) {
        // router.push('/prototype'); // Descomenta para redirecionar se o ID for inválido
    }
});
</script>

<template>
    <div v-if="prototype" class="bg-gray-900 min-h-screen text-white">
        
        <section class="relative py-40 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900"></div>
            </div>
            <div class="relative z-10 text-center px-4">
                <h1 class="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
                    {{ prototype.name }}
                </h1>
                <div class="w-32 h-1 bg-green-400 mx-auto mb-6"></div>
                <RouterLink to="/prototype" class="inline-flex items-center text-green-400 hover:text-white transition-colors font-semibold">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Prototypes
                </RouterLink>
            </div>
        </section>

        <section class="py-20 container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-16 items-start">
                
                <div>
                    <h2 class="text-3xl font-bold mb-6 text-white">Technical <span class="text-green-400">Overview</span></h2>
                    <p class="text-gray-300 text-lg leading-relaxed mb-8">
                        {{ prototype.fullDescription || prototype.description }}
                    </p>
                    
                    <div v-if="prototype.gallery && prototype.gallery.length > 0" class="grid grid-cols-2 gap-4 mt-8">
                        <div v-for="(img, idx) in prototype.gallery" :key="idx" class="rounded-lg overflow-hidden shadow-lg h-48">
                            <img :src="img" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Detail shot">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 sticky top-24">
                    <h3 class="text-2xl font-bold mb-6 flex items-center">
                        <i class="fas fa-cogs text-green-400 mr-3"></i> Specifications
                    </h3>
                    
                    <div class="space-y-4">
                        <div v-for="(value, key) in prototype.specs" :key="key" class="flex justify-between items-center border-b border-gray-700 pb-3 last:border-0">
                            <span class="text-gray-400 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</span>
                            <span class="text-xl font-bold text-white">{{ value }}</span>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-gray-700">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500">Status</span>
                            <span 
                                class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                                :class="prototype.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'"
                            >
                                {{ prototype.status === 'available' ? 'Track Ready' : 'In Development' }}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>