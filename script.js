var categories = ["World Geography", "Mythology", "Modern American Politics", "DC Comics", "Food", "Media"]
var values = ["$200", "$400", "$600", "$800", "$1000"]

for(var i = 0; i < categories.length; i++){
  $(".categories").append("<div class='catTitle'>"+categories[i]+"</div>")
  $(".question-container").append("<div class='question-row' id='"+i+"'></div>")

  populateNumbers(i)
}

function populateNumbers(column){
  for(var i = 0; i < values.length; i++){
    $("#" + column).append("<button class='question' difficulty="+i+">"+values[i]+"</button>")
  }
}

var questions = {
  col0 : {
    diff0 : {
      text : "Name the state capitol of Maryland",
      answer : "Annapolis",
      dollarAmount : "200"
    },
    diff1 : {
      text : "",
      answer : "",
      dollarAmount : ""
    }
  },
  col1 : {
    diff0 : {
      text : "",
      answer : "",
      dollarAmount : ""
    },
    diff1 : {
      text : "what is my name",
      answer : "",
      dollarAmount : ""
    }
  }
};


$(".question-row").on("click", function(){
  // $(".question-row").addClass("active")
})

$(".question").on("click", function () {
  $('.questionCover').show();
  var difficulty = $(this).attr("difficulty");
  var category = $(this).parent().attr("id");
  var questionText = eval('questions.col'+difficulty+'.diff'+category+'.text');
  $('.questionCover').append('<p>'+questionText+'</p>');
})

$(".question").on("click", function () {
  $('.questionCover').show();
  var difficulty = $(this).attr("difficulty");
  var category = $(this).parent().attr("id");
  answerText = eval('questions.col'+difficulty+'.diff'+category+'.answer');
  var answer = $('<p>'+answerText+'</p>');
  $('.questionCover').append(answer);
  answer.hide();
  $('.questionCover').append('<input>')
  $("input").on("keypress", function(e){
    if(e.keyCode == 13){
      var userInput = $(this).val();
      if(userInput == answerText) {
        console.log("hi")
      }
    }
  })
})



// category = "categories[column]"


  // for(var  i = 0; i < questions.length; i++){
  //   console.log(questions[i].text);
  // }
  //
  //
  // for(var  i = 0; i < questions.length; i++){
  //   console.log(questions[i].text);
  // }

  // // create element for the question to be shown

  // append that element to the page
  // prompt the user for an answer
  // check to see if that user's answer is correct
    // if it is correct, add dollar to player
    // otherwise, substract from player


// var colors = new Array(
//   [62,35,255],
//   [60,255,60],
//   [255,35,98],
//   [45,175,230],
//   [255,0,255],
//   [255,128,0]);
//
// var step = 0;
// //color table indices for:
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0,1,2,3];
//
// //transition speed
// var gradientSpeed = 0.002;
//
// function updateGradient()
// {
//
//   if ( $===undefined ) return;
//
// var c0_0 = colors[colorIndices[0]];
// var c0_1 = colors[colorIndices[1]];
// var c1_0 = colors[colorIndices[2]];
// var c1_1 = colors[colorIndices[3]];
//
// var istep = 1 - step;
// var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// var color1 = "rgb("+r1+","+g1+","+b1+")";
//
// var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// var color2 = "rgb("+r2+","+g2+","+b2+")";
//
//  $('#gradient').css({
//    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//     background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
//
//   step += gradientSpeed;
//   if ( step >= 1 )
//   {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];
//
//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//
//   }
// }
//
// setInterval(updateGradient,10);
