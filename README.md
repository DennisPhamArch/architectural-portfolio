# Dennis Pham Portfolio Website

This is a multi-page static portfolio website. It has been restyled into a minimal editorial grid layout inspired by the reference images: cream background, black border lines, monochrome images, small uppercase labels, and asymmetric project cards.

## Open the website

1. Unzip the folder.
2. Double-click `index.html`.
3. The site will open in your browser.

## Main files

- `index.html` — homepage / project index
- `about.html` — about page
- `contact.html` — contact page
- `projects/` — individual project pages
- `projects.js` — edit project names, categories, descriptions, thumbnails, GIFs, and videos
- `script.js` — creates the project grid automatically
- `styles.css` — visual style, grid layout, typography, borders, spacing, responsive layout
- `assets/images/` — image and GIF thumbnails
- `assets/videos/` — MP4/WebM video thumbnails

## Change a project thumbnail

Open `projects.js` and edit the media part.

### Still image

```js
mediaType: "image",
src: "assets/images/my-thumbnail.jpg"
```

### GIF thumbnail

GIFs use the same image setting:

```js
mediaType: "image",
src: "assets/images/my-animation.gif"
```

### Video thumbnail

```js
mediaType: "video",
src: "assets/videos/my-video.mp4",
poster: "assets/images/my-poster.jpg"
```

The video preview plays when you hover over the project card.

## Change card size

In `projects.js`, edit the `size` value:

```js
size: "normal"
```

Options:

- `normal` — standard 4-column card
- `large` — wide feature card
- `tall` — vertical editorial card

## Add a new project

1. Duplicate one object inside `projects.js`.
2. Change the title, year, category, description, tags, page, and media.
3. Duplicate one HTML page inside the `projects/` folder.
4. Rename the duplicated page.
5. Update the `page:` path in `projects.js`.

Example:

```js
{
  title: "New Project Name",
  year: "2026",
  category: "Architecture",
  size: "large",
  description: "Short project description.",
  tags: ["Tag one", "Tag two", "Tag three"],
  page: "projects/new-project.html",
  mediaType: "image",
  src: "assets/images/new-project.jpg",
  alt: "Description of the thumbnail"
}
```

## Change the style

Open `styles.css`.

Useful variables are at the top:

```css
:root {
  --paper: #efeee8;
  --paper-soft: #f7f6f1;
  --ink: #080808;
  --line: #141414;
}
```

You can change the cream background, black line colour, page width, and spacing there.

## Publish online

You can host this as a static website using GitHub Pages, Netlify, Vercel, or any basic web hosting service. Upload the whole folder and keep the same file structure.
