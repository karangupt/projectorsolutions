# Projector Solutions — Website (v1)

Yeh website Sunrise LED Technology (sunriseledtech.com) ke layout/structure se inspire hoke banayi gayi hai,
lekin saara content **Projector Solutions** (projectorsolutions.in) ka real data use kiya gaya hai —
projector rental, LED wall rental, home theater setup, corporate rentals solutions, aadi.

## Kya kiya gaya hai (v1)
- Sunrise jaisa structure: Hero → About → Services range → Why choose us → Products cards → Industries → Testimonials → Areas → FAQ → Contact → Footer
- Content: Projector Solutions ke real testimonials, services, cities, phone/email/address
- Images: abhi Projector Solutions ke apne existing image URLs use kiye hain (placeholder ki tarah) — baad me naya photoshoot / Sunrise-style images se replace kar sakte ho
- SEO: meta title/description, canonical tag, Open Graph, LocalBusiness schema (JSON-LD)
- Mobile responsive + WhatsApp floating button + quote form

## Folder structure
```
projector-solutions-site/
├── index.html
├── css/style.css
├── js/script.js
└── README.md
```

## Local me dekhne ke liye
Bas `index.html` ko browser me kholo — ya VS Code me "Live Server" extension use karo.

## GitHub par upload karne ke steps (testing ke liye)

1. GitHub.com par login karo, upar-right "+" → **New repository** click karo.
   - Repository name: `projector-solutions-site` (ya jo naam chaho)
   - Public/Private jo bhi chaho, "Add README" ko UNCHECK rakho (kyunki humare paas already hai)
   - Create repository click karo

2. GitHub apko ek repo URL dega jaise:
   `https://github.com/<your-username>/projector-solutions-site.git`

3. Apne computer/terminal me is folder ke andar ye commands chalao:
```bash
cd projector-solutions-site
git init
git add .
git commit -m "Initial version - Projector Solutions website (Sunrise-style layout)"
git branch -M main
git remote add origin https://github.com/<your-username>/projector-solutions-site.git
git push -u origin main
```

4. Push ho jaane ke baad, GitHub Pages se turant live test bhi kar sakte ho:
   - Repo → Settings → Pages → Source: `main` branch, `/ (root)` folder → Save
   - Kuch minute me link milega: `https://<your-username>.github.io/projector-solutions-site/`

## Aage kya karna hai
- [ ] Real photos add karna (apne projectors, LED walls, setups ke actual photos)
- [ ] Har service ki alag page banana (jaise Sunrise ki multi-page structure — Outdoor LED, Indoor LED, etc. jaisi)
- [ ] Blog section add karna (SEO ke liye)
- [ ] Google Business Profile se location map embed karna
- [ ] Final hosting (jahan aap host karoge) pe domain point karna

Content aur images dheere-dheere replace/add karte rahenge jaisa aapne bola.
