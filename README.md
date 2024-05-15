# Event Elevate

Website URL: [Event Elevate Live Site](https://mern-verse.web.app/)

Event Elevate is a platform that helps users manage and book services for events easily. It integrates user-friendly registration and login systems, service browsing, booking capabilities, and service management tools.

## Features

- **User Authentication**
  - Simple registration and login system with email/password or Google login (via OAuth).

- **Service Management**
  - Browse all available services offered by the platform.
  - View detailed information about a specific service and book it directly.

- **Service Provider Tools**
  - Add new services to the platform through an intuitive interface.
  - Manage existing services: update details or remove services as needed.

- **Booking and Service Status**
  - Users can view a list of services they have booked and their current status.
  - Service providers can see services booked by other users and update their status (e.g., pending, working, completed).

## Technologies Used

- **Frontend**
  - Built with Tailwind CSS and DaisyUI for responsive and modern UI components.
  - Deployed on Firebase hosting for fast and reliable frontend delivery.

- **Backend**
  - Developed with Node.js and Express.js to handle server-side logic and API requests.
  - MongoDB used as the database for storing service and user data.

## Deployment

- **Frontend Deployment**
  - The frontend is deployed on Firebase Hosting, ensuring scalability and CDN-powered content delivery.

- **Backend Deployment**
  - The backend API is deployed on Vercel for serverless computing and efficient API handling.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Set up MongoDB and ensure Node.js is installed.
3. Install dependencies using `npm install`.
4. Configure environment variables (e.g., database connection string, Google OAuth credentials).
5. Start the server using `npm start`.