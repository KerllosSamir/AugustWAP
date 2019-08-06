/*jshint esversion: 6 */
/*on ready state method using jQuery lib*/
$(function () {
    "use strict";

    /*this module used to handle all events logic*/
    const circleModule = (function () {
        let growSize = 10;
        let growSpeed = 250;
        let timerID = null;
        let initialWidth = 50;

        function removeCircle() {
            $(this).hide();
        }

        function showCircle() {
            $('.circle')
                .css({'width': initialWidth + 'px', 'height': initialWidth + 'px'})
                .show();
        }

        function widthChanged() {
            initialWidth = parseInt($('#txtWidth').val());
            startGrow();
        }

        function growSizeChanged() {
            growSize = parseInt($('#txtGrowAmount').val());
            startGrow();
        }

        function circleGrowWith(x) {
            const circle = $('.circle');
            circle.css({
                'width': parseInt(circle.css("width")) + x + 'px',
                'height': parseInt(circle.css("height")) + x + 'px'
            });
        }

        function growRateChanged() {
            growSpeed= parseInt($('#txtGrowRate').val());
            startGrow();
        }

        function startGrow() {
            showCircle();
            if (timerID) {
                clearInterval(timerID);
                timerID = null;
            }
            timerID = setInterval(circleGrowWith, growSpeed, growSize);
        }

        return {
            removeCircle: removeCircle,
            startGrow: startGrow,
            widthChanged: widthChanged,
            growSizeChanged: growSizeChanged,
            growRateChanged:growRateChanged
        };

    }());


    /*Attach events*/
    $('.circle').on("click", circleModule.removeCircle);
    $('#start').on('click', circleModule.startGrow);
    $('#txtWidth').on('change', circleModule.widthChanged);
    $('#txtGrowAmount').on('change', circleModule.growSizeChanged);
    $('#txtGrowRate').on('change', circleModule.growRateChanged);
});