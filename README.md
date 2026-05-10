# 📱 WhatsApp Commerce Website Template

A mobile-first, high-conversion product catalog template built for small businesses to sell directly on WhatsApp. Perfect for Etsy, Gumroad, and Themeforest.

## 🚀 Features

- ✅ **WhatsApp Order Flow**: Generates pre-filled WhatsApp messages from the cart.
- ✅ **Multi-niche Support**: Includes 8 color themes (Shoes, Fashion, Electronics, Grocery, etc.).
- ✅ **Admin Panel**: Manage products, categories, orders, and store settings without code.
- ✅ **Mobile-First Design**: Optimized for 100% mobile conversion.
- ✅ **Local Payments**: UPI QR, COD, and Bank Transfer support built-in.
- ✅ **Multi-language**: English, Hindi, and Arabic support.
- ✅ **PWA Ready**: Can be installed on the home screen like an app.
- ✅ **SEO Optimized**: Dynamic meta tags for better search visibility.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, TypeScript, Framer Motion.
- **Backend**: Node.js, Express.
- **Database**: MongoDB (via Mongoose).
- **Icons**: Lucide React.

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-repo/whatsapp-commerce-template
cd whatsapp-commerce-template
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Setup Environment Variables
Create a `.env` file in `apps/api` based on `apps/api/.env.example`.

### 4. Seed the Database
```bash
cd apps/api
pnpm run seed
```

### 5. Run Development Servers
```bash
# From root
pnpm run dev
```

The Storefront will be at `http://localhost:3000` and the Admin Panel at `http://localhost:3000/admin/dashboard`.

## 🎨 Theming

Switch themes by adding the theme class to the body or parent element in `apps/web/src/app/layout.tsx`:
- `theme-kickshop` (Shoes)
- `theme-threadsstore` (Clothing)
- `theme-gadgetzone` (Electronics)
- `theme-grocercart` (Grocery)
- `theme-beautybliss` (Beauty)
- `theme-homedecor` (Home Decor)
- `theme-toyworld` (Toys)
- `theme-petsupply` (Pets)

## 📄 License

Commercial License - See documentation for details.
