// Blog Data with Images, Descriptions, Likes, and Comments
const blogs = [
    {
        id: 1,
        title: "Mastering Modern CSS Grid and Flexbox",
        description: "Learn how to build responsive, fluid layouts efficiently using CSS Grid and Flexbox properties.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
        likes: 12,
        comments: ["Very useful guide!", "Thanks for sharing this!"]
    },
    {
        id: 2,
        title: "Introduction to JavaScript ES6 Features",
        description: "Explore arrow functions, destructuring, template literals, and other modern ES6 JavaScript essentials.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
        likes: 25,
        comments: ["Clear explanations!", "Helped me understand arrow functions better."]
    },
    {
        id: 3,
        title: "The Future of Web Development with AI",
        description: "How artificial intelligence tools are reshaping web development workflows, coding speed, and UI design.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
        likes: 40,
        comments: ["AI is truly changing everything.", "Excited for the future!"]
    }
];

const blogGrid = document.getElementById("blog-grid");

// Render Blog Posts dynamically
function renderBlogs() {
    blogGrid.innerHTML = "";
    blogs.forEach(blog => {
        const card = document.createElement("div");
        card.classList.add("blog-card");

        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-img">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <div class="blog-interactions">
                    <button class="like-btn" onclick="likeBlog(${blog.id})">❤️ <span>${blog.likes}</span></button>
                    <button class="comment-toggle-btn" onclick="toggleComments(${blog.id})">Comments (${blog.comments.length})</button>
                </div>
                <div class="comments-section" id="comments-section-${blog.id}">
                    <ul class="comment-list" id="comment-list-${blog.id}">
                        ${blog.comments.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                    <div class="comment-input-group">
                        <input type="text" id="comment-input-${blog.id}" placeholder="Write a comment...">
                        <button onclick="addComment(${blog.id})">Post</button>
                    </div>
                </div>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

// Like functionality
function likeBlog(id) {
    const blog = blogs.find(b => b.id === id);
    if (blog) {
        blog.likes++;
        renderBlogs();
    }
}

// Toggle Comment Section
function toggleComments(id) {
    const section = document.getElementById(`comments-section-${id}`);
    section.classList.toggle("active");
}

// Add Comment functionality
function addComment(id) {
    const input = document.getElementById(`comment-input-${id}`);
    const commentText = input.value.trim();
    if (commentText !== "") {
        const blog = blogs.find(b => b.id === id);
        if (blog) {
            blog.comments.push(commentText);
            input.value = "";
            renderBlogs();
            document.getElementById(`comments-section-${id}`).classList.add("active");
        }
    }
}

// Mobile Hamburger Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));

// Contact form submission event
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been sent successfully.");
    e.target.reset();
});

// Initial Render
renderBlogs();