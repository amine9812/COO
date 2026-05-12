const STORAGE_KEYS = {
  reservations: "hotelDemoReservations",
  notifications: "hotelDemoNotifications",
  reviews: "hotelDemoReviews",
  loyalty: "hotelDemoLoyalty"
};

const demoUser = {
  id: 1,
  nom: "El Amrani",
  prenom: "Amina",
  email: "amina.client@example.com",
  telephone: "+212 600 123 456",
  role: "CLIENT",
  actif: true
};

const hotels = [
  {
    id: 1,
    nom: "Atlas Green Hotel",
    description: "Hotel moderne proche du centre, ideal pour les sejours touristiques et professionnels.",
    etoiles: 5,
    adresse: "Avenue Mohammed VI",
    ville: "Marrakech",
    pays: "Maroc",
    noteMoyenne: 9.1
  },
  {
    id: 2,
    nom: "Riad Palmier Blanc",
    description: "Maison d'hotes elegante avec patios calmes, petit-dejeuner inclus et service personnalise.",
    etoiles: 4,
    adresse: "Quartier Medina",
    ville: "Fes",
    pays: "Maroc",
    noteMoyenne: 8.7
  },
  {
    id: 3,
    nom: "Ocean Business Hotel",
    description: "Hotel urbain avec chambres confortables, salles de reunion et acces rapide a la corniche.",
    etoiles: 4,
    adresse: "Boulevard de la Corniche",
    ville: "Casablanca",
    pays: "Maroc",
    noteMoyenne: 8.4
  },
  {
    id: 4,
    nom: "Green Valley Suites",
    description: "Suites familiales avec espace detente, restaurant et vue sur les jardins.",
    etoiles: 3,
    adresse: "Route de l'Ourika",
    ville: "Marrakech",
    pays: "Maroc",
    noteMoyenne: 8.0
  }
];

const rooms = [
  { id: 101, hotel_id: 1, type: "Chambre Double", capacite: 2, prix: 820, description: "Lit double, bureau, douche italienne.", disponibilite: true },
  { id: 102, hotel_id: 1, type: "Suite Junior", capacite: 3, prix: 1280, description: "Salon prive, balcon, vue jardin.", disponibilite: true },
  { id: 103, hotel_id: 1, type: "Chambre Familiale", capacite: 4, prix: 1500, description: "Deux espaces de couchage, ideale famille.", disponibilite: false },
  { id: 201, hotel_id: 2, type: "Chambre Patio", capacite: 2, prix: 620, description: "Ambiance riad, petit-dejeuner inclus.", disponibilite: true },
  { id: 202, hotel_id: 2, type: "Suite Medina", capacite: 3, prix: 900, description: "Suite traditionnelle avec coin salon.", disponibilite: true },
  { id: 301, hotel_id: 3, type: "Business Standard", capacite: 2, prix: 760, description: "Bureau ergonomique et connexion rapide.", disponibilite: true },
  { id: 302, hotel_id: 3, type: "Business Premium", capacite: 2, prix: 980, description: "Etage calme, services affaires inclus.", disponibilite: true },
  { id: 303, hotel_id: 3, type: "Suite Executive", capacite: 3, prix: 1400, description: "Salon, grande salle de bain, vue ville.", disponibilite: false },
  { id: 401, hotel_id: 4, type: "Studio Jardin", capacite: 2, prix: 520, description: "Studio simple avec terrasse.", disponibilite: true },
  { id: 402, hotel_id: 4, type: "Suite Famille", capacite: 5, prix: 940, description: "Deux chambres et espace repas.", disponibilite: true }
];

