console.log('Knygynas darbui pasiruošęs.');


if (document.querySelector('[data-msg-container]')) {
    setTimeout(_ => {
        document.querySelector('[data-msg-container]').remove();
    }, 5000);
}