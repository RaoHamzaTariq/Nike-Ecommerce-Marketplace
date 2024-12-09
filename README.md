# Nike E-commerce Website UI - Hackathon Project

This project is an **E-commerce Website UI Design** built during a UI/UX Hackathon. The website is designed for Nike, focusing on creating a seamless and responsive user interface using **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## Features and Pages

### 1. **Home Page**
   - Displays a modern and minimalist landing page.
   - Includes a hero section highlighting Nike's latest collections.
   - Features a grid layout showcasing popular products.
   - route: `/`

### 2. **Products Page**
   - A dynamic list of products displayed in a responsive grid format.
   - Each product card includes an image, name, price, and quick link to details.
   - Utilizes **dynamic routing** to connect to the product detail page.
   - route: `/products`

### 3. **Product Detail Page**
   - Displays detailed information about a selected product.
   - Includes:
     - Product image.
     - Description.
     - Price.
     - Add-to-cart button.
   - Responsive design ensures readability across devices.
   - route: `/products/product/[productdetails]`

### 4. **Login Page**
   - A clean and straightforward login form for users to access their accounts.
   - - route: `/login`

### 5. **Join Us Page**
   - Simple and engaging form with a modern design.
   - route: `/joinus`

### 6. **Contact Us Page**
   - A functional contact form for users to send queries or feedback.
   - Includes fields for name, email, and message.
   - Responsive layout for easy usage on mobile devices.
   - route: `/contact-us`

### 7. **Cart Page**
   - Displays products added to the cart with details such as name, quantity, and price.
   - Includes options to update quantities or remove items.
   - route: `/cart`

### 8. **Checkout Page**
   - A form-based checkout process allowing users to input shipping and payment details.
   - Designed to enhance user experience with a simple and intuitive layout.
   - route: `/checkout`

---

## Tech Stack
### **1. Next.js**
   - Used for server-side rendering and creating dynamic routes for product details.
   - Ensures fast loading times and SEO optimization.

### **2. TypeScript**
   - Enforced type safety for better code maintainability.
   - Helped catch errors during development, improving code reliability.

### **3. Tailwind CSS**
   - Enabled rapid styling with utility-first classes.
   - Simplified responsive design for consistent layouts across devices.

---

## Approach
1. **UI Design Principles**:
   - Prioritized simplicity, readability, and responsiveness.
   - Created a visually appealing interface aligning with Nike's brand identity.

2. **Component-Based Architecture**:
   - Built reusable components for buttons, product cards, forms, etc., ensuring scalability.

3. **Routing and Navigation**:
   - Implemented dynamic routing for product detail pages.
   - Smooth navigation between pages using Next.js `Link`.

4. **Responsive Design**:
   - Used Tailwind's responsive utilities (`sm`, `md`, `lg`, `xl`) to ensure a seamless experience across devices.

5. **TypeScript Integration**:
   - Ensured type-safe data handling across all components.
   - Leveraged TypeScript interfaces for clean and consistent props management.

6. **Performance Optimization**:
   - Used Next.js `Image` component for optimized image loading.
   - Minimized CSS and JavaScript payloads with Tailwind's production build.

---

## Challenges
- Designing a consistent and intuitive UI for diverse user interactions (e.g., cart management, checkout).
- Managing state efficiently across pages for cart and product details.
- Balancing aesthetics and functionality within the hackathon's time constraints.

---

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone [https://github.com/RaoHamzaTariq/ui-ux-hackathon.git]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## Future Enhancements
- Adding backend functionality for user authentication and cart management.
- Integrating a payment gateway for the checkout process.
- Expanding the product catalog with a CMS or API.

---

## Author

- Rao Hamza Tariq
- Email: raohamza6767@gmail.com
- LinkedIn: [Rao Hamza Tariq](https://www.linkedin.com/in/rao-hamza-tariq/)
- Twitter: [@rao_hamza_tariq](https://twitter.com/rao_hamza_tariq)

---

## Acknowledgments
This project was developed during a UI/UX hackathon. Special thanks to the hackathon organizers and my peers for their feedback and support.
