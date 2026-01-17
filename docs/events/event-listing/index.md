---
layout: doc
---

# Event Listing

The Event Listing page is your central dashboard for viewing and managing all events in your RaceLookup account. This page helps you organize, search, and maintain your events efficiently.

## Purpose

The Event Listing page provides a comprehensive view of all your events, allowing you to:

- **Monitor Event Status**: See which events are active (enabled) or inactive (disabled)
- **Quick Access**: Navigate directly to view, edit, copy, or manage individual events
- **Search & Filter**: Find specific events quickly using search terms or date ranges
- **Bulk Management**: Perform actions on multiple events at once
- **Track Organization**: See event dates, organizers, and other key information at a glance

## Understanding the Event List

### Event Information Displayed

Each event in your list shows the following information:

- **Event ID**: A unique identifier for each event
- **Event Name**: The official name of your event
- **Organizer**: The name of the person or organization organizing the event
- **Event Date**: The scheduled date of the event (displayed as MM-DD-YYYY)
- **Status**: Whether the event is currently enabled or disabled
  - **Enabled** (red label): Event is active and visible on the platform
  - **Disabled** (blue label): Event is inactive and hidden from public view

### Events Per Page

The system displays **1,000 events per page** to help you manage large catalogs efficiently. Use the pagination controls at the bottom to navigate through multiple pages of events.

## Search Functionality

### Searching for Events

You can search for events using the search box in the top-right corner of the page. The search looks for matches in:

- **Event Names**: Find events by their title
- **Organizer Names**: Locate all events organized by a specific person or company

**How to Search:**
1. Type your search term in the search box
2. The list will automatically filter to show matching events
3. Results update as you type

**Search Tips:**
- The search finds partial matches, so you don't need to type the full event or organizer name
- Search is case-insensitive
- You can clear the search by deleting all text from the search box

## Date Filtering

### Filtering Events by Date Range

Use the date filter to find events scheduled within a specific time period.

**How to Filter by Date:**
1. Enter a "From" date in the first date field
2. Enter a "To" date in the second date field
3. Click the "Filter" button
4. The list will show only events with dates falling within your specified range

**Use Cases:**
- Find all upcoming events in the next month
- Review past events from a specific time period
- Identify events scheduled during a particular season

## Event Actions

Each event row includes action buttons that allow you to manage individual events:

### View Event
**Icon**: Eye (blue button)

Opens the detailed view page for the event where you can see all event information, registration details, participant statistics, and related data.

### Edit Event
**Icon**: Pencil (yellow button)

Opens the event editing form where you can modify event details, update information, change settings, and save changes.

### Delete Event
**Icon**: Trash (red button)

Permanently removes the event from your account. **Important**: You will be asked to confirm before deletion. Deleted events are moved to the Trash and can be recovered from the "Trashed Event" page.

### Copy Event
**Icon**: Copy (green button)

Creates a duplicate copy of the event with all its settings. This is useful when creating similar events or when you want to use an existing event as a template for a new one. The copied event will have a new ID and be set as a draft.

### Enable/Disable Event
**Toggle Status**: The status button changes based on current state

- **Enable Button** (green check icon): Appears when event is disabled - click to make the event active and visible
- **Disable Button** (yellow times icon): Appears when event is enabled - click to hide the event from public view

**Why Enable/Disable Events?**
- **Disable** events that have passed or are cancelled to keep your active list clean
- **Enable** events when you're ready to make them publicly visible
- Toggle visibility without deleting event data

## Bulk Operations

### Selecting Multiple Events

You can select multiple events for bulk operations:

1. **Individual Selection**: Check the box next to each event you want to select
2. **Select All**: Check the box in the table header to select all visible events on the current page

### Delete Selected Events

After selecting multiple events:
1. Click the red "Delete All Selected" button in the top action bar
2. All selected events will be permanently deleted
3. Confirm the action when prompted

**Important**: Bulk deletion cannot be undone easily. Ensure you want to delete all selected events before confirming.

## Quick Actions

The page header includes quick action buttons for common tasks:

### Add Event
Creates a new event. You'll be taken to the event creation form where you can enter all event details.

### Duplicate
Opens the duplicate event management page where you can find and manage events with similar names, dates, or organizers.

### Claimed
View events that have been claimed by other users. This is useful for managing event ownership disputes or transfers.

### Trashed Event
Access events that have been deleted but are still recoverable. You can restore trashed events from this page.

