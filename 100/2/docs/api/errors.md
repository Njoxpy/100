# API Error Responses

| Status Code | Message               | Description                    |
| ----------- | --------------------- | ------------------------------|
| 400         | Bad Request           | Invalid request parameters     |
| 401         | Unauthorized          | Missing or invalid auth token |
| 403         | Forbidden             | Access denied                  |
| 404         | Not Found             | Resource does not exist        |
| 500         | Internal Server Error | Unexpected server error        |

## Error Response Format
```json
{
  "error": {
    "code": 400,
    "message": "Title is required"
  }
}
