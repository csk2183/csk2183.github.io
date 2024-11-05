
  // src/index.ts
document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts");

  try {
    const response = await fetch("data/posts.json");
    const posts = await response.json();

    posts.forEach((post: { title: string; date: string; content: string }) => {
      const postElement = document.createElement("div");
      postElement.className = "card mt-4";
      postElement.innerHTML = `
        <div class="card-header">
          ${post.title} - <small>${post.date}</small>
        </div>
        <div class="card-body">
          <p class="card-text">${post.content}</p>
        </div>
      `;
      postsContainer?.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error loading posts:", error);
  }
});
async function loadNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    try {
      const response = await fetch("navbar.html");
      if (response.ok) {
        navbarContainer.innerHTML = await response.text();
      } else {
        console.error("Navbar loading failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error loading navbar:", error);
    }
  }
}

// Load navbar on DOMContentLoaded
document.addEventListener("DOMContentLoaded", loadNavbar);
