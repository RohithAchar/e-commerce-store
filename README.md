# E-commerce Store

This is a user-friendly **E-commerce Store** built to allow users to explore various product categories, add items to the cart, and make secure purchases using Stripe for payment processing. The store features a smooth and modern UI, along with state management to ensure a seamless shopping experience.

## Features

- **Explore Categories**: Users can browse products by different categories.
- **Add to Cart**: Seamless shopping experience with add-to-cart functionality.
- **Checkout**: Complete purchases securely with Stripe payment integration.
- **Product Listings**: Display detailed product information for users to make informed decisions.

## Tech Stack

- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Next.js**: React framework for server-side rendering and full-stack development.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI design.
- **Zustand**: State management library to handle the application's global state.
- **Stripe**: Payment gateway integration to handle transactions securely.

## Getting Started

### Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js** (v16 or higher)
- **Stripe account** for payment processing

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RohithAchar/e-commerce-store.git
   cd e-commerce-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add your environment variables:

   ```bash
   NEXT_PUBLIC_API_URL=your_dashboard_app_url
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   The application will be running at `http://localhost:3000`.

## Usage

- **Browse Categories**: Explore products from different categories.
- **Add to Cart**: Select products to add to the shopping cart.
- **Checkout**: Use Stripe to process payments and complete purchases.

## Deployment

You can deploy this project on platforms like Vercel or Netlify.

### Deploy on Vercel

1. Connect your repository to Vercel.
2. Add the environment variables on Vercel (same as in your `.env` file).
3. Deploy the project with ease.

## Contributing

Contributions are welcome! If you'd like to contribute, please submit a pull request or raise an issue.

## License

This project is licensed under the MIT License.
