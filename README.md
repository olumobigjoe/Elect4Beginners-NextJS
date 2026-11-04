# Elect4Beginners — Next.js Edition

A Vercel-ready responsive conversion of the Elect4Beginners learning platform.

## Run locally
1. Install Node.js 20 LTS.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Deploy to Vercel
1. Push this folder's contents to a new GitHub repository.
2. In Vercel choose **Add New → Project** and import that repository.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`; output directory: leave default.
5. Click Deploy.

## Notes
This version ports the platform structure, core learning pathways, responsive navigation and browser-based interactive calculators/quizzes into Next.js. Review each module against the original Streamlit material before retiring the original deployment; the original Python/Streamlit widget implementations are not executed by Next.js.
