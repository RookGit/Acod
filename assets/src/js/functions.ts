declare var $: any;
declare var system: any;

// Скрыть крутилку загрузки форм
function hideLoader(form_id: string, callback: any) {
    setTimeout(function () {
        const element_form = $('[data-form-id="' + form_id + '"]');
        element_form.find('.form__body').fadeTo("opacity", 1);
        element_form.find('.form__loader').hide();
        callback();
    }, 1000);
}

// Очистить форму
function emptyForm(form_id: string) {
    $('[data-form-id="' + form_id + '"]')
        .find('input[type="text"], input[type="email"], input[type="number"]').each(
        function() {
            $(this).val('');
        });
}

export {hideLoader, emptyForm};