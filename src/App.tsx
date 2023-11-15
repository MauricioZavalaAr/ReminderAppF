import { useEffect, useState } from 'react';
import './App.css'
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderServices from './services/reminder';
import NewReminder from './components/NewReminder';


function App() {
const [reminders, setReminders]= useState<Reminder[]>([])
const [isLoading, setIsLoading] = useState(true); 
const [error, setError] = useState<Error | null>(null); 



useEffect(() => {
  loadReminders();
},[]);

const loadReminders = async () => {

  setIsLoading(true);
  setError(null); 
  try {
    const reminders = await reminderServices.getReminders();
    setReminders(reminders);
  } catch (error: any) { 
    console.error('Error loading reminders:', error);
    setError(error);
  }
  setIsLoading(false);
}

const removeReminder = (id: number) => {
  setReminders(reminders.filter(reminder => reminder.id !== id))
}



const addReminder = async (title:string) => {
    const newReminder = await reminderServices.addReminders(title);
    setReminders([newReminder, ...reminders]);
}

  return (
    <div className="App">
    <header className="header">Reminders App</header>
    {isLoading ? (
      <p className="loading">Loading...</p>
    ) : error ? (
      <p className="error">Error loading reminders. Please try again.</p>
    ) : (
      <div>
        <NewReminder onAddReminder={addReminder} />
        <ul className="reminder-list">
          {reminders.map(reminder => (
            <li key={reminder.id} className="reminder-item">
              {reminder.title}
              <button className="remove-button"  onClick={() => removeReminder(reminder.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>

  )
}

export default App


