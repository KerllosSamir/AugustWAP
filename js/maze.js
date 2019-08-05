/*jshint esversion: 6 */
/*on ready state method using jQuery lib*/
$(function () {
    "use strict";

    /* this name space used to hold all playing actions and logic*/
    const mazModule = (function () {
        const originalHeaderText = $("#status").text();

        /*this method used to reset the game style*/
        function start() {
            $("#maze .boundary").removeClass("youlose");
            $("#status").text(originalHeaderText);
        }

        /*this method used to display failure message */
        function exiteTrack() {
            $("#maze .boundary").addClass("youlose");
            $("#status").text("You lose!");
        }

        /*this method used to display success message */
        function end() {
            $("#status").text("You win! :)");
        }

        return {
            startGame: start,
            exiteTrack: exiteTrack,
            endGame: end
        };
    }());

    $("#start").click(mazModule.startGame);
    $("#maze .boundary").mouseover(mazModule.exiteTrack);
    $("#end").click(mazModule.endGame);
});
