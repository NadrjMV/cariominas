document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA ANTIGA: Efeito de revelar elementos ao rolar a página ---
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    // --- NOVA LÓGICA: Funcionalidade do Modal de Incentivo Fiscal ---

    // 1. Selecionar os elementos do DOM (botões e o próprio modal)
    const openModalBtn = document.getElementById('open-modal-btn');
    const openModalFooterBtn = document.getElementById('open-modal-footer-btn');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const modalOverlay = document.getElementById('incentivo-modal');
    const body = document.body;

    // Função para abrir o modal
    function openModal(event) {
        event.preventDefault(); // Previne o comportamento padrão do link (#)
        modalOverlay.classList.add('visible');
        body.classList.add('modal-active'); // Trava o scroll do fundo
    }

    // Função para fechar o modal
    function closeModal() {
        modalOverlay.classList.remove('visible');
        body.classList.remove('modal-active'); // Libera o scroll do fundo
    }

    // 2. Adicionar os "escutadores" de eventos

    // Se os elementos existirem na página, adiciona os eventos
    if (openModalBtn && openModalFooterBtn && closeModalBtn && modalOverlay) {
        
        // Eventos para abrir o modal
        openModalBtn.addEventListener('click', openModal);
        openModalFooterBtn.addEventListener('click', openModal);

        // Evento para fechar no botão 'X'
        closeModalBtn.addEventListener('click', closeModal);

        // Evento para fechar clicando fora do modal (no overlay)
        modalOverlay.addEventListener('click', function(event) {
            // Se o alvo do clique for o próprio overlay (o fundo), fecha o modal
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        // Evento para fechar o modal com a tecla "Escape" (melhora a acessibilidade)
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modalOverlay.classList.contains('visible')) {
                closeModal();
            }
        });
    }

});
