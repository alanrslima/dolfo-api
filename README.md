## **Pet Wish API**

**Description**  
This API powers the Pet Wish, connecting pet owners with service providers (groomers, trainers, vets, etc.). The platform supports booking, scheduling, and managing services, making it easy for users to access essential pet services.

### **Table of Contents**

- [**Pet Wish API**](#pet-wish-api)
  - [**Table of Contents**](#table-of-contents)
  - [**Features**](#features)
  - [**Tech Stack**](#tech-stack)
  - [**Getting Started**](#getting-started)
    - [**Prerequisites**](#prerequisites)
    - [**Installation**](#installation)
    - [**Running the Application**](#running-the-application)
  - [**API Documentation**](#api-documentation)
  - [**Environment Variables**](#environment-variables)
  - [**Scripts**](#scripts)
  - [**Folder Structure**](#folder-structure)
  - [**Contributing**](#contributing)
  - [**License**](#license)
  - [**Contact**](#contact)

---

### **Features**

- User authentication (signup/login) with secure password storage
- Pet and service provider profiles
- Service booking and scheduling
- Notifications for upcoming appointments
- Payment processing integration (e.g., Stripe)

---

### **Tech Stack**

- **Node.js** with **Express** for the backend framework
- **TypeScript** for type-safe development
- **MongoDB** (or other DB) for data storage
- **Jest** (or similar) for testing
- **Swagger** for API documentation

---

### **Getting Started**

#### **Prerequisites**

- **Node.js** (v16+)
- **npm** or **yarn** (Node package manager)
- **MongoDB** (locally installed or cloud-hosted)
- Optional: **Docker** for containerized development

#### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/pet-services-platform-api.git
   cd pet-services-platform-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the project root based on the [.env.example](./.env.example) file.

#### **Running the Application**

To start the server, run the following command:

```bash
npm run dev
# or
yarn dev
```

The API will be running at `http://localhost:3000`.

---

### **API Documentation**

- Access interactive documentation at `http://localhost:3000/api-docs` (when running locally).
- The API follows REST principles, with endpoints for user management, bookings, services, and payments.
- Example endpoint:
  - **GET** `/api/v1/services` — Retrieve available services.

---

### **Environment Variables**

Configure these environment variables in your `.env` file:

```plaintext
PORT=3000
MONGO_URI=mongodb://localhost:27017/pet_services
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

- `PORT`: Port on which the server runs.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret for JWT authentication.
- `STRIPE_SECRET_KEY`: Stripe key for handling payments.

---

### **Scripts**

- **`npm run dev`**: Starts the development server with hot-reloading.
- **`npm run build`**: Compiles TypeScript code to JavaScript.
- **`npm start`**: Runs the compiled code.
- **`npm test`**: Runs all tests.
- **`npm run lint`**: Lints the codebase using ESLint.

---

### **Folder Structure**

Here’s an overview of the project structure:

```plaintext
├── src
│   ├── controllers    # Controllers handle request logic
│   ├── routes         # Route definitions
│   ├── models         # Database models
│   ├── middlewares    # Middleware functions
│   ├── utils          # Helper functions
│   └── index.ts       # App entry point
├── tests              # Unit and integration tests
├── .env.example       # Environment variable examples
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

---

### **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add a feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

### **License**

This project is licensed under the MIT License.

---

### **Contact**

If you have any questions, please open an issue or reach out to me at [alanronison.lima@gmail.com].