const availabilities = [
  { id: 1, room_id: 101, date: "2026-05-20", statut: "Disponible", prixSpecial: 780 },
  { id: 2, room_id: 102, date: "2026-05-20", statut: "Disponible", prixSpecial: null },
  { id: 3, room_id: 103, date: "2026-05-20", statut: "Indisponible", prixSpecial: null },
  { id: 4, room_id: 201, date: "2026-05-20", statut: "Disponible", prixSpecial: 590 },
  { id: 5, room_id: 202, date: "2026-05-20", statut: "Disponible", prixSpecial: null },
  { id: 6, room_id: 301, date: "2026-05-20", statut: "Disponible", prixSpecial: null },
  { id: 7, room_id: 302, date: "2026-05-20", statut: "Disponible", prixSpecial: 930 },
  { id: 8, room_id: 303, date: "2026-05-20", statut: "Indisponible", prixSpecial: null },
  { id: 9, room_id: 401, date: "2026-05-20", statut: "Disponible", prixSpecial: null },
  { id: 10, room_id: 402, date: "2026-05-20", statut: "Disponible", prixSpecial: 890 }
];

const initialReviews = [
  { id: 1, user_id: 1, hotel_id: 1, booking_id: 9001, note: 5, commentaire: "Service rapide et chambre tres propre.", dateCreation: "2026-04-18" },
  { id: 2, user_id: 1, hotel_id: 2, booking_id: 9002, note: 4, commentaire: "Bon accueil et emplacement agreable.", dateCreation: "2026-04-21" },
  { id: 3, user_id: 1, hotel_id: 3, booking_id: 9003, note: 4, commentaire: "Pratique pour un deplacement professionnel.", dateCreation: "2026-05-02" }
];

const initialNotifications = [
  { id: 1, user_id: 1, message: "Bienvenue dans votre espace client demo.", statut: "Lu", dateEnvoi: "2026-05-12" },
  { id: 2, user_id: 1, message: "Votre reservation precedente est disponible dans le tableau de bord.", statut: "Non lu", dateEnvoi: "2026-05-12" }
];

const initialReservations = [
  {
    id: 9001,
    user_id: 1,
    hotel_id: 1,
    room_id: 101,
    dateArrivee: "2026-05-18",
    dateDepart: "2026-05-20",
    nombreAdultes: 2,
    nombreEnfants: 0,
    statut: "Confirmee",
    prixTotal: 1640
  }
];

const initialLoyalty = {
  id: 1,
  user_id: 1,
  points: 240,
  niveau: "Argent"
};

let appState = {
  connected: false,
  search: {
    destination: "Marrakech",
    checkin: "",
    checkout: "",
    adults: 2,
    children: 0
  },
  filters: {
    city: "",
    stars: 0,
    rating: 0
  },
  selectedHotelId: null,
  selectedRoomId: null,
  pendingBooking: null,
  lastConfirmedBookingId: null,
  reservations: loadData(STORAGE_KEYS.reservations, initialReservations),
  notifications: loadData(STORAGE_KEYS.notifications, initialNotifications),
  reviews: loadData(STORAGE_KEYS.reviews, initialReviews),
  loyalty: loadData(STORAGE_KEYS.loyalty, initialLoyalty)
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setDefaultDates();
  populateCityFilter();
  bindEvents();
  renderAll();
});

