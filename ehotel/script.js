$(document).ready(function() {
    $('h1').addClass('animate__animated animate__fadeIn');
  });

    $(document).ready(function() {
      $('#blur-bg').addClass('active');
    });
    $(document).ready(function() {
      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      });
    });
    $(document).ready(function() {
      $('.menu-toggle').on('click', function() {
        $('nav').toggleClass('active');
      });
    });
    $(document).ready(function() {
      var colors = ['#EFEFEF', '#D6D6D6', '#C2C2C2'];
      var currentIndex = 0;
      setInterval(function() {
        $('body').css('background-color', colors[currentIndex]);
        currentIndex = (currentIndex + 1) % colors.length;
      }, 5000);
    });
    $(document).ready(function() {
      $('.social-icon').hover(function() {
        $(this).addClass('animate__animated animate__pulse');
      }, function() {
        $(this).removeClass('animate__animated animate__pulse');
      });
    });
    $(document).ready(function() {
      $('.read-more-btn').hover(function() {
        $(this).addClass('animate__animated animate__bounce');
      }, function() {
        $(this).removeClass('animate__animated animate__bounce');
      });
    });
 
    
// Fonction pour récupérer les informations d'une chaîne hôtelière
function getHotelChainInfo(chainName) {
  // Simulation de récupération de données dans une base de données
  const chainInfo = {
    chainName: chainName,
    headOfficeAddress: "123 Main Street, Anytown, USA",
    numHotels: 25,
    contactEmail: "info@hotelchain.com",
    contactPhone: "555-555-5555"
  };

  return chainInfo;
}

// Fonction pour récupérer les informations d'un hôtel
function getHotelInfo(hotelName) {
  // Simulation de récupération de données dans une base de données
  const hotelInfo = {
    hotelName: hotelName,
    numRooms: 100,
    hotelAddress: "456 Oak Avenue, Anytown, USA",
    contactEmail: "info@hotel.com",
    contactPhone: "555-555-5555",
    amenities: ["TV", "air conditioning", "refrigerator"],
    roomTypes: ["single", "double"],
    starRating: 3
  };

  return hotelInfo;
}

// Fonction pour récupérer les informations d'une chambre
function getRoomInfo(roomNumber) {
  // Simulation de récupération de données dans une base de données
  const roomInfo = {
    roomNumber: roomNumber,
    price: 100,
    amenities: ["TV", "air conditioning", "refrigerator"],
    capacity: "double",
    view: "mountain",
    canAddBed: true,
    issues: []
  };

  return roomInfo;
}

// Fonction pour enregistrer une réservation de chambre pour un client
function reserveRoom(roomNumber, clientName, checkInDate, checkOutDate) {
  // Simulation de mise à jour de la base de données
  const reservationInfo = {
    roomNumber: roomNumber,
    clientName: clientName,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate
  };

  return reservationInfo;
}

// Fonction pour transformer une réservation en location de chambre
function checkInClient(roomNumber, employeeName, checkInDate) {
  // Simulation de mise à jour de la base de données
  const rentalInfo = {
    roomNumber: roomNumber,
    employeeName: employeeName,
    checkInDate: checkInDate
  };

  return rentalInfo;
}

// Fonction pour supprimer une chambre de la base de données
function deleteRoom(roomNumber) {
  // Simulation de suppression de la chambre dans la base de données
  console.log(`La chambre numéro ${roomNumber} a été supprimée.`);
}

// Fonction pour supprimer un hôtel de la base de données
function deleteHotel(hotelName) {
  // Simulation de suppression de l'hôtel dans la base de données
  console.log(`L'hôtel ${hotelName} a été supprimé.`);
}

// Fonction pour supprimer une chaîne hôtelière de la base de données
function deleteHotelChain(chainName) {
  // Simulation de suppression de la chaîne hôtelière dans la base de données
  console.log(`La chaîne hôtelière ${chainName} a été supprimée.`);
}
