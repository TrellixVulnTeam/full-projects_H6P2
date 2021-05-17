$("#comments .owl-carousel").owlCarousel({
    margin: 26,
    items: 2,
    dots: true,
    nav: false,
    loop: false,
  autoplay:true,
  autoplayTimeout:10000,
  autoplayHoverPause:true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        margin: 0
    },
    768 : {
        items: 2,
        margin: 26
    }
  }
});
// $("#send_form").click(function() {
//   let fname= $(".main_form__fname").val();
//   let lname= $(".main_form__lname").val();
//   let telephone= $(".main_form__tel").val();
//   let email= $(".main_form__mail").val();
//   let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
//   let regMail = /^\S+@\S+\.\S+$/;
//   let regPhone = /^[0-9\-\+]{9,15}$/;
//   let errorArray = [0, 0, 0, 0, 0, 0];
//   if (fname==null || fname=="" || fname.search(nameReg)){
//     $(".main_form__fname").attr("placeholder", "Поле обов'язково потрібно заповнити");
//     $(".main_form__fname").addClass("wrong_inp");
//     $(".closed_par").removeClass("sended");
//     errorArray[0] = 1;
//   } else {
//     $(".main_form__fname").removeClass("wrong_inp");
//     errorArray[0] = 0;
//   }
//   if (lname==null || lname=="" || lname.search(nameReg)){
//     $(".main_form__lname").attr("placeholder", "Поле обов'язково потрібно заповнити");
//     $(".main_form__lname").addClass("wrong_inp");
//     $(".closed_par").removeClass("sended");
//     errorArray[1] = 1;
//   } else {
//     $(".main_form__lname").removeClass("wrong_inp");
//     errorArray[1] = 0;
//   }
//    if(telephone.search(regPhone)){
//
//     $(".main_form__tel").attr("placeholder", "Поле обов'язково потрібно заповнити");
//     $(".main_form__tel").addClass("wrong_inp");
//     $(".closed_par").removeClass("sended");
//     errorArray[2] = 1;
//   } else {
//     $(".main_form__tel").removeClass("wrong_inp");
//     errorArray[2] = 0;
//   }
//    if (email.search(regMail)) {
//     $(".main_form__mail").attr("placeholder", "Поле обов'язково потрібно заповнити");
//     $(".main_form__mail").addClass("wrong_inp");
//     $(".main_form__mail").removeClass("sended");
//     errorArray[3] = 1;
//   } else {
//     $(".main_form__mail").removeClass("wrong_inp");
//     errorArray[3] = 0;
//   }
//    if (!$('.checkboxes').is(':checked')) {
//     $(".form_policy").addClass("wrong_inp");
//     $(".form_policy").removeClass("sended");
//     errorArray[4] = 1;
//   } else {
//     $(".form_policy").removeClass("wrong_inp");
//     errorArray[4] = 0;
//   }
//   if ($(".main_form__int").val() == null || $(".main_form__int").val() == "" || $(".main_form__int").val().search(nameReg)){
//     $(".main_form__int").attr("placeholder", "Поле обов'язково потрібно заповнити");
//     $(".main_form__int").addClass("wrong_inp");
//     $(".closed_par").removeClass("sended");
//     errorArray[5] = 1;
//   } else {
//     $(".main_form__int").removeClass("wrong_inp");
//     errorArray[5] = 0;
//   }
//   if (errorArray[0] == 0 && errorArray[1] == 0 && errorArray[2] == 0 && errorArray[3] == 0 && errorArray[4] == 0 && errorArray[5] == 0) {
//     $(".main_form__mail").removeClass("wrong_inp");
//     $(".main_form__tel").removeClass("wrong_inp");
//     $(".main_form__lname").removeClass("wrong_inp");
//     $(".main_form__fname").removeClass("wrong_inp");
//     $(".main_form__int").removeClass("wrong_inp");
//     $(".form_policy").removeClass("wrong_inp");
//     $(".closed_par").addClass("sended");
//     return true;
//   }
// });
