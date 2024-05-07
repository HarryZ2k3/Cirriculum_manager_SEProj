# Web Application for Student Records Management

Welcome to the **Student Records Management Web Application** repository. This project is aimed at providing an efficient solution for managing student records and curriculum data. It offers features like data access, grade updates, curriculum viewing, and data visualization through graphs. It is designed as a practical exercise in the software engineering process as part of our Software Engineering course.

## Key Features
- **Student Data Management:** Access and manage comprehensive student records efficiently.
- **Curriculum Overview:** View detailed information on the curriculum for different courses.
- **Graphical Analytics:** Visualize student performance statistics and other data through informative graphs.
- **Teacher Access & Updates:** Teachers can access and update student grades quickly and securely.
- **Project Management:** Includes SCRUM-based management work and other fundamental practices in software engineering.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Management & Process](#project-management--process)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)

## Installation
Follow these steps to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/HarryZ2k3/Cirriculum_manager_SEProj.git
    ```

2. Navigate to the project directory:
    ```bash
    cd student-records-management
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up the PostgreSQL database:
    - Install and configure PostgreSQL.
    - Create a new database:
      ```sql
      CREATE DATABASE student_records;
      ```
    - Create a user and grant privileges:
      ```sql
      CREATE USER yourusername WITH ENCRYPTED PASSWORD 'yourpassword';
      GRANT ALL PRIVILEGES ON DATABASE student_records TO yourusername;
      ```

5. Set up the environment variables. Create a `.env` file and add your configurations:
    ```bash
    PORT=4000
    DB_URI=postgresql://yourusername:yourpassword@localhost:5432/student_records
    ```

6. Start the development server:
    ```bash
    npm start
    ```

7. Visit `http://localhost:4000` in your browser to access the application.

## Usage
### Student Data Management
- View and edit student data easily via the **Student Records** tab.
- Add, update, or delete records as required.

### Curriculum Overview
- Access the curriculum information for all available courses via the **Curriculum** tab.
- View course descriptions, prerequisites, and credits.

### Graphical Analytics
- Visualize student performance trends using graphs under the **Statistics** tab.
- Compare statistics across different courses or terms.

### Grade Management
- Teachers can access and update student grades securely through the **Grades** tab.
- Role-based permissions ensure the security of sensitive data.

## Project Management & Process
The project follows an Agile/SCRUM methodology with practices including:
- **SCRUM Meetings:** Regular stand-ups, sprint planning, and retrospectives.
- **Issue Tracking:** All features and bug fixes are tracked using GitHub issues.
- **Branch Management:** Feature branches for each specific development task.
- **CI/CD:** Automated testing and deployment using GitHub Actions.

### Contribution Process
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your message here"
    ```
4. Push to your branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Create a Pull Request (PR) with a detailed description.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, feel free to reach out:
- **Email:** softwarecourse@example.com
- **GitHub Issues:** [Issues](https://github.com/HarryZ2k3/Cirriculum_manager_SEProj/issues)

Let's work together to build a more efficient solution for managing student records!