## Export Options

### Exporting Event Data

You can export your event data in various formats using the export dropdown toolbar:

- **Export Basic**: Export essential event information
- **Export All**: Export complete event data including all details
- **Export Selected**: Export only the events you have selected with checkboxes

**Export Formats:**
Export functionality allows you to download event data for:
- Backup purposes
- External analysis
- Reporting
- Integration with other systems

## Event Status Explained

### Understanding Event Status

Events can have different statuses that affect their visibility and functionality:

**Enabled Status:**
- Event is active and visible on the RaceLookup platform
- Event can be discovered by users browsing events
- Event appears in search results (if public)
- Event registration may be open (if configured)

**Disabled Status:**
- Event is hidden from public view
- Event does not appear in search results
- Event data is preserved but not accessible to the public
- Useful for events that are cancelled, postponed, or not yet ready

**Status Management:**
- Toggle between enabled and disabled without losing event data
- Disable events temporarily while making updates
- Enable events when ready to go live

## Business Logic & Rules

### Event Listing Fee

RaceLookup operates on a listing fee model for events:

**Standard Listing Fee:**
- Default listing fee is **$50 per event**
- This fee is charged when events are created as standard listings
- Listing fee is separate from registration fees or other services

**Registration-Enabled Events:**
- Events with registration enabled have a listing fee of **$0**
- When you enable registration for an event, the listing fee is automatically waived
- This applies when you configure an event for participant registration through RaceLookup

**Payment Processing:**
- Listing fees are processed when events are created by regular users
- Payment information is collected during event creation
- Admin and Data Entry users may have different fee structures

### Event Duplicate Detection

The system automatically checks for duplicate events when creating new events:

**Duplicate Criteria:**
- Same event name
- Same event date
- Same organizer name
- Same event URL

**Duplicate Handling:**
- If duplicates are found, you'll be notified before finalizing event creation
- You can review potential duplicates and proceed if the event is intentionally similar
- Duplicate checking helps maintain data quality and prevent accidental duplicates

### Event Status and Registration

**Relationship Between Status and Registration:**
- Events with registration enabled are automatically set to "draft" status initially
- You must publish or enable the event for it to become active
- Draft status prevents events from being visible until fully configured

**Event Special Status:**
- Events with registration enabled automatically have "event special" status removed
- This ensures consistent behavior for registration-enabled events

## Best Practices

### Organizing Your Events

1. **Use Descriptive Names**: Clear event names make searching easier
2. **Keep Organizer Names Consistent**: Use the same organizer name format for all events from the same organization
3. **Update Status Regularly**: Disable completed events to keep your active list relevant
4. **Use Date Filtering**: Review upcoming events regularly to ensure accuracy

### Managing Large Event Lists

1. **Use Search**: Don't scroll through hundreds of events - use search instead
2. **Filter by Date**: Use date filters to focus on specific time periods
3. **Regular Cleanup**: Periodically review and disable or delete old events
4. **Organize by Status**: Consider enabling/disabling events to organize your workflow

### Event Maintenance

1. **Regular Reviews**: Periodically review event information for accuracy
2. **Update Dates**: Keep event dates current, especially for recurring events
3. **Status Management**: Keep event status current to reflect actual event state
4. **Archive Old Events**: Disable or delete events that are no longer relevant

## Common Tasks

### Finding a Specific Event

**By Name:**
1. Use the search box in the top-right
2. Type part of the event name
3. Results appear automatically

**By Organizer:**
1. Use the search box
2. Type the organizer name
3. All events from that organizer will appear

**By Date:**
1. Use the date filter form
2. Enter your date range
3. Click "Filter"

### Managing Multiple Similar Events

1. Find the template event using search
2. Click the "Copy" button to duplicate it
3. Edit the copied event with new details
4. Save the new event

### Preparing Events for Public View

1. Create or edit your event
2. Ensure all information is complete and accurate
3. Click "Enable" to make it visible
4. Event becomes searchable and accessible

### Temporarily Hiding Events

1. Find the event in your list
2. Click "Disable" to hide it from public view
3. Event data is preserved
4. Click "Enable" when ready to show it again

## Related Features

- **[Event Setup for Registration](/events/event-setup-for-registration/)** - Configure your events for participant registration
- **[Event Participants Tool](/events/event-participants-tool/)** - Manage registered participants for your events