function cacheElements() {
  Object.assign(elements, {
    connectedUser: document.getElementById("connectedUser"),
    notificationCount: document.getElementById("notificationCount"),
    loginShortcutBtn: document.getElementById("loginShortcutBtn"),
    loginForm: document.getElementById("loginForm"),
    loginMessage: document.getElementById("loginMessage"),
    searchForm: document.getElementById("searchForm"),
    destinationInput: document.getElementById("destinationInput"),
    checkinInput: document.getElementById("checkinInput"),
    checkoutInput: document.getElementById("checkoutInput"),
    adultsInput: document.getElementById("adultsInput"),
    childrenInput: document.getElementById("childrenInput"),
    cityFilter: document.getElementById("cityFilter"),
    starsFilter: document.getElementById("starsFilter"),
    ratingFilter: document.getElementById("ratingFilter"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    resultsMeta: document.getElementById("resultsMeta"),
    hotelCards: document.getElementById("hotelCards"),
    details: document.getElementById("details"),
    hotelDetails: document.getElementById("hotelDetails"),
    booking: document.getElementById("booking"),
    bookingSummary: document.getElementById("bookingSummary"),
    payment: document.getElementById("payment"),
    paymentForm: document.getElementById("paymentForm"),
    paymentMessage: document.getElementById("paymentMessage"),
    confirmation: document.getElementById("confirmation"),
    confirmationCard: document.getElementById("confirmationCard"),
    dashboard: document.getElementById("dashboard"),
    clientProfile: document.getElementById("clientProfile"),
    loyaltyCard: document.getElementById("loyaltyCard"),
    reservationsList: document.getElementById("reservationsList"),
    notificationsPanel: document.getElementById("notificationsPanel"),
    notificationsList: document.getElementById("notificationsList"),
    openNotificationsBtn: document.getElementById("openNotificationsBtn"),
    closeNotificationsBtn: document.getElementById("closeNotificationsBtn"),
    clearDemoBtn: document.getElementById("clearDemoBtn")
  });
}

function setDefaultDates() {
  const today = new Date();
  const checkin = addDays(today, 8);
  const checkout = addDays(today, 10);
  appState.search.checkin = toInputDate(checkin);
  appState.search.checkout = toInputDate(checkout);
  elements.checkinInput.value = appState.search.checkin;
  elements.checkoutInput.value = appState.search.checkout;
}

function populateCityFilter() {
  const cities = [...new Set(hotels.map((hotel) => hotel.ville))].sort();
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    elements.cityFilter.appendChild(option);
  });
}

function bindEvents() {
  elements.loginShortcutBtn.addEventListener("click", () => {
    document.getElementById("login").scrollIntoView({ behavior: "smooth" });
  });

  elements.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    appState.connected = true;
    elements.loginMessage.textContent = `Connecte: ${demoUser.prenom} ${demoUser.nom}`;
    addNotification("Connexion effectuee avec le compte client demo.", "Non lu");
    renderAll();
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  });

  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    appState.search = {
      destination: elements.destinationInput.value.trim(),
      checkin: elements.checkinInput.value,
      checkout: elements.checkoutInput.value,
      adults: Number(elements.adultsInput.value) || 1,
      children: Number(elements.childrenInput.value) || 0
    };
    appState.filters.city = "";
    elements.cityFilter.value = "";
    renderHotels();
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  });

  elements.cityFilter.addEventListener("change", () => {
    appState.filters.city = elements.cityFilter.value;
    renderHotels();
  });

  elements.starsFilter.addEventListener("change", () => {
    appState.filters.stars = Number(elements.starsFilter.value);
    renderHotels();
  });

  elements.ratingFilter.addEventListener("change", () => {
    appState.filters.rating = Number(elements.ratingFilter.value);
    renderHotels();
  });

  elements.resetFiltersBtn.addEventListener("click", () => {
    appState.filters = { city: "", stars: 0, rating: 0 };
    elements.cityFilter.value = "";
    elements.starsFilter.value = "0";
    elements.ratingFilter.value = "0";
    renderHotels();
  });

  elements.paymentForm.addEventListener("submit", handlePayment);

  elements.openNotificationsBtn.addEventListener("click", () => {
    elements.notificationsPanel.classList.remove("hidden-panel");
    renderNotifications();
    elements.notificationsPanel.scrollIntoView({ behavior: "smooth" });
  });

  elements.closeNotificationsBtn.addEventListener("click", () => {
    elements.notificationsPanel.classList.add("hidden-panel");
  });

  elements.clearDemoBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.reservations);
    localStorage.removeItem(STORAGE_KEYS.notifications);
    localStorage.removeItem(STORAGE_KEYS.reviews);
    localStorage.removeItem(STORAGE_KEYS.loyalty);
    appState.reservations = cloneData(initialReservations);
    appState.notifications = cloneData(initialNotifications);
    appState.reviews = cloneData(initialReviews);
    appState.loyalty = cloneData(initialLoyalty);
    appState.lastConfirmedBookingId = null;
    appState.pendingBooking = null;
    renderAll();
  });
}

