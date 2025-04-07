# Expense Management System

## 📌 Project Overview
The **Expense Management System** is designed to help organizations track and manage expenses efficiently. It ensures compliance with corporate standards and tax laws while minimizing manual effort in expense tracking. The project follows a **monolithic architecture** for scalability, flexibility, and maintainability.

## 🚀 Features
- **User Authentication & Registration** (Login, Email Verification, Role-Based Access)
- **Expense Management** (Add, Edit, Delete, Categorize Expenses)
- **Category Module** (AI-Based Categorization & Visualization)
- **Report Generation** (Automated Alerts & Graphical Reports)
- **Notification System** (In-App & Email Notifications)
- **Feedback Module** (User Feedback Collection)
- **Admin Dashboard** (User & Expense Management, CRUD Operations)

## 🛠️ Tech Stack
### Backend:
- **Spring Boot (Java)**
- **Spring Security** (Authentication)
- **JUnit & Mockito** (Testing)
- **MySQL** (Database)

### Frontend:
- **React.js**
- **Angular (Optional Alternative)**

## 📂 Modules & Implementation
### 1️⃣ User Module
- Secure user registration and login with Spring Security
- Role-based dashboard (Admin, User)
- Profile management with picture upload
- Email verification & password reset

### 2️⃣ Expense Module
- Expense tracking with CRUD operations
- Backend integration for managing expenses
- Form validations & test cases (JUnit & Mockito)

### 3️⃣ Category Module
- AI-based expense categorization
- Dashboard for viewing expenses per category
- Admin role for managing categories
- Graphical representation of financial reports

### 4️⃣ Report Module
- Report generation for expenses
- Automated email alerts & in-app notifications
- Validation before modifying reports

### 5️⃣ Notification Module
- Store and manage notifications
- Users can view/delete notifications
- Admin controls over notification management

### 6️⃣ Email Notification & Feedback Module
- AI-based automatic notification generation
- Subscription reminders, category updates, and expense tracking
- Duplicate email & mobile number validations

### 7️⃣ Admin Dashboard
- User management (Add, Edit, Delete)
- Expense & payment management
- Role-based feature access

## 🔧 Installation & Setup
### Prerequisites:
- **Java 17+**
- **Node.js 18+**
- **MySQL 8+**

### Steps to Run the Project:
#### Backend:
1. Clone the repository:
   ```sh
   git clone https://github.com/shaikhimran1006/Expense-Management
   ```
2. Configure **application.properties** with your database credentials.
3. Build and run:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

#### Frontend:
1. Navigate to the frontend directory:
   ```sh
   cd expense-management-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the React app:
   ```sh
   npm start
   ```

## 🧪 Testing
- Run backend tests:
  ```sh
  mvn test
  ```
- Run frontend tests:
  ```sh
  npm test
  ```

## 📸 Screenshots
- User Dashboard
- Admin Dashboard
- Expense & Report Management

## 👥 Contributors
- **Imran Shaikh** (Spring Boot & React Developer)

## 📜 License
This project is licensed under the MIT License.
