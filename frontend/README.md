# Job Portal

## Overview
The Job Portal is a web-based platform that connects job seekers with job listings while allowing recruiters to post job openings. The project is built using Django for the backend, React.js for the frontend, and PostgreSQL/MySQL for the database.

## Features
- **Job Seekers:**
  - Register/Login
  - Search and apply for jobs
  - Upload and manage resumes
  - View application status
  - Receive job recommendations

- **Recruiters:**
  - Register/Login
  - Post job openings
  - Manage applicants
  - Shortlist candidates
  - View job application statistics

- **Admin:**
  - Manage users (job seekers & recruiters)
  - Approve or reject job listings
  - Monitor platform activity

## Tech Stack
- **Backend:** Django (Python)
- **Frontend:** React.js
- **Database:** PostgreSQL/MySQL
- **Styling:** Tailwind CSS
- **Authentication:** Django Authentication
- **Deployment:** AWS (Optional)

## Installation Guide

### Prerequisites
- Python 3.x
- Yarn (instead of npm)
- PostgreSQL/MySQL
- Virtual environment (optional but recommended)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
4. Apply migrations:
   ```bash
   python backend/manage.py migrate
   ```
5. Start the backend server:
   ```bash
   python backend/manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start Tailwind CSS watcher:
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```
4. Start the development server:
   ```bash
   yarn start
   ```

## API Endpoints
- `POST /api/auth/register/` - Register a user
- `POST /api/auth/login/` - Login
- `GET /api/jobs/` - Fetch all job listings
- `POST /api/jobs/apply/` - Apply for a job
- `GET /api/recruiter/jobs/` - View jobs posted by recruiter

## Future Enhancements
- Resume parsing and AI-based job recommendations
- Payment integration for premium job postings
- Real-time chat between recruiters and job seekers
- Admin dashboard with analytics

## Contributing
Contributions are welcome! Please follow the contribution guidelines in `CONTRIBUTING.md`.

## License
This project is licensed under the MIT License.

## Contact
For any queries, contact [your-email@example.com](mailto:your-email@example.com).
