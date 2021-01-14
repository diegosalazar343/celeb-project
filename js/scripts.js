function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 7){
    celebrity = "jb";
  } else if(total <= 11){
    celebrity = "Zendaya";
  } else if(total <= 15) {
    celebrity = "Kanye";
  } else {
    celebrity = "Kim K";
  }
}

$(document).ready(function() {
  $("form#celeb").submit(function() {
    event.preventDefault();

    const color = parseInt($("#color").val());
    const food = parseInt($("#food").val());
    const vacation = parseInt($("#vacation").val());
    const friday = parseInt($("#friday").val());
    const season = parseInt($("#season").val());
    let celebrity = results(color, food, vacation, friday, season);


  });
});
