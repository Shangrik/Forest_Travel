// validate form

$(document).ready(function () {
    const userTourValue = $('[name=userTourSize]:checked').val();
    // console.log(userTourValue);
    $('#contact-form').validate({
        rules: {
            userName: "required",
            userEmail: {
                required: true,
                email: true
            },
            userPhone: "required",
            userToursize: "required"
        },
        messages: {
            userName: "Введите имя",
            userPhone: "Введите телефон",
            userEmail: {
                required: "Введите почту",
                email: "Введите корректный адрес почты"
            },
            userToursize: "Укажите количество человек в группе"
        },
        submitHandler: function () {
            // const userTour = $('[name=userTourSize]');
            // userTour.on('click', function () {
            //     $('#radio-value').val = $(this).val;

            // });

            $.ajax({
                type: "POST",
                url: "./../lib/mailer/smart.php",
                data: $('#contact-form').serialize()
            }).done(function () {
                $('#contact-form').find('input').val('');
                $('#contact-form').trigger('reset');

            });
            return false;
        }

    });

    // Mask
    $("#userPhone").mask("+7(999) 999-99-99");

});



// let val = document.querySelector('#radio-value').value;
// const radio = document.querySelectorAll('[name="userToursize"]');
// radio.forEach(function (item) {
//     item.addEventListener('click', function () {
//         val = this.value;
//     });
// });

// console.log(val);