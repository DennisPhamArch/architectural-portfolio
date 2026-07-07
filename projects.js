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
    tags: ["Second Edition","Timber", "Adaptive reuse", "Sustainability"],
    page: "projects/1-reclaimed-timber-facility.html",
    mediaType: "image",
    src: "assets/images/6.png",
    alt: "Warm architectural timber structure"
  },
  {
    title: "Reclaimed Kitchen Module",
    year: "2026",
    category: "Object Design",
    size: "normal",
    description: "A kitchen module made from offcuts and reclaimed materials.",
    tags: ["Second Edition","Prototype", "Reuse", "Craft"],
    page: "projects/2-kitchen-module.html",
    mediaType: "video",
    src: "assets/videos/0317(2).mp4",
    poster: "assets/images/kitchen-poster.jpg",
    alt: "Interior kitchen workbench"
  },
  {
    title: "Ariosa",
    year: "2023",
    category: "Architecture",
    size: "tall",
    description: "A serviced apartment adaptively designed for the tropical climate of Ho Chi Minh City's high density urban center, using active ventilation and compact installation.",
    tags: ["Hospitality", "Climate", "Archdaily"],
    page: "projects/3-ariosa.html",
    mediaType: "image",
    src: "assets/images/a-136.jpg",
    alt: "Urban street and public realm"
  },
  {
    title: "Reframing Timber",
    year: "2026",
    category: "Research",
    size: "normal",
    description: "a studio research of demolished and salvaged timber from deconstruction in Sydney",
    tags: ["Material", "Deconstruction", "Mapping"],
    page: "projects/4-timber-research.html",
    mediaType: "image",
    src: "assets/images/research-thumbnail.jpeg",
    alt: "Landscape and wetland atmosphere"
  },
  {
    title: "Pine & Oak Project",
    year: "2023",
    category: "Architecture",
    size: "normal",
    description: "A dwelling project for weekend retreat in a peaceful pine-covered highland in Vietnam.",
    tags: ["Retreat", "Dalat", "Interactive"],
    page: "projects/5-pine-and-oak-architecture.html",
    mediaType: "image",
    src: "assets/images/pine-oak-ex.jpg",
    alt: "Example video thumbnail"
  },
  {
    title: "Swamp Studio",
    year: "2025",
    category: "Landscape",
    size: "normal",
    description: "A landscape project with soft infrastructure intervention ",
    tags: ["Mapping", "Country", "Ecology"],
    page: "projects/6-swamp-studio.html",
    mediaType: "image",
    src: "assets/images/N.jpg",
    alt: "Landscape and wetland atmosphere"
  },
  {
    title: "Pine & Oak Interior",
    year: "2023",
    category: "Interior",
    size: "normal",
    description: "Interior deign for the retreat project with cozy vibe and natural connection",
    tags: ["Interior", "Cozy", "Timber"],
    page: "projects/7-pine-and-oak-interior.html",
    mediaType: "image",
    src: "assets/images/pine-oak-in-3.jpg",
    alt: "Desert city skyline"
  },
  {
    title: "Abu Dhabi Studio",
    year: "2025",
    category: "Urban Design",
    size: "normal",
    description: "A heat-responsive suburb study exploring shaded corridors, housing diversity, and social infrastructure.",
    tags: ["Heat", "Social Connection", "Timber"],
    page: "projects/8-abu-dhabi-studio.html",
    mediaType: "image",
    src: "assets/images/abudhabi-thumbnail.png",
    alt: "Desert city skyline"
  },
  {
    title: "S - Alore",
    year: "2024",
    category: "Architecture",
    size: "normal",
    description: "A serviced apartment proposal using elegant awnings and balconies with indochine-inspired balustrade details.",
    tags: ["Hospitality", "Indochine", "Climate"],
    page: "projects/9-s-alore.html",
    mediaType: "image",
    src: "assets/images/them-10-5988.jpg",
    alt: "Desert city skyline"
  },
  {
    title: "Dat Thanh",
    year: "2024",
    category: "Architecture",
    size: "normal",
    description: "A hidden staycation in a Ho Chi Minh's narrow alley with dynamic openings and green spaces.",
    tags: ["Staycation", "Climate", "Living"],
    page: "projects/10-dat-thanh.html",
    mediaType: "image",
    src: "assets/images/dat-thanh-thumbnail.jpg",
    alt: "Desert city skyline"
  }
];
