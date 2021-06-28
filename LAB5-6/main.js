console.log("rre")
var prevserv;
var personnes=
[{nom: 'Jamal Chang', services: ['Ophtalmologie', 'Nutrition', 'Dentisterie', 'Analyses de laboratoire et parasitologie', 'Vaccination', 'Consultation', 'Neurologie', 'Imagerie médicale', 'Chirurgie'], jours: [2, 1,
5]}, {nom: 'Adriana Bartlett', services: ['Nutrition', 'Vaccination', 'Imagerie médicale', 'Neurologie'], jours: [0, 6]}, {nom: 'Heaven Koch', services: ['Vaccination', 'Neurologie', 'Analyses de laboratoire et parasitologie', 'Chirurgie', 'Consultation', 'Ophtalmologie', 'Dentisterie', 'Nutrition'], jours: [5, 2]}, {nom: 'Valentin Douglas', services: ['Ophtalmologie', 'Imagerie médicale', 'Dentisterie', 'Euthanasie', 'Vaccination'], jours: [1, 3]}, {nom: 'Darryl Stone', services: ['Dentisterie', 'Nutrition', 'Imagerie médicale', 'Euthanasie'], jours: [3, 0, 4]}, {nom: 'Philip Yang', services: ['Neurologie', 'Chirurgie', 'Nutrition', 'Dentisterie', 'Imagerie médicale', 'Euthanasie', 'Ophtalmologie', 'Vaccination', 'Analyses de laboratoire et parasitologie'], jours: [0, 5, 6, 2]}, {nom: 'Dawson Strong', services: ['Consultation', 'Chirurgie',
'Euthanasie', 'Dentisterie', 'Analyses de laboratoire et parasitologie', 'Nutrition', 'Vaccination', 'Neurologie'], jours: [5, 4, 2]}, {nom: 'Jarrett Douglas', services: ['Ophtalmologie', 'Euthanasie', 'Dentisterie', 'Consultation', 'Chirurgie'], jours: [2, 6, 5]}, {nom: 'Jesus Koch', services: ['Neurologie', 'Chirurgie', 'Nutrition', 'Dentisterie', 'Consultation', 'Euthanasie'], jours: [3, 5, 1, 2]}, {nom: 'Maia Key', services: ['Imagerie médicale', 'Analyses de laboratoire et parasitologie', 'Dentisterie', 'Neurologie', 'Consultation'], jours: [1, 5, 2]}, {nom: 'Kristopher Le', services: ['Nutrition', 'Vaccination', 'Dentisterie', 'Consultation', 'Imagerie médicale', 'Analyses de laboratoire et parasitologie', 'Ophtalmologie', 'Chirurgie', 'Euthanasie'], jours: [5, 0, 1, 6]}, {nom: 'Katelynn Tyler', services: ['Neurologie', 'Euthanasie', 'Vaccination', 'Ophtalmologie', 'Consultation', 'Nutrition', 'Dentisterie', 'Chirurgie', 'Imagerie médicale'], jours: [6, 0, 4]}, {nom: 'Judith Hardy', services: ['Ophtalmologie', 'Consultation', 'Imagerie médicale', 'Euthanasie', 'Vaccination', 'Neurologie'], jours: [3, 1, 6]}, {nom: 'Blake Holden', services: ['Ophtalmologie', 'Consultation', 'Imagerie médicale', 'Analyses de laboratoire et parasitologie', 'Euthanasie', 'Dentisterie', 'Vaccination', 'Neurologie'], jours: [4, 2]}, {nom: 'Byron Morgan', services: ['Vaccination', 'Euthanasie', 'Nutrition', 'Dentisterie', 'Neurologie'], jours: [1, 5, 4, 6]}, {nom: 'Cali Deleon', services: ['Ophtalmologie', 'Analyses de laboratoire et parasitologie', 'Neurologie'], jours: [6, 5]}, {nom: 'Angeline Wang', services: ['Nutrition', 'Euthanasie', 'Imagerie médicale', 'Analyses de laboratoire et parasitologie', 'Chirurgie', 'Neurologie', 'Consultation', 'Ophtalmologie'], jours: [1, 6, 3]}, {nom: 'Fletcher Cunningham', services: ['Vaccination', 'Analyses de laboratoire et parasitologie', 'Ophtalmologie', 'Chirurgie', 'Neurologie'], jours: [5, 2, 4]}, {nom: 'Blaze Becker', services: ['Neurologie', 'Consultation', 'Analyses de laboratoire et parasitologie', 'Ophtalmologie', 'Dentisterie', 'Vaccination', 'Euthanasie', 'Imagerie médicale', 'Chirurgie'], jours: [3, 2]}, {nom: 'Sawyer Sampson', services: ['Chirurgie', 'Dentisterie', 'Nutrition', 'Ophtalmologie', 'Imagerie médicale', 'Euthanasie', 'Analyses de laboratoire et parasitologie'], jours: [2, 5, 1]}, {nom: 'Nyasia Patterson', services: ['Analyses de laboratoire et parasitologie', 'Neurologie', 'Imagerie médicale'], jours: [3, 4]}, {nom: 'Antwan Lloyd', services: ['Analyses de laboratoire et parasitologie', 'Euthanasie', 'Vaccination', 'Imagerie médicale'], jours: [0, 4]}, {nom: 'Deja Proctor', services: ['Ophtalmologie', 'Imagerie médicale', 'Analyses de laboratoire et parasitologie'], jours: [4, 3, 5]}, {nom: 'Mitchell Phillips', services: ['Analyses de laboratoire et parasitologie', 'Imagerie médicale', 'Ophtalmologie'], jours: [4, 3, 1]}, {nom: 'Yusuf Sexton', services: ['Imagerie médicale', 'Consultation', 'Euthanasie', 'Dentisterie', 'Chirurgie', 'Analyses de laboratoire et parasitologie', 'Nutrition', 'Ophtalmologie'], jours: [6, 5]}, {nom: 'Hunter Lyons', services: ['Consultation', 'Nutrition', 'Chirurgie', 'Vaccination'], jours: [0, 2, 4, 1]}, {nom: 'Jamir Barber', services: ['Chirurgie', 'Euthanasie', 'Dentisterie', 'Imagerie médicale', 'Neurologie'], jours: [2, 3, 0]}, {nom: 'Hadassah Perry', services: ['Consultation', 'Vaccination', 'Chirurgie'], jours: [1, 3, 4]}, {nom: 'Aarav Elliott', services: ['Ophtalmologie', 'Consultation', 'Imagerie médicale'], jours: [2, 6]}, {nom: 'Gavyn Duffy', services: ['Vaccination', 'Euthanasie', 'Chirurgie', 'Neurologie', 'Nutrition'], jours: [1, 0, 3]}]
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end
function updatePero(){


  $ (".rmv").remove();
  $(".form-grouph").show();
  service = $('#exampleFormControlSelect2')[0].value;
  console.log('aaaaaaaaaaaaaa')
  console.log(service);

  persdispo=[];


    for (var i=0;i<personnes.length;i++){
      console.log();
      if(personnes[i].services.includes(service)){
        persdispo.push(personnes[i])

      }






    }

    console.log(persdispo.length)

$("#personnesdispo").empty();
for (var k=0 ; k<persdispo.length;k++){
  var opt = $("<option></option>").text(persdispo[k].nom);
  $("#personnesdispo").append(opt);
}

prevserv=persdispo

}






