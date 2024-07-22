import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching items:', error);
            setError('Failed to fetch items');
            setLoading(false);
        }
    };

    const handleEdit = (item) => {
        onEdit(item);
    };

    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${itemId}/`);
            setItems(items.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Failed to delete item');
        }
    };

    return (
        <div>
            <h1>Items</h1>
            {loading ? (
                <p>Loading items...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <p>First Name: {item.first_name}</p>
                            <p>Middle Name: {item.middle_name}</p>
                            <p>Last Name: {item.last_name}</p>
                            <p>Address: {item.address}</p>
                            <p>Contact No.: {item.phone}</p>
                            <p>Email: {item.email}</p>
                            <p>Birthday: {item.birthday}</p>
                            <p>Place of Birth: {item.place_of_birth}</p>
                            <p>Age: {item.age}</p>
                            <p>Sex: {item.sex}</p>
                            <p>Nationality: {item.nationality}</p>
                            <p>Civil Status: {item.civil_status}</p>
                            <p>Zip Code: {item.zip_code}</p>
                            <p>Height: {item.height_CM}</p>
                            <p>Weight: {item.weight_KG}</p>
                            <p>Mother's First Name: {item.mother_first_name}</p>
                            <p>Mother's Middle Name: {item.mother_middle_name}</p>
                            <p>Mother's Last Name: {item.mother_last_name}</p>
                            <p>Mother's Occupation: {item.mother_occupation}</p>
                            <p>Father's First Name: {item.father_first_name}</p>
                            <p>Father's Middle Name: {item.father_middle_name}</p>
                            <p>Father's Last Name: {item.father_last_name}</p>
                            <p>Father's Occupation: {item.father_occupation}</p>
                            <p>Primary Level: {item.primary}</p>
                            <p>Secondary Level: {item.secondary}</p>
                            <p>College Level: {item.college}</p>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
