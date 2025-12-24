---
layout: doc
---

# Timing Company Integration

RaceLookup integrates with leading timing companies to streamline your race management workflow. Connect your timing system to automatically sync participant data, bib assignments, and race results.

## Available Integrations

### RaceResult

RaceResult is a comprehensive race timing and results platform. Our integration allows you to:

- ✅ **Automatic Participant Sync**: Push registered participants from RaceLookup to RaceResult
- ✅ **Bib Number Management**: Sync bib assignments between platforms
- ✅ **Results Import**: Pull race results from RaceResult back to RaceLookup
- ✅ **Contest/Category Mapping**: Map your race categories to RaceResult contests
- ✅ **Real-time Updates**: Keep both systems in sync throughout your event

## Benefits of Timing Integration

### Streamlined Workflow

- **No Manual Data Entry**: Eliminate the need for spreadsheets and manual data transfer
- **Automatic Updates**: Changes sync automatically between platforms
- **Reduced Errors**: Minimize data entry mistakes and inconsistencies

### Better Participant Experience

- **Faster Results**: Results appear on RaceLookup immediately after import
- **Accurate Data**: Single source of truth for participant information
- **Seamless Experience**: Participants see consistent information across platforms

### Time Savings

- **Automated Processes**: Set it up once and let it work
- **Background Processing**: Large syncs happen automatically
- **Less Manual Work**: Focus on your event, not data management

## Getting Started

Follow these exact steps to set up your timing company integration:

### Step 1: Navigate to Business Profile