function checknom(){


  var a =  $('#nom')[0].value;
  var filter = /^[a-z ,.'-]+$/;
  if (filter.test(a)) {
    console.log("non")

      $(".alertnom").hide()


  }
  else {
    console.log('non')
    $(".alertnom").show()

      return false;

  }
}

function checknum(){


  var a =  $('#exampleFormControlInput3')[0].value;
  var filter = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  if (filter.test(a)) {
    console.log("non")

      $(".alertnum").hide()


  }
  else {
    console.log('non')
    $(".alertnum").show()

      return false;

  }
}

function checkmail(){

     var a =  $('#mail')[0].value;
     var filter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     if (filter.test(a)) {
       console.log("non")

         $(".alertmail").hide()


     }
     else {
       console.log('non')
       $(".alertmail").show()

         return false;

     }
   }



function checkcvv() {


  console.log( $('#cvv')[0].value)

    var a =  $('#cvv')[0].value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^[0-9]{3,4}$/;
    if (filter.test(a)) {
      console.log("non")

        $(".alertcvv").hide()


    }
    else {
      console.log('non')
      $(".alertcvv").show()

        return false;

    }
}


function confirm(){
  $("#confrimrdv").show()
}
function checkcbdate() {


  console.log( $('#cbdate')[0].value)

    var a =  $('#cbdate')[0].value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{2}\/\d{2}$/;
    if (filter.test(a)) {
      console.log("non")

        $(".alertdatecb").hide()


    }
    else {
      console.log('non')
      $(".alertdatecb").show()

        return false;

    }
}



function checkcb() {


  console.log( $('#numerocb')[0].value)

    var a =  $('#numerocb')[0].value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (filter.test(a)) {

        $(".alertcbn").hide()


    }
    else {
      console.log('non')
      $(".alertcbn").show()

        return false;

    }
}



$(document).ready(function(){
  $("#button1").click(function(){
    $('.toast').toast('show');
  });
});
