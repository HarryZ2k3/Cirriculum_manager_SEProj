# Student Records Management Web Application

Welcome to the Student Records Management Web Application project repository. This project is aimed at providing an efficient solution for managing student records and curriculum data. It offers features like data access, grade updates, curriculum viewing, and data visualization through graphs. This project is a practical exercise in the software engineering process as part of our Software Engineering course.

## Key Features

- **Student Data Management**: Access and manage comprehensive student records efficiently.
- **Curriculum Overview**: View detailed information on the curriculum for different courses.
- **Graphical Analytics**: Visualize student performance statistics and other data through informative graphs.
- **Teacher Access & Updates**: Teachers can access and update student grades quickly and securely.
- **Project Management**: Includes SCRUM-based management work and other fundamental practices in software engineering.

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/HarryZ2k3/Cirriculum_manager_SEProj.git
    ```
2. Navigate to the project directory:
    ```sh
    # 1st terminal
    cd Cirriculum_manager_SEProj/backend/server
    # 2nd terminal
    cd Cirriculum_manager_SEProj/backend/socket
    # 3rd terminal
    cd Cirriculum_manager_SEProj/frontend
    ```
3. Install the dependencies:
    ```sh
    # 1st terminal
    npm install
    # 2nd terminal
    npm install
    # 3rd terminal
    npm install
    ```
4. Set up the PostgreSQL database:
    - Install PostgreSQL.
    - Configure PostgreSQL.
    - Create an account in pgAdmin4:
      - User: `postgres`
      - Host: `localhost`
      - Database: `STUDENTRECORDS`
      - Port: 5432
    - Use the query tool in pgAdmin4 to execute the SQL scripts:
      - `backend/STUDENTRECORDS.sql`
      - `backend/INSERT_INTO.sql`
5. Start the development server:
    ```sh
    # 1st terminal
    npm start
    # 2nd terminal
    npm start
    # 3rd terminal
    npm run dev
    ```
6. Access the local server through the link provided in the 3rd terminal.

## Usage

### Student Data Management
- View and edit student data via the Student Records tab.
- Add, update, or delete records as required.

### Curriculum Overview
- Access the curriculum information for all available courses via the Curriculum tab.
- View course descriptions, prerequisites, and credits.

### Graphical Analytics
- Visualize student performance trends using graphs under the Statistics tab.
- Compare statistics across different courses or terms.

### Grade Management
- Teachers can access and update student grades securely through the Grades tab.
- Role-based permissions ensure the security of sensitive data.

## Project Management & Process

The project follows an Agile/SCRUM methodology with practices including:
- **SCRUM Meetings**: Regular stand-ups, sprint planning, and retrospectives.
- **Issue Tracking**: All features and bug fixes are tracked using GitHub issues.
- **Branch Management**: Feature branches for each specific development task.
- **CI/CD**: Automated testing and deployment using GitHub Actions.

## Contribution Process

1. Fork the repository.
2. Create a feature branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add your message here"
    ```
4. Push to your branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Create a Pull Request (PR) with a detailed description.

## License

This project is licensed under the MIT License:

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```

## Contact

For questions or suggestions, feel free to reach out:
- **Email**: phuongdai.saigon@gmail.com
- **GitHub Issues**: [Submit an issue](https://github.com/HarryZ2k3/Cirriculum_manager_SEProj/issues)

Let's work together to build a more efficient solution for managing student records!

---

[GitHub Repository](https://github.com/HarryZ2k3/Cirriculum_manager_SEProj)