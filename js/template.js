/**
 * @package    DD_fromSCRT_Tmpl
 *
 * @author     HR IT-Solutions Florian Häusler <info@hr-it-solutions.com>
 * @copyright  Copyright (C) 2017 - 2017 Didldu e.K. | HR IT-Solutions
 * @license    http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 **/

; var DD_fromSCRT_Tmpl = function () {

    // Configuration
    var config = {
        CSS:{
            classes:{
                hover:'hover',
                active:'current',
                jsEnabled:'js'
            },
            ids:{
                container:'maincontainer'
            }
        }
    },

    browser = {

        // Firefox 1.0+
        isFirefox: function () {
            return typeof InstallTrigger !== 'undefined';
        },

        // Safari 3.0+ "[object HTMLElementConstructor]"
        isSafari: function () {
          return /constructor/i.test(window.HTMLElement) ||
              (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        },

        // Chrome 1+
        isChrome: function () {
            return !!window.chrome && !!window.chrome.webstore;
        },

        // Opera 8.0+
        isOpera: function () {
            return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        },

        // Blink engine detection
        isBlink: function () {
            return (isChrome || isOpera) && !!window.CSS;
        },

        // Edge 20+
        isEDGE: function() {
            return !isIE && !!window.StyleMedia;
        },

        // isIE
        isIe: function () {
            return navigator.appVersion.indexOf("MSIE") != -1;
        },

        navigator: navigator.appVersion,
        getVersion: function() {
            var version = 999; // we assume a sane browser
            if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
                version = parseFloat(navigator.appVersion.split("MSIE")[1]);
            return version;
        }
        // browser. Adapted from Sam Jones
        // https://stackoverflow.com/questions/19562207/jquery-detect-browser-ie9-and-below-and-throw-up-a-modal-to-upgrade#answer-19562445
    };

    function init(){

        // Examples
        if (browser.isIe() && browser.getVersion() <= 9) {
            // IE Version below 9
        }
        if (browser.isSafari()) {
            // Safari
        }

    }


    function init_responsive() {

    }

    // more methods

    // init public method
    return {
        init:init,
        init_responsive: init_responsive
    };

};


(function($) {
    $(function()
    {
        DD_fromSCRT_Tmpl.init();
        // DD_fromSCRT_Tmpl.init_responsive();
    });
})(jQuery);