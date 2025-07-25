# Roles & Permissions

## User Roles
| Role       | Description                |
| ---------- | -------------------------- |
| Admin      | Full access                |
| User       | Limited access             |
| Guest      | Read-only                  |

## Permissions Matrix
| Action       | Admin | User | Guest |
| ------------ | ----- | ---- | ----- |
| Create Task  | ✅    | ✅   | ❌    |
| Delete Task  | ✅    | ❌   | ❌    |
| View Reports | ✅    | ✅   | ❌    |

## Enforcement
- Middleware to check roles on protected endpoints
