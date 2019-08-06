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

        /*thia method used to create and show circles*/
        function showCircle() {
            $('.circle')
                .css({'width': initialWidth + 'px', 'height': initialWidth + 'px'})
                .show();
        }

        /*this method handles circle width change*/
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

        /*this method handles circle grow rate change*/
        function growRateChanged() {
            growSpeed = parseInt($('#txtGrowRate').val());
            startGrow();
        }

        function noCirclesChanged() {
            let num = parseInt($('#txtNoCircles').val());
            //$('.circle').remove();
            for (let i = 0; i < num; i++) {
                $('#container').append($('<div>', {
                    'class': 'circle',
                    'css': {'background-color': "#" + ((1 << 24) * Math.random() | 0).toString(16)}
                }));
            }
        }

        /*this method handles circle redraw every specific period*/
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
            growRateChanged: growRateChanged,
            noCirclesChanged: noCirclesChanged
        };
    }());

    /*Attach events*/
    circleModule.noCirclesChanged();
    $('#container').on("click", 'div', circleModule.removeCircle);
    $('#start').on('click', circleModule.startGrow);
    $('#txtWidth').on('change', circleModule.widthChanged);
    $('#txtGrowAmount').on('change', circleModule.growSizeChanged);
    $('#txtGrowRate').on('change', circleModule.growRateChanged);
    $('#txtNoCircles').on('change', circleModule.noCirclesChanged);

});