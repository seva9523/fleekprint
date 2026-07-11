const impactFactors = {
  mixed: { label: "Mixed bundle", carbonPerKg: 6, waterPerItem: 1000, scoreBonus: 6 },
  denim: { label: "Denim", carbonPerKg: 7.4, waterPerItem: 1500, scoreBonus: 8 },
  tshirts: { label: "T-shirts", carbonPerKg: 5.1, waterPerItem: 900, scoreBonus: 4 },
  hoodies: { label: "Hoodies & sweatshirts", carbonPerKg: 6.5, waterPerItem: 1100, scoreBonus: 6 },
  jackets: { label: "Jackets", carbonPerKg: 8.2, waterPerItem: 1200, scoreBonus: 9 },
  dresses: { label: "Dresses", carbonPerKg: 5.8, waterPerItem: 1050, scoreBonus: 5 }
};

const form = document.getElementById("impactForm");
const receipt = document.getElementById("receipt");
const demoBtn = document.getElementById("demoBtn");
const downloadBtn = document.getElementById("downloadBtn");

const fields = {
  shopName: document.getElementById("shopName"),
  orderId: document.getElementById("orderId"),
  itemCount: document.getElementById("itemCount"),
  category: document.getElementById("category"),
  weight: document.getElementById("weight"),
  orderValue: document.getElementById("orderValue")
};

const outputs = {
  shop: document.getElementById("receiptShop"),
  order: document.getElementById("receiptOrder"),
  date: document.getElementById("receiptDate"),
  garments: document.getElementById("garmentsValue"),
  waste: document.getElementById("wasteValue"),
  carbon: document.getElementById("carbonValue"),
  water: document.getElementById("waterValue"),
  cost: document.getElementById("costValue"),
  score: document.getElementById("scoreValue"),
  scoreBar: document.getElementById("scoreBar"),
  code: document.getElementById("receiptCode")
};

function formatNumber(value, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits }).format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function sanitiseCode(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(-8) || "ORDER";
}

function calculateImpact() {
  const itemCount = Number(fields.itemCount.value);
  const weight = Number(fields.weight.value);
  const orderValue = Number(fields.orderValue.value);
  const factor = impactFactors[fields.category.value];

  if (!Number.isFinite(itemCount) || itemCount <= 0 ||
      !Number.isFinite(weight) || weight <= 0 ||
      !Number.isFinite(orderValue) || orderValue < 0) {
    throw new Error("Please enter valid positive order values.");
  }

  const carbonSaved = weight * factor.carbonPerKg;
  const waterSaved = itemCount * factor.waterPerItem;
  const costPerItem = orderValue / itemCount;
  const scaleScore = Math.log10(itemCount + 1) * 22;
  const weightScore = Math.min(weight / itemCount, 1.5) * 10;
  const impactScore = Math.min(99, Math.round(32 + scaleScore + weightScore + factor.scoreBonus));

  return { itemCount, weight, carbonSaved, waterSaved, costPerItem, impactScore };
}

function renderReceipt() {
  const impact = calculateImpact();
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date());

  outputs.shop.textContent = fields.shopName.value.trim() || "Independent reseller";
  outputs.order.textContent = `Order ${fields.orderId.value.trim() || "FLEEK"}`;
  outputs.date.textContent = date;
  outputs.garments.textContent = formatNumber(impact.itemCount);
  outputs.waste.textContent = `${formatNumber(impact.weight, 1)} kg`;
  outputs.carbon.textContent = `${formatNumber(impact.carbonSaved)} kg`;
  outputs.water.textContent = `${formatNumber(impact.waterSaved)} L`;
  outputs.cost.textContent = formatCurrency(impact.costPerItem);
  outputs.score.textContent = impact.impactScore;
  outputs.scoreBar.style.width = `${impact.impactScore}%`;
  outputs.code.textContent = `FP-${sanitiseCode(fields.orderId.value)}-${String(impact.itemCount).padStart(4, "0")}`;

  receipt.classList.remove("flash");
  void receipt.offsetWidth;
  receipt.classList.add("flash");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    renderReceipt();
    if (window.innerWidth < 860) receipt.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (error) {
    alert(error.message);
  }
});

demoBtn.addEventListener("click", () => {
  fields.shopName.value = "Archive Club London";
  fields.orderId.value = "FLK-DEMO-2481";
  fields.itemCount.value = 75;
  fields.category.value = "denim";
  fields.weight.value = 52.5;
  fields.orderValue.value = 675;
  renderReceipt();
});

downloadBtn.addEventListener("click", async () => {
  if (typeof html2canvas !== "function") {
    alert("The download library has not loaded yet. Please try again in a moment.");
    return;
  }

  const originalText = downloadBtn.textContent;
  downloadBtn.disabled = true;
  downloadBtn.textContent = "Preparing…";

  try {
    const canvas = await html2canvas(receipt, {
      scale: 2,
      backgroundColor: "#111111",
      useCORS: true
    });
    const link = document.createElement("a");
    link.download = `fleekprint-${sanitiseCode(fields.orderId.value).toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error(error);
    alert("The receipt could not be downloaded. Please take a screenshot instead.");
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = originalText;
  }
});

outputs.date.textContent = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric"
}).format(new Date());

renderReceipt();