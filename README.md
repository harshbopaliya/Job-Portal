# Job Portal

## Overview
The Job Portal is a full-stack web application that connects job seekers with recruiters. It allows users to search and apply for jobs, manage applications, and receive recommendations. Recruiters can post job listings, manage applicants, and track hiring progress. The platform also includes an admin dashboard for platform monitoring.

## Features
### Job Seekers:
- Register/Login
- Search and apply for jobs
- Upload and manage resumes
- Track application status
- Receive job recommendations

### Recruiters:
- Register/Login
- Post job openings
- Manage applicants
- Shortlist candidates
- View application statistics

### Admin:
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

## Folder Structure
```
job-portal/
│── backend/           # Django backend
│   ├── manage.py      # Django entry point
│   ├── requirements.txt # Backend dependencies
│   ├── .env           # Environment variables (ignored in Git)
│   ├── backend_app/   # Main Django application
│── frontend/          # React.js frontend
│   ├── src/           # Source files
│   ├── public/        # Public assets
│   ├── package.json   # Frontend dependencies
│── .gitignore         # Ignoring unnecessary files
│── README.md          # Project documentation
```

## Installation Guide
### Prerequisites
- Python 3.x
- Yarn (instead of npm)
- PostgreSQL/MySQL
- Virtual environment (recommended)

### Backend Setup
```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal/backend
python -m venv venv
source venv/bin/activate  # On Windows: `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd ../frontend
yarn install
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
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
Contributions are welcome! Please fork the repository and submit a pull request following the contribution guidelines in `CONTRIBUTING.md`.

## License
This project is licensed under the MIT License.

## Contact
For any queries, contact [your-email@example.com](mailto:bopaliyaharsh7@gmail.com).
