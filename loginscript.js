document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the user input values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a data object to send to the API
    const data = {
      email,
      password,
    };

    // Make a POST request to the API
    try {
      const response = await fetch(
        "https://ets-pemrograman-web-f.cyclic.app/users/login",
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
        console.log("Login successful:", responseData.data.access_token);
        // Redirect or perform other actions after a successful login
        localStorage.setItem("access_token", responseData.data.access_token);
        window.location.href = "home.html";
      } else {
        // Request failed, handle the error
        console.error("Login failed with status", response.status);
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("Login request error:", error);
    }
  });
});
