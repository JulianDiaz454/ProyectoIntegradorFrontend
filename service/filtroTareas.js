/**
 * RF01 – Filtro Avanzado de Tareas
 */

/**
 * Filtra el arreglo de tareas basándose en el estado y el ID de usuario.
 * @param {Array} tareas - Lista de tareas cargadas actualmente.
 * @param {String} estado - Valor del select ('all', 'completed', 'pending').
 * @param {String} userId - Valor del input de ID.
 * @returns {Array} - Tareas que coinciden con los criterios.
 */
export function filtrarTareas(tareas, estado, userId) {
    return tareas.filter(tarea => {
        // Filtro por estado
        const matchesEstado = 
            estado === 'all' || 
            (estado === 'completed' && tarea.completed) || 
            (estado === 'pending' && !tarea.completed);
            
        // Filtro por User ID (opcional, por si se quiere buscar tareas de otros en la lista actual)
        const matchesUser = 
            !userId || 
            tarea.userId.toString() === userId.toString();

        return matchesEstado && matchesUser;
    });
}

/**
 * Inicializa los controles de filtro en el contenedor correspondiente.
 * @param {HTMLElement} contenedor - Elemento #filtrosContainer.
 * @param {Function} onFilter - Callback para renderizar las tareas filtradas.
 * @param {Function} getTareasActuales - Función que devuelve el estado maestro de tareas.
 */
export function inicializarFiltros(contenedor, onFilter, getTareasActuales) {
    
    // Esta función dibuja los inputs dentro de #filtrosContainer
    const renderizarInterfaz = () => {
        contenedor.innerHTML = `
            <div class="filtros__grupo">
                <label class="form__label">Estado</label>
                <select id="filtroEstado" class="form__input form__input--sm">
                    <option value="all">Todos</option>
                    <option value="completed">Completadas</option>
                    <option value="pending">Pendientes</option>
                </select>
            </div>
            <div class="filtros__grupo">
                <label class="form__label">Filtrar por ID Usuario</label>
                <input type="number" id="filtroUser" class="form__input form__input--sm" placeholder="Ej: 1">
            </div>
            <button id="btnLimpiarFiltros" class="btn btn--secondary btn--sm">Limpiar</button>
        `;

        const selectEstado = contenedor.querySelector('#filtroEstado');
        const inputUser = contenedor.querySelector('#filtroUser');
        const btnLimpiar = contenedor.querySelector('#btnLimpiarFiltros');

        // Función que se ejecuta cada vez que el usuario cambia un filtro
        const ejecutarFiltrado = () => {
            const fuenteDeDatos = getTareasActuales(); // Obtiene tareasActuales de main.js
            const tareasFiltradas = filtrarTareas(
                fuenteDeDatos, 
                selectEstado.value, 
                inputUser.value
            );
            onFilter(tareasFiltradas); // Llama a renderizarTareas en main.js
        };

        // Eventos en tiempo real
        selectEstado.addEventListener('change', ejecutarFiltrado);
        inputUser.addEventListener('input', ejecutarFiltrado);
        
        // Botón limpiar
        btnLimpiar.addEventListener('click', () => {
            selectEstado.value = 'all';
            inputUser.value = '';
            onFilter(getTareasActuales());
        });
    };

    const chequearYActivar = () => {
        if (contenedor.querySelector('.filtros__placeholder')) {
            renderizarInterfaz();
        }
    };

    // Retornamos la función de activación para que main.js pueda usarla
    return { chequearYActivar };
}