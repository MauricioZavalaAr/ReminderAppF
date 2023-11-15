import { useState } from "react";
interface NewReminderProps {
    onAddReminder: (title:string) => void
}

const NewReminder = ({onAddReminder}: NewReminderProps ) => {

  
  const [title, setTitle] = useState('')
  const submitForm = (event: React.FormEvent) =>{
    event.preventDefault();
    if(!title) return;
    onAddReminder(title);
  }
    return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input value={title} onChange={event=>setTitle(event.target.value) } type="text" className="form-control" />
      <button type="submit" className="btn btn-secondary rounded-pill my-4">Add Reminder</button>
    </form>
  );
};

export default NewReminder;
