function doPost(e) {
    var firstName = e.parameter.first_name;
    var middleName = e.parameter.middle_name;
    var lastName = e.parameter.last_name;
    var suffix = e.parameter.suffix;
    var email = e.parameter.email;
    var message = e.parameter.message;
    
    var recipient = "inkspireandservices27@gmail.com";  // Change this to your Gmail address
    var subject = "New Contact Form Submission";
    var body = `
      First Name: ${firstName}\n
      Middle Name: ${middleName}\n
      Last Name: ${lastName}\n
      Suffix: ${suffix}\n
      Email: ${email}\n
      Message: ${message}
    `;
    
    MailApp.sendEmail(recipient, subject, body);
    
    return ContentService.createTextOutput("Form submitted successfully.");
  }
  