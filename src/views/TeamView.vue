<script setup>
import { ref } from 'vue';

// A variável 'defaultImage' é usada para membros sem foto
const defaultImage = '/images/team/nophoto.png';

// 'ref' torna a lista de departamentos reativa
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
      { name: 'José Morais', image: '/images/team/josemorais.jpg', email: 'up201905867@up.pt', linkedin: 'https://www.linkedin.com/in/jos%C3%A9-miguel-morais-918614265/' },
      { name: 'Tiago Costa', image: '/images/team/tiagocosta.jpg', email: 'up202007835@up.pt', linkedin: 'https://www.linkedin.com/in/tiago-costa-131bb1259/' },
      { name: 'Dinis Sousa', image: '/images/team/dinissousa.jpg', email: 'up202006788@up.pt', linkedin: 'https://www.linkedin.com/in/dinisgomessousa/' },
      { name: 'Diogo Pinho', image: '/images/team/diogopinho.jpg', email: 'up202205979@up.pt', linkedin: 'https://www.linkedin.com/in/diogo-pinho-1104982b8/' },
      { name: 'Miguel Costa', image: '/images/team/miguelcarvalho.jpg', email: 'up202208869@up.pt', linkedin: 'https://www.linkedin.com/in/miguelcvcosta/' },
      { name: 'Gonçalo Queiroz', image: defaultImage, email: 'up202104550@up.pt', linkedin: 'https://www.linkedin.com/in/gon%C3%A7aloqueiroz18/' },
      { name: 'Diogo Freitas', image: defaultImage, email: 'up202107575@up.pt', linkedin: '' },
      { name: 'João Costa', image: defaultImage, email: 'up202307613@up.pt', linkedin: '' },
      { name: 'João Antunes', image: defaultImage, email: 'up202105737@up.pt', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-duarte-antunes-2b988820b/' },
      { name: 'Catarina Brites', image: defaultImage, email: 'up202409830@up.pt', linkedin: 'https://www.linkedin.com/in/catarina-brites-67622824a/' },
    ]
  },
  {
    id: 'mechanics-drivetrain',
    name: 'Mechanics Drivetrain',
    members: [
      { name: 'Tomás Lopes', image: '/images/team/tomas.jpg', email: 'up202107511@up.pt', linkedin: 'https://www.linkedin.com/in/tom%C3%A1scostalopes/' },
      { name: 'Rafael Homsi', image: '/images/team/rafaelhomsi.jpg', email: 'up201900185@up.pt', linkedin: 'https://www.linkedin.com/in/rafaelhhomsi/' },
      { name: 'Miguel Simões', image: '/images/team/miguelsimões.jpg', email: 'up202306859@up.pt', linkedin: 'https://www.linkedin.com/in/miguel-sim%C3%B5es-107735289/' },
      { name: 'Rafael Ramos', image: '/images/team/rafaelramos.jpg', email: 'up202303466@up.pt', linkedin: 'https://www.linkedin.com/in/rafael-ramos-1b07a52a7/' },
      { name: 'Mário Freitas', image: defaultImage, email: 'up202105180@up.pt', linkedin: 'https://www.linkedin.com/in/m%C3%A1rio-freitas-b6552b240/' },
      { name: 'Rafael Osório', image: defaultImage, email: 'up202210302@up.pt', linkedin: '' },
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
  <div class="bg-gray-900 text-white">
    
<section class="relative pt-48 pb-24 flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/images/team/Equipa_Frente1.jpg" alt="FEUP Racing Team" class="w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>
      <div class="relative z-10 px-4">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">A Nossa Equipa</h1>

        <!-- Seletor de Protótipo -->
        <div class="mt-10 flex items-center justify-center space-x-6">
          <button class="text-white hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/10">
            <i class="fas fa-chevron-left text-2xl"></i>
          </button>
          <span class="text-2xl font-semibold text-green-400 tracking-wider">Protótipo 1</span>
          <button class="text-white hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/10">
            <i class="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="pt-12 pb-24">

      <div class="grid md:grid-cols-5 gap-16 container mx-auto px-6">
        
        <div class="md:col-span-2">
          <div class="sticky top-[23vh] max-w-md">
            <div class="bg-gray-800 rounded-xl p-4 shadow-2xl">
              <router-link to="/prototype">
                <img
                  src="/images/prototype2.jpeg"
                  alt="Prototype"
                  class="rounded-lg w-full object-cover cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
                />
              </router-link>
            </div>
          </div>
        </div>

        <div class="md:col-span-3 flex flex-col space-y-20">
          
          <div
            v-for="department in departments"
            :key="department.id"
            class="text-center"
          >
            <h3 class="text-4xl font-bold mb-3">{{ department.name }}</h3>
            <div class="w-20 h-1 bg-green-400 mx-auto mb-8"></div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 justify-items-center">
              
              <div
                v-for="(member, i) in department.members"
                :key="member.name"
                class="text-center transition-all duration-300"
                :style="{ animationDelay: `${i * 100}ms` }"
              >
                <div class="p-1 rounded-full bg-linear-to-tr from-green-500 to-gray-700 hover:from-green-400 hover:to-green-500 transition-all duration-300 w-40 h-40 mx-auto mb-4">
                  <img
                    :src="member.image"
                    alt=""
                    class="w-full h-full rounded-full object-cover object-top border-4 border-gray-900"
                  />
                </div>
                
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

  </div>
</template>

<style scoped>
/* Esta é a ÚNICA tag <style>
  Adicione aqui estilos específicos, se necessário.
  'scoped' garante que estes estilos só se aplicam a este componente.
*/
</style>