var PORTFOLIO_VIEW = {};

var UTILS = {};
UTILS.setOpacity = function (selector, value) {
    setTimeout( function() { $(selector).css('opacity', value); }, 0);
};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');

        $('#screen').html(
            '<div id="portfolioScreen" class="screen">' +
            '   <div class="topSpacer"></div>' +
            '   <div class="container">' +
            '       <div id="wendy"></div>' +
            '       <div id="grid"></div>' +
            '   </div>' +
            '</div>');

        var portfolio = PORTFOLIO_MODEL.getPortfolioData();

        portfolio.forEach(function (port, index) {
            $('#grid').append(
                '       <div class="row">' +
                '           <h2 class="portfolioLabel">' + port.label + '</h2>' +
                '       </div>'
            );

            portfolio[index].images.forEach(function (item, index) {
                var cell = $('<div class="gridCell"></div>');
                cell.css('background-image', 'url(' + item.url + ')');
                cell[0].IMAGE_URL = item.url;
                $('#grid').append(cell);
                cell.on('click', function() {
                    showFloatingWindow(this.IMAGE_URL);
                    return false;
                });
            });
        });

        // Remove the floating window if user clicks anywhere on page except for another grid cell
        $('#portfolioScreen').on('click', function() {
            $('.portfolioFloat').remove();
            UTILS.setOpacity('.container', 1);
        });

        UTILS.setOpacity('#screen', 1);
    };

    // ********************************************
    var showFloatingWindow = function (url) {
        $('.portfolioFloat').remove();
        $('#portfolioScreen').append(
            '<div class="portfolioFloat">' +
            '   <div class="portfolioFloatImage"></div>' +
            '</div>'
        );
        $('.portfolioFloat').css({
            'height': parseInt($('.portfolioFloat').width() * .6666)
        });
        $('.portfolioFloatImage').css({
            'background-image': 'url(' + url + ')'
        });

        UTILS.setOpacity('.container',.5);
    };

    // ********************************************
    this.erase = function (callback) {
        console.log('VIEW: Erasing');
        $('.portfolioFloat').remove();
        UTILS.setOpacity('#screen', 0);
        setTimeout( function() {
            $('#screen').empty();
            if (typeof callback === 'function') {
                callback();
            }
        }, 300);
    };
}).apply(PORTFOLIO_VIEW);

window.onload = PORTFOLIO_VIEW.draw;