function renderAll() {
  renderUserState();
  renderHotels();
  renderDashboard();
  renderNotifications();
}

function renderUserState() {
  elements.connectedUser.textContent = appState.connected
    ? `${demoUser.prenom} ${demoUser.nom}`
    : "Non connecte";
  const unread = appState.notifications.filter((item) => item.statut === "Non lu").length;
  elements.notificationCount.textContent = unread;
}

function renderHotels() {
  const filtered = getFilteredHotels();
  elements.resultsMeta.textContent = `${filtered.length} hotel(s) trouve(s) pour votre recherche.`;

  if (!filtered.length) {
    elements.hotelCards.innerHTML = `<div class="empty-state">Aucun hotel ne correspond aux criteres.</div>`;
    return;
  }

  elements.hotelCards.innerHTML = filtered.map((hotel) => {
    const price = getStartingPrice(hotel.id);
    return `
      <article class="hotel-card">
        <div class="hotel-visual" aria-hidden="true"></div>
        <div class="hotel-card-body">
          <div class="hotel-title-row">
            <div>
              <h3>${hotel.nom}</h3>
              <p class="muted-text">${hotel.ville}, ${hotel.pays}</p>
            </div>
            <span class="tag">${hotel.noteMoyenne}/10</span>
          </div>
          <div class="hotel-meta">
            <span class="tag">${renderStars(hotel.etoiles)}</span>
            <span class="tag">A partir de ${formatMoney(price)}</span>
          </div>
          <p>${hotel.description}</p>
          <button class="primary-button" type="button" data-action="details" data-hotel-id="${hotel.id}">Voir details</button>
        </div>
      </article>
    `;
  }).join("");

  elements.hotelCards.querySelectorAll("[data-action='details']").forEach((button) => {
    button.addEventListener("click", () => showHotelDetails(Number(button.dataset.hotelId)));
  });
}

function getFilteredHotels() {
  const query = appState.search.destination.toLowerCase();
  return hotels.filter((hotel) => {
    const matchesSearch = !query
      || hotel.ville.toLowerCase().includes(query)
      || hotel.nom.toLowerCase().includes(query)
      || hotel.pays.toLowerCase().includes(query);
    const matchesCity = !appState.filters.city || hotel.ville === appState.filters.city;
    const matchesStars = hotel.etoiles >= appState.filters.stars;
    const matchesRating = hotel.noteMoyenne >= appState.filters.rating;
    return matchesSearch && matchesCity && matchesStars && matchesRating;
  });
}

function showHotelDetails(hotelId) {
  appState.selectedHotelId = hotelId;
  const hotel = getHotel(hotelId);
  const hotelRooms = rooms.filter((room) => room.hotel_id === hotelId);
  const hotelReviews = appState.reviews.filter((review) => review.hotel_id === hotelId);

  elements.details.classList.remove("hidden-panel");
  elements.hotelDetails.innerHTML = `
    <div class="details-hero">
      <div>
        <p class="eyebrow">Details hotel</p>
        <h2>${hotel.nom}</h2>
        <p class="muted-text">${hotel.adresse}, ${hotel.ville}, ${hotel.pays}</p>
        <div class="tag-row">
          <span class="tag">${renderStars(hotel.etoiles)}</span>
          <span class="tag">Note moyenne ${hotel.noteMoyenne}/10</span>
        </div>
        <p>${hotel.description}</p>
      </div>
      <div class="details-visual" aria-hidden="true"></div>
    </div>

    <h3>Chambres disponibles</h3>
    <div class="room-list">
      ${hotelRooms.map(renderRoomCard).join("")}
    </div>

    <h3>Avis clients</h3>
    <div class="review-list">
      ${hotelReviews.length ? hotelReviews.map(renderReviewCard).join("") : `<div class="empty-state">Aucun avis pour cet hotel.</div>`}
    </div>
  `;

  elements.hotelDetails.querySelectorAll("[data-action='reserve']").forEach((button) => {
    button.addEventListener("click", () => startReservation(Number(button.dataset.roomId)));
  });

  elements.details.scrollIntoView({ behavior: "smooth" });
}

