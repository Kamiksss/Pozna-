function emailCheck(Checker) {
  for (let index = 0; index < Checker.length; index++) {
    const char = Checker[index];
    if (char == "@") {
      return true;
      break;
    }
  }
  return false;
}

function main() {
  let mailSplit = [];
  mail = document.getElementById("Email").value;
  mailSplit = mail.split("");

  if (emailCheck(mailSplit) == true) window.alert("Zalogowano");
  else window.alert("Błędy adres email");
}
