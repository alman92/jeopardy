var categories = ["World Geography", "Mythology", "Women in Politics", "DC Universe", "Horror Movies", "Cult Classic Quotes"]
var values = ["$200", "$400", "$600", "$800", "$1000"]
var gameScore = $(".score")

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
      text : "The Dutch originally colonized this city and called it New Amsterdam.",
      answer : ["new york city", "new york", "nyc"],
      dollarAmount : 200
    },
    diff1 : {
      text : "It was along this degree parallel (north) in which the Korean peninsula was split in the Korean Armistice Agreement.",
      answer : ["38", "38th"],
      dollarAmount : 400
    },
    diff2 : {
      text : "This intracontinental city formally known as Constantinople, was the epicenter of the creation of the Modern New Testiment by Constantine, the first Roman Empire to denounce the Roman gods for Christianity.",
      answer : "istanbul",
      dollarAmount : 600
    },
    diff3 : {
      text : "The Golden Sultan of the Mali Kingdom, Mansa Musa, would lead the pilgramage to Mecca from Timbuktu across this desert.",
      answer : "sahara",
      dollarAmount : 800
    },
    diff4 : {
      text : "This Russian peninsula was declaired a military zone by the Soviets after World War II and wasn't opened to the public until 1990.",
      answer : "kamchatka",
      dollarAmount : 1000
    }
  },
  col1 : {
    diff0 : {
      text : "The Greeks believed in powerful rituals done by Oracles who are said to speak to Apollo and gain insight into the future.  Greeks would take trips from all over the Republic to this city to hear their visions.",
      answer : "delphi",
      dollarAmount : 200
    },
    diff1 : {
      text : "This Roman God of Time was cast out of Olympus after a rebellion by his children whom he had previously tried to silence by eating them.",
      answer : "saturn",
      dollarAmount : 400
    },
    diff2 : {
      text : "Seth, the Egyptian God of Chaos fought and killed Osiris to become King of Egypt only to be over thrown by him, the God of Sky and War.",
      answer : "horus",
      dollarAmount : 600
    },
    diff3 : {
      text : "This mountain nymph, who was having an affair with Zeus, would distract the Queen of the Gods, Hera, in long winded conversations to distract her from her fleeing husband.  When Hera found out, she cursed the nymph to only ever repeat the last words said to her.",
      answer : "echo",
      dollarAmount : 800
    },
    diff4 : {
      text : "The Norse gods would gather to make decisions about the goings on in Asgard.  The gathering and collaboration inspired this widely used word today.",
      answer : ["thing", "a thing"],
      dollarAmount : 1000
    }
  },
  col2 : {
    diff0 : {
      text : "A long term Member of Congress from San Francisco, she became the first woman to rise to party leadership and the Speakership in 2006.",
      answer : ["nancy pelosi", "pelosi"],
      dollarAmount : 200
    },
    diff1 : {
      text : "Dubbed the 'Iron Lady', her ruthless brand of conservatism riled many feathers in the British House of Commons.",
      answer : ["margaret thatcher", "thatcher"],
      dollarAmount : 400
    },
    diff2 : {
      text : "She declared a State of Emergency in India in 1975 which lasted two years in order to quell the opposition party unrest.",
      answer : ["indira gandhi", "gandhi"],
      dollarAmount : 600
    },
    diff3 : {
      text : "She was the first woman on a major party ticket in a United States presidential election.",
      answer : ["geraldine ferraro", "ferraro"],
      dollarAmount : 800
    },
    diff4 : {
      text : "Widely known in China as one of the most ruthless politicians in their histroy, the Dowager Empress Ci Xi is widely recognized as the person that facilitated the fall of this final Chinese dynasty.",
      answer : "qing",
      dollarAmount : 1000
    },
  },
  col3 : {
    diff0 :{
      text : "Kal-El and his cousin Kara Zor-El were cast into space to Earth from this planet to avoid planetary collapse.",
      answer : "krypton",
      dollarAmount : 200
    },
    diff1 : {
      text : "She became the Joker's right-hand lieutenant and tortured lover after she was the doctor assigned to him in Arkham Asylum.",
      answer : "harley quinn",
      dollarAmount : 400
    },
    diff2 : {
      text : "By going back in time to save his mother, he altered the future to create a world where Wonder Woman and Aquaman are waging an apocolyptic war between each other.",
      answer : ["the flash", "flash"],
      dollarAmount : 600
    },
    diff3 : {
      text :  "A magician whose magic is both untapped and infinite, she joins the Justice League Dark to take down Enchantress after she learns the witch has taken down Superman, Batman and Wonder Woman.",
      answer : "zatanna",
      dollarAmount : 800
    },
    diff4 : {
      text : "After Steve Trevor crash lands on Themyscira, Diana is alerted of the escape of this vengeful god into Man's World.  She decides to take the trials and become Wonder Woman to go off into the world and bring him to justice.",
      answer : "ares",
      dollarAmount : 1000
    },
  },
  col4 : {
    diff0 : {
      text : "This film adaptation of a popular Stephen King novel featured a famous line from the Johnny Carson Show.",
      answer : "the shining",
      dollarAmount : 200
    },
    diff1 : {
      text : "This film which was only given a $25,000 budget and only one hand held camera to film on, became a cult classic and a trail blazer for found-footage horror movies.",
      answer : ["the blair witch project", "blair witch"],
      dollarAmount : 400
    },
    diff2 : {
      text : "This film adaptation of a book by William Peter Blatty was released in 1973 and was met with complete shock and terror by its initial audience.  It became the first wide release film to have its rating be updated from R to X.",
      answer : ["the exorcist", "exorcist"],
      dollarAmount : 600
    },
    diff3 : {
      text : "This movie came out in 2014 and was widely praised for its cinematography and constant, growing anxiety.  It is believed by many to be a metaphor for contracting a sexually transmitted disease.",
      answer : "it follows",
      dollarAmount : 800
    },
    diff4 :{
      text : "Tom Cruise played this eloquent and manipulative monster in the film adaptation of Interview with a Vampire.",
      answer : "lestat",
      dollarAmount : 1000
    },
  },
  col5 : {
    diff0 : {
      text : "\"Just try and stay out of my way. Just try! I'll get you, my pretty, and your little dog, too!\"",
      answer : ["the wizard of oz", "wizard of oz"],
      dollarAmount : 200
    },
    diff1 : {
      text : "\"Tyler Durden, '__________ was the beginning, now it's moved out of the basement, it's called Project Mayhem.\"",
      answer : "fight club",
      dollarAmount : 400
    },
    diff2 : {
      text : "\"Oh my god Karen you can't just go asking people why they're white.\"",
      answer : "mean girls",
      dollarAmount : 600
    },
    diff3 : {
      text : "\"That's just like...your opinion man.\"",
      answer : ["the big lebowski", "big lebowski"],
      dollarAmount : 800
    },
    diff4 : {
      text :"\"1.21 gigawatts! 1.21 gigawatts. Great Scott!\"",
      answer : "back to the future",
      dollarAmount : 1000
    }
  },
}

