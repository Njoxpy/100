# Environment Configurations

## Environments
- Development
- Staging
- Production

## Environment Variables
| Variable           | Description                | Example            |
| ------------------ | -------------------------- | ------------------ |
| `MONGO_URI`        | MongoDB connection string  | `mongodb://...`    |
| `JWT_SECRET`       | Secret for JWT tokens      | `supersecretkey`   |
| `PORT`             | Server port                | `3000`             |

## Managing Secrets
- Use dotenv locally
- Use secret managers in prod (AWS Secrets Manager, Vault)
