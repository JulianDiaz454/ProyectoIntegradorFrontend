export const validar = (form, reglas) => {
    console.log(form);
    const errores = [];
    let valido = true;
    for (const name in reglas) {
        const campo = form.elements[name];
        const regla = reglas[name];
        const tag = campo.tagName.toLowerCase();

        let resultado;
        if (tag === "textarea") {
            resultado = validarCampoTextarea(campo, regla);
        } else if (tag === "select") {
            resultado = validarCampoSelect(campo, regla);
        } else {
            resultado = validarCampoText(campo, regla);
        }

        let { esvalido, mensaje } = resultado;
        valido = esvalido;
        if (!esvalido) {
            errores[name] = mensaje;
        }
    }
    if (Object.keys(errores).length != 0) {
        valido = false;
    }
    return { valido, errores }
}

const validarCampoText = (elemento, regla) => {
    if (regla.required && elemento.value.trim() == "") {
        return { esvalido: false, mensaje: regla.mensaje }
    }
    if (regla.minLength && elemento.value.trim().length < regla.minLength) {
        return { esvalido: false, mensaje: regla.mensajeMinLength || `Mínimo ${regla.minLength} caracteres` }
    }
    if (regla.maxLength && elemento.value.trim().length > regla.maxLength) {
        return { esvalido: false, mensaje: regla.mensajeMaxLength || `Máximo ${regla.maxLength} caracteres` }
    }
    return { esvalido: true }
}

const validarCampoTextarea = (elemento, regla) => {
    if (regla.required && elemento.value.trim() == "") {
        return { esvalido: false, mensaje: regla.mensaje }
    }
    if (regla.minLength && elemento.value.trim().length < regla.minLength) {
        return { esvalido: false, mensaje: regla.mensajeMinLength || `Mínimo ${regla.minLength} caracteres` }
    }
    if (regla.maxLength && elemento.value.trim().length > regla.maxLength) {
        return { esvalido: false, mensaje: regla.mensajeMaxLength || `Máximo ${regla.maxLength} caracteres` }
    }
    return { esvalido: true }
}

const validarCampoSelect = (elemento, regla) => {
    if (regla.required && elemento.value.trim() == "") {
        return { esvalido: false, mensaje: regla.mensaje }
    }
    return { esvalido: true }
}