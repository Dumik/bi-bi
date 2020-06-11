

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
;

window.onload = function(){
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};

;



$('#my_form').submit(function(){
  $.post(
      '../telegram.php', // адрес обработчика
       $("#my_form").serialize(), // отправляемые данные             
      function(msg) {  
        let resultFeedback = document.getElementsByClassName('feedback-result');
        resultFeedback.style.display = 'block';
      }
  );
  return false;
});



