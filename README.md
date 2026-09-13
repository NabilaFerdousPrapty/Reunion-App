# Reunion Website — MERN MVP

Basic MVP: public homepage, registration form with photo/payment-screenshot upload,
admin approval dashboard, and QR-coded alumni verification page.

## Structure

```
reunion-app/
├── server/   Express + MongoDB API
└── client/   React frontend
```

## 1. Backend setup

```bash
cd server
npm install
cp .env.example .env
# edit .env: set MONGO_URI, ADMIN_KEY, CLIENT_URL
npm run dev   # or: npm start
```

Make sure MongoDB is running locally, or use a MongoDB Atlas connection string in `MONGO_URI`.

The server runs on `http://localhost:5000` by default. Uploaded photos and
generated QR codes are stored in `server/uploads/`.

## 2. Frontend setup

```bash
cd client
npm install
cp .env.example .env
npm start
```

The app runs on `http://localhost:3000`.

## 3. Using it

1. Visit `/register` and submit a registration (photo + bKash/Nagad/Rocket/Bank
   transaction ID + payment screenshot).
2. Go to `/admin`, enter the `ADMIN_KEY` you set in `server/.env`.
3. Approve a registrant — this generates their `alumniId` and a QR code linking
   to `/verify/:alumniId`.
4. Scanning that QR (or visiting the URL) shows a public verification page
   confirming the person is a registered, approved alumni.

## What's intentionally simplified (MVP scope)

- Admin auth is a single shared key in a header, not per-user login/JWT.
- No real payment gateway integration — transaction IDs are manually entered
  and screenshots manually reviewed by the admin, same as the mockup.
- No printable alumni ID card image generation yet (currently just a data page).
  Next step: build an `AlumniCard.js` page styled like your reference image,
  and add a "Download as image" button using `html-to-image` or `html2canvas`.
- No email/SMS notifications on approval.

## Suggested next steps

1. Style the homepage to match your reference design more closely (hero image,
   timeline, sponsors section).
2. Build the styled Alumni ID Card page + download-as-image button.
3. Add JWT-based admin login instead of a shared key.
4. Add pagination/search to the admin dashboard as registrants grow.
5. Deploy: server to Render/Railway, client to Vercel/Netlify, DB to MongoDB Atlas.
