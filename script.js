const clinics = [
    { id: 1, name: "Clinica CardioVita", specialty: "cardiologie", price: 200, distance: 5, rating: 4.5, insurance: true },
    { id: 2, name: "DermaPlus", specialty: "dermatologie", price: 150, distance: 3, rating: 4.0, insurance: false },
    { id: 3, name: "PediaCare", specialty: "pediatrie", price: 180, distance: 7, rating: 3.8, insurance: true },
  ];

  
  function renderClinics(filteredClinics) {
    const clinicsList = document.getElementById('clinicsList');
    clinicsList.innerHTML = '';
    filteredClinics.forEach(clinic => {
      const clinicCard = `
        <div class="clinic-card bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-2">${clinic.name}</h3>
          <p class="mb-2"><strong>Specialitate:</strong> ${clinic.specialty}</p>
          <p class="mb-2"><strong>Preț:</strong> ${clinic.price} RON</p>
          <p class="mb-2"><strong>Distanță:</strong> ${clinic.distance} km</p>
          <p class="mb-2"><strong>Rating:</strong> ${clinic.rating} ⭐</p>
          <p class="mb-4"><strong>Asigurare:</strong> ${clinic.insurance ? 'Da' : 'Nu'}</p>
          <button class="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700" onclick="scheduleAppointment(${clinic.id})">Programează</button>
        </div>
      `;
      clinicsList.innerHTML += clinicCard;
    });
  }


  renderClinics(clinics);

  
  document.getElementById('applyFilters').addEventListener('click', () => {
    const specialty = document.getElementById('specialtyFilter').value;
    const price = parseInt(document.getElementById('priceFilter').value) || Infinity;
    const distance = parseInt(document.getElementById('distanceFilter').value) || Infinity;
    const rating = parseFloat(document.getElementById('ratingFilter').value) || 0;

    const filteredClinics = clinics.filter(clinic => {
      return (!specialty || clinic.specialty === specialty) &&
             clinic.price <= price &&
             clinic.distance <= distance &&
             clinic.rating >= rating;
    });

    renderClinics(filteredClinics);
  });

  function scheduleAppointment(clinicId) {
    alert(`Programare inițiată pentru clinica cu ID: ${clinicId}. Vei fi redirecționat către calendar.`);
    // Aici ar fi integrarea cu un calendar real
  }