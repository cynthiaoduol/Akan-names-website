function submition() {
  /* declaration  and initialisation */
  var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year.toString().slice(2, 4));
  //  var cc=(yy-1)/100+1;
  var cc = Math.ceil(year / 100)
  /* the formula */
  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var boyNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girlNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];





}