function renderRoomCard(room) {
  const availability = getAvailability(room.id);
  const available = room.disponibilite && availability.statut === "Disponible";
  const displayPrice = availability.prixSpecial || room.prix;
  return `
    <article class="room-card">
      <div class="room-title-row">
        <div>
          <h3>${room.type}</h3>
          <p class="muted-text">${room.description}</p>
        </div>
        <span class="status-pill ${available ? "" : "cancelled"}">${available ? "Disponible" : "Indisponible"}</span>
      </div>
      <div class="stats-row">
        <span class="tag">Capacite ${room.capacite}</span>
        <span class="tag">Date controlee ${availability.date}</span>
        <span class="price-text">${formatMoney(displayPrice)} / nuit</span>
      </div>
      <button class="primary-button" type="button" data-action="reserve" data-room-id="${room.id}" ${available ? "" : "disabled"}>
        Reserver
      </button>
    </article>
  `;
}

function renderReviewCard(review) {
  return `
    <article class="review-card">
      <div class="hotel-title-row">
        <strong>${renderStars(review.note)}</strong>
        <span class="muted-text">${formatDate(review.dateCreation)}</span>
      </div>
      <p>${review.commentaire}</p>
    </article>
  `;
}

function startReservation(roomId) {
  if (!appState.connected) {
    appState.connected = true;
    addNotification("Connexion automatique au compte client demo pour poursuivre la reservation.", "Non lu");
  }

  const room = getRoom(roomId);
  const hotel = getHotel(room.hotel_id);
  const nights = calculateNights(appState.search.checkin, appState.search.checkout);
  const availability = getAvailability(room.id);
  const nightlyPrice = availability.prixSpecial || room.prix;

  appState.selectedRoomId = roomId;
  appState.pendingBooking = {
    id: Date.now(),
    user_id: demoUser.id,
    hotel_id: hotel.id,
    room_id: room.id,
    dateArrivee: appState.search.checkin,
    dateDepart: appState.search.checkout,
    nombreAdultes: appState.search.adults,
    nombreEnfants: appState.search.children,
    statut: "En attente paiement",
    prixTotal: nightlyPrice * nights
  };

  renderUserState();
  renderBookingSummary();
  elements.booking.classList.remove("hidden-panel");
  elements.payment.classList.add("hidden-panel");
  elements.confirmation.classList.add("hidden-panel");
  elements.booking.scrollIntoView({ behavior: "smooth" });
}

