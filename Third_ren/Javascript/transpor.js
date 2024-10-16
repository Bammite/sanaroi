
    // Sélectionner l'élément <select> et le tableau
    const orderSelect = document.getElementById('order');
    const table = document.querySelector('.resultsTable tbody');
    
    // Fonction pour convertir une date au format DD/MM/YYYY en un objet Date
    function convertDate(dateStr) {
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day); // JavaScript prend les mois de 0 (janvier) à 11 (décembre)
    }

    // Fonction pour trier le tableau
    function sortTable(order) {
        // Récupérer toutes les lignes du tableau
        const rows = Array.from(table.querySelectorAll('tr.resultRow'));
        
        // Fonction de tri en fonction de l'ordre sélectionné
        rows.sort((rowA, rowB) => {
            let valueA, valueB;

            if (order === 'date') {
                // Trier par date
                valueA = convertDate(rowA.cells[1].textContent);
                valueB = convertDate(rowB.cells[1].textContent);
                return valueA - valueB; // Comparaison des objets Date
            } else if (order === 'prix') {
                // Trier par prix
                valueA = parseInt(rowA.cells[3].textContent);
                valueB = parseInt(rowB.cells[3].textContent);
                return valueA - valueB;
            } else if (order === 'compagnie') {
                // Trier par compagnie
                valueA = rowA.cells[0].textContent.toLowerCase();
                valueB = rowB.cells[0].textContent.toLowerCase();
                return valueA.localeCompare(valueB);
            }
        });

        // Réinsérer les lignes triées dans le tableau
        rows.forEach(row => table.appendChild(row));
    }

    // Ajouter un écouteur d'événement pour le changement de sélection
    orderSelect.addEventListener('change', function() {
        sortTable(this.value);
    });

    // Tri initial au chargement (par défaut par date)
    sortTable(orderSelect.value);
