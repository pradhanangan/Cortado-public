# Cortado Order Ticket App

How to run?
A modern Next.js application for secure event ticket ordering with Stripe payment integration.

## Features

- 🎫 Secure ticket ordering system
- 💳 Stripe payment integration
- 📱 Responsive Material-UI design
- 🔒 Type-safe with TypeScript
- ⚡ Fast performance with Next.js 15
- 🛡️ Error boundaries and loading states
- 📧 Email verification system

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Material-UI (MUI) v6
- **Payment**: Stripe
- **Validation**: Zod
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm
- Stripe account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cortado-order-ticket-app
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Fill in the required environment variables:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

4. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with error boundary
│   ├── page.tsx           # Home page
│   └── orders/            # Order-related pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── error-boundary.tsx
│   │   └── loading-spinner.tsx
│   ├── checkout/         # Checkout-related components
│   │   ├── customer-form.tsx
│   │   ├── order-summary.tsx
│   │   └── stripe-checkout-form.tsx
│   └── ...               # Other components
├── hooks/                # Custom React hooks
│   ├── useCheckout.ts
│   ├── useStripePayment.ts
│   └── usePaymentComplete.ts
├── lib/                  # Utility libraries
│   ├── api-client.ts     # Centralized API client
│   └── env.ts           # Environment validation
├── services/            # API services
│   ├── order-service.ts
│   └── product-service.ts
├── types/               # TypeScript type definitions
│   ├── api-type.ts
│   ├── order-type.ts
│   └── product-type.ts
├── utils/               # Utility functions
└── constants/           # Application constants
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Key Improvements Made

### 1. **Component Architecture**

- Broke down large components into smaller, focused components
- Created reusable UI components (`LoadingSpinner`, `ErrorBoundary`)
- Separated checkout logic into dedicated components

### 2. **Error Handling**

- Added global error boundary
- Centralized API error handling with custom `ApiError` class
- Improved user feedback for errors

### 3. **Type Safety**

- Added Zod for runtime environment validation
- Improved TypeScript types throughout the application
- Better type safety for API responses

### 4. **Code Organization**

- Created centralized API client with consistent error handling
- Extracted business logic into custom hooks
- Improved file naming consistency

### 5. **Performance & UX**

- Added loading states throughout the application
- Improved error recovery mechanisms
- Better component separation for easier testing

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure
- Use Material-UI components for consistency
- Implement proper error handling

### Adding New Features

1. Create types in `src/types/`
2. Add API methods in `src/services/`
3. Create custom hooks in `src/hooks/` if needed
4. Build components in appropriate directories
5. Add proper error handling and loading states

### Testing

- Add unit tests for utility functions
- Test components with proper error scenarios
- Validate API integration

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker** (Dockerfile included)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is private and proprietary.
