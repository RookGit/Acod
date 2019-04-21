declare var $: any;
declare var system: any;

function init() {

    // Анимация крутилки при submit
    $('.form').submit(function () {
        $(this).find('.form__body').fadeTo( "opacity", 0);
        $(this).find('.form__loader').show();
    });
}

export {init};