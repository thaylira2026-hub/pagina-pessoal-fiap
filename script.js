function toggleMenu() {
    const nav = document.querySelector('.navbar nav');
    const menuBtn = document.querySelector('.menu-toggle');
    
    if (!nav || !menuBtn) return;

    const isActive = nav.classList.toggle('active');
    menuBtn.innerHTML = isActive ? "✕" : "☰";
}

function toggleAccordion(elementoClicado) {
    const card = elementoClicado.parentElement;
    const conteudo = card.querySelector('.accordion-content');

    if (conteudo) {
        const isHidden = conteudo.style.display === "none" || conteudo.style.display === "";
        conteudo.style.display = isHidden ? "block" : "none";
    }
}

window.onscroll = function() {
    const btnTopo = document.getElementById('btn-topo');
    if (btnTopo) {
        const scrollAtivo = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
        btnTopo.style.display = scrollAtivo ? "block" : "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function fecharModal() {
    const modal = document.getElementById('modal-sucesso');
    if (modal) {
        modal.style.display = "none";
    }
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        const modal = document.getElementById('modal-sucesso');

        const clearErrors = () => {
            [nome, email, mensagem].forEach(field => field.classList.remove('input-error'));
            document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('error-visible'));
        };

        clearErrors();
        let isValid = true;


        const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
        if (nome.value.trim().length < 3 || !nomeRegex.test(nome.value.trim())) {
            nome.classList.add('input-error');
            const errorNome = document.getElementById('error-nome');
            errorNome.textContent = "Nome deve ter pelo menos 3 caracteres e conter apenas letras.";
            errorNome.classList.add('error-visible');
            isValid = false;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('input-error');
            const errorEmail = document.getElementById('error-email');
            errorEmail.textContent = "Digite um e-mail válido (exemplo@dominio.com).";
            errorEmail.classList.add('error-visible');
            isValid = false;
        }

        if (mensagem.value.trim().length < 10) {
            mensagem.classList.add('input-error');
            const errorMsg = document.getElementById('error-mensagem');
            errorMsg.textContent = "Mensagem deve ter pelo menos 10 caracteres.";
            errorMsg.classList.add('error-visible');
            isValid = false;
        }

        if (isValid) {
            console.log(" Dados validados e enviados:", {
                nome: nome.value.trim(),
                email: email.value.trim(),
                mensagem: mensagem.value.trim()
            });

            if (modal) {
                modal.style.display = "block";
            }


            this.reset();
        }
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-sucesso');
    if (event.target == modal) {
        fecharModal();
    }
};