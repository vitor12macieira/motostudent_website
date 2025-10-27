<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// --- Estado Reativo do Formulário ---
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const isSubmitting = ref(false);
const isSuccess = ref(false);

// --- Lógica de Submissão ---
function handleSubmit() {
    if (isSubmitting.value) return;

    isSubmitting.value = true;

    // Simular uma chamada de API
    setTimeout(() => {
        isSuccess.value = true;
        isSubmitting.value = false;

        // Limpar formulário
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';

        // Esconder a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            isSuccess.value = false;
        }, 5000);
    }, 1500);
}

// --- Ciclo de Vida ---
onMounted(() => {
    // Preencher o formulário a partir dos query parameters da URL
    if (route.query.subject) {
        const subjectValue = route.query.subject;
        // Tenta encontrar a opção correspondente no select
        if (subjectValue.toLowerCase().includes('sponsorship') || subjectValue.toLowerCase().includes('partnership')) {
            subject.value = 'sponsor';
        } else {
            subject.value = 'general';
        }
    }
    if (route.query.message) {
        message.value = route.query.message;
    }
});
</script>

<template>
    <!-- Hero Section -->
    <section id="contact-hero" class="relative py-60 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="FEUP Workshop" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" style="height: 60%;"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" style="height: 60%;"></div>
        </div>
        <div class="absolute bottom-16 left-12 z-10">
            <h1 class="text-white text-7xl md:text-8xl font-bold mb-3 drop-shadow-2xl">
                Contact <span class="text-green-400">Us</span>
            </h1>
            <p class="text-white text-xl md:text-lg font-medium drop-shadow-xl leading-relaxed max-w-3xl">
                We'd love to hear from you. Whether you're interested in sponsorship, joining our team, or just want to know more about our project, feel free to reach out!
            </p>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="contact-card">
                    <div class="bg-white rounded-xl shadow-xl p-8 lg:p-10">
                        <h2 class="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                        <p class="text-gray-600 mb-8">Send us a message and we'll get back to you as soon as possible</p>
                        
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="floating-label">
                                    <input v-model="name" type="text" id="name" name="name" placeholder=" " required>
                                    <label for="name">Full Name</label>
                                </div>
                                
                                <div class="floating-label">
                                    <input v-model="email" type="email" id="email" name="email" placeholder=" " required>
                                    <label for="email">Email Address</label>
                                </div>
                            </div>
                            
                            <div class="floating-label">
                                <select v-model="subject" id="subject" name="subject" required>
                                    <option value="" disabled>Select Subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="sponsor">Sponsorship Opportunity</option>
                                    <option value="team">Join Our Team</option>
                                    <option value="media">Media & Press</option>
                                </select>
                                <label for="subject">Subject</label>
                            </div>
                            
                            <div class="floating-label">
                                <textarea v-model="message" id="message" name="message" rows="5" placeholder=" " required></textarea>
                                <label for="message">Your Message</label>
                            </div>
                            
                            <div v-if="isSuccess" class="success-message show">
                                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-3"></i>
                                        <span class="text-green-700 font-medium">Thank you! Your message has been sent successfully.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" :disabled="isSubmitting" class="submit-btn w-full text-white font-bold py-4 px-8 rounded-lg text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                                <span v-if="isSubmitting" class="flex items-center justify-center">
                                    <i class="fas fa-spinner fa-spin mr-2"></i>
                                    Sending...
                                </span>
                                <span v-else class="flex items-center justify-center">
                                    <i class="fas fa-paper-plane mr-2"></i>
                                    Send Message
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                
                <!-- Contact Information -->
                <div class="contact-card space-y-6">
                    <div class="info-card">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">FEUP Racing HQ</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt text-green-500 text-lg mr-4 mt-1"></i>
                                <div>
                                    <p class="font-semibold text-gray-900">Address</p>
                                    <p class="text-gray-600">Rua Dr. Roberto Frias<br>4200-465 Porto, Portugal</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-envelope text-green-500 text-lg mr-4 mt-1"></i>
                                <div>
                                    <p class="font-semibold text-gray-900">Email</p>
                                    <p class="text-gray-600">msfeup@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Map -->
                    <div class="info-card">
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                        <div class="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.2728480084407!2d-8.598424999999999!3d41.178362299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246446d48922a3%3A0x8b1e4a0bcdacc840!2sFEUP%20-%20Faculdade%20de%20Engenharia%20da%20Universidade%20do%20Porto!5e0!3m2!1sen!2spt!4v1721088991785!5m2!1sen!2spt"
                                width="100%" 
                                height="250" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.floating-label {
    position: relative;
}

.floating-label input,
.floating-label textarea,
.floating-label select {
    width: 100%;
    padding: 1rem 0.75rem 0.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
}

.floating-label input:focus,
.floating-label textarea:focus,
.floating-label select:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.floating-label label {
    position: absolute;
    top: 1rem;
    left: 0.75rem;
    font-size: 1rem;
    color: #6b7280;
    pointer-events: none;
    transition: all 0.3s ease;
    background: white;
    padding: 0 0.25rem;
}

.floating-label input:focus + label,
.floating-label textarea:focus + label,
.floating-label select:focus + label,
.floating-label input:not(:placeholder-shown) + label,
.floating-label textarea:not(:placeholder-shown) + label,
.floating-label select:not([value=""]) + label {
    top: -0.5rem;
    font-size: 0.875rem;
    color: #22c55e;
    font-weight: 500;
}

.floating-label textarea {
    min-height: 120px;
    resize: vertical;
}

.contact-card {
    transform: translateY(20px);
    opacity: 0;
    animation: slide-in 0.6s ease-out forwards;
}

@keyframes slide-in {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.submit-btn {
    background: linear-gradient(135deg, #4ade80, #22c55e);
    transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
}

.submit-btn:active:not(:disabled) {
    transform: scale(0.98);
}

.success-message {
    transition: all 0.3s ease;
}

.map-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.info-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
</style>
