// Your Amazon Affiliate Tag
const AFFILIATE_TAG = "PakSarSeller-20";

// Product list (ASIN-based)
const products = [
  {
    asin: "B07PGL2ZSL",
    title: "Wireless Bluetooth Headphones",
    price: "$59.99",
    image: "https://audionic.co/products/airbud-425-tws-earbuds?srsltid=AfmBOorWz5924rCkRMG4nXKxgEFGE7scqK2J4UTfyQiZ26JXdvsYmUjA"
  },
  {
    asin: "B08N5WRWNW",
    title: "RGB Mechanical Keyboard",
    price: "$89.50",
    image: "https://via.placeholder.com/300x300?text=Keyboard"
  },
  {
    asin: "B09F3F5X5C",
    title: "Smart Fitness Watch",
    price: "$129.00",
    image: "https://via.placeholder.com/300x300?text=Smart+Watch"
  },
  {
    asin: "B0C12345EX",
    title: "4K Action Camera",
    price: "$199.99",
    image: "https://via.placeholder.com/300x300?text=Action+Camera"
  },
  {
    asin: "B0A98765YZ",
    title: "Noise Cancelling Earbuds",
    price: "$49.99",
    image: "https://via.placeholder.com/300x300?text=Earbuds"
  },
  {
    asin: "B0912345UV",
    title: "Portable Bluetooth Speaker",
    price: "$39.95",
    image: "https://via.placeholder.com/300x300?text=Speaker"
  }
];

// Function to generate affiliate link
function buildAmazonUrl(asin) {
  return `https://www.amazon.com/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

// Load products dynamically into the page
const productList = document.getElementById('product-list');

products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-4 col-lg-3';

  col.innerHTML = `
    <div class="card product-card shadow-sm">
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5>${product.title}</h5>
        <p class="price">${product.price}</p>
        <a href="${buildAmazonUrl(product.asin)}" target="_blank" rel="noopener noreferrer" class="btn-buy">
          Buy on Amazon
        </a>
      </div>
    </div>
  `;
  productList.appendChild(col);
});

console.log("PakSar Seller store loaded!");