function renderBookingSummary() {
  const booking = appState.pendingBooking;
  const hotel = getHotel(booking.hotel_id);
  const room = getRoom(booking.room_id);
  const nights = calculateNights(booking.dateArrivee, booking.dateDepart);

  elements.bookingSummary.innerHTML = `
    <article class="summary-card">
      <h3>${hotel.nom}</h3>
      <p class="muted-text">${hotel.ville}, ${hotel.pays}</p>
      <div class="summary-line"><span>Chambre</span><strong>${room.type}</strong></div>
      <div class="summary-line"><span>Arrivee</span><strong>${formatDate(booking.dateArrivee)}</strong></div>
      <div class="summary-line"><span>Depart</span><strong>${formatDate(booking.dateDepart)}</strong></div>
      <div class="summary-line"><span>Personnes</span><strong>${booking.nombreAdultes} adulte(s), ${booking.nombreEnfants} enfant(s)</strong></div>
      <div class="summary-line"><span>Nuits</span><strong>${nights}</strong></div>
      <div class="summary-line"><span>Total</span><strong>${formatMoney(booking.prixTotal)}</strong></div>
    </article>
    <article class="summary-card">
      <h3>Controle de disponibilite</h3>
      <p>La chambre selectionnee est disponible pour la date de demonstration.</p>
      <p class="muted-text">Statut actuel: ${booking.statut}</p>
      <button class="primary-button full-button" type="button" id="confirmBookingBtn">Confirmer la reservation</button>
    </article>
  `;

  document.getElementById("confirmBookingBtn").addEventListener("click", () => {
    elements.payment.classList.remove("hidden-panel");
    elements.paymentMessage.textContent = "";
    elements.payment.scrollIntoView({ behavior: "smooth" });
  });
}

function handlePayment(event) {
  event.preventDefault();
  if (!appState.pendingBooking) {
    elements.paymentMessage.textContent = "Aucune reservation en attente.";
    return;
  }

  const formData = new FormData(elements.paymentForm);
  const method = formData.get("paymentMethod");
  const result = formData.get("paymentResult");

  if (result === "refused") {
    elements.paymentMessage.textContent = "Paiement refusé, veuillez réessayer.";
    addNotification("Votre paiement a été refusé. Veuillez réessayer.", "Non lu");
    renderAll();
    return;
  }

  const confirmedBooking = {
    ...appState.pendingBooking,
    statut: "Confirmee"
  };
  const payment = {
    id: Date.now() + 1,
    booking_id: confirmedBooking.id,
    montant: confirmedBooking.prixTotal,
    methode: method,
    statut: "Accepte",
    datePaiement: toInputDate(new Date())
  };

  appState.reservations = [confirmedBooking, ...appState.reservations];
  appState.lastConfirmedBookingId = confirmedBooking.id;
  appState.pendingBooking = null;
  appState.loyalty.points += Math.round(confirmedBooking.prixTotal / 20);
  appState.loyalty.niveau = getLoyaltyLevel(appState.loyalty.points);

  saveData(STORAGE_KEYS.reservations, appState.reservations);
  saveData(STORAGE_KEYS.loyalty, appState.loyalty);
  addNotification("Votre paiement a ete accepte.", "Non lu");
  addNotification("Votre reservation a ete confirmee.", "Non lu");

  elements.paymentMessage.textContent = "";
  renderConfirmation(confirmedBooking, payment);
  renderAll();
  elements.confirmation.classList.remove("hidden-panel");
  elements.confirmation.scrollIntoView({ behavior: "smooth" });
}

function renderConfirmation(booking, payment) {
  const hotel = getHotel(booking.hotel_id);
  const room = getRoom(booking.room_id);
  elements.confirmationCard.innerHTML = `
    <p class="eyebrow">Confirmation</p>
    <h2>Reservation confirmee</h2>
    <p>Numero de reservation: <strong>RES-${booking.id}</strong></p>
    <p>Paiement accepte par <strong>${payment.methode}</strong> pour un montant de <strong>${formatMoney(payment.montant)}</strong>.</p>
    <p>Une notification de confirmation a ete envoyee au client.</p>
    <div class="summary-line"><span>Hotel</span><strong>${hotel.nom}</strong></div>
    <div class="summary-line"><span>Chambre</span><strong>${room.type}</strong></div>
    <button class="primary-button" type="button" id="goDashboardBtn">Voir dans l'espace client</button>
  `;

  document.getElementById("goDashboardBtn").addEventListener("click", () => {
    elements.dashboard.scrollIntoView({ behavior: "smooth" });
  });
}

function renderDashboard() {
  renderProfile();
  renderLoyalty();
  renderReservations();
}

