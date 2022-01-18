$(document).ready(function(){
    $('.tab-switch li').click(function () {
       $(this).removeClass('opacity').siblings().addClass('opacity');
    });
    $('.tabs-section .tab-switch .tab-two').click(function () {
        $('.add').show();
        $('.add').css('opacity','1');
    });
    $('.tabs-section .tab-switch .tab-one').click(function () {
        $('.add').hide();
    });
    $('.tabs-content').children('.tab-two').hide();
    $('.tab-switch li').click(function(){
        $('.tabs-section .tabs-content > div').hide();
        $('.' + $(this).data('class')).show(); 
    });
});
