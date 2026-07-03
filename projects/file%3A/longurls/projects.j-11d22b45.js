/*
  Edit your project thumbnails here.

  mediaType options:
  - "image" for .jpg, .png, .webp, or .gif
  - "video" for .mp4, .webm, or .mov converted for web

  Put files inside:
  - assets/images/
  - assets/videos/

  For GIFs, use mediaType: "image" and point src to your .gif file.

  size options:
  - "normal" = 4-column card
  - "large" = wide feature card
  - "tall" = vertical editorial card
*/

const projects = [
  {
    title: "Reframing Timber Facility",
    year: "2026",
    category: "Architecture",
    size: "large",
    description: "A no-waste timber facility exploring reclaimed timber, public showroom space, and material education.",
    tags: ["Timber", "Adaptive reuse", "Sustainability"],
    page: "projects/reframing-timber.html",
    mediaType: "image",
    src: "assets/images/reframing-timber.svg",
    alt: "Warm architectural timber structure"
  },
  {
    title: "Reclaimed Kitchen Module",
    year: "2025",
    category: "Urban Design",
    size: "normal",
    description: "Flood-resilient public space strategies using bioswales, shading, and community-scaled water systems.",
    tags: ["WSUD", "Climate", "Public space"],
    page: "projects/bluegreen-futures.html",
    mediaType: "image",
    src: "assets/images/bluegreen-futures.svg",
    alt: "Urban street and public realm"
  },
  {
    title: "Swamp Studio Mapping",
    year: "2025",
    category: "Research",
    size: "tall",
    description: "A visual mapping project about Country, seasonal systems, ecological memory, and layered histories.",
    tags: ["Mapping", "Country", "Ecology"],
    page: "projects/swamp-studio.html",
    mediaType: "image",
    src: "assets/images/swamp-studio.svg",
    alt: "Landscape and wetland atmosphere"
  },
  {
    title: "Material Kitchen Module",
    year: "2026",
    category: "Object Design",
    size: "normal",
    description: "A kitchen module made from offcuts, reclaimed timber, ceramic tiles, aluminium, and plywood elements.",
    tags: ["Prototype", "Reuse", "Craft"],
    page: "projects/kitchen-module.html",
    mediaType: "image",
    src: "assets/images/kitchen-module.svg",
    alt: "Interior kitchen workbench"
  },
  {
    title: "Abu Dhabi Housing Study",
    year: "2025",
    category: "Urban Research",
    size: "large",
    description: "A heat-responsive suburb study exploring shaded corridors, housing diversity, and social infrastructure.",
    tags: ["Heat", "Housing", "Urbanism"],
    page: "projects/abu-dhabi-housing.html",
    mediaType: "image",
    src: "assets/images/abu-dhabi-housing.svg",
    alt: "Desert city skyline"
  },
  {
    title: "Add Your Video Project",
    year: "2026",
    category: "Animation",
    size: "normal",
    description: "Example card for an MP4 thumbnail. Replace the src with your own video file path.",
    tags: ["Video", "GIF", "Interactive"],
    page: "projects/video-thumbnail-example.html",
    mediaType: "video",
    src: "assets/videos/example-thumbnail.mp4",
    poster: "assets/images/video-poster.svg",
    alt: "Example video thumbnail"
  }
];
