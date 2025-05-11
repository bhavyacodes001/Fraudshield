# FraudShield - A Solution for Fraud Detection and Prevention

## Project Introduction

FraudShield is a modern web application designed for detecting and preventing fraud. It provides users with tools to identify and prevent suspicious activities, powered by advanced AI technology.

## Features

### AI-Powered Security
- **Smart Fraud Detection**: Our AI algorithms continuously analyze transaction patterns to identify and block suspicious activities before they can cause harm.
- **Behavioral Analysis**: Machine learning models that adapt to evolving fraud techniques by studying user behavior patterns and identifying anomalies.
- **Intelligent Alerts**: Get instant notifications about potential threats with actionable recommendations to secure your accounts and personal information.

### User-Friendly Interface
- Modern, responsive design built with React and Tailwind CSS
- Real-time protection status monitoring
- Comprehensive security dashboard

## Project Structure

The project consists of two main parts:
1. **Frontend**: React application with Tailwind CSS and shadcn-ui
2. **Backend**: Express server with AI integration via Groq API

## Getting Started

### Prerequisites
- Node.js and npm (or yarn/pnpm)
- Git

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/bhavyacodes001/Fraudshield.git

# Step 2: Navigate to the project directory
cd Fraudshield

# Step 3: Install the frontend dependencies
npm install

# Step 4: Install the backend dependencies
cd backend
npm install
cd ..
```

### Running the Application

You need to run both the frontend and backend servers:

```sh
# Terminal 1: Start the backend server
cd backend
npm start

# Terminal 2: Start the frontend development server
# (from the project root)
npm run dev
```

The frontend will be available at http://localhost:8080 (or another port if 8080 is in use).
The backend API runs on http://localhost:5000.

## Fraud Statistics in India

### Fraud Incidents by Type
According to the National Crime Records Bureau (NCRB) data for 2022:

- **Online Financial Fraud**: 65.8% of all cybercrime cases
- **Credit/Debit Card Fraud**: 12.3% of reported financial crimes
- **Identity Theft**: 8.7% of cybercrime cases
- **OTP Fraud**: 7.4% of digital payment frauds
- **Phishing Attacks**: 5.8% of all reported cyber incidents

### Fraud Victims by Age Group
The distribution of fraud victims across different age groups:

- **18-30 years**: 32.7% (highest vulnerability to UPI and mobile payment frauds)
- **31-45 years**: 41.2% (most targeted for credit card and investment frauds)
- **46-60 years**: 18.5% (commonly targeted for retirement fund scams)
- **Above 60 years**: 7.6% (vulnerable to impersonation and pension frauds)

### Key Insights
- Financial fraud cases have increased by approximately 28% year-over-year
- Urban areas account for 73% of all reported cybercrime cases
- The average financial loss per victim is estimated at ₹27,500
- Only about 33% of fraud incidents are formally reported to authorities

### Data Sources
- National Crime Records Bureau (NCRB): [Crime in India Reports](https://ncrb.gov.in/crime-in-india)
- Indian Cyber Crime Coordination Centre (I4C): [Cybercrime Portal](https://cybercrime.gov.in)
- Ministry of Home Affairs: [National Cyber Crime Reporting Portal](https://services.india.gov.in/service/detail/report-financial-fraud-through-the-national-cyber-crime-reporting-portal)

## How to Edit the Code?

There are several ways to edit this application.

**Use Your Preferred IDE**

To work on your local computer, you can clone this repository and push changes.

Requirements: Node.js and npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/bhavyacodes001/Fraudshield.git

# Step 2: Navigate to the project directory
cd Fraudshield

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

**Edit a File Directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What Technologies are Used in this Project?

This project uses the following technologies:

### Frontend
- Vite - Fast build tool and development server
- React - UI library
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- shadcn-ui - Reusable UI components

### Backend
- Express - Web server framework
- OpenAI/Groq API - AI integration for intelligent responses
- Nodemon - Development server with hot reload

## License

This project is licensed under the MIT License - see the LICENSE file for details.

