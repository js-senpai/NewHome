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
        // Mobile func
        const mobileFunc = ({mobileFunc,mobileWidth = 880}) => {
            if ($(window).width() <= mobileWidth) {
                mobileFunc()
            }
            $(window).resize(function () {
                if ($(window).width() <= mobileWidth) {
                    mobileFunc()
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
        // Open popup
        const openPopup = (btn = '',popup = '',title = '') =>{
            if($(btn).length && $(popup).length){
                $(btn).click(function (){
                    let title = ''
                    if($(this).attr('data-title')){
                        title = $(this).attr('data-title')
                        $(title).val(title)
                    }
                    $(popup).fadeIn(500)
                })
            }
        }
        // Open popup call
        openPopup('.btn-open-popup-call','.popup-call','.popup-call__input-title')
        openPopup('.btn-open-popup-write','.popup-write','.popup-write__input-title')
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
        // Tab
        const tabToggle = (nav) => {
            $(nav).click(function (){
                if(!$(this).hasClass('active')){
                    const getTab = $(this).attr('data-tab')
                    $(this).addClass('active').siblings().removeClass('active')
                    $(`#${getTab}`).addClass('active').siblings().removeClass('active')
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
        if($('.advantages-list').length){
            mobileSlider({mobileFunc:()=>{
                    $('.advantages-list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.advantages-list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.advantages-list'
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
        if($('.stages-installation__tab-nav__item').length){
            tabToggle('.stages-installation__tab-nav__item')
        }
        if($('.portfolio-block__tab-nav__item').length){
            tabToggle('.portfolio-block__tab-nav__item')
        }
        // Input number
        if($('.input-number')){
            $('.input-number__nav-plus').click(function (){
                let input = $(this).parent().parent().find('input[type="text"]'),
                    val = +input.val()
                input.val(val+=1)
            })
            $('.input-number__nav-minus').click(function (){
                let input = $(this).parent().parent().find('input[type="text"]'),
                    val = +input.val()
                if(val > 0){
                    input.val(val-=1)
                }
            })
        }
        // Calculator
        if($('.calculator__tab-item').length && $('.calculator__nav-item').length){
            const navContainer = $('.calculator__nav')
            const navContainerWidth = navContainer.outerWidth(); // узнаем ширину контейнера (width + padding)
            // Get active data helper
            const setActiveData = ({currentBlock,currentImg,currentTitle,activeItem,activeTitle}) => {
                if($(currentBlock).length){
                    const currentItem = $(activeItem)
                    if(currentItem.length){
                        const findImg = currentItem.find('img').attr('src')
                        if(findImg){
                            $(currentImg).attr('src',findImg)
                        }
                        const findText = currentItem.find(activeTitle).text()
                        if(findText){
                            $(currentTitle).text(findText)
                        }
                    }
                }
            }
            //Catalog
            let
                typesVal = $('.calculator__types-nav__checkbox:checked').val(),
                paramsVal = {
                  height: 1.25,
                  length: 10,
                  colLam: 10,
                  distance: 10,
                  width: 10,
                  colLag: 2
                },otherVal = {
                   checked: 'Металлические столбы для забора / Колпаки на кирпичные столбы',
                   value: 0,
                },currentStep = 0,navArr = [],currentItem
            const navList = $('.calculator__nav-item')
            navList.each(function (){
                navArr.push($(this).attr('data-tab'))
            })
            currentItem = navArr[0]
            const navigateTabs = (inc = true,item) =>{
                if(inc){
                    if(currentStep <= navArr.length){
                        item.removeAttr('disabled').siblings().removeAttr('disabled')
                        currentStep++;
                        currentItem = navArr[currentStep]
                        if(currentStep === navArr.length){
                            item.attr('disabled','disabled')
                            if($('.calculator__result-height span').length){
                                $('.calculator__result-height span').text(paramsVal.height)
                                if($('.calculator__input-height').length){
                                    $('.calculator__input-height').val(paramsVal.height)
                                }
                            }
                            if($('.calculator__result-length span').length){
                                $('.calculator__result-length span').text(paramsVal.length)
                                if($('.calculator__input-length').length){
                                    $('.calculator__input-length').val(paramsVal.length)
                                }
                            }
                            if($('.calculator__result-width span').length){
                                $('.calculator__result-width span').text(paramsVal.width)
                                if($('.calculator__input-width').length){
                                    $('.calculator__input-width').val(paramsVal.width)
                                }
                            }
                            if($('.calculator__result-col-lam span').length){
                                $('.calculator__result-col-lam span').text(paramsVal.colLam)
                                if($('.calculator__input-col-lam').length){
                                    $('.calculator__input-col-lam').val(paramsVal.colLam)
                                }
                            }
                            if($('.calculator__result-distance-lam span').length){
                                $('.calculator__result-distance-lam span').text(paramsVal.distance)
                                if($('.calculator__input-distance-lam').length){
                                    $('.calculator__input-distance-lam').val(paramsVal.distance)
                                }
                            }
                            if($('.calculator__result-col-lag span').length){
                                $('.calculator__result-col-lag span').text(paramsVal.colLag)
                                if($('.calculator__input-col-lag').length){
                                    $('.calculator__input-col-lag').val(paramsVal.colLag)
                                }
                            }
                            if($('.calculator__result-material-value span').length){
                                $('.calculator__result-material-value span:not(.value)').text(otherVal.checked)
                                if(otherVal.value > 0){
                                    $('.calculator__result-material-value .value').text(otherVal.value)
                                }
                                if($('.calculator__input-material-value').length){
                                    $('.calculator__input-material-value').val(`${otherVal.checked} ${otherVal.value}`)
                                }
                            }
                            if($('.calculator__catalog-nav__item').length){
                                if($('.calculator__input-catalog').length){
                                    $('.calculator__input-catalog').val($('.calculator__catalog-nav__item.active .calculator__catalog-nav__item-title').text())
                                }
                            }
                            if($('.calculator__materials-nav__item').length){
                                // Set active data to material block
                                setActiveData({currentBlock:'.calculator__result-material',
                                    currentImg:'.calculator__result-material img',
                                    currentTitle:'.calculator__result-material__item-title',
                                    activeItem:'.calculator__materials-nav__item.active',activeTitle:'.calculator__materials-nav__item-title' })
                                if($('.calculator__input-material').length){
                                    $('.calculator__input-material').val($('.calculator__materials-nav__item.active .calculator__materials-nav__item-title').text())
                                }
                            }
                            if($('.calculator__types-nav__item').length){
                                // Set active data to types
                                setActiveData({currentBlock:'.calculator__result-types',
                                    currentImg:'.calculator__result-types__img img',
                                    currentTitle:'.calculator__types-title',
                                    activeItem:'.calculator__types-nav__item.active',activeTitle:'.calculator__types-nav__item.active label' })
                                if($('.calculator__input-type').length){
                                    $('.calculator__input-type').val($('.calculator__types-nav__item.active label').text())
                                }
                            }
                        }
                    }
                } else {
                    if(currentStep > 0) {
                        item.removeAttr('disabled').siblings().removeAttr('disabled')
                        currentStep--;
                        currentItem = navArr[currentStep]
                        if(currentStep === 0){
                            item.attr('disabled','disabled')
                        }
                    }
                }
                $('.calculator__nav').find(`[data-tab='${currentItem}']`).addClass('active').siblings().removeClass('active')
                mobileFunc(()=>{
                    const navActive = $('.calculator__nav-item.active')
                    const itemOuterWidth = navActive.outerWidth(); // узнаем ширину текущего элемента (width + padding)
                    const itemOffsetLeft = navActive.offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
                    const containerScrollLeft = navContainer.scrollLeft(); // узнаем текущее значение скролла
                    const positionCenter = (navContainerWidth / 2 - itemOuterWidth / 2); // рассчитываем позицию центра
                    const scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCenter; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера
                    // анимируем
                    navContainer.animate({
                        scrollLeft: scrollLeftUpd,
                    }, 400);
                },'1359')
                if($(`#${currentItem}`).length){
                    $(`#${currentItem}`).addClass('active').siblings().removeClass('active')
                }
            }
            // Next step
            $('.calculator__nav-btn.right').click(function (){
                let these = $(this)
                navigateTabs(true,these)
            })
            $('.calculator__nav-btn.left').click(function (){
                let these = $(this)
                navigateTabs(false,these)
            })
            /* Catalog tab */
            $('.calculator__catalog-nav__item').click(function (){
                if(!$(this).hasClass('active')){
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
            /* Material tab */
            $('.calculator__materials-nav__item').click(function (){
                if(!$(this).hasClass('active')){
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
            /* Types tab */
            $('.calculator__types-nav__checkbox').click(function (){
                if($(this).is(':checked')){
                    typesVal = $(this).val()
                }
            })
            /* Params */
            // height
            if($('.calculator__parameters__height').length){
                $('.calculator__parameters__height').click(function (){
                    paramsVal.height = $(this).val()
                })
            }
            // length
            if($('.calculator__parameters__length').length){
                $('.calculator__parameters__length').change(function (){
                    paramsVal.length = $(this).val()
                })
            }
            // Col lam
            if($('.calculator__parameters__colLam').length){
                $('.calculator__parameters__colLam').change(function (){
                    paramsVal.colLam = $(this).val()
                })
            }
            // Distance
            if($('.calculator__parameters__distance').length){
                $('.calculator__parameters__distance').change(function (){
                    paramsVal.distance = $(this).val()
                })
            }
            // Width section
            if($('.calculator__parameters__width-section').length){
                $('.calculator__parameters__width-section').change(function (){
                    paramsVal.width = $(this).val()
                })
            }
            // Col lag
            if($('.calculator__parameters__colLag').length){
                $('.calculator__parameters__colLag').click(function (){
                    paramsVal.colLag = $(this).val()
                })
            }
            /* Other tab */
            if($('.calculator__other-number').length){
                $('.calculator__other-number').change(function (){
                    otherVal.value = $(this).val()
                })
            }
            if($('.calculator__other-checkbox').length){
                $('.calculator__other-checkbox').click(function (){
                    otherVal.checked = $(this).val()
                    $('.calculator__other-checkbox').not(this).prop('checked', false)
                })
            }
        }
        // Toggle catalog nav
        if($('.catalog-nav-toggle__btn').length && $('.catalog-navigation__mobile').length){
            $('.catalog-nav-toggle__btn').click(function (){
                $(this).toggleClass('active')
                $('.catalog-navigation__mobile').fadeToggle(500)
            })
        }
        // Sort select
        if($('.catalog-product__sort-select').length){
            $('.catalog-product__sort-select__btn').click(function (){
                $('.catalog-product__sort-select__list').fadeToggle(500)
            })
            $('.catalog-product__sort-select__list-item').click(function (){
                $('.catalog-product__sort-select__selected').text($(this).text())
            })
        }
        // Steps list
        if($('.steps-list__item').length){
            mobileSlider({mobileFunc:()=>{
                    $('.steps-list--slider').slick({
                        arrows: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                        prevArrow: '<span class="slider-btn steps-list__btn steps-list__btn-left"><i class="fas fa-long-arrow-alt-left"></i></span>',
                        nextArrow: '<span class="slider-btn steps-list__btn  steps-list__btn-right"><i class="fas fa-long-arrow-alt-right"></i></span>',
                    })
                },descFunc: ()=>{$('.steps-list--slider').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.steps-list--slider'
            })
        }
        // Our advantages
        if($('.our-advantages__list-item').length){
            mobileFunc({mobileFunc: ()=>{
                    $('.our-advantages__list-item').click(function (){
                        $(this).addClass('active').siblings().removeClass('active')
                    })
            },mobileWidth: 1280})
        }
        // Fances slider
        if($('.fances-slider__list-item').length){
            $('.fances-slider__list').slick({
                arrows: true,
                infinite: true,
                mobileFirst: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: 'progressive',
                appendArrows: '.fances-slider__nav',
                prevArrow: '<span class="slider-btn fances-slider__btn fances-slider__btn-left"><i class="fas fa-long-arrow-alt-left"></i></span>',
                nextArrow: '<span class="slider-btn fances-slider__btn  fances-slider__btn-right"><i class="fas fa-long-arrow-alt-right"></i></span>',
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
        // Product gallery
        if($('.current-product__gallery-list').length){
            $('.current-product__gallery-list').slick({
                arrows: true,
                infinite: true,
                mobileFirst: true,
                centerMode: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                lazyLoad: 'progressive',
                appendArrows: '.current-product__gallery-list__nav',
                prevArrow: '<span class="current-product__gallery-list__btn current-product__gallery-list__btn-left"><i class="fas fa-chevron-left"></i></span>',
                nextArrow: '<span class="current-product__gallery-list__btn current-product__gallery-list__btn-right"><i class="fas fa-chevron-right"></i></span>',
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            vertical: true,
                            verticalSwiping: true,
                            slidesToShow: 3,
                            centerMode: false,
                            slidesToScroll: 3,
                        }
                    },
                ]
            })
            const getMainItem = $('.current-product__gallery-main')
            const getMainImgSrc = getMainItem.find('img').attr('src')
            $('.current-product__gallery-list').on('beforeChange', function(event){
                const findCurrentItem = event.target
                const getImgSrc = $(findCurrentItem).find('.slick-slide.slick-current.slick-active img').attr('src')
                if(getImgSrc && getMainImgSrc) {
                    const getMainImg = getMainItem.find('img')
                    getMainImg.attr('src',getImgSrc)
                }
            });
            $('.current-product__gallery-list-item').click(function (){
                const getImgSrc = $(this).find('img').attr('src')
                if(getImgSrc && getMainImgSrc) {
                    const getMainImg = getMainItem.find('img')
                    getMainImg.attr('src',getImgSrc)
                }
            })
        }
        // Product tab
        if($('.product-fence__tab-nav__item').length){
            tabToggle('.product-fence__tab-nav__item')
        }
        // Product fence about tab
        if($('.product-fence-about__nav-item').length){
            tabToggle('.product-fence-about__nav-item')
        }
        // Form select
        if($('.form__fieldset-select').length){
            $('.form__fieldset-select').click(function (e){
                e.stopPropagation()
                e.stopImmediatePropagation()
                const getSelect = $(this).find('.form__select-list')
                if(!getSelect.hasClass('active')){
                    getSelect.addClass('active')
                } else {
                    getSelect.removeClass('active')
                }
            })
            $('.form__select-list__item').click(function (){
                const inputValue = $(this).text(),
                      inputData = $(this).attr('data-value'),
                      selectedItem = $(this).parent().siblings('.form__select-selected')
                selectedItem.text(inputValue)
                selectedItem.attr('data-value',inputData)
            })
        }
        // Product gates tab
        if($('.catalog-gates-tab__nav-item').length){
            tabToggle('.catalog-gates-tab__nav-item')
        }
        // Product gates advantages
        if($('.catalog-advantages__list-item').length){
            mobileSlider({mobileFunc:()=>{
                    $('.catalog-advantages__list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.catalog-advantages__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.catalog-advantages__list'
            })
        }
        // Product catalog col button
        if($('.current-product__order-btn__order').length && $('#product-col').length){
            $('.current-product__order-btn__order').click(function (){
                const getTitle = $(this).attr('data-title')
                $(this).attr('data-title',`${getTitle}.Количетво: ${$('#product-col').val()}`)
            })
        }
        // Catalog automatic
        if($('.catalog-automatic__filters-categories__item').length && $('.catalog-automatic__filters-list__item').length){
            mobileFunc({mobileFunc:()=>{
               $('.catalog-automatic__filters-categories__item').click(function (){
                   $(this).toggleClass('active').siblings().remove('active')
                   if($(this).hasClass('active')){
                       $('.catalog-automatic__filters-list').addClass('active')
                   } else {
                       $('.catalog-automatic__filters-list').removeClass('active')
                   }
               })
            },mobileWidth:1280})
        }
        // Toggle type list
        if($('.catalog-product__block-type__btn').length && $('.catalog-product__list').length){
            $('.catalog-product__block-type__btn').click(function (){
                $(this).addClass('active').siblings().removeClass('active')
                if($(this).hasClass('catalog-product__block-type__grid')){
                    $('.catalog-product__list').removeClass('catalog-product__list-type--list')
                } else {
                    $('.catalog-product__list').addClass('catalog-product__list-type--list')
                }
            })
        }
        // Service page advantages
        // Product gates advantages
        if($('.service-page-advantages__list-item').length){
            mobileSlider({mobileFunc:()=>{
                    $('.service-page-advantages__list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.service-page-advantages__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.service-page-advantages__list'
            })
        }
        // Service page requirements
        if($('.service-page-requirements__list-item').length){
            mobileSlider({mobileFunc:()=>{
                    $('.service-page-requirements__list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.service-page-requirements__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.service-page-requirements__list'
            })
        }
        // Service page types
        if($('.service-page-types__list-item').length){
            mobileSlider({mobileFunc:()=>{
                    $('.service-page-types__list').slick({
                        arrows: false,
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        lazyLoad: 'progressive',
                    })
                },descFunc: ()=>{$('.service-page-types__list').filter('.slick-initialized').slick('unslick')},mobileWidth: 1280,elemClass: '.service-page-types__list'
            })
        }
    })
})(jQuery)