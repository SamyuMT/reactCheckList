function CreateTodoButton() {
    const handleClick = () => {
      console.log('Botón de crear tarea clickeado');
    };
  
    return (
      <button onClick={handleClick}>
        Crear Tarea
      </button>
    );
  }
  
  export {CreateTodoButton} 