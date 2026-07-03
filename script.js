const grid = document.querySelector("#projectGrid");
const buttons = document.querySelectorAll(".filter-btn");
const projectCount = document.querySelector("#projectCount");

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function createMedia(project) {
  const wrapper = document.createElement("div");
  wrapper.className = "thumb";

  if (project.mediaType === "video") {
    const video = document.createElement("video");
    video.src = project.src;
    video.poster = project.poster || "";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", project.alt || project.title);

    wrapper.appendChild(video);

    wrapper.addEventListener("mouseenter", () => video.play().catch(() => {}));
    wrapper.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  } else {
    const img = document.createElement("img");
    img.src = project.src;
    img.alt = project.alt || project.title;
    img.loading = "lazy";
    wrapper.appendChild(img);
  }

  const label = document.createElement("span");
  label.className = "media-label";
  label.textContent = project.mediaType === "video" ? "Motion" : project.src.endsWith(".gif") ? "GIF" : "Image";
  wrapper.appendChild(label);

  return wrapper;
}

function renderProjects(filter = "All") {
  if (!grid) return;
  grid.innerHTML = "";

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter || project.tags.includes(filter));

  if (projectCount) projectCount.textContent = formatNumber(filteredProjects.length);

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("a");
    card.className = `project-card ${project.size || "normal"}`;
    card.href = project.page;
    card.setAttribute("data-category", project.category);

    card.appendChild(createMedia(project));

    const info = document.createElement("div");
    info.className = "card-info";
    info.innerHTML = `
      <div class="card-main">
        <div class="card-kicker">
          <span>(${formatNumber(index + 1)})</span>
          <span>${project.year}</span>
        </div>
        <h2 class="card-title">${project.title}</h2>
      </div>
      <div class="card-side">
        <div>
          <p class="card-description">${project.description}</p>
          <div class="tag-row">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
        <span class="card-view">View project</span>
      </div>
    `;

    card.appendChild(info);
    grid.appendChild(card);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
