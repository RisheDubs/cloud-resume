// Week 2: replace API_URL with your API Gateway endpoint.
const API_URL = "";

async function updateCounter() {
  const el = document.getElementById("visitor-count");
  if (!API_URL) return; // No backend yet, keep the placeholder.
  try {
    const res = await fetch(API_URL, { method: "POST" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    el.textContent = Number(data.count).toLocaleString();
  } catch (err) {
    console.error("Visitor counter failed:", err);
  }
}

updateCounter();
