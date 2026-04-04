Personal Blog Platform (Interactive CRUD App with localStorage)

Project Overview
This project is a simple interactive personal blog platform built using HTML, CSS, and JavaScript. It allows users to create, display, edit, and delete blog posts while persisting data using the browser's localStorage.

The application demonstrates core JavaScript concepts including DOM manipulation, event handling, modular function design, and state management using arrays and objects. It also reinforces practical implementation of CRUD operations (Create, Read, Update, Delete).

Features
Create new blog posts with a title and description
Display all posts dynamically on the page
Edit existing posts using a pre-filled form
Delete posts from both the UI and localStorage
Form validation with custom error messages
Persistent storage using localStorage
Dynamic rendering without page refresh


How to Run the Application
No additional setup or dependencies are required.
1. Download or clone the repository.
2. Open the project folder.
3. Open the index.html file in any modern web browser.
That’s it — the application runs entirely in the browser.

How the Application Works
Data Model
Blog posts are stored as objects with the following structure:
  id (unique identifier)
  title
  description

All posts are stored in an array (blogPostIdeas), which serves as the application's state.

Creating Posts

Users fill out a form with a title and description.
Form validation ensures both fields are required.
On submission:
  A new post object is created
  A unique ID is generated using crypto.randomUUID()
  The post is added to the array
  The updated array is saved to localStorage
  The UI is re-rendered

---

Displaying Posts
Posts are rendered dynamically using JavaScript.
Each post includes:
  Title
  Description
  Edit button
  Delete button
A data attribute data-id is used to associate DOM elements with their corresponding data objects.


Editing Posts
Clicking the Edit button:
  Identifies the selected post using its ID
  Populates the form fields with the existing data
  Stores the post ID in the form using a dataset property (editingId`)

On form submission:
  The application checks if an editingId` exists
  If it does, the corresponding post is updated instead of creating a new one
  The ID remains unchanged, ensuring the same post is modified in place

Deleting Posts
Clicking the Delete button:
  Identifies the post using its ID
  Removes it from the array using filter`
  Updates localStorage
  Re-renders the UI

Data Persistence with localStorage
Posts are saved to localStorage using JSON.stringify`
On page load:
  Data is retrieved using JSON.parse`
  If no data exists, an empty array is used as a fallback
Any updates (create, edit, delete) are immediately persisted


Form Validation
Both title and description are required fields
Custom validation messages are displayed using:
  setCustomValidity()`
  reportValidity()`
Validation is enforced before any data is added or updated

Development Process Reflection
During development, the main challenge was managing the distinction between creating a new post and editing an existing one. Initially, the add function handled saving and rendering, which worked for new posts but created inconsistency when editing posts directly.
This was resolved by:
Introducing an editingId` stored on the form using dataset properties
Separating concerns so the submit handler determines whether to create or update
Updating posts in place rather than generating new IDs during edits

Another key learning was understanding how DOM elements and data are connected using data-id attributes. This allowed precise targeting of posts when editing or deleting.
Additionally, implementing proper state synchronization between:
The in-memory array
localStorage
The UI

required careful sequencing to ensure all three remained consistent after every operation.

Known Issues / Limitations
There is no confirmation prompt before deleting a post
 No timestamps are stored for posts
No sorting or filtering functionality is implemented
No backend or database integration (data is limited to the browser via localStorage)
No support for rich text formatting in post content
Duplicate titles are allowed (no uniqueness constraint)


Future Improvements
Add timestamps to posts
Add confirmation modal before deletion
Implement sorting (newest/oldest)
Add search or filtering functionality
Improve UI/UX with better styling or a modal edit form
Add backend integration (API + database)

Key Takeaways
Understanding CRUD operations in a frontend context
Using dataset attributes to link UI elements to data
Managing application state using arrays and objects
Using localStorage for persistence
Implementing conditional logic to differentiate between create and update workflows
Applying form validation using built-in browser APIs


Author

Fabiola Aurelien