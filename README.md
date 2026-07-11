# Fleek Impact Connect

**From every Fleek order to measurable impact and commercial value.**

Fleek Impact Connect is a free hackathon prototype that shows how Fleek could turn completed wholesale orders into automatic impact receipts, buyer and seller dashboards, and a consent-based handoff to a real climate infrastructure provider such as Carbonfuture.

Live demo: `https://seva9523.github.io/fleekprint/`

## The problem

Fleek buyers and sellers already participate in circular commerce, but the environmental value of those transactions is largely invisible and difficult to use.

At the same time, climate platforms must acquire business customers individually and ask them to prepare sustainability data manually.

## The solution

Every completed Fleek order automatically creates one shared impact record.

That record:

- Generates an impact receipt
- Updates the buyer dashboard
- Updates the seller dashboard
- Builds a cumulative Impact Passport
- Identifies a relevant climate partner
- Shows the user exactly what data would be shared
- Hands the user off to the partner's real integration page

Fleek remains the connector. It does not issue carbon credits, operate a carbon marketplace, or claim that secondhand orders automatically create tradable credits.

## Demo data

The prototype starts with realistic history instead of an empty dashboard.

### Buyer dashboard

Second Story Vintage begins with five orders from five supplier relationships:

- Vintage World UK
- Berlin Vintage Supply
- Milan Archive Wholesale
- Nordic Textile Co
- North Star Wholesale

### Seller dashboard

North Star Wholesale begins with five orders across five buyers:

- Second Story Vintage
- Retro Lab
- Urban Vintage
- Thread Collective
- Denim House

Clicking **Complete purchase** creates one new shared order between Second Story Vintage and North Star Wholesale. It becomes order six in both dashboards, while remaining one underlying impact record.

## Commercial simulation

The Impact Connect screen demonstrates a possible embedded-distribution model.

For the hackathon, the figures are illustrative:

- Estimated Carbonfuture customer value: £249 per year
- Estimated Fleek enablement revenue: £30 per activated customer
- Prototype qualification threshold: 1,000 kg estimated avoided CO₂e

The commercial logic is that Fleek provides Carbonfuture with:

- A pre-qualified SME customer
- Structured transaction history
- A ready-made impact summary
- Lower onboarding friction
- Potentially lower customer acquisition cost

Possible commercial models for Fleek include:

- Partner enablement fees
- Revenue share
- API usage fees
- Enterprise distribution agreements

No actual commercial agreement with Carbonfuture is claimed.

## Carbonfuture connection

Carbonfuture is used because it is a real carbon-removal infrastructure provider with an API and partnership proposition.

In the current prototype:

1. Fleek prepares the buyer's Impact Passport.
2. The user reviews the data-sharing consent screen.
3. Commercially sensitive data such as prices and counterparties are excluded.
4. The user continues to Carbonfuture's real API product page.

A production integration would require:

- An approved partnership
- Server-side API credentials
- Secure OAuth or consent handling
- A backend connector
- Contracted commercial terms

The GitHub Pages demo cannot securely hold production API credentials, so it performs a truthful handoff rather than pretending to complete an API transaction.

## Impact methodology

This prototype uses configurable demonstration factors by category:

- Estimated CO₂e avoided = order weight × category factor
- Estimated water saved = garment count × category factor
- Textiles kept in use = order weight

All impact figures are illustrative and clearly labelled as estimates. Production use would require Fleek-approved lifecycle-assessment methodology, audited factors, and stronger verification.

## Demo flow

1. Open **Buyer dashboard** and show five historical orders.
2. Open **Seller dashboard** and show five historical orders from different buyers.
3. Return to **Order demo**.
4. Click **Complete purchase**.
5. Show the automatically generated receipt.
6. Open the buyer dashboard and show order six.
7. Open the seller dashboard and show the same transaction as order six.
8. Open **Impact Connect**.
9. Show the AI-style recommendation, commercial value and Impact Passport.
10. Click **Review consent and connect**.
11. Approve the data-sharing consent.
12. Continue to Carbonfuture's real product page.

## Architecture

The demo is intentionally simple and free:

```text
index.html   Application structure
style.css    Visual design and responsive layout
data.js      Seed orders, impact factors and commercial assumptions
app.js       Storage, calculations, dashboards, receipts and partner flow
```

It uses:

- HTML
- CSS
- Vanilla JavaScript
- Browser localStorage
- GitHub Pages

No backend, paid API, database or framework is required.

## Production architecture

```text
Fleek completed-order webhook
        ↓
Impact calculation service
        ↓
Shared receipt record in database
        ↓
Buyer dashboard + seller dashboard
        ↓
Impact Passport and consent service
        ↓
Server-side Carbonfuture connector
```

## Important limitations

- Carbonfuture is not presented as an existing Fleek partner.
- The prototype does not purchase, issue, transfer, sell or retire carbon credits.
- Commercial values are demo assumptions, not known Carbonfuture pricing or agreed commissions.
- Environmental values are not audited claims.
- Browser storage is suitable for a hackathon demonstration, not production.
