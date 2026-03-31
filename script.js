const blogPostForm = document.getElementById("blogPostForm");
const submitButton = document.getElementById("submitBlogPost");
const titleField = document.getElementById("blogTitle");
const blogDescriptionField = document.getElementById("blogDescription");
let blogPostIdeas = [];


// Add event listener for form submission
blogPostForm.addEventListener("submit", handleSubmitForm);

//Function for handling form submission validation checks and custom error messages
function handleSubmitForm(event) {
    event.preventDefault();
    console.log('I am fired');

    // Reset messages first
    titleField.setCustomValidity("");
    blogDescriptionField.setCustomValidity("");

    // Set custom messages
    if (titleField.value.trim() === "") {
        titleField.setCustomValidity("You must add a title ✍️");
    }

    if (blogDescriptionField.value.trim() === "") {
        blogDescriptionField.setCustomValidity("You must add a description as well✍️");
    }

    // Use default checks integrated in form submission handling to report error messages
    if (!blogPostForm.checkValidity()) {
        blogPostForm.reportValidity();
        return;
    }

    addBlogPost(titleField.value, blogDescriptionField.value);
}

// Function to save the blog to array and render the blog list dynamically
function addBlogPost(blogTitle, blogDescription) {

    // Create the blog post object to contain title and description
    let blogPost =
    {
        title: blogTitle,
        description: blogDescription,
    }

    // Add to array
    blogPostIdeas.push(blogPost);
    console.log(blogPostIdeas);
    renderBlogPosts();
}

 blogPostForm.reset();

// Render blog posts
function renderBlogPosts() {
     // Clear out display output for re-rendering
     displayOutput.innerHTML = "";

    const fragContainer = document.createDocumentFragment();

    for (let i = 0; i < blogPostIdeas.length; i++) {

        // Create new elements for each post in the array
        const displayTitle = document.createElement("h5");
        const displayDescription = document.createElement("p");
        const displayDelete = document.createElement("button");
        displayDelete.textContent = 'delete';
        const displayEdit = document.createElement("button")
        displayEdit.textContent = 'edit';

        // Wrapper to wrap each post before appending to fragContainer per Chat's recommendation for ease of future deletion
        const divWrapper = document.createElement("div");



        displayTitle.textContent = blogPostIdeas[i].title;
        displayDescription.textContent = blogPostIdeas[i].description;


        divWrapper.appendChild(displayTitle);
        divWrapper.appendChild(displayDescription);
        divWrapper.appendChild(displayEdit);
        divWrapper.appendChild(displayDelete);

        fragContainer.appendChild(divWrapper);
    }
    displayOutput.appendChild(fragContainer);

    blogPostForm.reset();
}


