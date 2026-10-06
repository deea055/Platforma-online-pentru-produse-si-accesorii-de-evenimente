# Platforma-online-pentru-produse-si-accesorii-de-evenimente
# Event Boutique 
Event Boutique is an online platform for event product and accessories.
It manages products for weddings, baptisms and otrher special events.
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| name | text | required, max 100 chars |
| unavailable | boolean | toggled from the list, default false |
| productType | fixed values | invitations, candles, accessories|
| category | relation | Wedding, Baptism, Anniversary |
| user | relation |  |

Sample data used across all stages:
1. Wedding Invitation, active, invitations
2. Personalized Envelope, done, stationery
3. Wedding Ring Mirror , active, accessories

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
|  ChatGPT / Gemini  | project theme , data model , Stage 1  |

## Stage 2: data logic

Plain JavaScript, no DOM. `produse.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 2 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html#L69](https://github.com/deea055/Platforma-online-pentru-produse-si-accesorii-de-evenimente/blob/main/index.html#L69) | Open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [produse.js#L1-L20](https://github.com/deea055/Platforma-online-pentru-produse-si-accesorii-de-evenimente/blob/main/produse.js#L1-L20) | Read the products array |
| S2-R3 | List, count, search, add, toggle, delete | [produse.js](https://github.com/deea055/Platforma-online-pentru-produse-si-accesorii-de-evenimente/blob/main/produse.js#L27-L101) | Check console output |
| S2-R4 | Add rejects empty name and invalid tag | produse.js | Check last 2 console lines |
| S2-R5 | Original array unchanged after add | produse.js | Check console output |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | Read |
| S2-R7 | Stage 2 commit pushed | GitHub commit history | Check commit history |
