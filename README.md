## 🧷 Admin Dashboard

![Admin Dashboard preview thumbnail](public/assets/thumbnail.png)

A modern, responsive **admin dashboard** built with React and Create React App, featuring analytics cards, user management, orders, and inbox messaging in a clean, dark UI.

## 🔗 Live Demo

👉 [View Deployed App](https://Rola-Al-Ahmad.github.io/react-admin-dashboard)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Key Features](#-key-features)
- [Components Overview](#-components-overview)
- [Data Structure](#-data-structure)
- [Routing](#-routing)
- [Styling](#-styling)
- [Contributing](#-contributing)

## 🧠 Project Overview

**Admin Dashboard** is a **single-page admin interface** for managing users, orders, and inbox messages while visualizing key metrics in one place.  
It showcases a **feature-based React architecture** using **React Router** for page navigation, **Material UI** and **styled-components** for UI, and **ApexCharts** for interactive data visualization.  
The primary goals are to demonstrate **modern SPA patterns** (routing, layouts, nested routes), **dashboard UX**, and a **production-style layout** with navigation, header, and responsive cards.

## ✨ Features

### 🎯 Core Functionality

- **Dashboard Overview**: KPI cards for orders, visitors, and sales
- **User Management View**: List of users with roles and profile details
- **Orders View**: Latest orders table with status badges
- **Inbox View**: Chat-style inbox/messages layout
- **Responsive Layout**: Works across desktop and tablet sizes

### 🎨 User Experience

- **Modern UI/UX**: Dark-themed design with consistent spacing and typography
- **Top Navigation Bar**: Quick access to Dashboard, Users, Orders, and Inbox
- **Profile Section**: Avatar and user details in the header
- **Smooth Layout**: Card-based content blocks and scrollable panels

### 🔧 Technical Features

- **React Router DOM**: Declarative client-side routing with nested routes
- **Component-Based Architecture**: Reusable dashboard components
- **Chart Integration**: ApexCharts via `react-apexcharts` for metrics (available for easy extension)
- **Deployment Ready**: Preconfigured GitHub Pages deployment via `gh-pages`

## 🛠 Tech Stack

### Frontend

- **React 18** - Component-based UI library
- **Create React App 5 (`react-scripts`)** - Build tool and dev server
- **React Router DOM 6** - Client-side routing
- **Material UI (MUI)** - Component library for layout, icons, and theming
- **styled-components** - CSS-in-JS styling
- **ApexCharts & `react-apexcharts`** - Charting library for dashboards

### Testing & Tooling

- **`@testing-library/react`**, **`@testing-library/jest-dom`**, **`@testing-library/user-event`** - Testing utilities
- **ESLint (CRA config)** - Code linting and best practices

## 📁 Project Structure

```text
react-admin-dashboard/
├── public/
│   └── assets/              # Static images and thumbnails
│       └── thumbnail.png    # Dashboard preview image
├── src/
│   ├── components/
│   │   ├── layout.jsx       # Main layout with header and top navigation
│   │   ├── home/            # Dashboard home components
│   │   ├── users/           # Users list and related views
│   │   ├── table/           # Table components for orders
│   │   ├── chats/           # Chat list and items
│   │   ├── chatBody/        # Inbox chat body
│   │   ├── chatContent/     # Chat content components
│   │   ├── header/          # Header components
│   │   └── footer/          # Footer components
│   ├── common/              # Shared/common utilities/components
│   ├── App.js               # Main application component
│   ├── index.js             # Application entry point
│   ├── App.css              # App-level styles
│   └── index.css            # Global styles
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-admin-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000` to view the application.

## 📜 Available Scripts

| Script           | Description                                   |
| ---------------- | --------------------------------------------- |
| `npm start`      | Starts the development server                 |
| `npm run build`  | Builds the app for production                 |
| `npm test`       | Launches the test runner in watch mode        |
| `npm run eject`  | Ejects CRA configuration (one-way operation!) |
| `npm run deploy` | Deploys the production build to GitHub Pages  |

## 🎯 Key Features

### 📊 Dashboard

- **KPI Cards**: Displays key stats like new orders, visitors, and total sales
- **User Highlight Cards**: Quick overview of key team members
- **Latest Orders Section**: Recent orders with date, status, and user details
- **Inbox Preview**: Recent messages and senders

### 👥 Users

- **User List**: Displays users with avatars, names, roles, and contact details
- **Role Highlighting**: Distinct styling for roles (Admin, Support Lead, Designer, Developer)

### 📦 Orders

- **Orders Table**: Structured table view with sortable-style layout
- **Status Badges**: Visual representation of order status (Completed, Pending, In Process, etc.)

### 💬 Inbox

- **Chat Layout**: Conversation-style inbox with messages and timestamps
- **User Avatars**: Visual identification of participants in the chat

## 🧩 Components Overview

### Layout Components

- **`Layout`**: Main shell that renders header, navigation, and an `Outlet` for page content
- **`Header` / `Footer`**: Top and bottom sections for navigation and metadata

### Feature Components

- **`Home`**: Dashboard landing page with cards, inbox, and orders
- **`Users`**: Users listing and related UI
- **`Orders`**: Orders data table and status visuals
- **`Inbox`**: Chat/inbox content using chat-related components

### Shared / Common Components

- **Common UI**: Reusable typography, cards, and shared utilities in `common/`

## 📊 Data Structure

The dashboard currently uses **static/mock data** colocated with components (for example in `users/data.js` and table components).  
This structure can easily be replaced or extended with API calls or a real backend.

## 🛣 Routing

The application uses **React Router DOM v6** with a nested layout:

```text
/                  # Dashboard home (within Layout)
/user              # Users page
/order             # Orders page
/inbox             # Inbox / chat page
```

All routes are wrapped with `BrowserRouter` using the `basename` `/react-admin-dashboard` for GitHub Pages deployment.

## 🎨 Styling

### CSS & Theming

- **App.css / index.css**: Core global and layout styles
- **Component Styles**: Feature-specific styles (e.g., `users.css`, `table.css`, `cards.css`, etc.)
- **Dark Theme**: Dashboard-styled color palette optimized for dark UI

### Design System

- **Color Palette**: Primary, accent, and status colors for badges and cards
- **Typography**: Readable fonts for dashboard content
- **Spacing & Layout**: Consistent margins, paddings, and card layouts

### Responsive Design

- **Desktop-First Layout** with responsive adjustments
- **Flexible Panels** that adapt to different viewport widths

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the default CRA ESLint configuration
- Use meaningful component and variable names
- Add comments for complex logic
- Maintain consistent formatting

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details (if present).

## 🙏 Acknowledgments

- **React & CRA Teams**: For the React ecosystem and tooling
- **Material UI Team**: For the UI component library
- **ApexCharts Team**: For the powerful charting library
- **All Contributors**: For their ideas and improvements

---

**Admin Dashboard** - A clean, modern interface for managing your data.
