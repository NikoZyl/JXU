function sub1() {
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const emailaddress = document.getElementById("emailaddress").value.trim();
  const phonenumber = document.getElementById("phonenumber").value.trim();
  const message = document.getElementById("message").value.trim();
  //Detects if all spaces are filled
  if (!firstname || !lastname || !emailaddress || !phonenumber || !message) {
    alert("Please fill in all fields.");
    return;
  }
  //Detect if the phone number is formatted correctly
  if (isNaN(phonenumber)) {
    alert("Phone number must be numeric!");
    return;
  }
  //Detect whether the mailbox is formatted correctly
  if (emailaddress.indexOf("@")!== 1) {
    alert("Please enter the correct email format!")
    return;
  }
  //Checks whether the name format is correct
  if (!/^[a-zA-Z]+$/.test(firstname) || !/^[a-zA-Z]+$/.test(lastname)) {
    alert("First name and last name must contain only letters!");
    return;
  }
  //The limit is 100 characters
  if (message.split(" ").length >100) {
    alert("Message must be a maximum of 100 words!");
    return;
  }
  alert("succeed!");
}