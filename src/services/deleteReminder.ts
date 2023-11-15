import axios from 'axios'
import reminder from '../models/reminder';

class ReminderServices {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });
    // ... other methods ...

    async deleteReminder(id: number) {
        // Corrected URL with a `/` before the ID
        const response = await this.http.delete(`todos/${id}`);
        return response.data;
    }
}

export default new ReminderServices();