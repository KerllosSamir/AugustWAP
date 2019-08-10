/*jshint esversion: 6 */
/*on ready state method using jQuery lib*/
$(function () {
    "use strict";

    $("#btnPosts").on("click", getUser);

    function getUser() {
        let userId = $("#txtUserID").val();
        $("#dvPosts").html("");

        if (userId) {
            $.get("https://jsonplaceholder.typicode.com/users")
                .done(displyUserInfo)
                .fail(function (xhr, status, error) {
                    alert(error);
                });
        } else {
            alert("please enter user ID");
        }
    }

    function getUserPosts(userID) {
        $.get("https://jsonplaceholder.typicode.com/posts", {userId: userID})
            .done(displayUserPosts)
            .fail(function (xhr, status, error) {
                alert(error);
            });
    }

    function displyUserInfo(response) {
        let userId = $("#txtUserID").val();
        if (response) {
            let user = response.filter(ele => ele.id == userId)[0];
            if (user) {

                getUserPosts(user.id);
                $("#userId").html(user.id);
                $("#userName").html(user.name);
                $("#userEmail").html(user.email);
                $("#userPhone").html(user.phone);
                $("#userWebsite").html(user.website);
            } else {
                $("#userId").html("");
                $("#userName").html("");
                $("#userEmail").html("");
                $("#userPhone").html("");
                $("#userWebsite").html("");
            }

        }
    }

    function displayUserPosts(response) {
        let posts = $("<table>", {'class': 'postsTable'});

        if (response) {
            let headerTR = $("<tr>");
            headerTR.append($("<th>").html("ID"));
            headerTR.append($("<th>").html("Title"));
            headerTR.append($("<th>").html("Body"));
            posts.append(headerTR);

            response.forEach(function (e) {
                let tr = $("<tr>");
                tr.append($("<td>").html(e.id));
                tr.append($("<td>").html(e.title));
                tr.append($("<td>").html(e.body));
                posts.append(tr);
            });

            $("#dvPosts").append(posts);

        }
    }


});