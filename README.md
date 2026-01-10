# Note Management App (React)

## **Project Overview**
Notes Manager is a simple and focused React application that allows users to create, view, and delete notes. The primary objective of this project is to demonstrate clean component architecture, effective state management using React hooks, and thoughtful handling of common UI states such as loading, empty, and validation scenarios. The application intentionally avoids overengineering to reflect real-world frontend development practices.

---

## **How to Run the Project**

### **Prerequisites**
- Node.js (version 16 or higher recommended)
- npm package manager

### **Steps**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

### **The application will be available at: ** http://localhost:5173

## **Component Breakdown**

### **Component Responsibilities**
### **App**

Component,Responsibility
App,Root component • Single source of truth • Manages global notes + loading state • Orchestrates adding/deleting notes • Controls which UI state to show
NoteForm,Handles new note creation • Local form state (title + description) • Inline validation (title required) • Submits data to parent via callback • Resets form on success
NoteList,Pure presentational • Receives array of notes • Maps notes to NoteItem components • Responsible only for list layout
NoteItem,"Renders single note • Shows title, description, creation date • Provides delete button that calls parent callback"
Loader,"Simple loading indicator • Shown during simulated initial ""data fetch"""
EmptyState,Friendly message when there are no notes yet • Prevents awkward empty UI
