<script setup>
import { ref } from 'vue';

const departments = ref([
    {
        id: 'electronics',
        name: 'Electronics',
        memberCount: '5 Engineers',
        icon: 'fas fa-microchip',
        members: [
            { name: 'Maria Santos', role: 'Battery Systems Lead', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500' },
            { name: 'Pedro Costa', role: 'Motor Controller', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500' },
            { name: 'Ana Ferreira', role: 'Telemetry Systems', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500' }
        ]
    },
    {
        id: 'mechanics',
        name: 'Mechanics',
        memberCount: '6 Engineers',
        icon: 'fas fa-wrench',
        members: [
            { name: 'Carlos Oliveira', role: 'Chassis Design Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500' },
            { name: 'Sofia Almeida', role: 'Suspension Engineer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500' },
            { name: 'Ricardo Pereira', role: 'Aerodynamics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500' }
        ]
    },
    {
        id: 'operations',
        name: 'Operations',
        memberCount: '4 Members',
        icon: 'fas fa-chart-line',
        members: [
            { name: 'Inês Rodrigues', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500' },
            { name: 'Miguel Sousa', role: 'Marketing & Media', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500' },
            { name: 'Beatriz Lima', role: 'Finance & Sponsors', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500' }
        ]
    }
]);

</script>

<template>
    <!-- Team Structure Section -->
    <section class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
                <div class="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-16">
                <!-- Left Column: Sticky Prototype Image -->
                <div class="md:col-span-1">
                    <div class="sticky top-28">
                        <div class="bg-gray-800 rounded-xl p-4 shadow-2xl">
                            <img src="/images/prototype.jpeg" alt="Prototype" class="rounded-lg w-full h-auto object-cover">
                        </div>
                    </div>
                </div>

                <!-- Right Column: Departments and Members -->
                <div class="md:col-span-2 space-y-16">
                    <div v-for="department in departments" :key="department.id">
                        <div class="text-center mb-12">
                            <h3 class="text-3xl font-bold text-white mb-4">{{ department.name }}</h3>
                            <div class="w-20 h-1 bg-green-400 mx-auto"></div>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div 
                                v-for="(member, memberIndex) in department.members" 
                                :key="member.name" 
                                class="team-member-card text-center"
                                :style="{ animationDelay: `${memberIndex * 100}ms` }"
                            >
                                <div class="relative inline-block">
                                    <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-transparent transition-all duration-300">
                                </div>
                                <h4 class="text-lg font-bold text-white">{{ member.name }}</h4>
                                <p class="text-green-400 text-sm">{{ member.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Join Our Ranks CTA -->
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-12 text-white">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Join Our Ranks</h2>
                <p class="text-xl mb-8 leading-relaxed">
                    Ready to be part of the future of electric motorsport? We're always looking for passionate engineers, designers, and innovators to join our team.
                </p>
                <router-link to="/contactus" class="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-lg inline-block">
                    Contact Us to Apply
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.team-member-card {
    transform: translateY(20px);
    opacity: 0;
    animation: fade-in-up 0.6s ease-out forwards;
}

@keyframes fade-in-up {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.team-member-card:hover {
    transform: translateY(-5px);
}

.team-member-card img {
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.team-member-card:hover img {
    border-color: #4ade80; /* green-400 */
    transform: scale(1.05);
}
</style>
