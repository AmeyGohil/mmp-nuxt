$('input[type=radio][name=user_type]').change(function() {
    if (this.value === 'manufacturer') {
        $(".manufacturer").slideDown();
        $(".customer").slideUp();
    }
    else if (this.value === 'customer') {
        $(".customer").slideDown();
        $(".manufacturer").slideUp();
    }
});