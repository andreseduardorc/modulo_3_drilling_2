function convert() {
  document.querySelector("input").setAttribute("disabled", true);
  document.getElementById("bigC").innerHTML = "°F";

  let temp_1 = document.getElementById("bigTemp");
  let temp_2 = temp_1.innerHTML * 1.8 + 32;
  temp_1.innerHTML = temp_2;

  let temp_sunday = document.getElementById("sun");
  let temp_sunday_f = temp_sunday.innerHTML * 1.8 + 32;
  temp_sunday.innerHTML = temp_sunday_f;

  let temp_monday = document.getElementById("mon");
  let temp_monday_f = temp_monday.innerHTML * 1.8 + 32;
  temp_monday.innerHTML = Math.round(temp_monday_f);

  let temp_tuesday = document.getElementById("tue");
  let temp_tuesday_f = temp_tuesday.innerHTML * 1.8 + 32;
  temp_tuesday.innerHTML = temp_tuesday_f;

  let temp_wednesday = document.getElementById("wed");
  let temp_wednesday_f = temp_wednesday.innerHTML * 1.8 + 32;
  temp_wednesday.innerHTML = temp_wednesday_f;

  let temp_thursday = document.getElementById("thu");
  let temp_thursday_f = temp_thursday.innerHTML * 1.8 + 32;
  temp_thursday.innerHTML = temp_thursday_f;

  let temp_friday = document.getElementById("fri");
  let temp_friday_f = temp_friday.innerHTML * 1.8 + 32;
  temp_friday.innerHTML = Math.round(temp_friday_f);

  let temp_saturday = document.getElementById("sat");
  let temp_saturday_f = temp_saturday.innerHTML * 1.8 + 32;
  temp_saturday.innerHTML = temp_saturday_f;
}