function renderProfile() {
  elements.clientProfile.innerHTML = `
    <p class="eyebrow">Utilisateur</p>
    <h3>${demoUser.prenom} ${demoUser.nom}</h3>
    <p><strong>Email:</strong> ${demoUser.email}</p>
    <p><strong>Telephone:</strong> ${demoUser.telephone}</p>
    <p><strong>Role:</strong> ${demoUser.role}</p>
    <p><strong>Actif:</strong> ${demoUser.actif ? "Oui" : "Non"}</p>
  `;
}

function renderLoyalty() {
  const progress = Math.min(100, appState.loyalty.points % 500 / 5);
  elements.loyaltyCard.innerHTML = `
    <p class="eyebrow">CompteFidélité</p>
    <h3>${appState.loyalty.points} points - Niveau ${appState.loyalty.niveau}</h3>
    <div class="progress-bar" aria-label="Progression fidelite"><span style="width: ${progress}%"></span></div>
    <p class="muted-text">Les points augmentent apres chaque paiement accepte.</p>
  `;
}

function renderReservations() {
  if (!appState.reservations.length) {
    elements.reservationsList.innerHTML = `<div class="empty-state">Aucune reservation pour le moment.</div>`;
    return;
  }

  elements.reservationsList.innerHTML = appState.reservations.map((reservation) => {
    const hotel = getHotel(reservation.hotel_id);
    const room = getRoom(reservation.room_id);
    const canReview = reservation.statut === "Confirmee" || reservation.statut === "Check-out effectue";
    return `
      <article class="reservation-card">
        <div class="reservation-title-row">
          <div>
            <h3>${hotel.nom}</h3>
            <p class="muted-text">${room.type} - ${formatDate(reservation.dateArrivee)} au ${formatDate(reservation.dateDepart)}</p>
          </div>
          <span class="status-pill ${reservation.statut === "Annulee" ? "cancelled" : ""}">${reservation.statut}</span>
        </div>
        <div class="stats-row">
          <span class="tag">${reservation.nombreAdultes} adulte(s)</span>
          <span class="tag">${reservation.nombreEnfants} enfant(s)</span>
          <span class="price-text">${formatMoney(reservation.prixTotal)}</span>
        </div>
        <div class="reservation-actions">
          <button class="ghost-button" type="button" data-action="checkin" data-booking-id="${reservation.id}" ${reservation.statut === "Confirmee" ? "" : "disabled"}>Check-in</button>
          <button class="ghost-button" type="button" data-action="checkout" data-booking-id="${reservation.id}" ${reservation.statut === "Check-in effectue" ? "" : "disabled"}>Check-out</button>
          <button class="danger-button" type="button" data-action="cancel" data-booking-id="${reservation.id}" ${reservation.statut === "Annulee" ? "disabled" : ""}>Annuler</button>
        </div>
        ${canReview ? renderReviewForm(reservation) : ""}
      </article>
    `;
  }).join("");

  elements.reservationsList.querySelectorAll("[data-action]").forEach((button) => {
    const bookingId = Number(button.dataset.bookingId);
    if (button.dataset.action === "checkin") {
      button.addEventListener("click", () => updateReservationStatus(bookingId, "Check-in effectue", "Check-in effectue pour votre reservation."));
    }
    if (button.dataset.action === "checkout") {
      button.addEventListener("click", () => updateReservationStatus(bookingId, "Check-out effectue", "Check-out effectue. Vous pouvez laisser un avis."));
    }
    if (button.dataset.action === "cancel") {
      button.addEventListener("click", () => updateReservationStatus(bookingId, "Annulee", "Votre reservation a ete annulee."));
    }
  });

  elements.reservationsList.querySelectorAll("[data-review-form]").forEach((form) => {
    form.addEventListener("submit", handleReviewSubmit);
  });
}

