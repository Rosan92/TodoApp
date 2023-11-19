import CustomDatePicker from "../customFiles/CustomDatePicker";
import CustomPrioritySelection from "../customFiles/CustomPrioritySelection";

export const todoUISchema = {
    "type": "VerticalLayout",
    "elements": [
        { "type": "Control", "scope": "#/properties/title" },
        { "type": "Control", "scope": "#/properties/description"},
        { "type": "Control", "scope": "#/properties/dueDate", "options": { "format": "date" }, "render": CustomDatePicker },
        { "type": "Control", "scope": "#/properties/priority", "options": { "enumOptions": ["High", "Medium", "Low"] }, "render": CustomPrioritySelection },
    ]
};
