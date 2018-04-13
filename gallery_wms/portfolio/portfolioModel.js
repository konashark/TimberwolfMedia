var PORTFOLIO_MODEL = {};

(function() {

    // ********************************************
    this.getSpotlightData = function () {
        return [
            { url: 'resources/images/portfolio/SPOTLIGHT-1.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-2.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-3.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-4.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-5.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-6.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-7.jpg' }
        ];
    };

    // ********************************************
    this.getPortfolioData = function () {
        var portfolio = [];

        portfolio[0] = {};
        portfolio[0].label = 'Pet Portraits';
        portfolio[0].images = [
            { url: 'images/pets-web/1.jpg' },
            { url: 'images/pets-web/2.jpg' },
            { url: 'images/pets-web/3.jpg' },
            { url: 'images/pets-web/4.jpg' },
            { url: 'images/pets-web/5.jpg' },
            { url: 'images/pets-web/7.jpg' },
            { url: 'images/pets-web/11.jpg' },
            { url: 'images/pets-web/12.jpg' },
            { url: 'images/pets-web/13.jpg' },
            { url: 'images/pets-web/14.jpg' },
            { url: 'images/pets-web/15.jpg' },
            { url: 'images/pets-web/18.jpg' },
            { url: 'images/pets-web/19.jpg' },
            { url: 'images/pets-web/20.jpg' },
            { url: 'images/pets-web/21.jpg' },
            { url: 'images/pets-web/22.jpg' },
            { url: 'images/pets-web/23.jpg' },
            { url: 'images/pets-web/24.jpg' },
            { url: 'images/pets-web/25.jpg' },
            { url: 'images/pets-web/26.jpg' },
            { url: 'images/pets-web/27.jpg' },
            { url: 'images/pets-web/28.jpg' },
            { url: 'images/pets-web/29.jpg' }
        ];

        portfolio[1] = {};
        portfolio[1].label = 'Art by Wendy';
        portfolio[1].images = [
            { url: 'images/artwork-web/1.jpg' },
            { url: 'images/artwork-web/2.jpg' },
            { url: 'images/artwork-web/3.jpg' },
            { url: 'images/artwork-web/4.jpg' },
            { url: 'images/artwork-web/8.jpg' },
            { url: 'images/artwork-web/11.jpg' },
            { url: 'images/artwork-web/12.jpg' },
            { url: 'images/artwork-web/19.jpg' },
            { url: 'images/artwork-web/22.jpg' },
            { url: 'images/artwork-web/23.jpg' }
        ];

        portfolio[2] = {};
        portfolio[2].label = 'Miscellaneous';
        portfolio[2].images = [
            { url: 'images/pets-web/8.jpg' },
            { url: 'images/pets-web/16.jpg' },
            { url: 'images/pets-web/17.jpg' },
            { url: 'images/artwork-web/21.jpg' },
        ];

        return portfolio;
    };

}).apply(PORTFOLIO_MODEL);

