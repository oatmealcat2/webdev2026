// IC12 – COSC 2328 – Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

// -- Element Select by Id --

const statusBox = document.getElementById("status-box");
statusBox.textContent = "DOM is ready? Elements successfully selected.";
console.log("StatusBox:", statusBox);

// -- Element Select by querySelector -- 

const firstCard = document.querySelector(".card");
firstCard.querySelector("p").textContent = "This card was selected using querySelector!";

// -- classList.add --- 

firstCard.classList.add("highlight");
statusBox.classList.add("active");

// element select with QuerySelectAll -- 

const listItems = document.querySelectorAll(".list-item");

listItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.classList.add("highlight");
    }
});

// --- classList.toggle + classList.remove ---

const thirdCard = document.querySelector("#card-3");
thirdCard.classList.toggle("hidden");

const secondCard = document.querySelector("#card-2");
secondCard.classList.remove("card");

// -- textContent vs InnerHtml

const secondCardParagraph = secondCard.querySelector("p");
secondCardParagraph.textContent = "Safe update: even text like <script>alert('hack')</script> renders as plain characters, not real HTML";