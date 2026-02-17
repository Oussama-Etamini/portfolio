import login from "../assets/images/stock/login.png";
import resetPassword from "../assets/images/stock/resetPassword.png";
import checkMail from "../assets/images/stock/checkMail.png";
import formOfReset from "../assets/images/stock/formOfReset.png";
import interfaceVide from "../assets/images/stock/interfaceVide.png";
import formiller from "../assets/images/stock/formiller.png";
import interface1 from "../assets/images/stock/interface.png";
import validation from "../assets/images/stock/validation.png";
import G_article from "../assets/images/stock/G_article.png"
import addArticle from "../assets/images/stock/addArticle.png"
import G_user from "../assets/images/stock/G_user.png"
import addUser from "../assets/images/stock/addUser.png"
import email from "../assets/images/stock/email.png"
import G_zone from "../assets/images/stock/G_zone.png"
import CreateZone from "../assets/images/stock/CreateZone.png"
import Zone1 from "../assets/images/stock/Zone1.png"
import detailArticles from "../assets/images/stock/detailArticles.png"
import stockGlobal from "../assets/images/stock/stockGlobal.png"
import addStock from "../assets/images/stock/addStock.png"
import visualiser from "../assets/images/stock/visualiser.png"
import home from "../assets/images/ecommerce/home.png"
import loginE from "../assets/images/ecommerce/loginE.png"
import signUp from "../assets/images/ecommerce/signUp.png"
import collection from "../assets/images/ecommerce/collection.png"
import detailsPage from "../assets/images/ecommerce/detailsPage.png"
import CartPage from "../assets/images/ecommerce/CartPage.png"
import placeOrder from "../assets/images/ecommerce/placeOrder.png"
import ordersPage from "../assets/images/ecommerce/ordersPage.png"
import about from "../assets/images/ecommerce/about.png"
import footer from "../assets/images/ecommerce/footer.png"
import contact from "../assets/images/ecommerce/contact.png"

