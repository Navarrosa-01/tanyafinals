import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [place_of_birth, setPlaceofbirth] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [nationality, setNationality] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [zip_code, setZipcode] = useState('');
    const [height_CM, setHeight] = useState('');
    const [weight_KG, setWeight] = useState('');
    const [mother_first_name, setMomFirstName] = useState('');
    const [mother_middle_name, setMomMiddleName] = useState('');
    const [mother_last_name, setMomLastName] = useState('');
    const [mother_occupation, setMomOccupation] = useState('');
    const [father_first_name, setFathFirstName] = useState('');
    const [father_middle_name, setFathMiddleName] = useState('');
    const [father_last_name, setFathLastName] = useState('');
    const [father_occupation, setFathOccupation] = useState('');
    const [primary, setPrimaryLevel] = useState('');
    const [secondary, setSecondaryLevel] = useState('');
    const [college, setCollegeLevel] = useState('');

    useEffect(() => {
        if (item) {
            console.log('Setting item data:', item);
            setFirstName(item.first_name || '');
            setMiddleName(item.middle_name || '');
            setLastName(item.last_name || '');
            setAddress(item.address || '');
            setEmail(item.email || '');
            setPhone(item.phone || '');
            setBirthday(item.birthday || '');
            setPlaceofbirth(item.place_of_birth || '');
            setAge(item.age || '');
            setSex(item.sex || '');
            setNationality(item.nationality || '');
            setCivilStatus(item.civil_status || '');
            setZipcode(item.zip_code || '');
            setHeight(item.height_CM || '');
            setWeight(item.weight_KG || '');
            setMomFirstName(item.mother_first_name || '');
            setMomMiddleName(item.mother_middle_name || '');
            setMomLastName(item.mother_last_name || '');
            setMomOccupation(item.mother_occupation || '');
            setFathFirstName(item.father_first_name || '');
            setFathMiddleName(item.father_middle_name || '');
            setFathLastName(item.father_last_name || '');
            setFathOccupation(item.father_occupation || '');
            setPrimaryLevel(item.primary || '');
            setSecondaryLevel(item.secondary || '');
            setCollegeLevel(item.college || '');
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            last_name,
            address,
            email,
            phone,
            birthday,
            place_of_birth,
            age,
            sex,
            nationality,
            civil_status,
            zip_code,
            height_CM,
            weight_KG,
            mother_first_name,
            mother_middle_name,
            mother_last_name,
            mother_occupation,
            father_first_name,
            father_middle_name,
            father_last_name,
            father_occupation,
            primary,
            secondary,
            college,
        };
        console.log('Submitting data:', data);
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request data:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Contact No.:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={place_of_birth} onChange={(e) => setPlaceofbirth(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Nationality:</label>
                <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zip_code} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={height_CM} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight_KG} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMomFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={mother_middle_name} onChange={(e) => setMomMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type="text" value={mother_last_name} onChange={(e) => setMomLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Occupation:</label>
                <input type="text" value={mother_occupation} onChange={(e) => setMomOccupation(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={father_first_name} onChange={(e) => setFathFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={father_middle_name} onChange={(e) => setFathMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={father_last_name} onChange={(e) => setFathLastName(e.target.value)} />
            </div>
            <div>
                <label>Father's Occupation:</label>
                <input type="text" value={father_occupation} onChange={(e) => setFathOccupation(e.target.value)} />
            </div>
            <div>
                <label>Primary Level:</label>
                <input type="text" value={primary} onChange={(e) => setPrimaryLevel(e.target.value)} />
            </div>
            <div>
                <label>Secondary Level:</label>
                <input type="text" value={secondary} onChange={(e) => setSecondaryLevel(e.target.value)} />
            </div>
            <div>
                <label>College Level:</label>
                <input type="text" value={college} onChange={(e) => setCollegeLevel(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;
