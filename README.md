# FleekPrint / Fleek Impact Connect

**Every order becomes an impact receipt, and every impact record can be prepared for a real climate partner.**

This is a free GitHub Pages hackathon prototype for Fleek. It demonstrates how a completed wholesale order can automatically create one shared environmental impact record, update both buyer and seller dashboards, preserve a printable receipt, and prepare a consent-based handoff to Carbonfuture.

Live demo:

`https://seva9523.github.io/fleekprint/`

## What the prototype demonstrates

### 1. Automatic order-to-impact flow

A simulated Fleek checkout creates an order event containing:

- Order ID
- Buyer
- Seller
- Garment count
- Category
- Total weight
- Order value
- Completion date

No impact form is completed manually. The prototype calculates the impact immediately after **Complete purchase** is selected.

### 2. One shared impact receipt

Each order creates one receipt containing:

- Garments recirculated
- Textile weight kept in use
- Estimated CO2e avoided
- Estimated water saved
- Average cost per garment
- Bundle type

The same receipt is visible to both buyer and seller, but it is one underlying record. This avoids double-counting at platform level.

### 3. Buyer dashboard

The buyer dashboard automatically aggregates all purchases and displays:

- Total orders
- Total garments sourced
- Total textile weight kept in use
- Estimated CO2e avoided
- Estimated water saved
- Total order value
- Impact by order
- Individual printable receipts

### 4. Seller dashboard

The seller dashboard uses the same order records and shows:

- Total completed orders
- Garments recirculated
- Textile weight kept in circulation
- Estimated environmental impact
- Impact by order
- Individual order receipts

### 5. Fleek Impact Connect

The **Impact Connect** tab prepares a live Impact Passport from the same order records.

The passport contains:

- Business identity
- Number of Fleek orders
- Garments recirculated
- Textile weight kept in use
- Estimated CO2e avoided
- Verification source

The user must explicitly consent before continuing to the partner.

The connector then opens Carbonfuture's real API product page:

`https://www.carbonfuture.com/products/api`

This is a real external partner handoff, not a fictional Marketplace A card.

## What is real and what is simulated

### Real

- The deployed GitHub Pages application
- Automatic calculations in the browser
- Persistent dashboard data through localStorage
- Buyer and seller aggregation
- Printable impact receipts
- Consent screen
- Impact Passport generation
- Handoff to Carbonfuture's actual API and partnership page

### Simulated

- The Fleek checkout event
- Fleek user authentication
- Fleek order webhooks
- Audited environmental factors
- Carbonfuture authentication
- Any carbon-credit purchase, sale, issuance, transfer, or retirement

The prototype does **not** claim that Fleek orders create carbon credits. Fleek is positioned as the connector that prepares trusted transaction data and routes users to an existing carbon-market infrastructure provider.

## Intended production workflow

```text
Completed Fleek order
        |
        v
Fleek order webhook
        |
        v
Impact calculation service
        |
        v
One shared receipt record
        |
        +--> Buyer dashboard
        |
        +--> Seller dashboard
        |
        v
Impact Passport + user consent
        |
        v
Server-side Carbonfuture connector
        |
        v
Partner onboarding or carbon-market action
```

## Why a server-side connector is required in production

A production Carbonfuture integration would require:

- A commercial partnership or approved account
- API credentials
- Secure server-side authentication
- User consent records
- Data validation
- Error handling and audit logs
- Clear commercial terms, including any enablement fee or revenue share

API credentials must never be placed in public browser JavaScript or committed to GitHub.

The current handoff is therefore intentionally honest: it prepares the data, captures consent, and opens the real partner integration pathway. Once Fleek receives approved credentials, the browser handoff can be replaced with a secure backend request.

## Potential Fleek revenue model

Fleek would not operate the carbon marketplace. Potential commercial arrangements with a partner could include:

- Integration or enablement fees
- Revenue share on qualifying transactions
- Platform fees for embedded access
- Enterprise reporting subscriptions
- Paid Impact Passport exports or reporting tools

Any commission would need to be agreed contractually with the marketplace or infrastructure provider. The prototype does not assume an existing commission agreement.

## Demonstration methodology

The current impact engine uses configurable hackathon assumptions:

- Textile weight kept in use = order weight
- Estimated CO2e avoided = order weight multiplied by a category factor
- Estimated water saved = garment count multiplied by a category factor

Example category factors:

| Category | CO2e factor per kg | Water factor per item |
|---|---:|---:|
| Mixed | 6 kg | 1,000 L |
| Denim | 7 kg | 1,500 L |
| T-shirts | 5 kg | 900 L |
| Jackets | 8 kg | 1,200 L |
| Hoodies | 6.5 kg | 1,100 L |

These are illustrative hackathon estimates, not verified lifecycle-assessment claims. In production they must be replaced by Fleek-approved methodology, supporting evidence, and appropriate independent review.

## Demo sequence

1. Open **Order demo**.
2. Select **Complete purchase**.
3. Show the automatically generated receipt.
4. Open the **Buyer dashboard** and show updated cumulative impact.
5. Open the **Seller dashboard** and show the same order reflected there.
6. Open **Impact Connect**.
7. Review the automatically prepared Impact Passport.
8. Select **Connect**.
9. Confirm consent.
10. Select **Continue to Carbonfuture** to open the real partner page.

Use **Reset demo data** before repeating the presentation.

## Run locally

No installation is required. Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Deploy with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- Browser localStorage
- GitHub Pages

No paid API, backend, database, account, build process, or model training is needed for this hackathon version.

## Product positioning

> FleekPrint makes circular impact visible. Fleek Impact Connect makes it actionable. Every completed Fleek order creates one shared impact record, updates buyer and seller dashboards, and prepares a consent-based Impact Passport for real climate infrastructure. Fleek remains the trusted connector rather than becoming a carbon-credit marketplace.
