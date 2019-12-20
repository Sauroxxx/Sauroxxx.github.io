$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 900);
            return false;
    });
});



/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
/* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    // var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}



// function getRandomArbitary(min, max)
// {
//   document.getElementById("info") = Math.random() * (max - min) + min;
// }


// document.getElementById('button').addEventListener('click', function () {
//     var answers = [
//         'Вас ждет удача (лет через 500)', 
//         'Возможно этот месяц будет успешен', 
//         'Для достижения результата стоит поднапрячься', 
//         'В этом месяце у вас все будет по плану',
//         'За вами охотятся рептилоиды, будьте осторожны', 
//         'Ваша судьба неясна...', 
//         'Если попробуешь еще удача тебе улыбнется;)'];

//     var button = document.getElementById('button');
//     var answerText = document.querySelector('.answer');


//   var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
//   answerText.textContent = randomAnswer;
  
//   answerText.classList.remove(document.getElementsByClassName('answer'));
// });

document.getElementById('result').onclick = function click() {
    var eventbutton = '';
    var answers = [
        'На тебя упадет рояль, если не перевести на счет xxxx-xxxx-xxxx-xxxx 500 рублей', 
        'Завтра тебе повысят зарплату, если ты положишь на счет xxxx-xxxx-xxxx-xxxx 2000 руб', 
        'Ты выиграл машину, позвони на номер 4444, чтобы забрать приз!!', 
        'Тебе стоит перевести деньги на сайт gadalka.com, иначе тебя покинет удача',
        'На тебе лежит проклятие, снять его можно, позвонив на номер x-(xxx)-xxx-xx-xx', 
        'Ваша судьба неясна...', 
        'Если попробуешь еще удача тебе улыбнется;)'];

    eventbutton = Math.floor(Math.random() * 6);
    document.getElementById('result').innerHTML = answers[eventbutton];
    // document.getElementById('result').onwheel;
    $('.result').toggleClass('.anim-fut')

}


$(function(){
    $('.container').height($('.container').width()*1.4);

    $(window).resize(function(){
        $('.container').height($('.container').width()*1.4);
    });
});


$('.container0').on('click', function () {
    $('.card0').toggleClass('flipped');
});

$('.container1').on('click', function () {
    $('.card1').toggleClass('flipped');
});

$('.container2').on('click', function () {
    $('.card2').toggleClass('flipped');
});

$('.container3').on('click', function () {
    $('.card3').toggleClass('flipped');
});

$('.container4').on('click', function () {
    $('.card4').toggleClass('flipped');
});

$('.container5').on('click', function () {
    $('.card5').toggleClass('flipped');
});