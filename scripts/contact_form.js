jQuery(document).ready(function($) {
    // $('.popup-form-button').preventDefault();
    $('#form-popup').submit(function (e) {
        if($('#user-name-popup').val() == '' || $('#user-phone-popup').val() == ''
            || $('#user-details').val() == ''){
            alert('Одно из полей не заполнено!');
            e.preventDefault()
        }
        else {
            let input_value_name = $('#user-name-popup').val();
            let input_value_phone = $('#user-phone-popup').val();
            // let input_value_email = $('#user-email').val();
            let input_comment = $('#user-details').val();
            let email_adress = $('.feedback-form-email').text();
            let radio_button_value = document.querySelector('input[name="call"]:checked').value;
            let feedback = '';
            console.log(input_value_name, input_value_phone, input_comment, email_adress);
            feedback = '1) Заявку оставил клиент с именем: ' + input_value_name + '\n2) Номер телефона: '+ input_value_phone +'\n3) Комментарий: '+ input_comment+'\n4) Тип связи: '+radio_button_value;
            let obj = {
                email : email_adress,
                feedback: feedback
            };
            console.log(obj);
            var $form = $(this);
            $.ajax({
                type: 'POST',
                url: '/wp-content/themes/twt/mail.php',
                data: 'contact=' + JSON.stringify(obj),
            }).done(function (data) {
                jQuery('#form-popup')[0].reset();
                alert('Спасибо за обращение, ' + input_value_name + ', ваша заявка приянта в обработку');
                $('.popup-call-back').css('display','none');
                // $('.popup-call-back-result').css('display','flex');

            }).fail(function (data) {
                console.log(data);
            });
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
        }
    });

});