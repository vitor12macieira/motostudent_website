<script setup>
import { ref } from 'vue';

const defaultImage = '/images/team/nophoto.png';

const departments = ref([
  {
    id: 'leaders',
    name: 'Leaders',
    members: [
      { name: 'João Morais', role: 'Team Leader', image: '/images/team/joaomorais.jpg', email: 'up202105264@up.pt', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-morais-050917259/' },
      { name: 'Diogo Sousa', role: 'Electronics Dep. Leader', image: '/images/team/diogosousa.jpg', email: 'up202105819@up.pt', linkedin: 'https://www.linkedin.com/in/diogoasousaa/' },
      { name: 'Rodrigo Teixeira', role: 'Mechanics Dep. Leader', image: '/images/team/rodrigoteixeira.jpg', email: 'up202104517@up.pt', linkedin: 'https://www.linkedin.com/in/rodrigo-teixeira-554ba3133/' },
      { name: 'Rita Borges', role: 'Operations Dep. Leader', image: '/images/team/ritaborges.jpg', email: 'joao.silva@example.com', linkedin: 'https://www.linkedin.com/in/rita11borges11/' },
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics',
    members: [
      { name: 'Daniel Costa', image: '/images/team/danielcosta.jpg', email: 'up202207519@up.pt', linkedin: 'https://www.linkedin.com/in/danielfilipemartinscosta/' },
      { name: 'Carina Silva', image: '/images/team/carina.jpg', email: 'up202208515@up.pt', linkedin: 'https://www.linkedin.com/in/carina-taves-lage/' },
      { name: 'Francisco Lima', image: '/images/team/lima.jpg', email: 'up202208685@up.pt', linkedin: 'https://www.linkedin.com/in/francisco-castro-alves-lima/' },
      { name: 'Lucca Garcia', image: defaultImage, email: 'up201900181@up.pt', linkedin: 'https://www.linkedin.com/in/luccagarcia/' },
      { name: 'João Ribeiro', image: defaultImage, email: 'up202105905@up.pt', linkedin: 'https://www.linkedin.com/in/joao-ribeiro-9960b426b/' },
      { name: 'Tiago Pintado', image: defaultImage, email: 'up202105126@up.pt', linkedin: 'https://www.linkedin.com/in/tiago-pintado-7302b7228/' },
      { name: 'Martinho Figueiredo', image: defaultImage, email: 'up201506179@up.pt', linkedin: ''},
      { name: 'Guilherme Costa', image: defaultImage, email: 'up202108125@up.pt', linkedin: 'https://www.linkedin.com/in/guilherme-costa-5b063926a/' },
      { name: 'Lucas Feijó', image: defaultImage, email: 'up202000145@up.pt', linkedin: 'https://www.linkedin.com/in/lucas-feij%C3%B3-29468117b/' }
    ]
  },
  {
    id: 'mechanics-structures',
    name: 'Mechanics Structures',
    members: [
      { name: 'José Sousa', image: '/images/team/duartesousa.jpg', email: 'up202008584@up.pt', linkedin: 'https://www.linkedin.com/in/duartesousa22/' },
      { name: 'João Coelho', image: '/images/team/joaocoelho.jpg', email: 'up202106609@up.pt', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-coelho-751831309/' },
      { name: 'Alexandre Laia', image: defaultImage, email: 'up202105084@up.pt', linkedin: 'https://www.linkedin.com/in/alexandre-laia-456283273/' },
      { name: 'Bernardo Félix', image: defaultImage, email: 'up202105213@up.pt', linkedin: 'https://www.linkedin.com/in/bernardo-f%C3%A9lix-278262271/' },
      { name: 'Diogo Guimarães', image: defaultImage, email: 'up202305358@up.pt', linkedin: 'https://www.linkedin.com/in/diogo-guimar%C3%A3es-1302842b9/' }
    ]
  },
  {
    id: 'mechanics-aerodynamics-cooling',
    name: 'Mechanics Aerodynamics and Cooling',
    members: [
      { name: 'Daniel Costa', image: '/images/team/danielcosta.jpg', email: 'up202207519@up.pt', linkedin: 'https://www.linkedin.com/in/danielfilipemartinscosta/' },
      { name: 'Carina Silva', image: '/images/team/carina.jpg', email: 'up202208515@up.pt', linkedin: 'https://www.linkedin.com/in/carina-taves-lage/' },
      { name: 'Francisco Lima', image: '/images/team/lima.jpg', email: 'up202208685@up.pt', linkedin: 'https://www.linkedin.com/in/francisco-castro-alves-lima/' },
    ]
  },
  {
    id: 'mechanics-drivetrain',
    name: 'Mechanics Drivetrain',
    members: [
        { name: 'Daniel Costa', image: '/images/team/danielcosta.jpg', email: 'up202207519@up.pt', linkedin: 'https://www.linkedin.com/in/danielfilipemartinscosta/' },
      { name: 'Carina Silva', image: '/images/team/carina.jpg', email: 'up202208515@up.pt', linkedin: 'https://www.linkedin.com/in/carina-taves-lage/' },
      { name: 'Francisco Lima', image: '/images/team/lima.jpg', email: 'up202208685@up.pt', linkedin: 'https://www.linkedin.com/in/francisco-castro-alves-lima/' },
    ]
  },
  {
    id: 'mechanics-dynamics-suspension',
    name: 'Mechanics Dynamics and Suspension',
    members: [
      { name: 'António Noronha', image: '/images/team/antonionoronha2.jpg', email: 'up202006370@up.pt', linkedin: ''  },
      { name: 'Rafael Silva', image: defaultImage, email: 'up202107154@up.pt', linkedin: ''  },
    ]
  },
  {
    id: 'operations',
    name: 'Operations',
    members: [
      { name: 'João Costa', email: 'up202109931@up.pt', image: '/images/team/lumini.jpg', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-lumini-87672a281/' },
      { name: 'Luis Avila', email: 'up201900570@up.pt', image: '/images/team/luis.jpg', linkedin: 'https://www.linkedin.com/in/luis-felipe-avila/'  },
      { name: 'Rodrigo Gomes', email: 'up202207233@up.pt', image: '/images/team/rodrigogomes.jpg', linkedin: 'https://www.linkedin.com/in/rodrigofnsgomes/'  },
      { name: 'Diana Graça', email: 'up202107741@up.pt', image: defaultImage , linkedin: ''  },
      { name: 'Maria Almeida', email: 'up201905225@up.pt', image: defaultImage, linkedin: 'https://www.linkedin.com/in/maria-almeida-27072124a/'  },
      { name: 'Brenda Franco', email: 'up202101377@up.pt', image: defaultImage, linkedin: ''  },
      { name: 'Mariana Soares', email: 'up202208236@up.pt', image: defaultImage, linkedin: 'https://www.linkedin.com/in/mariana-soares-7bb600276/'  }
    ]
  }
]);
</script>

<template>
  <section class="py-20 bg-gray-900 text-white">
    <!-- HERO -->
    <div class="text-center mb-20 mt-15">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6">Equipa Prototipo 1</h1>
      <div class="w-24 h-1 bg-green-400 mx-auto"></div>
    </div>

    <!-- MAIN GRID -->
    <div class="grid md:grid-cols-5 gap-16 container mx-auto px-6">
      
      <!-- LEFT IMAGE -->
      <div class="md:col-span-2">
        <div class="sticky top-32">
          <div class="bg-gray-800 rounded-xl p-4 shadow-2xl">
            <img
              src="/images/prototype.jpeg"
              alt="Prototype"
              class="rounded-lg w-full object-cover"
            />
            <div class="text-center mt-4">
              <button
                class="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE (TEAM) -->
      <div class="md:col-span-3 flex flex-col space-y-20">
        <div
          v-for="department in departments"
          :key="department.id"
          class="text-center"
        >
          <!-- Department Name -->
          <h3 class="text-4xl font-bold mb-3">{{ department.name }}</h3>
          <div class="w-20 h-1 bg-green-400 mx-auto mb-8"></div>

          <!-- Members -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
            <div
              v-for="(member, i) in department.members"
              :key="member.name"
              class="text-center transition-all duration-300"
              :style="{ animationDelay: `${i * 100}ms` }"
            >
              <img
                :src="member.image"
                class="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-transparent hover:border-green-400 transition-colors"
              />
              <h4 class="text-lg font-bold">{{ member.name }}</h4>
              <p v-if="member.role" class="text-green-400">{{ member.role }}</p>
              
              <div v-if="member.email || member.linkedin" class="flex justify-center gap-4 mt-3">
                <a
                  v-if="member.email"
                  :href="'mailto:' + member.email"
                  class="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <i class="fas fa-envelope text-xl"></i>
                </a>
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <i class="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
