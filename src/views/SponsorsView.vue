<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// --- Dados Reativos ---
const tiers = ref([
    {
        name: 'Gold',
        title: 'Premier Partners',
        description: 'Our gold sponsors provide the foundation for our success with their exceptional support and partnership.',
        badgeClass: 'gold',
        cardWidth: 'w-80', // width: 20rem
        sponsors: [
            { name: "SEW-EURODRIVE", slogan: "TBD", logo: "/images/partners/gold/sew_site1-Photoroom.png", url: "https://www.sew-eurodrive.pt/inicio.html" },
            { name: "KVASER", slogan: "TBD", logo: "/images/partners/gold/kvaser.png", url: "https://kvaser.com/" },
            { name: "AMOB", slogan: "TBD", logo: "/images/partners/gold/amob.png", url: "https://amobgroup.com/pt-pt" }
        ]
    },
    {
        name: 'Silver',
        title: 'Strategic Partners',
        description: 'Our silver sponsors provide essential support that drives our innovation forward.',
        badgeClass: 'silver',
        cardWidth: 'w-72', // width: 18rem
        sponsors: [
            { name: "COFICAB", slogan: "TBD", logo: "/images/partners/silver/coficab.png", url: "https://www.coficab.pt/" },
            { name: "edmtech", slogan: "TBD", logo: "/images/partners/silver/edmtech.png", url: "https://www.edmtech.pt/" },
            { name: "MAUSER", slogan: "TBD", logo: "/images/partners/silver/mauser.png", url: "https://mauser.pt/" },
            { name: "AJP", slogan: "TBD", logo: "/images/partners/silver/Ajp.png", url: "https://ajpmotos.com/" },
            { name: "Eurocircuits", slogan: "TBD", logo: "/images/partners/silver/euro.png", url: "https://www.eurocircuits.com/" },
            { name: "Mixtrónica", slogan: "TBD", logo: "/images/partners/silver/mixtronica.png", url: "https://mixtronica.com/" },
        ]
    },
    {
        name: 'Bronze',
        title: 'Supporting Partners',
        description: 'Our bronze sponsors contribute valuable resources and expertise to our mission.',
        badgeClass: 'bronze',
        cardWidth: 'w-64', // width: 16rem
        sponsors: [
            { name: "ENERCON", slogan: "TBD", logo: "/images/partners/bronze/enercon.png", url: "https://www.enercon.de/en" },
            { name: "Protocase", slogan: "TBD", logo: "/images/partners/bronze/protocase.png", url: "https://www.protocase.com/" },
            { name: "ND Tuned", slogan: "TBD", logo: "/images/partners/bronze/ndtuned.png", url: "https://www.ndtuned.com/" },
            { name: "i-charging", slogan: "TBD", logo: "/images/partners/bronze/I-Charging.png", url: "https://i-charging.tech/" },
            { name: "Einhell", slogan: "TBD", logo: "/images/partners/bronze/einhell.png", url: "https://www.einhell.pt/" },
            { name: "FHOREX", slogan: "TBD", logo: "/images/partners/bronze/fhorex.png", url: "https://fhorex.pt/pt/" },
            { name: "INEGI", slogan: "TBD", logo: "/images/partners/bronze/inegi.png", url: "https://www.inegi.pt/pt/" },
            { name: "FREZITE", slogan: "TBD", logo: "/images/partners/bronze/frezite.png", url: "https://www.frezite.pt/pt" },
            { name: "MCG", slogan: "TBD", logo: "/images/partners/bronze/mcg.png", url: "https://www.mcg.pt/" },
            { name: "ENERAUT", slogan: "TBD", logo: "/images/partners/bronze/ENERAUTLOGO.png", url: "https://www.eneraut.pt/" },
            { name: "Inductiva", slogan: "TBD", logo: "/images/partners/bronze/inductiva-logo.svg", url: "https://inductiva.ai/" }
        ]
    },
    {
        name: 'Partners',
        title: 'Community Partners',
        description: 'Our network of partners who support our mission with services and collaboration.',
        badgeClass: 'partners',
        cardWidth: 'w-56', // width: 14rem
        sponsors: [
            { name: "Altium", slogan: "TBD", logo: "/images/partners/software/ASX_ALU.png", url: "https://www.altium.com/pt" },
            { name: "VI-grade", slogan: "TBD", logo: "/images/partners/partners/vi-grade.png", url: "https://www.vi-grade.com/" },
            { name: "norelem", slogan: "TBD", logo: "/images/partners/partners/norelem.png", url: "https://norelem.es/pt/" },
            { name: "AEFEUP", slogan: "TBD", logo: "/images/partners/institutional/aefeup.png", url: "https://aefeup.pt/" },
            { name: "DEEC", slogan: "TBD", logo: "/images/partners/institutional/deec.png", url: "https://linktr.ee/DEEC_FEUP" },
            { name: "DEMec", slogan: "TBD", logo: "/images/partners/institutional/demec.png", url: "https://www.instagram.com/demec_feup/" },
            { name: "FEUP", slogan: "TBD", logo: "/images/partners/institutional/feup.png", url: "https://www.up.pt/feup/pt/" }
        ]
    }
]);

// --- Lógica do Modal ---
const isModalOpen = ref(false);

