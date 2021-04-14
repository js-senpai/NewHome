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
        // Close popup by container
        const closePopup = (item) => {
            $(document).mouseup(function (e) {
                const popup_container = $(item);
                if (popup_container.has(e.target).length === 0){
                    popup_container.parent().parent().fadeOut('slow');
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
            closePopup('.popup-call .popup-container')
        }
        // Stages slider
        if($('.stages-cooperation__item').length){
            mobileSlider({mobileFunc:()=>{
                $('.stages-cooperation__list').slick({
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    appendArrows: '.stages-cooperation__nav',
                    prevArrow: '<span class="slider-btn stages-cooperation__btn stages-cooperation__btn-left"><i class="fas fa-long-arrow-alt-left"></i></span>',
                    nextArrow: '<span class="slider-btn stages-cooperation__btn  stages-cooperation__btn-right"><i class="fas fa-long-arrow-alt-right"></i></span>',
                })
                },descFunc: ()=>{$('.stages-cooperation__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.stages-cooperation__list'
            })
        }
        // Reviews slider
        if($('.reviews__slider-item').length){
            $('.reviews__slider').slick({
                arrows: true,
                infinite: true,
                mobileFirst: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: 'progressive',
                appendArrows: '.reviews__slider-nav',
                prevArrow: '<span class="slider-btn reviews__btn reviews__btn-left"><i class="fas fa-long-arrow-alt-left"></i></span>',
                nextArrow: '<span class="slider-btn reviews__btn  reviews__btn-right"><i class="fas fa-long-arrow-alt-right"></i></span>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            centerMode: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            })
        }
        // Popular fances
        if($('.product-slider').length){
            mobileSlider({mobileFunc:()=>{
                    $('.product-slider').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.product-slider').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.product-slider'
            })
        }
        // Mobile contact
        if($('.header-mobile__btn-contact').length && $('.header-mobile__contact-menu').length){
            $('.header-mobile__btn-contact').click(function (){
                $('.header-mobile__contact-menu').fadeIn(500)
            })
            $('.header-mobile__btn-contact-close').click(function (){
                $('.header-mobile__contact-menu').fadeOut(500)
            })
        }
        // Mobile nav
        if($('.header-mobile__btn-menu').length && $('.header-mobile__nav').length){
            $('.header-mobile__btn-menu').click(function (){
                $('.header-mobile__nav').fadeIn(500)
            })
            $('.header-mobile__nav-btn').click(function (){
                $('.header-mobile__nav').fadeOut(500)
            })
        }
        // Choose city
        if($('.choose-city').length){
            $('.choose-city').click(function (){
                $('.header__cities').fadeIn(500)
            })
            $('.header__cities-header__btn').click(function (){
                $('.header__cities').fadeOut(500)
            })
        }
        // Desktop menu
        if($('.header-desktop__submenu').length){
            $('.header-desktop__submenu').parent().addClass('submenu')
            $('.header-desktop__menu-item').mouseenter(function (){
                $(this).find('.header-desktop__submenu').fadeIn()
            })
            $('.header-desktop__submenu').mouseleave(function (){
                $(this).fadeOut()
            })
        }
        // Catalog menu
        if($('.header-desktop__catalog-btn')){
            $('.header-desktop__catalog-btn').click(function (){
               $(this).toggleClass('active')
               $('.header-desktop__catalog').fadeToggle(500)
            })
        }
        if($('.header-desktop__catalog-menu__list-item').length && $('.header-desktop__catalog__nav-list__item').length){
            $('.header-desktop__catalog-menu__list-item').click(function (){
                if(!$(this).hasClass('active')){
                    let catalogID = $(this).find('span').attr('data-catalog')
                    $(this).addClass('active').siblings().removeClass('active')
                    $(catalogID).addClass('active').siblings().removeClass('active')
                }
            })
        }
        if($('.header-desktop__catalog-nav__btn-close').length){
            $('.header-desktop__catalog-nav__btn-close').click(function (){
                $('.header-desktop__catalog').fadeOut(500)
            })
        }
        // Search popup
        if($('.header-desktop__btn-search').length){
            $('.header-desktop__btn-search').click(function (){
                $('.search-popup').fadeIn(500)
            })
            $('.search-popup form').submit(function (){
                $('.search-popup').fadeOut(500)
            })
            closePopup('.search-popup .search')
        }
        //Youtube video
        const youtubeChange = ()=>{
            if($('.youtube').length>0){
                $('.youtube').each(function () {
                    if($(this).attr('data-youtube') !== '') {
                        let youtube_url = $(this).attr('data-youtube');
                        youtube_url = youtube_url.replace('https://www.youtube.com/watch?v=', '');
                        $(this).attr('data-youtube', youtube_url);
                    }
                });

            }
            //Video preview
            if($('.youtube').length>0) {
                (function () {
                    if (!document.getElementsByClassName) {
                        // Поддержка IE8
                        const getElementsByClassName = function (node, classname) {
                            const a = [];
                            let re = new RegExp('(^| )' + classname + '( |$)');
                            let els = node.getElementsByTagName("*");
                            for (let i = 0, j = els.length; i < j; i++)
                                if (re.test(els[i].className)) a.push(els[i]);
                            return a;
                        };
                        var videos = getElementsByClassName(document.body, "youtube");
                    } else {
                        var videos = document.querySelectorAll(".youtube");
                    }
                    let nb_videos = videos.length;
                    for (let i = 0; i < nb_videos; i++) {
                        // Находим постер для видео, зная ID нашего видео
                        if (videos[i].getAttribute('data-youtube-img') !== '') {
                            videos[i].style.backgroundImage = 'url(' + videos[i].getAttribute('data-youtube-img') + ')';
                        } else {
                            videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].dataset.youtube + 'sddefault.jpg)';
                        }
                        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
                        if(!videos[i].querySelector('.youtube-container')) {
                            const play = document.createElement("div"),
                                youtubeSettings = document.createElement('div');
                            if (videos[i].getAttribute('data-youtube-text')) {
                                const youtubeText = document.createElement('div');
                                youtubeText.setAttribute('class', 'youtube-text');
                                youtubeText.textContent = videos[i].getAttribute('data-youtube-text');
                                youtubeSettings.appendChild(youtubeText);
                            }
                            play.setAttribute("class", "play");
                            youtubeSettings.setAttribute('class', 'flex-container youtube-container');
                            youtubeSettings.appendChild(play);
                            videos[i].appendChild(youtubeSettings);
                        }
                        videos[i].onclick = function () {
                            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
                            const iframe = document.createElement("iframe");
                            let iframe_url = "https://www.youtube.com/embed/" + videos[i].dataset.youtube + "?enablejsapi=1&autoplay=1&&autohide=1";
                            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
                            iframe.setAttribute("src", iframe_url);
                            iframe.setAttribute("frameborder", '0');
                            // Высота и ширина iFrame будет как у элемента-родителя
                            iframe.style.width = this.style.width;
                            iframe.style.height = this.style.height;
                            // Заменяем начальное изображение (постер) на iFrame
                            this.parentNode.replaceChild(iframe, this);


                        }
                    }
                })();
            }
        };
        youtubeChange();

        // Video-block
        if($('.video-block__advantages-list').length){
            mobileSlider({mobileFunc:()=>{
                    $('.video-block__advantages-list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.video-block__advantages-list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.video-block__advantages-list'
            })
        }
        // Stages cooperation
        if($('.stages-installation__accordion-item').length){
            $('.stages-installation__accordion-item').click(function (){
                if(!$(this).hasClass('active')){
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
        }
    })
})(jQuery)