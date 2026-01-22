# How to Access Consultant Profiles

## Overview
The ConsultantProfile component has been integrated into the Swarn platform. Here are all the ways you can access consultant profiles:

---

## Method 1: Via Sidebar Menu (Recommended)

1. **Open the Sidebar**
   - Click the hamburger menu (☰) in the top-left corner of the app
   - Or tap the menu icon on mobile

2. **Navigate to Consultants**
   - Scroll down in the sidebar menu
   - Click on the **"Consultants"** menu item
   - This will open a consultant profile (currently shows consultant ID: 1)

---

## Method 2: Programmatic Access (For Developers)

### From App.jsx
```javascript
// Set the consultant ID and navigate
const handleConsultantSelect = (consultantId) => {
  setSelectedConsultantId(consultantId);
  setCurrentScreen('consultant');
};

// Call this function with a consultant ID
handleConsultantSelect(1); // Opens consultant with ID 1
```

### Direct Navigation
```javascript
// In any component with access to onNavigate
onNavigate('consultant');
```

---

## Method 3: From Search Results (Future Enhancement)

You can extend the SearchPage component to include consultants in search results:

```javascript
// In SearchPage.jsx
const handleConsultantClick = (consultantId) => {
  if (onConsultantSelect) {
    onConsultantSelect(consultantId);
  }
};

// Add consultant results to search
{consultants.map(consultant => (
  <button onClick={() => handleConsultantClick(consultant.id)}>
    {consultant.name}
  </button>
))}
```

---

## Method 4: From Chat/Messages

If consultants are listed in the Chat component, you can add click handlers:

```javascript
// In Chat.jsx
<button onClick={() => onConsultantSelect(conversation.consultantId)}>
  View Consultant Profile
</button>
```

---

## Method 5: From Company Profiles

You can add consultant links in company profiles (e.g., "Advised by [Consultant Name]"):

```javascript
// In CompanyProfile.jsx
<button onClick={() => onConsultantSelect(company.consultantId)}>
  View Consultant
</button>
```

---

## Component Props

The ConsultantProfile component accepts the following props:

```javascript
<ConsultantProfile
  consultantId={1}              // Required: ID of the consultant
  onBack={handleBack}           // Required: Function to go back
  isOwnProfile={false}          // Optional: Set to true if viewing own profile
/>
```

### Props Explanation:
- **consultantId**: The unique identifier for the consultant (number)
- **onBack**: Callback function called when user clicks back button
- **isOwnProfile**: Boolean to show/hide private sections (Clients, Analytics)

---

## Current Implementation

### In App.jsx:
- ✅ ConsultantProfile imported
- ✅ State management for selectedConsultantId
- ✅ handleConsultantSelect function
- ✅ handleBackFromConsultant function
- ✅ Route case for 'consultant' screen

### In Sidebar.jsx:
- ✅ "Consultants" menu item added
- ✅ onConsultantSelect prop support

### In Header.jsx:
- ✅ onConsultantSelect prop passed to Sidebar

---

## Testing the Access

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access via Sidebar:**
   - Open the app
   - Click the hamburger menu
   - Click "Consultants"
   - You should see Sarah Jenkins' consultant profile

3. **Test Programmatically:**
   - In browser console, you can test:
   ```javascript
   // This would work if you expose the handler globally (for testing only)
   window.handleConsultantSelect?.(1);
   ```

---

## Future Enhancements

1. **Consultant Directory Page**
   - Create a dedicated page listing all consultants
   - Add filters (industry, expertise, location)
   - Add search functionality

2. **Consultant Recommendations**
   - Show recommended consultants based on user interests
   - Display in Top Picks section

3. **Consultant Search**
   - Add consultants to search results
   - Filter by expertise, industry, location

4. **Consultant Cards**
   - Create consultant cards similar to company cards
   - Display in feed or explore section

---

## Troubleshooting

### Consultant Profile Not Showing
- Check that `consultantId` is passed correctly
- Verify the route case 'consultant' exists in App.jsx
- Check browser console for errors

### Sidebar Menu Not Working
- Verify `onConsultantSelect` is passed to Sidebar
- Check that Header receives and passes the prop
- Ensure the menu item click handler is correct

### Private Sections Not Showing
- Set `isOwnProfile={true}` if viewing own profile
- Check that the consultant ID matches logged-in user

---

## Example Usage in Your Code

```javascript
// Example: Adding consultant link in a component
import { useState } from 'react';

function MyComponent({ onConsultantSelect }) {
  const consultantId = 1; // Get from your data source
  
  return (
    <button onClick={() => onConsultantSelect(consultantId)}>
      View Consultant Profile
    </button>
  );
}
```

---

*Last Updated: Based on current implementation in the codebase*