function openModal() {
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

function handleBecomeSponsor() {
    const message = `Hello FEUP Racing Team,\n\nI'm interested in becoming a sponsor and would like to learn more about partnership opportunities.\n\nPlease provide information about:\n- Available sponsorship tiers\n- Partnership benefits\n- Investment requirements\n- Timeline for partnership activation\n\nLooking forward to hearing from you.\n\nBest regards,`;
    router.push({ path: '/contactus', query: { subject: 'Partnership Inquiry - FEUP Racing', message } });
}

function handleContactFromModal() {
    const message = `Hello FEUP Racing Team,\n\nI've reviewed your partnership tiers and would like to discuss potential collaboration opportunities.\n\nPlease contact me to arrange a meeting or call.\n\nBest regards,`;
    closeModal();
    router.push({ path: '/contactus', query: { subject: 'Partnership Information Request - FEUP Racing', message } });
}
</script>

<template>
    <!-- Hero Section -->
    <section id="sponsors-hero" class="relative py-60 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="Sponsors Wall" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" style="height: 60%;"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" style="height: 60%;"></div>
        </div>
        <div class="absolute bottom-16 left-12 z-10">
            <h1 class="text-white text-7xl md:text-8xl font-bold mb-3 drop-shadow-2xl">
                Our <span class="text-green-400">Sponsors</span>
            </h1>
            <p class="text-white text-xl md:text-lg font-medium drop-shadow-xl leading-relaxed max-w-2xl">
                Thank you to our partners who make our electric motorsport dreams a reality
            </p>
        </div>
    </section>

    <!-- Loop through Tiers -->
    <template v-for="(tier, index) in tiers" :key="tier.name">
        <section :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'" class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <div class="tier-badge" :class="tier.badgeClass">{{ tier.name }} Sponsors</div>
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ tier.title }}</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ tier.description }}</p>
                </div>
                <div class="flex flex-wrap justify-center gap-8">
                    <!-- Loop through Sponsors in Tier -->
                    <div v-for="(sponsor, sponsorIndex) in tier.sponsors" :key="sponsor.name" 
                         class="sponsor-card flex flex-col justify-between bg-white rounded-lg shadow-md p-6 border border-gray-100"
                         :class="tier.cardWidth"
                         :style="{ transitionDelay: `${sponsorIndex * 50}ms` }">
                        <a :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="block h-full flex flex-col">
                            <div class="h-24 flex items-center justify-center mb-4 flex-grow">
                                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo object-contain h-full max-h-16"/>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">{{ sponsor.name }}</h3>
                                <!-- <p class="text-gray-600 text-center">{{ sponsor.slogan }}</p> -->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="index < tiers.length - 1" class="section-divider"></div>
    </template>

    <!-- Become a Sponsor CTA -->
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl p-12 text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
                    <div class="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
                </div>
                <div class="relative z-10">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">Join Our Partnership</h2>
                    <p class="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                        Support the future of electric motorsport and join our community of innovative partners. Together, we're building tomorrow's racing technology.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button @click="handleBecomeSponsor" class="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                            <i class="fas fa-handshake"></i>
                            Become a Sponsor
                        </button>
                        <button @click="openModal" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-lg flex items-center justify-center gap-2">
                            <i class="fas fa-info-circle"></i>
                            Partnership Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal for Partnership Info -->
    <div v-if="isModalOpen" @click.self="closeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-3xl font-bold text-gray-900">Partnership Opportunities</h3>
                    <button @click="closeModal" class="text-gray-400 hover:text-gray-600 text-2xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="space-y-6">
                    <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Gold Partnership</h4>
                        <p class="mb-3">Premium visibility and maximum impact</p>
                        <ul class="text-sm space-y-1 list-disc list-inside">
                            <li>Logo on car and team uniforms</li>
                            <li>Social media mentions</li>
                            <li>Event presence opportunities</li>
                            <li>Technical collaboration</li>
                        </ul>
                    </div>
                    <div class="bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg p-6 text-gray-800">
                        <h4 class="text-xl font-bold mb-2">Silver Partnership</h4>
                        <p class="mb-3">Strong brand association with innovation</p>
                        <ul class="text-sm space-y-1 list-disc list-inside">
                            <li>Website logo placement</li>
                            <li>Newsletter mentions</li>
                            <li>Event materials inclusion</li>
                            <li>Product/service collaboration</li>
                        </ul>
                    </div>
                    <div class="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Bronze Partnership</h4>
                        <p class="mb-3">Supporting the next generation of engineers</p>
                        <ul class="text-sm space-y-1 list-disc list-inside">
                            <li>Website recognition</li>
                            <li>Annual report inclusion</li>
                            <li>Networking opportunities</li>
                            <li>Student recruitment access</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <button @click="handleContactFromModal" class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sponsor-card {
    transform: translateY(20px);
    opacity: 0;
    animation: slide-in 0.5s ease-out forwards;
}

@keyframes slide-in {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.sponsor-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(34, 197, 94, 0.15);
}

.sponsor-logo {
    transition: all 0.3s ease;
    filter: grayscale(0.3);
}

.sponsor-card:hover .sponsor-logo {
    filter: grayscale(0);
    transform: scale(1.05);
}

.tier-badge {
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.875rem;
    display: inline-block;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.tier-badge.gold { background: linear-gradient(135deg, #fbbf24, #f59e0b); }
.tier-badge.silver { background: linear-gradient(135deg, #e5e7eb, #9ca3af); color: #1f2937; }
.tier-badge.bronze { background: linear-gradient(135deg, #d97706, #92400e); }
.tier-badge.partners { background: linear-gradient(135deg, #4ade80, #22c55e); }

.section-divider {
    height: 2px;
    background: linear-gradient(to right, transparent, #22c55e, transparent);
    margin: 3rem 0;
}
</style>
