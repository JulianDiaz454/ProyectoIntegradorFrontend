export const crearCardUsuario = (usuario) => {
    const card = document.createElement('div');
    card.classList.add('card', 'user-card');
    card.dataset.id = usuario.id;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('user-card__info');

    const detalles = document.createElement('div');
    detalles.classList.add('user-card__detalles');

    const nombre = document.createElement('p');
    nombre.classList.add('user-card__nombre');
    nombre.textContent = usuario.nombre_completo;

    const correo = document.createElement('p');
    correo.classList.add('user-card__correo');
    correo.textContent = usuario.correo;

    const idEl = document.createElement('p');
    idEl.classList.add('user-card__id');
    idEl.textContent = `ID: ${usuario.id}`;

    detalles.appendChild(nombre);
    detalles.appendChild(correo);
    detalles.appendChild(idEl);
    infoDiv.appendChild(detalles);

    const acciones = document.createElement('div');
    acciones.classList.add('user-card__acciones');

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn', 'btn--secondary', 'btn--sm', 'btn-editar-user');
    btnEditar.dataset.id = usuario.id;
    btnEditar.textContent = 'Editar';

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn--danger', 'btn--sm', 'btn-eliminar-user');
    btnEliminar.dataset.id = usuario.id;
    btnEliminar.textContent = 'Eliminar';

    acciones.appendChild(btnEditar);
    acciones.appendChild(btnEliminar);
    card.appendChild(infoDiv);
    card.appendChild(acciones);
    return card;
};