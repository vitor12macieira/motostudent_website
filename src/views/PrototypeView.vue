<script setup>
import { ref } from 'vue';

// --- Dados Reativos ---
const prototypes = ref([
    {
        id: 1,
        name: "Prototype I",
        status: "available",
        label: "Available",
        announcementDate: "September 28, 2025",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Our first electric racing prototype featuring advanced battery technology and lightweight carbon fiber construction. To be announced on September 28, 2025.",
        specs: {
            power: "150 kW",
            range: "200 km",
            weight: "180 kg"
        },
        detailsPage: '/team/prototype-1' // Rota para a página de detalhes
    },
    {
        id: 2,
        name: "Prototype II",
        status: "coming-soon",
        label: "Coming Soon",
        announcementDate: "TBD",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Enhanced second-generation prototype with improved aerodynamics, better performance, and lessons learned from Prototype I. Coming soon.",
        specs: {
            power: "TBD",
            range: "TBD",
            weight: "TBD"
        },
        detailsPage: null
    }
]);

// --- Lógica da Newsletter ---
const newsletterEmail = ref('');
const newsletterMessage = ref('');
const isSuccessMessage = ref(false);

function subscribeNewsletter() {
    const email = newsletterEmail.value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (re.test(email)) {
        newsletterMessage.value = "Thank you for subscribing to our newsletter!";
        isSuccessMessage.value = true;
        newsletterEmail.value = '';
    } else {
        newsletterMessage.value = "Please enter a valid email address.";
        isSuccessMessage.value = false;
    }

    setTimeout(() => {
        newsletterMessage.value = '';
    }, 3000);
}
</script>

<template>
    <!-- Hero Section -->
    <section id="prototypes" class="relative py-60 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="FEUP Racing Workshop" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" style="height: 60%;"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" style="height: 60%;"></div>
        </div>
        <div class="absolute bottom-16 left-12 z-10 fade-in-up">
            <h1 class="text-white text-7xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
                <span class="text-green-400">Our</span> Prototypes
            </h1>
            <p class="text-white text-xl md:text-2xl font-medium drop-shadow-xl leading-relaxed max-w-2xl">
                Discover our journey from concept to competition-ready electric motorcycles
            </p>
        </div>
    </section>

    <!-- Prototypes Introduction -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                    Prototype <span class="text-green-400">Showcase</span>
                </h2>
                <div class="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Explore our electric motorcycle prototypes and their specifications
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <!-- Loop v-for para gerar os cartões de protótipo -->
                <div v-for="proto in prototypes" :key="proto.id" 
                     class="prototype-card bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                     :class="{ 'available-card': proto.status === 'available', 'locked-card': proto.status !== 'available' }">
                    
                    <div class="relative">
                        <img :src="proto.image" :alt="proto.name" class="w-full h-56 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                        <div class="status-badge" :class="proto.status === 'available' ? 'status-available' : 'status-coming-soon'">
                            <i class="fas mr-1" :class="proto.status === 'available' ? 'fa-check-circle' : 'fa-clock'"></i>
                            {{ proto.label }}
                        </div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <div class="text-sm font-medium text-green-400 mb-1">{{ proto.announcementDate }}</div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-white mb-3">{{ proto.name }}</h3>
                        <p class="text-gray-300 text-sm mb-4 leading-relaxed">{{ proto.description }}</p>
                        
                        <div class="grid grid-cols-3 gap-3 mb-4 text-center">
                            <div class="bg-gray-700 rounded-lg p-3">
                                <div class="text-xs text-gray-400">Power</div>
                                <div class="text-sm font-semibold text-white">{{ proto.specs.power }}</div>
                            </div>
                            <div class="bg-gray-700 rounded-lg p-3">
                                <div class="text-xs text-gray-400">Range</div>
                                <div class="text-sm font-semibold text-white">{{ proto.specs.range }}</div>
                            </div>
                            <div class="bg-gray-700 rounded-lg p-3">
                                <div class="text-xs text-gray-400">Weight</div>
                                <div class="text-sm font-semibold text-white">{{ proto.specs.weight }}</div>
                            </div>
                        </div>
                        
                        <router-link v-if="proto.detailsPage" :to="proto.detailsPage" class="w-full block text-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                            <i class="fas fa-eye mr-2"></i>
                            View Details
                        </router-link>
                        <div v-else class="flex items-center justify-center py-3 px-4 bg-gray-700 rounded-lg">
                            <i class="fas fa-clock text-gray-400 mr-2"></i>
                            <span class="text-gray-400 text-sm font-medium">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section id="newsletter" class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p class="text-xl text-gray-300 mb-8">
                Get the latest news about our prototype development and racing progress
            </p>
            <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto">
                <div class="flex">
                    <input v-model="newsletterEmail" type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 text-gray-900 bg-white border-none focus:outline-none focus:ring-2 focus:ring-green-400 text-sm rounded-l-lg">
                    <button type="submit" class="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-3 transition-colors duration-300 cursor-pointer whitespace-nowrap rounded-r-lg">
                        Subscribe
                    </button>
                </div>
                <p v-if="newsletterMessage" class="mt-4 text-sm" :class="isSuccessMessage ? 'text-green-400' : 'text-red-400'">
                    {{ newsletterMessage }}
                </p>
            </form>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

.prototype-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.prototype-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent);
    transition: left 0.5s;
}

.prototype-card:hover::before {
    left: 100%;
}

.prototype-card:not(.locked-card):hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.locked-card {
    opacity: 0.7;
    filter: grayscale(30%);
}

.locked-card:hover {
    transform: translateY(-3px);
    opacity: 0.8;
}

.status-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-available {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.status-coming-soon {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}
</style>
