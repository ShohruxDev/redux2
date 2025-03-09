import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "./store";
import { nanoid } from "nanoid";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date) return;

    const imageUrl = image ? URL.createObjectURL(image) : null;

    dispatch(addCard({ id: nanoid(), title, description, date, image: imageUrl }));
    
    setTitle("");
    setDescription("");
    setDate("");
    setImage(null);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '200px', marginTop: '50px', marginLeft: '10px' }} onSubmit={handleSubmit}>
      <input style={{ padding: '10px 20px', borderRadius: '8px', marginBottom: '10px' }} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input style={{ padding: '10px 20px', borderRadius: '8px', marginBottom: '10px' }} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input style={{ padding: '10px 20px', borderRadius: '8px', marginBottom: '10px' }} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input style={{ padding: '10px 20px', borderRadius: '8px', marginBottom: '10px' }} type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button style={{ height: '40px', border: 'none', borderRadius: '10px', cursor: 'pointer' }} type="submit">Add Card</button>
    </form>
  );
};

export default FormComponent;
