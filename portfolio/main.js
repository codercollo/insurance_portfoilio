
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling effect
          block: 'start' // Align to the top of the section
        });
      }
    });
  });


  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active"); // Switch icons
  });

  function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "itscollinsmaina@gmail.com",
      Password : "c@ndyBAR111",
      To : 'itscollinsmaina@gmail.com',
      From : document.getElementById('email').value,
      Subject : "Qoute Leads ",
      Body : "Name:" +  document.getElementById('name').value
            + "Phone:" +  document.getElementById('phone').value
            + "Email:" +  document.getElementById('email').value
            + "Insurance Class:" +  document.getElementById('insurance_class').value
            + "Message:" +  document.getElementById('message').value
  }).then(
    message => alert("Sent successfully !")
  );
  }