$(function () {
  $("article#article_1").mouseover(changeArticle1Content);
  $("article#article_1").mouseout(revertArticle1Content);
  $("article#article_2").mouseover(animateArticle2Heading);
  $("button#fade_button").click(resizeArticle2Image);
});

function changeArticle1Content() {
  $("article#article_1 p").text("Call of Duty: Black Ops 7 attracts millions of active users weekly across all platforms, though Steam numbers account for a smaller fraction of the player base. Player opinions are deeply divided. Many fans praise the multiplayer's solid gunplay, fluid movement, and level designs. Conversely, the single-player campaign has drawn heavy criticism for its disjointed narrative and rushed pacing.");
  $("article#article_1 p").css("color", "red");
  $("article#article_1 img").attr("src", "images/fire_blackops.jpg"); 
}

function revertArticle1Content() {
  $("article#article_1 p").text("Call of Duty: Black Ops 7 is incredibly fun to play because of the intense lobby culture. You can voice chat directly with other players, hear them get furious when you outplay them, and watch them rage quit mid-match. Seeing opposing players get genuinely mad makes every victory feel much more rewarding.");
  $("article#article_1 p").css("color", "black");
  $("article#article_1 img").attr("src", "images/operator_blackops.jpg"); 
}

function animateArticle2Heading () {
  $("article#article_2 h2").animate(
    {
      position: "absolute",
      top: "600px",
      left: "600px",
    },
    3000,
  );
}

function resizeArticle2Image() {
  $("article#article_2 img")
    .velocity({ width: "500px" }, 1000)
    .velocity({ width: "300px" }, 1000);
}
