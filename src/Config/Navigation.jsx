import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';
import {firestore} from '../Config/firebase'
const collectionName = 'ProductsData';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [updateItemId, setUpdateItemId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  const addNewItem = async () => {
    if (newItemText.trim() !== '') {
      if (updateItemId) {
        await updateItem(updateItemId, { text: newItemText });
        setUpdateItemId(null);
      } else {
        await firestore().collection(collectionName).add({ text: newItemText });
      }

      setNewItemText('');
      const updatedItems = await getItems();
      setItems(updatedItems);
    }
  };

  const getItems = async () => {
    const snapshot = await firestore().collection(collectionName).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const updateItem = async (itemId, newData) => {
    await firestore().collection(collectionName).doc(itemId).update(newData);
  };

  const deleteItem = async (itemId) => {
    await firestore().collection(collectionName).doc(itemId).delete();
    const updatedItems = await getItems();
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        placeholder="Enter item text"
        value={newItemText}
        onChangeText={(text) => setNewItemText(text)}
      />
      <button title={updateItemId ? 'Update Item' : 'Add Item'} onPress={addNewItem} >Add data</button>

{
  items.map((v,item)=>{
    return(
      <>
            <h2>{item.text}</h2>
            <button title="Update" onPress={() => { setUpdateItemId(item.id); setNewItemText(item.text); }} >Update</button>
            <button title="Delete" onPress={() => deleteItem(item.id)} >Delete</button>
      
      </>
    )
  })
}
          <div>
          </div>
        {/* )} */}
      {/* /> */}
    </div>
  );
};

export default ItemList;
