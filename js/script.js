/* globals feather:false */

(function () {
    'use strict';
    
    if($('.js-example-basic-multiple').length>0){
        $('.js-example-basic-multiple').select2({
            placeholder:"Select Category"
        });
    }
    

    $('[data-toggle="offcanvas"]').on('click', function () {

        $('.offcanvas-collapse').toggleClass('open');

    });

}());
