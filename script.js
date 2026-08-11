document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Modal
    const modal = document.getElementById('checkoutModal');
    const btnNav = document.getElementById('btnNavCheckout');
    const btnHero = document.getElementById('btnHeroCheckout');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Função para Abrir Modal
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Função para Fechar Modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Event Listeners para botões de abrir
    if (btnNav) btnNav.addEventListener('click', openModal);
    if (btnHero) btnHero.addEventListener('click', openModal);

    // Event Listener para fechar no 'X'
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Fechar ao clicar fora do Modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Fechar ao apertar ESC
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Smooth Scroll para Links da Navegação
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});