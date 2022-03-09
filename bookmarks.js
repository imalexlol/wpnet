// Note: having length != 4 will mess with layout based on how the site is styled
const bookmarks = [
  {
    title: "(main) Game list",
    links: [
	  { name: "Full list", url: "./Hlist.html" },
      { name: "2048", url: "./gfiles/html5/2048/" },
      { name: "Asteroids", url: "./gfiles/html5/asteroids/" },
      { name: "Chess", url: "./gfiles/html5/chess/" },
	  { name: "Chrome Dino", url: "./gfiles/html5/chromedino/" },
      { name: "Cookie Clicker", url: "./gfiles/html5/cookieclicker/" },
      { name: "Flappy Bird", url: "./gfiles/html5/flappybird/" },
	  { name: "Geometry Dash", url: "./gfiles/html5/geometrydash/" },
      { name: "Minecraft", url: "./gfiles/html5/minecraft/" },
      { name: "Pac-Man", url: "./gfiles/html5/pacman/" },
	  { name: "Particle Clicker", url: "./gfiles/html5/particleclicker/" },
      { name: "Run 3", url: "./gfiles/html5/run3/" },
      { name: "Snake", url: "./gfiles/html5/snake/" },
	  { name: "Tetris", url: "./gfiles/html5/tetris/" },
      { name: "", url: "./gfiles/html5/" },
    ],
  },
  {
    title: "Emulators",
    links: [
      { name: "Gameboy Advance", url: "./gfiles/rarch/?core=mgba" },
      { name: "Genesis / Master System", url: "./gfiles/rarch/?core=genesis_plus_gx" },
      { name: "Nintendo 64", url: "./gfiles/rarch/?core=mupen64plus_next" },
	  { name: "NES", url: "./gfiles/rarch/?core=nestopia" },
      { name: "Super Nintendo", url: "./gfiles/rarch/?core=snes9x" },
    ],
  },
  {
    title: "Flash games",
    links: [
      { name: "Upload SWF", url: "./gfiles/flash/" },
      { name: "Full Flash game list", url: "./Flist.html" },
    ],
  },
  {
    title: "v1 Games",
    links: [
      { name: "ovo", url: "./ovo/" },
      { name: "tetris", url: "./tetris/" },
      // { name: "2048", url: "./2048/" },
    ],
  },
  {
	title: "Other",
	links: [
		{ name: "Unblocked browser", url: "./internet/" },
	],
  },
];