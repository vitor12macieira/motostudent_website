<script setup>
import { ref } from 'vue';

// --- Dados Reativos ---
const newsItems = ref([
    {
        id: 1,
        title: "MotoStudent 2024 Competition Results",
        excerpt: "Our team achieved remarkable results in this year's MotoStudent competition, showcasing innovative electric motorcycle technology.",
        date: "December 15, 2024",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "New Battery Technology Breakthrough",
        excerpt: "We've developed a revolutionary battery management system that increases range by 30% while reducing weight significantly.",
        date: "November 28, 2024",
        image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Team Recruitment for 2025 Season",
        excerpt: "Join our passionate team of engineers and help us build the next generation of electric racing motorcycles.",
        date: "November 10, 2024",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
]);

const sponsors = ref([
    { id: 1, name: "KVASER", logo:"/images/partners/gold/kvaser.png", url: "https://kvaser.com/" },
    { id: 2, name: "SEW-EURODRIVE", logo: "/images/partners/gold/sew_site1-Photoroom.png", url: "https://www.sew-eurodrive.pt/inicio.html" },
    { id: 3, name: "AMOB", logo: "/images/partners/gold/amob.png", url: "https://amobgroup.com/pt-pt" },
    { id: 4, name: "COFICAB", logo: "/images/partners/silver/coficab.png", url: "https://www.coficab.pt/" },
    { id: 5, name: "edmtech", logo: "/images/partners/silver/edmtech.png", url: "https://www.edmtech.pt/" },
    { id: 6, name: "MAUSER", logo: "/images/partners/silver/mauser.png", url: "https://mauser.pt/catalog/" },
    { id: 7, name: "AJP", logo: "/images/partners/silver/Ajp.png", url: "https://ajpmotos.com/" },
    { id: 8, name: "Eurocircuits", logo: "/images/partners/silver/euro.png", url: "https://www.eurocircuits.com/" },
    { id: 9, name: "Mixtrónica", logo: "/images/partners/silver/mixtronica.png", url: "https://mixtronica.com/" },
]);

// Duplicar patrocinadores para o efeito de scroll infinito
const duplicatedSponsors = ref([...sponsors.value, ...sponsors.value]);

// --- Lógica da Newsletter ---
const newsletterEmail = ref('');
const newsletterMessage = ref('');
const isSuccessMessage = ref(false);

</script>

<template>
    <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Team photo background -->
        <div class="absolute inset-0 z-0">
            <img src="/images/team/Equipa_Frente1.jpg" alt="FEUP Racing Team" class="w-full h-full object-cover object-center">
            
            <!-- More visible gradients from top and bottom to middle -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" style="height: 60%;"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" style="height: 60%;"></div>
        </div>
        
        <!-- Heading and slogan in bottom-left corner -->
        <div class="absolute bottom-16 left-12 z-10">
            <h2 class="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-2xl">
                FEUP Racing Team
            </h2>
            <p class="text-white text-2xl md:text-3xl font-medium drop-shadow-xl leading-relaxed">
                Driven by passion. United for innovation.
            </p>
        </div>
    </section>

    <!-- Who We Are Section -->
    <section id="about" class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
                <div class="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-graduation-cap text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">Student Team</h3>
                    <p class="text-gray-300">
                        We are a passionate group of engineering students from FEUP (Faculty of Engineering, University of Porto) dedicated to pushing the boundaries of electric motorsport technology.
                    </p>
                </div>
                <div class="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-trophy text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">MotoStudent Competition</h3>
                    <p class="text-gray-300">
                        We compete in the prestigious MotoStudent international competition, where university teams design, build, and race prototype motorcycles against the world's best engineering minds.
                    </p>
                </div>
                <div class="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-bolt text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">Innovation Focus</h3>
                    <p class="text-gray-300">
                        Our mission is to develop sustainable, high-performance electric motorcycles that showcase the future of clean transportation and competitive racing technology.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest News Section -->
    <section id="news" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest News</h2>
                <div class="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Loop v-for para gerar os cartões de notícias dinamicamente -->
                <article v-for="news in newsItems" :key="news.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover object-top">
                    <div class="p-6">
                        <div class="text-sm text-green-400 font-semibold mb-2">{{ news.date }}</div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ news.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ news.excerpt }}</p>
                        <a href="#" class="text-green-400 hover:text-green-500 font-semibold cursor-pointer">
                            Read More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-gray-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p class="text-xl text-gray-300 mb-8">
                Get the latest news about our racing journey and technical developments
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

    <!-- Sponsors Section -->
    <section id="sponsors" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Partners</h2>
                <div class="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            <div class="overflow-hidden">
                <div class="flex" id="sponsors-container">
                    <!-- Loop v-for para gerar os patrocinadores dinamicamente -->
                    <a v-for="sponsor in duplicatedSponsors" :key="sponsor.id" :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 mx-8 group">
                        <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden hover:bg-gray-200 transition-colors duration-300">
                            <img :src="sponsor.logo" :alt="`${sponsor.name} Logo`" class="max-w-24 max-h-24 object-contain transition-transform duration-300 group-hover:scale-105">
                        </div>
                        <p class="text-center mt-2 text-sm font-semibold text-gray-700 group-hover:text-green-400 transition-colors duration-300">{{ sponsor.name }}</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#sponsors-container {
    display: flex;
    width: max-content;
    animation: scroll-left 40s linear infinite;
}

@keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
</style>
