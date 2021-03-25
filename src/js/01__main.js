const lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});
(function ($){
    $(document).ready(function (){
        //Mobile slider
        const mobileSlider = ({mobileFunc,descFunc,mobileWidth = 880,elemClass = ''}) =>{
            if ($(window).width() <= mobileWidth) {
                mobileFunc()
            }
            $(window).resize(function () {
                if ($(window).width() <= mobileWidth) {
                    mobileFunc()
                } else if ($(window).width() > mobileWidth && $(elemClass).hasClass('slick-initialized')) {
                    descFunc();
                }
            });
        }
        // Checkbox
        if($('.form__checkbox').length){
            $('.form__checkbox').each(function (item){
                if(!$(this).is(':checked')){
                    $(this).parent().parent().find('.form__checkbox-icon').addClass('not-checked')
                    $(this).parent().parent().parent().find('.btn-action').attr('disabled')
                }
            })
            $('.form__checkbox-icon').click(function (){
               if($(this).parent().find('.form__checkbox').is(':checked')){
                   $(this).addClass('not-checked')
                   $(this).parent().find('.form__checkbox').removeAttr('checked')
                   $(this).parent().parent().parent().find('.btn-action').attr('disabled')
               } else {
                   $(this).removeClass('not-checked')
                   $(this).parent().find('.form__checkbox').attr('checked')
                   $(this).parent().parent().parent().find('.btn-action').removeAttr('disabled')
               }
            })
        }
        // Popup
        if($('.popup-overlay').length){
            $('.popup-close').click(function (){
                $(this).parent().parent().parent().parent().fadeOut(500)
            })
            $('.btn-open-popup-call').click(function (){
                $('.popup-call').fadeIn(500)
            })
        }
        // Stages slider
        if($('.stages-cooperation__item').length){
            mobileSlider({mobileFunc:()=>{$('.stages-cooperation__list').slick({
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    appendArrows: '.stages-cooperation__nav',
                    prevArrow: '<span class="stages-cooperation__btn stages-cooperation__btn-left"><i class="fas fa-long-arrow-alt-left"></i></span>',
                    nextArrow: '<span class="stages-cooperation__btn  stages-cooperation__btn-right"><i class="fas fa-long-arrow-alt-right"></i></span>',
                })},descFunc: ()=>{$('.stages-cooperation__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 768,elemClass: '.stages-cooperation__list'
            })
        }
    })
})(jQuery)