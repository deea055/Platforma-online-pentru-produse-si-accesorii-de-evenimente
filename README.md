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


## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript
