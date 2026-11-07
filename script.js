const $ = (s) => document.querySelector(s);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
$("#startBtn").addEventListener("click", () => scrollToSection("letter"));

const envelope = $("#envelope");
const letterMessage = $("#letterMessage");
const envelopeHint = $("#envelopeHint");
$("#envelopeBtn").addEventListener("click", () => {
  const opened = envelope.classList.toggle("open");
  if (opened) {
    envelopeHint.textContent = "তোমার জন্য লেখা কয়েকটি কথা ♡";
    window.setTimeout(() => {
      letterMessage.classList.add("show");
      letterMessage.setAttribute("aria-hidden", "false");
      window.setTimeout(() => letterMessage.scrollIntoView({ behavior: "smooth", block: "center" }), 350);
    }, 550);
  } else {
    letterMessage.classList.remove("show");
    letterMessage.setAttribute("aria-hidden", "true");
    envelopeHint.textContent = "চিঠিটায় ট্যাপ করো";
  }
});

$("#blowBtn").addEventListener("click", () => {
  const cake = $("#bigCake");
  cake.classList.add("blown");
  $("#wishResult").textContent = "ইয়েই! তোমার ইচ্ছেটা একদিন ঠিকই পূরণ হবে। শুভ জন্মদিন, পাখি! ♡";
  $("#blowBtn").textContent = "ইচ্ছেটা মনে রেখো ♡";
  burstHearts();
});

$("#againBtn").addEventListener("click", () => {
  envelope.classList.remove("open");
  letterMessage.classList.remove("show");
  letterMessage.setAttribute("aria-hidden", "true");
  envelopeHint.textContent = "চিঠিটায় ট্যাপ করো";
  $("#bigCake").classList.remove("blown");
  $("#wishResult").textContent = "তোমার সব সুন্দর ইচ্ছা পূরণ হোক, পাখি।";
  $("#blowBtn").textContent = "মোমবাতি নিভিয়ে দাও ✨";
  scrollToSection("home");
});

function burstHearts() {
  const colors = ["#e98cad", "#f3b4ca", "#d77fa1", "#f7c8d8"];
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > .5 ? "♡" : "♥";
    heart.style.cssText = `position:fixed;left:${40 + Math.random()*20}%;top:${45 + Math.random()*15}%;z-index:20;pointer-events:none;color:${colors[i%colors.length]};font-size:${14+Math.random()*22}px;transition:transform 1.8s ease,opacity 1.8s ease;`;
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = `translate(${(Math.random()-.5)*500}px,${-120-Math.random()*420}px) rotate(${Math.random()*90-45}deg)`;
      heart.style.opacity = "0";
    });
    setTimeout(() => heart.remove(), 1900);
  }
}

// Gentle floating hearts in the background.
const floating = $(".floating-hearts");
for (let i = 0; i < 15; i++) {
  const h = document.createElement("span");
  h.textContent = i % 3 === 0 ? "♡" : "·";
  h.style.left = `${Math.random()*100}%`;
  h.style.animationDelay = `${Math.random()*12}s`;
  h.style.animationDuration = `${12+Math.random()*12}s`;
  h.style.fontSize = `${12+Math.random()*16}px`;
  floating.appendChild(h);
}