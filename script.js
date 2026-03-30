const blogPostForm = document.getElementById("blogPostForm");
const submitButton = document.getElementById("submitBlogPost");
const titleField = document.getElementById("blogTitle");
const blogDescriptionField = document.getElementById("blogDescription");
const blogPostIdeas = [];


// Add event listener for form submission
blogPostForm.addEventListener("submit", handleSubmitForm);

//Function for handling form submission
function handleSubmitForm(event) {
    event.preventDefault();
    console.log('I am fired');

    // Reset messages first
    titleField.setCustomValidity("");
    blogDescriptionField.setCustomValidity("");


    if (titleField.value.trim() === "") {
        titleField.setCustomValidity("Please enter a blog title ✍️");
    }

    if (blogDescriptionField.value.trim() === "") {
        blogDescriptionField.setCustomValidity("Don't forget to add a description 📝");
    }

    // Use default checks integrated in form submission handling to ensure required fields are not empty
    if (!blogPostForm.checkValidity()) {
        blogPostForm.reportValidity();
        return;
    }
}