$(".question").on("click", goToQuestion);
function goToQuestion() {
  $(this).off("click").addClass("asked");
  console.log(this);
  $('.questionCover').fadeIn(300);
  var difficulty = $(this).attr("difficulty");
  var category = $(this).parent().attr("id");
  var questionText = eval('questions.col'+category+'.diff'+difficulty+'.text');
  $('.questionCover').append('<p>'+questionText+'</p>');
}

$(".question").on("click", function () {
  $('.questionCover').fadeIn(300);
  var difficulty = $(this).attr("difficulty");
  var category = $(this).parent().attr("id");
  answerText = eval('questions.col'+category+'.diff'+difficulty+'.answer');
  var answer = $('<p>'+answerText+'</p>');
  $('.questionCover').append(answer);
  answer.fadeOut(300);
  $('.questionCover').append('<input>')
  $("input").on("keypress", function(e){
    if(e.keyCode == 13){
      var userInput = $(this).val();
      var initialScore = gameScore.html()
      var score = parseInt(initialScore.trim().split(":")[1])
      var actDollarAmount = eval('questions.col'+category+'.diff'+difficulty+'.dollarAmount');
      if(answerText.includes(userInput.toLowerCase()) || userInput.toLowerCase() == answerText){
        var total = score + actDollarAmount
        gameScore.html('Score : ' + "$" + total)
      }else{
        var total = score - actDollarAmount
        gameScore.html('Score : ' + "$" + total)
      }

  $(".questionCover").empty();
  $(".questionCover").fadeOut(300);
    }
  })
})
