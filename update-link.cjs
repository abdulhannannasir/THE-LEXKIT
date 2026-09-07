const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.jsx', 'utf8');
code = code.replace(
  /<button[^>]*>[\s\S]*?Join Waitlist to Buy[\s\S]*?<\/button>/,
  `<a href="https://whop.com/thelexkit/legal-documents-starter-kit" className="mt-8 block w-full py-3 px-4 bg-[#C5A880] hover:bg-[#b59870] text-[#0A192F] font-bold text-center rounded transition-colors duration-200">Buy Now — $19</a>`
);
fs.writeFileSync('src/pages/Home.jsx', code);
console.log("Checkout link wired up!");
