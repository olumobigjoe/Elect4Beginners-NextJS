# Migration notes

## What is implemented in this Next.js version
- Responsive landing page and navigation.
- Eight module landing pages with topic summaries and formulas.
- Interactive browser-side calculators: Ohm's law/power, LED current, ideal rectifier average output, parallel resistance, energy consumption, and logic gates.
- Quick knowledge check on each module.
- Dark navy / blue / cyan visual system with high-contrast labels and responsive layouts.
- Vercel configuration.

## Important content-parity note
The original Streamlit source is retained in `legacy-streamlit/` as a reference. This is a genuine frontend migration, not a runtime wrapper for Streamlit. The current Next.js pages contain the module structure and selected core interactive tools, but they do not yet reproduce every original Streamlit lesson paragraph, diagram, simulator, quiz question, troubleshooting activity, or chart. Compare the Next.js edition with the original before replacing the live Streamlit site.
