<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

// Estado do menu mobile
const isMobileMenuOpen = ref(false);

// Estado para controlar a visibilidade da navbar
const isNavbarVisible = ref(true);
const lastScrollPosition = ref(0);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Lógica para esconder/mostrar a navbar baseada no scroll
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Se estivermos no topo da página (ou perto), mostrar sempre
  if (currentScrollPosition < 50) {
    isNavbarVisible.value = true;
    lastScrollPosition.value = currentScrollPosition;
    return;
  }

  // Determinar a direção: 
  // Se a posição atual for MENOR que a anterior, estamos a subir -> MOSTRAR
  // Se a posição atual for MAIOR que a anterior, estamos a descer -> ESCONDER
  isNavbarVisible.value = currentScrollPosition < lastScrollPosition.value;
  
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 pb-1 transition-transform duration-300 ease-in-out"
    :class="[
      isNavbarVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <div class="w-full px-8 sm:px-12 lg:px-16">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <RouterLink to="/" @click="closeMobileMenu">
            <img src="/images/msfeup/MotorStudentLogoNameRightWhite.png" alt="FEUP Racing Logo" class="h-16 w-auto">
          </RouterLink>
        </div>
        <div class="hidden xl:block">
          <div class="flex items-baseline space-x-10">
            <RouterLink to="/" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Home</RouterLink>
            <RouterLink to="/prototype" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Prototype</RouterLink>
            <RouterLink to="/team" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Team</RouterLink>
            <RouterLink to="/sponsors" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Sponsors</RouterLink>
            <RouterLink to="/contactus" class="nav-link text-white px-4 py-3 text-lg font-medium cursor-pointer">Contact</RouterLink>
          </div>
        </div>
        <div class="xl:hidden">
          <button @click="toggleMobileMenu" class="text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isMobileMenuOpen" class="xl:hidden bg-black bg-opacity-95 absolute w-full top-20 left-0 border-t border-gray-800">
      <div class="px-8 pt-4 pb-6 space-y-2">
        <RouterLink to="/" @click="closeMobileMenu" class="text-white hover:text-green-400 block px-4 py-3 text-lg font-medium cursor-pointer transition-colors duration-300">Home</RouterLink>
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
  background-color: #009a00;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.nav-link:hover::before,
.nav-link.router-link-exact-active::before {
  transform: scaleY(1);
}
</style>