const blogPostForm = document.getElementById("blogPostForm");
const submitButton = document.getElementById("submitBlogPost");
const titleField = document.getElementById("blogTitle");
const blogDescriptionField = document.getElementById("blogDescription");

let blogPostIdeas = [];

// Call to load blog posts on start
loadBlogPosts();

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

    // Reset form
    blogPostForm.reset();
}


// Function to save the blog to array and render the list dynamically
function addBlogPost(blogTitle, blogDescription) {

    // Create the blog post object to contain title and description
    let blogPost =
    {
        id: crypto.randomUUID(),
        title: blogTitle,
        description: blogDescription,
    };

    // Add to array
    blogPostIdeas.push(blogPost);

    // Store to localStorage and display to screen
    saveBlogPosts();
    renderBlogPosts();
}



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
        displayDelete.addEventListener("click", handleDelete);
        const displayEdit = document.createElement("button")
        displayEdit.textContent = 'edit';
        displayEdit.addEventListener("click", handleEdit);

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

// Function to handle deletion of targeted post
function handleDelete(event) {
    console.log(event);
    const deletedPost = event.target.parentElement;
    console.log(deletedPost);
    deletedPost.remove();
    renderBlogPosts;
}

function handleEdit(event) {

}

// Function to store blog post in localStorage
function saveBlogPosts() {
    localStorage.setItem("blogPosts", JSON.stringify(blogPostIdeas));
}

function loadBlogPosts() {
    blogPostIdeas = JSON.parse(localStorage.getItem("blogPosts")) || [];
    renderBlogPosts();
}


function renderBlogPosts() {
    displayOutput.innerHTML = "";

    const fragContainer = document.createDocumentFragment();

    for (let i = 0; i < blogPostIdeas.length; i++) {

        const post = blogPostIdeas[i];

        const displayTitle = document.createElement("h5");
        const displayDescription = document.createElement("p");

        displayTitle.textContent = post.title;
        displayDescription.textContent = post.description;

        const displayDelete = document.createElement("button");
        displayDelete.textContent = "delete";
        displayDelete.addEventListener("click", handleDelete);

        const displayEdit = document.createElement("button");
        displayEdit.textContent = "edit";
        displayEdit.addEventListener("click", handleEdit);

        const divWrapper = document.createElement("div");
        divWrapper.classList.add("blog-post");
        divWrapper.dataset.id = post.id; 

        divWrapper.appendChild(displayTitle);
        divWrapper.appendChild(displayDescription);
        divWrapper.appendChild(displayEdit);
        divWrapper.appendChild(displayDelete);

        fragContainer.appendChild(divWrapper);
    }

    displayOutput.appendChild(fragContainer);
}


function handleDelete(event) {

    const postEl = event.target.closest(".blog-post");
    const id = postEl.dataset.id;

    blogPostIdeas = blogPostIdeas.filter(post => post.id !== id);

    saveBlogPosts();
    renderBlogPosts();
}

function handleEdit(event) {

    const postEl = event.target.closest(".blog-post");
    const id = postEl.dataset.id;

    const post = blogPostIdeas.find(p => p.id === id);

    titleField.value = post.title;
    blogDescriptionField.value = post.description;

    // store editing id on form
    blogPostForm.dataset.editingId = id;
}