const services_data = [
  {
    id: 1,
    slug: "stock-management-system",          
    w_name: "Stock Management",         
    category: "Inventory management system",
    technologies: [ "Laravel", "MySQL", "JavaScript","Tailwind CSS"],
    sections: [
      {
        img: login,
        title: "Main Interfaces of the Application",
        description: `The application’s login page is simple, intuitive, and designed for warehouse staff and managers. It includes clear login fields, a visible main login button, a show-password option, and a password recovery link. The interface ensures easy access while maintaining security through mandatory authentication.`,
      },
      {
        img: resetPassword,
        title: "Reset Password",
        description: `The password reset page provides a simple and secure solution for users who have lost their credentials. It allows users to enter their email address and receive a reset link automatically. This feature improves user experience by ensuring quick access recovery while maintaining security and confidentiality.`,

      },
      {
        img: checkMail,
        title: "Password Reset Form",
        description: `This interface allows the user to enter their email address, a new password, and its confirmation. It also includes an option to show or hide the password to reduce input errors. Once validated, the system updates the password in the database, ensuring secure access to the account.`,
    },
      {
        img: formOfReset,
        title: "Confirmation of Link Sending",
        description: `After submitting their email, the user receives a message confirming that the password reset link has been sent to their inbox. The link redirects to the update form, ensuring double security since only the user with access to the email account can reset the password.`,
    },
    {
        img: interfaceVide,
        tall: true,
        title: "Warehouse Agent Interface",
        description: `This interface is the main page for the warehouse agent after login when the stock is empty. It clearly shows “STOCK EMPTY” and offers three main actions: “Add” to register new products, “Confirm” to validate operations, and “Log Out” to exit securely. Its simple design ensures intuitive use and efficient daily stock management.`,
    },
    {
        img: formiller,
        tall: true,
        title: "Stock Addition Form",
        description: `This interface is the form for adding a new item to the stock. The user can select the storage zone, enter the item code, production date, number of pallets, and other quantity details. Clear “Cancel” and “Save” buttons make it easy to validate or cancel the entry. Its structured layout and step-by-step input help prevent errors, speed up registration, and ensure accurate product tracking for efficient stock management.`,
    },
    {
        img: interface1,
        tall: true,
        title: "Warehouse Agent Interface – Item Added",
        description: `After adding an item, the interface shows a detailed summary including the code, product name, storage zone, production date, batch number, and total quantity. Three main actions—Duplicate, Edit, and Delete—allow flexible management, while a “Confirm” button finalizes the operation. This clear and functional layout enhances traceability and simplifies daily stock management for the warehouse agent.`,
    },
    {
        img: validation,
        tall: true,
        title: "Validation stock",
        description: `When a warehouse agent adds or updates an item, the system displays a confirmation window to ensure data accuracy. It shows key product details (code and name) and asks the user to confirm before sending the information to the administrator dashboard. This step prevents errors and ensures only validated data is transmitted. Color-coded buttons (“Yes, Confirm!” in blue and “Cancel” in red) enhance clarity and support quick, secure decision-making.`,
    },
    {
        img: G_article,
        title: "Item Managment",
        description: `After submitting their email, the user receives a message confirming that the password reset link has been sent to their inbox. The link redirects to the update form, ensuring double security since only the user with access to the email account can reset the password.`,
    },
    {
        img: addArticle,
        title: "Add Item",
        description: `The system’s Item Management includes a form for adding new items to the stock. Required fields are: Code (unique identifier), Name (item designation), Original Code (initial or external reference), Pallet (number of cartons/units per pallet), and Status (default “Active”). Two buttons, “Cancel” and “Save,” allow the user to discard or confirm the addition.`,
    },
    {
        img: G_user,
        title: "User Management",
        description: `This interface allows the administrator to manage platform user accounts. The table clearly shows each user’s name, email, and role (administrator or warehouse agent). Action icons enable editing or deleting accounts, but security restrictions apply: the super administrator cannot be deleted, and administrators created by the super administrator have limited access—they cannot create, modify, or delete users. This hierarchy ensures strong security and effective platform governance.`,
    },
    {
        img: addUser,
        title: "Add User",
        description: `The “Add User” popup provides a simple interface to register new users with essential fields: name, email, and password. The role dropdown defaults to “Warehouse Agent,” reflecting the system’s warehouse-focused design. This default streamlines user creation while still allowing other roles. Standard “Cancel” and “Save” buttons let the user complete or abort the process.`,
    },
    {
        img: email,
        title: "Email Notification ",
        description: `The system automatically sends a welcome email to new users with their login credentials and account information. Triggered immediately after creating a user via the “Add User” popup, this automated email ensures secure and prompt delivery of access details, streamlining onboarding and eliminating the need for manual credential sharing.`,
    },
    {
        img: G_zone,
        title: "Zone Management",
        description: `This interface allows the administrator or manager to manage all warehouse storage zones. Each zone has a unique name (e.g., ZONE 1, ZONE 2, ZONE 3 STOCK 2, ZONE 3 RBP). The page provides actions to Edit (pencil icon), Delete (trash icon), or View (eye icon) a zone, and a “Create” button lets users add new zones. This feature enhances stock organization, improves traceability, and streamlines warehouse logistics.`,
    },
    {
        img: CreateZone,
        title: "Add Zone",
        description: `The Zone Management page allows the administrator to define, organize, and control stock locations. Each zone is listed with intuitive action icons for edit, delete, and view. A “Create” button enables adding new zones, providing flexibility as the system grows. This interface ensures clear, dynamic organization of storage space, improving product tracking and preventing confusion in stock management.`,
    },
    {
        img: Zone1,
        title: "Item Management Within a Zone",
        description: `The Zone 1 page provides a detailed view of all items stored in that location. Each row shows key details: product code, name, production date, batch number, number of pallets, additional information, and an automatically calculated total. Tools at the top include a search field and action buttons for exporting data or deleting multiple entries. The system also displays the total quantity in the zone, giving the administrator an accurate, up-to-date overview to improve traceability and operational warehouse management.`,
    },
    {
        img: detailArticles,
        title: "Item Details",
        description: `The Item Details page provides a precise view of a product’s history and distribution across storage zones. Each record shows the product code, name, production date, batch number, number of pallets, additional details, and total quantity. A “Zone” column indicates each lot’s location for easier traceability. Filters by code or batch speed up searches, and the Export function allows data extraction. The cumulative total displayed gives an up-to-date overview of the stock for that item.`,
    },
    {
        img: stockGlobal,
        title: "Stock Management Interface",
        description: `The "Stock Management" page provides a comprehensive dashboard for managing 19,479 units in stock. It includes search, export, and add-item functions, with the main table showing key details: code, name, production date, batch number, total quantity, and distribution across ZONE 1 to ZONE 8. Each item row offers individual actions (edit, delete, view). The system supports pagination (23 entries total, 5 per page) with navigation controls. This interface centralizes stock management and gives a clear overview of quantities across storage zones.`,
    },
    {
        img: addStock,
        title: "Add Stock",
        description: `The “Add Stock” popup provides a structured interface for adding new items, including fields for item code (with search), storage zone, production date, number of pallets, and additional details. It ensures complete data entry for traceability and spatial organization. “Cancel” and “Save” buttons, along with a close icon, allow easy completion or exit. This popup centralizes stock entry and ensures all necessary information is captured for accurate inventory management.`,
    },
    {
        img: visualiser,
        title: "Stock Information Feature",
        description: `When a user clicks the information (i) icon in the “ACTION” column of the stock table, the system opens the “Detailed Stock Information” popup. This provides instant access to complete data for the selected item, including item details, stock information, user data, and timestamps. The feature enhances user experience by offering quick, detailed insights without leaving the main stock management view.`,
    },
    ]
  },
  {
    id: 2,
    slug: "Ecommerce-Platform",
    w_name: "Ecommerce",
    category: "E-commerce Platform",
    technologies: [ "React JS", "Strapi",,"Tailwind CSS"],
    sections: [
        {
            img: home,
            title: "Home Page",
            description: `The home page introduces the ShopClues ecommerce experience and quickly connects visitors with products that matter. It highlights hero content, the latest collection, and best‑selling items to drive discovery and clicks into product details. Policy and newsletter sections build trust and encourage visitors to subscribe, helping convert new visitors into repeat customers.`,
        },
      {
        img: collection,
        title: "Collection Page",
        description: `The collection page is designed as a powerful product‑browsing and filtering hub. Customers can refine items by category (Men, Women, Kids), type (Topwear, Bottomwear, Winterwear), search term, and price order, making it easy to find exactly what they want. This page’s goal is to turn broad interest into concrete product selections and increase add‑to‑cart actions.`,
      },
      {
        img: detailsPage,
        title: "Product Details Page",
        description: `The product page presents all key information a shopper needs to confidently decide on a single item. It showcases multiple images, price, description, rating, available sizes, and trust badges (original product, COD, easy returns), with a clear “Add to Cart” action. By combining rich visuals with size selection and related products, the page aims to maximize conversion on each product view.`,
      },
      {
        img: CartPage,
        title: "Cart Page",
        description: `The cart page gives customers a clear, editable overview of the items they plan to purchase. It shows product image, name, size, quantity, and price, and allows users to update quantities or remove items before checkout. Its goal is to validate the order, surface the total cost via the cart summary, and smoothly move users toward the “Proceed to Checkout” step.`,
      },
      {
        img: placeOrder,
        title: "Place Order Page",
        description: `The place‑order page serves as the checkout step where customers finalize their purchase details. It collects delivery information (name, address, contact) and summarizes order totals, delivery fee, and quantity via the cart total component. Payment method choices (Stripe, Razorpay, cash on delivery) and the “Place Order” button are designed to make the final confirmation clear and secure, converting carts into completed orders.`,
      },
      {
        img: ordersPage,
        title: "Orders Page",
        description: `The orders page is a personal order history dashboard for logged‑in customers. It lists each order with product names, prices, date, quantity, size, total amount, and the current order state (order passed, confirmed, shipped, delivered, rejected) with color codes. Its goal is to provide transparency and control—letting users track their purchases, see status at a glance, and manage orders (view details or delete).`,
      },
      {
        img: about,
        title: "About Page",
        description: `The about page tells the brand story and explains what makes the shop unique. It pulls content and imagery from Strapi to describe the company, its mission, and key values, then highlights additional selling points through structured info cards. This page’s goal is to build trust, differentiate the store from competitors, and reassure new visitors that they are buying from a serious, professional business.`,
      },
      {
        img: contact,
        title: "Contact Page",
        description: `The contact page is the main communication bridge between customers and the store. It presents a large visual of the store, clear location (Casablanca, Morocco), phone number, and email, along with a careers section for job seekers. Its goal is to make support easy to reach, strengthen credibility by showing real contact information, and invite deeper relationships with both customers and potential team members.`,
      },
      {
        img: loginE,
        title: "Login Page",
        description: `The login page provides a quick, secure entry point for returning customers. Users can authenticate using either email or username plus password, with links to recover access or register a new account. Once authenticated, the app stores user data locally and redirects to the profile area, ensuring that only legitimate users can access personal information and order history.`,
    },
      {
        img: signUp,
        title: "Register Page",
        description: `The registration page converts visitors into registered customers with a minimal, focused form. By collecting only name, email, and password, it reduces friction while allowing the system to create a client record in Strapi. Its goal is to onboard new users smoothly so they can log in, place orders, and track their activity, while the “Login here” link prevents confusion for existing users.`,
      },
      {
        img: footer,
        title: "Footer",
        description: `The policies and footer sections reassure customers about service quality and support while keeping them engaged with the brand. Icons for exchange, returns, and customer support highlight low‑risk shopping, and the newsletter form grows the mailing list with a clear “Subscribe and get 20% off” incentive. The dynamic footer, powered by Strapi, centralizes brand description, navigation links, contact info, and copyright to close each page with trust and clarity.`,
      },
    ]
  },
  {
    id: 3,
    slug: "service-3",
    w_name: "Service 3",
    category: "SERVICE",
    sections: [
      {
        img: login,
        title: "Service 3 Detail",
        description: "Web development is the process of building, programming...",
        tech: ["Tech A", "Tech B"]
      }
    ]
  },
  {
    id: 4,
    slug: "service-4",
    w_name: "Service 4",
    category: "SERVICE",
    sections: [
      {
        img: login,
        title: "Service 4 Detail",
        description: "Web development is the process of building, programming...",
        tech: ["Tech A", "Tech B"]
      }
    ]
  },
  {
    id: 5,
    slug: "service-5",
    w_name: "Service 5",
    category: "SERVICE",
    sections: [
      {
        img: login,
        title: "Service 5 Detail",
        description: "Web development is the process of building, programming...",
        tech: ["Tech A", "Tech B"]
      }
    ]
  },
  {
    id: 6,
    slug: "service-6",
    w_name: "Service 6",
    category: "SERVICE",
    sections: [
      {
        img: login,
        title: "Service 6 Detail",
        description: "Web development is the process of building, programming...",
        tech: ["Tech A", "Tech B"]
      }
    ]
  }
];

export default services_data;