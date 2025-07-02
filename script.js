document.addEventListener('DOMContentLoaded', function () {

    // Lógica para animar elementos ao aparecerem na tela (efeito reveal)
    const revealElements = document.querySelectorAll('.reveal');

    // Verifica se existem elementos para animar
    if (revealElements.length > 0) {
        // Cria um "observador" que vai verificar quando os elementos entram na tela
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Se o elemento está visível (intersecting)
                if (entry.isIntersecting) {
                    // Adiciona a classe 'visible' para ativar a animação do CSS
                    entry.target.classList.add('visible');
                    
                    // Opcional: para de observar o elemento depois que ele já apareceu uma vez
                    // Isso evita que a animação se repita se o usuário rolar para cima e para baixo
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            // A animação começa quando pelo menos 10% do elemento está visível
            threshold: 0.1 
        });

        // Pede ao observador para "observar" cada um dos elementos com a classe .reveal
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
