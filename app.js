function resetAlbum() {
    // 1. Confirmación de seguridad
    const confirmDelete = confirm("¿Estás segura de que quieres borrar TODAS tus láminas? Esta acción no se puede deshacer.");
    
    if (confirmDelete) {
        // 2. Limpiamos el objeto en memoria
        collection = {}; 
        
        // 3. Limpiamos el localStorage
        localStorage.setItem("collection", JSON.stringify(collection));
        
        // 4. Refrescamos la vista
        renderAlbum();
        
        alert("Tu álbum ha sido reiniciado con éxito.");
    }
}