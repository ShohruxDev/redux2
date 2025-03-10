import { useSelector, useDispatch } from "react-redux";
import { deleteCard, updateCard } from "./store";
import { useState } from "react";
const Cardlist = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);

  const handleUpdate = (card) => {
    setEditData(card);
  };

  const handleSave = () => {
    dispatch(updateCard(editData));
    setEditData(null);
  };

  return (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
      {cards.map((card) => (
        <div key={card.id} style={{ padding: '20px', boxShadow: "0px 4px 10px rgba(216, 191, 191, 0.8)", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {editData?.id === card.id ? (
            <div className="modal">
              <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
              <input value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} />
              <input type="date" value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>{card.date}</p>
              {card.image && <img src={card.image} alt="Uploaded" width="100" />}
              <div style={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                <button style={{ padding: '4px 10px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => dispatch(deleteCard(card.id))}>Delete</button>
                <button style={{ padding: '4px 10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleUpdate(card)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cardlist;
