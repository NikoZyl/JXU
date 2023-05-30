function sub1() {
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const emailaddress = document.getElementById("emailaddress").value.trim();
  const phonenumber = document.getElementById("phonenumber").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!firstname || !lastname || !emailaddress || !phonenumber || !message) {
    alert("Please fill in all fields.");
    return;
  }
  if (isNaN(phonenumber)) {
    alert("Phone number must be numeric!");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(firstname) || !/^[a-zA-Z]+$/.test(lastname)) {
    alert("First name and last name must contain only letters!");
    return;
  }
  if (message.split(" ").length >100) {
    alert("Message must be a maximum of 100 words!");
    return;
  }
  alert("succeed!");
}