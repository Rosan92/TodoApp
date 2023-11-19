export const todoSchema = {
    "type": "object",
    "properties": {
      "title": { "type": "string" },
      "description":{ "type":"string" },
      "date": { "type": "string", "format": "date" },
      "priority": { "type": "string", "enum": ["High", "Medium", "Low"] },
    }
  };