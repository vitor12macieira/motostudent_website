<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

// Estado reativo para o menu móvel e o estado de scroll da navbar
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

// Função para alternar a visibilidade do menu móvel
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Função para fechar o menu móvel (usado ao clicar num link)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Função para verificar a posição do scroll e atualizar o estado
const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 10;
};

// Adiciona e remove o event listener de scroll de forma segura
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Verifica o estado inicial no carregamento
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 pb-1 transition-colors duration-300"
    :class="{ 'bg-black bg-opacity-70 shadow-md backdrop-blur-sm': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="w-full px-8 sm:px-12 lg:px-16">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <!-- O logo agora é um RouterLink para a página inicial -->
          <RouterLink to="/" @click="closeMobileMenu">
            <img src="/images/msfeup/MotorStudentLogoNameRightWhite.png" alt="FEUP Racing Logo" class="h-16 w-auto">
          </RouterLink>
        </div>
        <div class="hidden xl:block">
          <div class="flex items-baseline space-x-10">
            <!-- Links de navegação usando RouterLink -->
            <RouterLink to="/" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Home</RouterLink>
            <RouterLink to="/prototype" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Prototype</RouterLink>
            <RouterLink to="/team" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Team</RouterLink>
            <RouterLink to="/sponsors" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Sponsors</RouterLink>
            <RouterLink to="/contactus" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Contact</RouterLink>
          </div>
        </div>
        <div class="xl:hidden">
          <!-- Botão para alternar o menu móvel -->
          <button @click="toggleMobileMenu" class="text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu móvel -->
    <div v-show="isMobileMenuOpen" class="xl:hidden bg-black bg-opacity-95">
      <div class="px-8 pt-4 pb-6 space-y-2">
        <!-- Links do menu móvel que também fecham o menu ao clicar -->
        <RouterLink to="/" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">About</RouterLink>
        <RouterLink to="/prototype" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">Prototype</RouterLink>
        <RouterLink to="/team" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">Team</RouterLink>
        <RouterLink to="/sponsors" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">Sponsors</RouterLink>
        <RouterLink to="/contactus" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-3px);
}

.nav-link::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #009a00; /* bright green */
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.nav-link:hover::before,
.nav-link.router-link-exact-active::before {
  /*
    A classe 'router-link-exact-active' é adicionada automaticamente pelo Vue Router
    ao link que corresponde exatamente à URL atual.
  */
  transform: scaleY(1);
}

</style>