1. Log in to your RaceLookup account at [https://racelookup.com/login](https://racelookup.com/login)
2. After logging in, you'll be on your **Dashboard** at [https://racelookup.com/dashboard](https://racelookup.com/dashboard)
3. In the left sidebar, click on **"Business Profile"** (the link with the business icon)
   - **Direct URL**: [https://racelookup.com/business/profile](https://racelookup.com/business/profile)

![Business Profile Navigation](/race-director/events/timing-companies/business-profile.png)

### Step 2: Access Timing Companies Settings

1. On the **Business Profile** page, look at the top right corner of the page
2. You'll see three icons in a row:
   - **Edit icon** (pencil) - for editing business details
   - **Plus icon** - for managing member access
   - **Gear icon** (settings) - for timing company settings
3. Click on the **Gear icon** (⚙️) to access Timing Companies
   - **Direct URL**: [https://racelookup.com/business/timing-company](https://racelookup.com/business/timing-company)

![Access Timing Companies Settings](/race-director/events/timing-companies/company-settings.png)

### Step 3: Add or Configure Timing Company

1. On the **Timing Companies** page, you'll see one of two views:

   **If you have no timing companies configured:**
   - You'll see a message: "No Timing Companies"
   - Click the **"Add Timing Company"** button (green button with plus icon)
   - This will automatically create a default RaceResult timing company and take you to the edit page

   ![No timing companies configured](/race-director/events/timing-companies/no-timing-companies-configured.png)

   **If you already have timing companies:**
   - You'll see cards for each configured timing company
   - Click the **"Edit"** button on the card for the timing company you want to configure
   
   ![Already Have Timing Companies](/race-director/events/timing-companies/already-have-timing-companies.png)


2. You'll be taken to the **Edit Timing Company** page
   - **URL Pattern**: `https://racelookup.com/business/timing-company/{id}/edit`

### Step 4: Configure Timing Company Settings

On the **Edit Timing Company** page, fill in the following fields:

#### Company Name
- **Field Type**: Read-only (disabled)
- **Value**: Automatically set to "raceresult"
- **Note**: This field cannot be changed

#### Display Label *
- **Field Type**: Required text input
- **Default Value**: "Race Result"
- **Purpose**: This is the name that will be displayed in your interface
- **Example**: "Race Result", "My RaceResult Account", etc.

#### Server URL
- **Field Type**: URL input (optional)
- **Default Value**: `https://events.raceresult.com`
- **Placeholder**: `https://events.raceresult.com`
- **Purpose**: The base URL for your RaceResult API server
- **Note**: Leave as default unless you have a custom server URL

#### User Agent
- **Field Type**: Text input (optional)
- **Default Value**: `webapi/1.0`
- **Placeholder**: `webapi/1.0`
- **Purpose**: The user agent string used for API requests
- **Note**: Leave as default unless instructed otherwise

#### API Key
- **Field Type**: Password input (required for functionality)
- **Placeholder**: "Enter your API key" (if new) or "Enter new API key to update (leave blank to keep current)" (if updating)
- **Purpose**: Your RaceResult API key for authentication
- **How to get it**: 
  - Log in to your RaceResult account
  - Navigate to API settings
  - Generate or copy your API key
  - See our guide: [Learn how to set up RaceResult API key](https://docs.racelookup.com/timing-companies/race-result-setup)
- **Security**: The field has an eye icon (👁️) to toggle visibility
- **Note**: If updating an existing timing company, leave blank to keep the current API key

#### TTL (Time To Live) in seconds
- **Field Type**: Number input (optional)
- **Default Value**: `3000`
- **Purpose**: Cache time-to-live in seconds
- **Example**: 3000 = 50 minutes
- **Note**: This controls how long API responses are cached

#### Set as default timing company
- **Field Type**: Checkbox
- **Default**: Checked (for the first timing company)
- **Purpose**: Only one timing company can be set as default
- **Note**: The default timing company will be used automatically for event integrations

### Step 5: Save Your Configuration

1. Review all your settings
2. Click the **"Save Changes"** button (blue button with save icon)
3. You'll be redirected back to the **Timing Companies** index page
4. A success message will confirm your changes have been saved

### Step 6: Connect Your Event to Timing Company

After configuring your timing company:

1. Navigate to your event's registration or management page
2. Look for timing company integration options
3. Select your configured timing company
4. Link your RaceLookup event to your RaceResult event
5. Begin syncing participants and results

## Navigation Summary

**Complete Navigation Path:**
1. Login → [https://racelookup.com/login](https://racelookup.com/login)
2. Dashboard → [https://racelookup.com/dashboard](https://racelookup.com/dashboard)
3. Business Profile → [https://racelookup.com/business/profile](https://racelookup.com/business/profile)
4. Timing Companies (via Gear icon) → [https://racelookup.com/business/timing-company](https://racelookup.com/business/timing-company)
5. Edit Timing Company → `https://racelookup.com/business/timing-company/{id}/edit`

**Quick Access:**
- Direct link to Timing Companies: [https://racelookup.com/business/timing-company](https://racelookup.com/business/timing-company)

## After Setup

Once you've configured your timing company:

### Verify Your Configuration

1. Return to the **Timing Companies** page: [https://racelookup.com/business/timing-company](https://racelookup.com/business/timing-company)
2. You should see your timing company card displayed
3. The card will show:
   - Company name (e.g., "Race Result")
   - Display label
   - Status indicators
   - Edit and Delete options

### Using Your Timing Company

After configuration, your timing company will be available for:

- **Event Integration**: When creating or editing events, you can link them to your RaceResult account
- **Automatic Participant Sync**: Registered participants will automatically sync to RaceResult
- **Bib Assignment Sync**: Bib numbers assigned in RaceLookup will sync to RaceResult
- **Results Import**: Race results from RaceResult can be imported back to RaceLookup

### Managing Multiple Timing Companies

You can configure multiple timing company accounts:

1. On the **Timing Companies** page, click **"Add Timing Company"** to create additional accounts
2. Each timing company can have different:
   - API keys
   - Server URLs
   - Display labels
3. Only one timing company can be set as **default** at a time
4. To change the default, edit a timing company and check the "Set as default timing company" checkbox

## Troubleshooting

### Common Issues

**Issue: "No Timing Companies" message appears**
- **Solution**: Click the **"Add Timing Company"** button to create your first timing company

**Issue: API key not working**
- **Solution**: 
  - Verify your API key is correct in your RaceResult account
  - Check that the Server URL matches your RaceResult server
  - Ensure your API key has the necessary permissions

**Issue: Cannot set timing company as default**
- **Solution**: Only one timing company can be default. Uncheck the default setting on other timing companies first

**Issue: Changes not saving**
- **Solution**: 
  - Ensure all required fields (marked with *) are filled
  - Check your internet connection
  - Try refreshing the page and saving again

### Getting Your RaceResult API Key

If you need help obtaining your RaceResult API key:

1. Log in to your RaceResult account
2. Navigate to your account settings or API settings
3. Look for "API Key" or "Web API" section
4. Generate a new API key if you don't have one
5. Copy the API key and paste it into the RaceLookup timing company configuration

For detailed instructions, see: [Learn how to set up RaceResult API key](https://docs.racelookup.com/timing-companies/race-result-setup)

## Support

Need help with timing company integration?

- 💬 [Contact Support](https://racelookup.com/contact)
- 📚 [Race Director Guide](/race-director)
- 📖 [RaceResult Setup Guide](https://docs.racelookup.com/timing-companies/race-result-setup)

---

**Ready to integrate?** [Access Your Dashboard](https://racelookup.com/dashboard) → [Business Profile](https://racelookup.com/business/profile) → [Timing Companies](https://racelookup.com/business/timing-company)

