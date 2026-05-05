document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('corpForm');
    const phoneInput = document.getElementById('phone');
    const modal = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeModal');
    const submitBtn = document.getElementById('submitBtn');
    const passwordInput = document.getElementById('company_key');
    const togglePassword = document.getElementById('togglePassword');

    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🔒';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.textContent = "Procesando...";

        setTimeout(() => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            submitBtn.disabled = false;
            submitBtn.textContent = "Enviar ahora";
            form.reset();
        }, 1500);
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
});