# Reunion Website 

Basic MVP: public homepage, registration form with photo/payment-screenshot upload,
admin approval dashboard, and QR-coded alumni verification page.

## Structure

```
reunion-app/
├── server/   Express + MongoDB API
└── client/   React frontend

Admin approves registration
        ↓
Backend generates invitationToken (e.g. "8f7a2c91")
        ↓
Generates QR encoding → https://yourdomain.com/i/8f7a2c91
        ↓
Generates PDF invitation (with that QR embedded in it)
        ↓
Saves both file paths on the Registrant document
        ↓
QR/link scanned anytime → /i/:token page → shows invite details + Download PDF button
        ↓
User logs in anytime → /my-registration → same QR + same Download PDF button (nothing regenerated)
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


