"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/index.ts
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const postsContainer = document.getElementById("posts");
    try {
        const response = yield fetch("data/posts.json");
        const posts = yield response.json();
        posts.forEach((post) => {
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
            postsContainer === null || postsContainer === void 0 ? void 0 : postsContainer.appendChild(postElement);
        });
    }
    catch (error) {
        console.error("Error loading posts:", error);
    }
}));
