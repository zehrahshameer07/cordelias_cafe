document.getElementById("fetchInventory").addEventListener("click", fetchCakeInventory);

function fetchCakeInventory() {
    // 1. Create an XMLHttpRequest object (Open the connection - Gathering Information)
    const xhr = new XMLHttpRequest();

    // 2. Request Initialization (Set the URL for the request)
    const url = "http://localhost:3000/cakes";

    // 3. Open the connection (Specify HTTP method and URL)
    xhr.open("GET", url, true);

    // 4. Define a callback method to handle the server response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response from the server
            const response = JSON.parse(xhr.responseText);

            // Display the inventory in the web page
            displayInventory(response);
        } else if (xhr.readyState === 4) {
            // Handle error
            document.getElementById("inventory").innerHTML =
                "Failed to load inventory. Please try again later.";
        }
    };

    // 5. Send the request to the server
    xhr.send();
}

// Helper function to display the inventory on the page
function displayInventory(inventory) {
    const inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = "<h2>Cake Inventory:</h2>";

    const ul = document.createElement("ul");
    inventory.forEach((cake) => {
        const li = document.createElement("li");
        li.textContent = `${cake.name} - ${cake.price} - ${cake.stock} available`;
        ul.appendChild(li);
    });

    inventoryDiv.appendChild(ul);
}
