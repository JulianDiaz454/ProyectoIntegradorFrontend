// Funciones auxiliares para construir la estructura de la card
const crearFila = (label, value) => {
    const div = document.createElement('div');
    div.classList.add('task-card__row');
    div.innerHTML = `<span class="task-card__label">${label}:</span><span class="task-card__value">${value}</span>`;
    return div;
};

const crearFilaConElemento = (label, elemento) => {
    const div = document.createElement('div');
    div.classList.add('task-card__row');
    div.innerHTML = `<span class="task-card__label">${label}:</span>`;
    const valSpan = document.createElement('span');
    valSpan.classList.add('task-card__value');
    valSpan.appendChild(elemento);
    div.appendChild(valSpan);
    return div;
};

export const crearCardTarea = (tarea) => {
    const card = document.createElement('div');
    card.classList.add('card', 'task-card');
    card.dataset.id = tarea.id;
    
    // Metadatos para que el main pueda filtrar/ordenar
    card.dataset.estado = tarea.estado;
    card.dataset.titulo = tarea.titulo.toLowerCase();

    card.appendChild(crearFila('TÍTULO', tarea.titulo));
    card.appendChild(crearFila('DESCRIPCIÓN', tarea.descripcion));

    // Usamos el nombre exacto que sale en tu consola: fecha_registro
    card.appendChild(crearFila('FECHA REGISTRO', tarea.fecha_registro || 'Sin fecha'));

    const badgePrioridad = document.createElement('span');
    badgePrioridad.classList.add('priority-tag', tarea.prioridad.toLowerCase());
    badgePrioridad.textContent = tarea.prioridad.toUpperCase();
    card.appendChild(crearFilaConElemento('IMPORTANCIA', badgePrioridad));

    card.appendChild(crearFila('ESTADO', tarea.estado));

    // BOTONES
    const acciones = document.createElement('div');
    acciones.classList.add('task-card__actions'); 
    acciones.style.display = 'flex';
    acciones.style.justifyContent = 'space-between';
    acciones.style.marginTop = '15px';

    acciones.innerHTML = `
        <button class="btn btn--secondary btn-editar" data-id="${tarea.id}">Editar</button>
        <button class="btn btn--danger btn-eliminar" data-id="${tarea.id}">Eliminar</button>
    `;

    card.appendChild(acciones);
    return card;
}
