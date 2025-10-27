<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <footer id="contact" class="bg-black text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Coluna do Logo e Redes Sociais -->
        <div>
          <img src="/images/msfeup/MotorStudentLogoNameRightWhite.png" alt="FEUP Racing Logo" class="h-12 w-auto mb-4 -ml-2">
          <p class="text-gray-400 mb-4">Engineering the future of electric motorsport</p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/msfeup/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-400 cursor-pointer" aria-label="Instagram">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/moto-student-feup/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-400 cursor-pointer" aria-label="LinkedIn">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Coluna de Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-gray-400 hover:text-green-400 cursor-pointer">Home</RouterLink></li>
            <li><RouterLink to="/team" class="text-gray-400 hover:text-green-400 cursor-pointer">Our Team</RouterLink></li>
            <li><RouterLink to="/prototype" class="text-gray-400 hover:text-green-400 cursor-pointer">Prototype</RouterLink></li>
            <li><RouterLink to="/sponsors" class="text-gray-400 hover:text-green-400 cursor-pointer">Sponsors</RouterLink></li>
            <li><RouterLink to="/contactus" class="text-gray-400 hover:text-green-400 cursor-pointer">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Coluna de Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <i class="fas fa-envelope mr-2"></i>
              <span>msfeup@gmail.com</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>Rua Dr. Roberto Frias, 4200-465 PORTO</span>
            </li>
          </ul>
        </div>

        <!-- Coluna da Newsletter -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
          <p class="text-gray-400 mb-4">Stay updated with our latest news and events</p>
          <form @submit.prevent="subscribeFooter" class="space-y-3">
            <input 
              v-model="footerEmail"
              type="email" 
              placeholder="Your email address" 
              class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
            >
            <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; Copyright 2025 MSFEUP | Powered by MSFEUP
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Adicione aqui estilos específicos para o rodapé, se necessário. */
/* Por exemplo, para garantir que os ícones tenham o tamanho certo. */
.fab, .fas {
    transition: color 0.3s ease;
}
</style>
