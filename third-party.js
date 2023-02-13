function parseSocialSecurityNumber(response) {
  const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"], "ssn":"'+response.ssn+'"}';
  const myObj = JSON.parse(myJSON);
}
