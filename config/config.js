export const api_url = "http://localhost:3001";

export const reglas_documento = {
    userDoc: { required: true, mensaje: "El documento no puede estar vacío", typeof: "text" },
};

export const reglas_tarea = {
    taskTitle: {
        required: true,
        mensaje: "El título es obligatorio",
        minLength: 3,
        mensajeMinLength: "El título debe tener al menos 3 caracteres",
        maxLength: 100,
        mensajeMaxLength: "El título no puede superar los 100 caracteres"
    },
    taskDesc: {
        required: true,
        mensaje: "La descripción es obligatoria",
        minLength: 5,
        mensajeMinLength: "La descripción debe tener al menos 5 caracteres",
        maxLength: 500,
        mensajeMaxLength: "La descripción no puede superar los 500 caracteres"
    },
    taskStatus: {
        required: true,
        mensaje: "Debes seleccionar un estado"
    },
    taskPriority: {
        required: true,
        mensaje: "Debes seleccionar una importancia"
    }
};
