import { useSelector, useDispatch } from "react-redux";
import { deleteCard, updateCard } from "./store";
import { useState } from "react";
const CardList = () => {
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
    <div style={{
        width:'200px',
        display:'flex',
        alignItems:'center',
        marginTop:'80px',
        height:'100px',
        gap:'50px'
    }} className="btn">
      {cards.map((card) => (
        
        <div style={{
           padding:'0px 100px',
           boxShadow:"0px 4px 10px rgba(216, 191, 191, 0.8)",
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
        }} key={card.id}>
          {editData?.id === card.id ? (
            <div className="modal">
              <input
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
              <input
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              />
              <input
                type="date"
                value={editData.date}
                onChange={(e) => setEditData({ ...editData, date: e.target.value })}
              />
              <input type="file" onChange={(e) => setEditData({ ...editData, image: e.target.files[0] })} />
              <button onClick={handleSave}>Edit</button>
            </div>
          ) : (
            <>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>{card.date}</p>
              {card.image && <img style={{
              }} src={URL.createObjectURL(card.image)} alt="Uploaded" width="100" />}
              <div style={{
                display:'flex',
                alignItems:'center',
                gap:"10px"
              }}>
              <button style={{
                padding:'4px 2px',
                 backgroundColor:'GrayText',
                color:'white'
              }} onClick={() => dispatch(deleteCard(card.id))}>Delete</button>
              <button  style={{
                padding:'4px 2px',
                backgroundColor:'GrayText',
                color:'white'
              }} onClick={() => handleUpdate(card)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;