function renderReviewForm(reservation) {
  const alreadyReviewed = appState.reviews.some((review) => review.booking_id === reservation.id);
  if (alreadyReviewed) {
    return `<p class="status-line">Avis deja ajoute pour cette reservation.</p>`;
  }

  return `
    <form class="review-form" data-review-form data-booking-id="${reservation.id}">
      <select name="rating" aria-label="Note">
        <option value="5">5/5</option>
        <option value="4">4/5</option>
        <option value="3">3/5</option>
        <option value="2">2/5</option>
        <option value="1">1/5</option>
      </select>
      <textarea name="comment" placeholder="Votre commentaire" required></textarea>
      <button class="primary-button" type="submit">Ajouter un avis</button>
    </form>
  `;
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const bookingId = Number(form.dataset.bookingId);
  const reservation = appState.reservations.find((item) => item.id === bookingId);
  const formData = new FormData(form);
  const review = {
    id: Date.now(),
    user_id: demoUser.id,
    hotel_id: reservation.hotel_id,
    booking_id: reservation.id,
    note: Number(formData.get("rating")),
    commentaire: formData.get("comment").trim(),
    dateCreation: toInputDate(new Date())
  };

  appState.reviews = [review, ...appState.reviews];
  saveData(STORAGE_KEYS.reviews, appState.reviews);
  addNotification("Votre avis a ete publie sur la fiche hotel.", "Non lu");
  renderAll();

  if (appState.selectedHotelId === reservation.hotel_id) {
    showHotelDetails(reservation.hotel_id);
  }
}

function updateReservationStatus(bookingId, status, message) {
  appState.reservations = appState.reservations.map((reservation) => {
    if (reservation.id !== bookingId) {
      return reservation;
    }
    return { ...reservation, statut: status };
  });
  saveData(STORAGE_KEYS.reservations, appState.reservations);
  addNotification(message, "Non lu");
  renderAll();
}

function renderNotifications() {
  elements.notificationsList.innerHTML = appState.notifications.length
    ? appState.notifications.map((notification) => `
      <article class="notification-card">
        <div class="hotel-title-row">
          <strong>${notification.message}</strong>
          <span class="status-pill ${notification.statut === "Lu" ? "cancelled" : ""}">${notification.statut}</span>
        </div>
        <p class="muted-text">${formatDate(notification.dateEnvoi)}</p>
      </article>
    `).join("")
    : `<div class="empty-state">Aucune notification.</div>`;
}

function addNotification(message, statut) {
  appState.notifications = [
    {
      id: Date.now(),
      user_id: demoUser.id,
      message,
      statut,
      dateEnvoi: toInputDate(new Date())
    },
    ...appState.notifications
  ];
  saveData(STORAGE_KEYS.notifications, appState.notifications);
}

function getStartingPrice(hotelId) {
  return Math.min(...rooms.filter((room) => room.hotel_id === hotelId).map((room) => room.prix));
}

function getHotel(id) {
  return hotels.find((hotel) => hotel.id === id);
}

function getRoom(id) {
  return rooms.find((room) => room.id === id);
}

function getAvailability(roomId) {
  return availabilities.find((availability) => availability.room_id === roomId)
    || { id: 0, room_id: roomId, date: appState.search.checkin, statut: "Disponible", prixSpecial: null };
}

function calculateNights(checkin, checkout) {
  const start = new Date(checkin);
  const end = new Date(checkout);
  const diff = Math.round((end - start) / 86400000);
  return Math.max(1, diff || 1);
}

function renderStars(count) {
  return "Etoiles: " + "★".repeat(count);
}

function formatMoney(amount) {
  return `${Number(amount).toLocaleString("fr-FR")} MAD`;
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("fr-FR");
}

function toInputDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getLoyaltyLevel(points) {
  if (points >= 1000) return "Or";
  if (points >= 300) return "Argent";
  return "Bronze";
}

function loadData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : cloneData(fallback);
  } catch (error) {
    return cloneData(fallback);
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}
