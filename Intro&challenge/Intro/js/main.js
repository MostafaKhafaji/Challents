$(document).ready(function(){
    $('.get-started').click(function(){
       $('.form-container').fadeIn(1000); 
    });
   $('.tab-switch li').click(function(){
      $(this).removeClass('opacity').siblings().addClass('opacity'); 
   });
    $('.tabs-content').children('.tab-two').hide();
    $('.tab-switch li').click(function(){
        $('.tabs-section .tabs-content > div').hide();
        $('.' + $(this).data('class')).show(); 
    });
});