window.onload = function(){
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};
;

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







$('#my_form').submit(function(){
  $.post(
      '../telegram.php', 
       $("#my_form").serialize(),          
      
      function(msg) {  
        let feedBackMessange = document.getElementsByClassName('feedback-result');
          feedBackMessange.style.display = "block"
      }
  );
  return false;
});
