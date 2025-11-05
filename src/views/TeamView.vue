<script setup>
import { ref } from 'vue';

const departments = ref([
      {
        id: 'leaders',
        name: 'Leaders',
        members: [
            { name: 'João Morais', role: 'Team Leader', image: '../../public/images/team/joaomorais.jpg', email: 'up202105264@up.pt', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-morais-050917259/' },
            { name: 'Diogo Sousa', role: 'Electronics Dep. Leader', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500', email: 'pedro.costa@example.com', linkedin: 'https://www.linkedin.com/in/pedrocosta' },
            { name: 'Ana Ferreira', role: 'Telemetry Systems', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', email: 'ana.ferreira@example.com', linkedin: 'https://www.linkedin.com/in/anaferreira' },
            { name: 'João Silva', role: 'Power Electronics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', email: 'joao.silva@example.com', linkedin: 'https://www.linkedin.com/in/joaosilva' },
            { name: 'Sofia Martins', role: 'Embedded Systems', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500', email: 'sofia.martins@example.com', linkedin: 'https://www.linkedin.com/in/sofiamartins' },
            { name: 'Ricardo Gomes', role: 'Sensor Integration', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500', email: 'ricardo.gomes@example.com', linkedin: 'https://www.linkedin.com/in/ricardogomes' }
        ]
    },
    {
        id: 'electronics',
        name: 'Electronics',
        members: [
            { name: 'Maria Santos', role: 'Battery Systems Lead', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500', email: 'maria.santos@example.com', linkedin: 'https://www.linkedin.com/in/mariasantos' },
            { name: 'Pedro Costa', role: 'Motor Controller', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500', email: 'pedro.costa@example.com', linkedin: 'https://www.linkedin.com/in/pedrocosta' },
            { name: 'Ana Ferreira', role: 'Telemetry Systems', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', email: 'ana.ferreira@example.com', linkedin: 'https://www.linkedin.com/in/anaferreira' },
            { name: 'João Silva', role: 'Power Electronics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', email: 'joao.silva@example.com', linkedin: 'https://www.linkedin.com/in/joaosilva' },
            { name: 'Sofia Martins', role: 'Embedded Systems', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500', email: 'sofia.martins@example.com', linkedin: 'https://www.linkedin.com/in/sofiamartins' },
            { name: 'Ricardo Gomes', role: 'Sensor Integration', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500', email: 'ricardo.gomes@example.com', linkedin: 'https://www.linkedin.com/in/ricardogomes' }
        ]
    },
    {
        id: 'mechanics',
        name: 'Mechanics',
        members: [
            { name: 'Carlos Oliveira', role: 'Chassis Design Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500' },
            { name: 'Sofia Almeida', role: 'Suspension Engineer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500' },
            { name: 'Ricardo Pereira', role: 'Aerodynamics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500' },
            { name: 'Sofia Martins', role: 'Embedded Systems', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500', email: 'sofia.martins@example.com', linkedin: 'https://www.linkedin.com/in/sofiamartins' },
            { name: 'Ricardo Gomes', role: 'Sensor Integration', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500', email: 'ricardo.gomes@example.com', linkedin: 'https://www.linkedin.com/in/ricardogomes' }
        ]
    },
    {
        id: 'operations',
        name: 'Operations',
        members: [
            { name: 'Inês Rodrigues', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500' },
            { name: 'Miguel Sousa', role: 'Marketing & Media', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500' },
            { name: 'Beatriz Lima', role: 'Finance & Sponsors', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500' }
        ]
    }
]);

</script>

<template>
<section class="py-20 bg-gray-900">
  <!-- HERO -->
  <div class="text-center mb-20">
    <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6">Meet Our Team</h1>
    <div class="w-24 h-1 bg-green-400 mx-auto"></div>
  </div>

  <!-- CONTEÚDO PRINCIPAL -->
  <div class="grid md:grid-cols-5 gap-24 container mx-auto px-6">
    
    <!-- IMAGEM À ESQUERDA -->
    <div class="md:col-span-2">
      <div class="sticky top-32">
        <div class="bg-gray-800 rounded-xl p-4 shadow-2xl relative">
          <img
            src="/images/prototype.jpeg"
            alt="Prototype"
            class="rounded-lg w-full h-auto object-cover"
          />
          <div class="text-center mt-4">
            <button
              class="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- EQUIPA À DIREITA -->
    <div class="md:col-span-3 flex flex-col space-y-20">
      <div
        v-for="department in departments"
        :key="department.id"
        class="mx-auto"
      >
        <!-- Nome do departamento -->
        <div class="mb-6">
          <h3 class="text-4xl font-bold text-white mb-3 text-center">{{ department.name }}</h3>
          <div class="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <!-- Membros -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          <div
            v-for="(member, memberIndex) in department.members"
            :key="member.name"
            class="text-center"
            :style="{ animationDelay: `${memberIndex * 100}ms` }"
          >
            <div class="relative inline-block">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-transparent transition-all duration-300 hover:border-green-400"
              />
              <div class="flex justify-center gap-4 mt-3">
              <a :href="'mailto:' + member.email" class="text-gray-400 hover:text-green-400 transition-colors">
                <i class="fas fa-envelope text-xl"></i>
              </a>
              <a :href="member.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-400 transition-colors">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
            </div>
            </div>
            <h4 class="text-lg font-bold text-white">{{ member.name }}</h4>
            <p class="text-green-400 text-base">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

