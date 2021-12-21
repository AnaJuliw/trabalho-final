let formulario = false;

// Abre o formulário de agendamento
function mostrarFormulario() {
    if (formulario) {
        document.querySelector('.formulario').style.display = "none";
        formulario = false;
    
    } else {
        document.querySelector('.formulario').style.display = "block";
        formulario = true;
    }
}