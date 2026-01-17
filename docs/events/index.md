---
layout: doc
---

# Racelookup Event Managment Tool

## Documentation Pages

- **[Event Listing](/events/event-listing/)** - Manage and view all your events
- **[Event Setup for Registration](/events/event-setup-for-registration/)** - Configure event registration settings
  - **[Event Setup and STRIPE Setup](/events/event-setup-for-registration/event-setup-and-stripe-setup/)** - Payment processing configuration
    - **[Connect Stripe](/events/event-setup-for-registration/event-setup-and-stripe-setup/connect-stripe/)**
    - **[Make Change](/events/event-setup-for-registration/event-setup-and-stripe-setup/make-change/)**
    - **[Draft Mode](/events/event-setup-for-registration/event-setup-and-stripe-setup/draft-mode/)**
    - **[Reset All Settings](/events/event-setup-for-registration/event-setup-and-stripe-setup/reset-all-settings/)**
    - **[Generate QR Code](/events/event-setup-for-registration/event-setup-and-stripe-setup/generate-qr-code/)**
  - **[Website Integration](/events/event-setup-for-registration/website-integration/)** - Embed event registration on your website
  - **[Bib Management](/events/event-setup-for-registration/bib-management/)** - Configure and manage participant bib numbers
    - **[Configure Bib Management](/events/event-setup-for-registration/bib-management/configure-bib-management/)**
    - **[Print Labels](/events/event-setup-for-registration/bib-management/print-labels/)**
  - **[Certificate Management](/events/event-setup-for-registration/certificate-management/)** - Create and manage race certificates
  - **[RACE RESULT Sync - Beta](/events/event-setup-for-registration/race-result-sync/)** - Integrate with timing companies
    - **[Connect Event to Timing Company](/events/event-setup-for-registration/race-result-sync/connect-event-to-timing-company/)**
    - **[Sync Results to Timing Company](/events/event-setup-for-registration/race-result-sync/sync-results-to-timing-company/)**
- **[Event Participants Tool](/events/event-participants-tool/)** - Manage registered participants
  - **[Participants List](/events/event-participants-tool/participants-list/)**
  - **[Send Emails](/events/event-participants-tool/send-emails/)**
  - **[Refunds](/events/event-participants-tool/refunds/)**
  - **[Dynamic Bib Assignment](/events/event-participants-tool/dynamic-bib-assignment/)**

## Flow Chart

```mermaid
flowchart LR
    A[RaceLookup] --> B[Event Listing]
    A --> C[Event Setup for Registration]
    
    C --> D[Event Setup and STRIPE Setup]
    D --> D1[Connect Stripe]
    D --> D2[Make Change]
    D --> D3[Draft Mode]
    D --> D4[Reset All Settings]
    D --> D5[Generate QR Code]
    
    C --> E[Website Integration]
    
    C --> F[Bib Management]
    F --> F1[Configure Bib Management]
    F --> F2[Print Labels]
    
    C --> G[Certificate Management]
    
    C --> H[RACE RESULT Sync - Beta]
    H --> H1[Connect Event to Timing Company]
    H --> H2[Sync Results to Timing Company]
    
    A --> I[Event Participants Tool]
    I --> I1[Participants List]
    I --> I2[Send Emails]
    I --> I3[Refunds]
    I --> I4[Dynamic Bib Assignment]
    
    click B "/events/event-listing/" "Event Listing"
    click C "/events/event-setup-for-registration/" "Event Setup for Registration"
    click D "/events/event-setup-for-registration/event-setup-and-stripe-setup/" "Event Setup and STRIPE Setup"
    click D1 "/events/event-setup-for-registration/event-setup-and-stripe-setup/connect-stripe/" "Connect Stripe"
    click D2 "/events/event-setup-for-registration/event-setup-and-stripe-setup/make-change/" "Make Change"
    click D3 "/events/event-setup-for-registration/event-setup-and-stripe-setup/draft-mode/" "Draft Mode"
    click D4 "/events/event-setup-for-registration/event-setup-and-stripe-setup/reset-all-settings/" "Reset All Settings"
    click D5 "/events/event-setup-for-registration/event-setup-and-stripe-setup/generate-qr-code/" "Generate QR Code"
    click E "/events/event-setup-for-registration/website-integration/" "Website Integration"
    click F "/events/event-setup-for-registration/bib-management/" "Bib Management"
    click F1 "/events/event-setup-for-registration/bib-management/configure-bib-management/" "Configure Bib Management"
    click F2 "/events/event-setup-for-registration/bib-management/print-labels/" "Print Labels"
    click G "/events/event-setup-for-registration/certificate-management/" "Certificate Management"
    click H "/events/event-setup-for-registration/race-result-sync/" "RACE RESULT Sync - Beta"
    click H1 "/events/event-setup-for-registration/race-result-sync/connect-event-to-timing-company/" "Connect Event to Timing Company"
    click H2 "/events/event-setup-for-registration/race-result-sync/sync-results-to-timing-company/" "Sync Results to Timing Company"
    click I "/events/event-participants-tool/" "Event Participants Tool"
    click I1 "/events/event-participants-tool/participants-list/" "Participants List"
    click I2 "/events/event-participants-tool/send-emails/" "Send Emails"
    click I3 "/events/event-participants-tool/refunds/" "Refunds"
    click I4 "/events/event-participants-tool/dynamic-bib-assignment/" "Dynamic Bib Assignment"
    
    style A fill:#4a90e2,stroke:#2c5aa0,color:#fff
    style B fill:#e8f4f8,stroke:#4a90e2
    style C fill:#e8f4f8,stroke:#4a90e2
    style I fill:#e8f4f8,stroke:#4a90e2
```