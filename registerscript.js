document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.querySelector(".alert-box");
  alertBox.style.display = "none"; // Initially hide the alert box

  const registerForm = document.querySelector("form");

  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the user input values from the form
    const nama = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a data object to send to the API
    const data = {
      nama,
      email,
      password,
    };

    // Make a POST request to the API
    try {
      console.log(data);
      const response = await fetch(
        "https://ets-pemrograman-web-f.cyclic.app/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(data), // Convert data to JSON format
        }
      );

      if (response.ok) {
        // Request was successful, you can handle the response here
        const responseData = await response.json();
        console.log("Register successful:", responseData);
        window.location.href = "login.html";
        // Redirect or perform other actions after a successful register
      } else {
        // Request failed, handle the error
        console.error("Register failed with status", response.status);
        alertBox.style.display = "block";
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("Register request error:", error);
    }
  });
});
