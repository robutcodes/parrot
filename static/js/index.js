
/* Global constants */
const BASE_URL = ""
const $body = $("body");

/** AJAX Requests for Liking/Disliking posts **/
$body.on('click', '.fa-heart', function (e) {
  e.preventDefault();
  $(this).toggleClass('far fas');

  let $curr = $(this); 
  let $likeNum = parseInt($(this).siblings(".like-numbers").text());
  let msgId = $(this).attr("data-id");

  $.ajax({
    type: "POST",
    url: `likes/${msgId}`,
  }).done(function (data) {
    if (data.status === "OK") {
      $curr.siblings(".like-numbers").text($likeNum += 1);
    } else {
      $curr.siblings(".like-numbers").text($likeNum -= 1);
    }
  }).fail(function (data) {
    console.log("fail data: ", data);
  })
});


$("#demo-login").on("click", function() {
  let username = "patrickstar";
  let password = "password";

  $("#user_form input[name=username]").val(username);
  $("#user_form input[name=password").val(password);
    
});


