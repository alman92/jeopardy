var categories = ["World Geography and Harambe", "2", "3", "4", "5", "6"]

for(var i = 0; i < categories.length; i++){
  $(".categories").append("<div class='catTitle'>"+categories[i]+"</div>")
  $(".question-container").append("<div class='question-row' id='"+categories[i]+"'></div>")
}

var values = ["$200", "$400", "$600", "$800", "$1000"]

// for(var i = 0; i <
