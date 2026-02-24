// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Email helper (replace this with your real email)
const email = "replace.with.your@email.com";
const emailLink = document.getElementById("emailText");
const linkEmail = document.getElementById("linkEmail");

function setEmail(){
  if (emailLink) {
    emailLink.textContent = email;
    emailLink.href = `mailto:${email}`;
  }
  if (linkEmail) {
    linkEmail.href = `mailto:${email}`;
  }
}
setEmail();

// Publication search
const pubSearch = document.getElementById("pubSearch");
const pubList = document.getElementById("pubList");
const clearSearch = document.getElementById("clearSearch");

function filterPubs(q){
  const query = (q || "").trim().toLowerCase();
  const items = pubList?.querySelectorAll(".pub-item") || [];
  items.forEach(li => {
    const text = (li.textContent || "").toLowerCase();
    const tags = (li.getAttribute("data-tags") || "").toLowerCase();
    const show = !query || text.includes(query) || tags.includes(query);
    li.style.display = show ? "" : "none";
  });
}

pubSearch?.addEventListener("input", (e) => filterPubs(e.target.value));
clearSearch?.addEventListener("click", () => {
  if (pubSearch) pubSearch.value = "";
  filterPubs("");
});