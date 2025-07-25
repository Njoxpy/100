# API Endpoints

| Method | Endpoint        | Description                 | Auth Required |
| ------ | --------------- | ---------------------------| ------------- |
| POST   | `/auth/login`   | User login                 | No            |
| POST   | `/auth/signup`  | User registration          | No            |
| GET    | `/tasks`        | Get list of user tasks     | Yes           |
| POST   | `/tasks`        | Create new task            | Yes           |
| PUT    | `/tasks/:id`    | Update task               | Yes           |
| DELETE | `/tasks/:id`    | Delete task               | Yes           |

## Request & Response Examples
```json
// Example: POST /tasks
{
  "title": "Buy groceries",
  "dueDate": "2025-08-01"
}
