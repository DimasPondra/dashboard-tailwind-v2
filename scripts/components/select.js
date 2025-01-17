let listOptionStatusOpen = [];

// Open list option
let showListOption = (selectId) => {
    let listOption = document.getElementById(selectId);

    if (listOption.classList.contains("hidden")) {
        // Close another list option
        closeLists();

        listOption.classList.replace("hidden", "flex");

        listOptionStatusOpen.push(selectId);
    }
};

// Choice item
let choiceItem = (item, event) => {
    const idListOption = event.target.parentElement.parentElement.id;
    let listOption = document.getElementById(idListOption);

    const parentElement = listOption.parentElement;

    // Close list option after choice item
    if (listOption.classList.contains("flex")) {
        listOption.classList.replace("flex", "hidden");
    }

    // Change text select after choice item
    parentElement.childNodes.forEach((element) => {
        if (
            element.tagName === "DIV" &&
            element.getAttribute("data-toogle-id") === idListOption
        ) {
            element.childNodes.forEach((child) => {
                if (child.tagName === "DIV" && child.id === "select-text") {
                    child.textContent = item;
                }
            });
        }
    });

    // After change text create a hidden input
    const createHiddenInput = document.createElement("input");
    createHiddenInput.type = "hidden";
    createHiddenInput.name = idListOption;
    createHiddenInput.id = "select-" + idListOption;
    createHiddenInput.value = item;

    if (parentElement.querySelectorAll("input").length > 0) {
        parentElement.querySelectorAll("input").forEach((i) => {
            i.remove();
        });
        parentElement.appendChild(createHiddenInput);
    } else {
        parentElement.appendChild(createHiddenInput);
    }
};

// Close list option
document.addEventListener("click", (event) => {
    if (
        event.target.tagName === "DIV" &&
        event.target.getAttribute("data-toogle-id") !== null
    ) {
        // Do nothing.
    } else {
        closeLists();
    }
});

let closeLists = () => {
    listOptionStatusOpen.forEach((list) => {
        const elementListOption = document.getElementById(list);
        if (elementListOption.classList.contains("flex")) {
            elementListOption.classList.replace("flex", "hidden");
        }
    });

    listOptionStatusOpen = [];
};

const form = document.getElementById("myForm");
const saveButton = document.getElementById("save-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form, saveButton);
    console.log(formData);
});
