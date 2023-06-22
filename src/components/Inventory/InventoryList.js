import React, { useEffect, useState } from 'react';

const InventoryList = () => {
    const [instruments, setInstruments] = useState([]);
    const [instrumentTypes, setInstrumentTypes] = useState([]);
    const [editInstrumentId, setEditInstrumentId] = useState(null);
    const [editInstrumentName, setEditInstrumentName] = useState('');

    useEffect(() => {
        // Fetch instruments associated with the logged-in user/
        const user = JSON.parse(localStorage.getItem("mimo_user"));

        fetch(`http://localhost:8088/instruments?userId=${user.id}`)
            .then(response => response.json())
            .then(data => setInstruments(data));

        fetch('http://localhost:8088/instrumentTypes')
            .then(response => response.json())
            .then(data => setInstrumentTypes(data));
    }, []);// [] indicates that the effect should only run once, when the component mounts for the first time.


    const handleEdit = (id, name) => {
        setEditInstrumentId(id);
        setEditInstrumentName(name);
    };

    const handleSave = (id) => {
        const updatedInstrument = {
            name: editInstrumentName
        };

        fetch(`http://localhost:8088/instruments/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedInstrument)
        })
            .then(response => response.json())
            .then(updatedInstrument => {
                setInstruments(prevInstruments =>
                    prevInstruments.map(instrument =>
                        instrument.id === updatedInstrument.id ? updatedInstrument : instrument
                    )
                );
                setEditInstrumentId(null);
                setEditInstrumentName('');
                console.log('Instrument updated successfully');
            })
            .catch(error => {
                console.error('Error updating instrument:', error);
            });
    };

    const handleCancel = () => {
        setEditInstrumentId(null);
        setEditInstrumentName('');
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8088/instruments/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setInstruments(prevInstruments => prevInstruments.filter(instrument => instrument.id !== id));
                console.log('Instrument deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting instrument:', error);
            });
    };

    const getCategorizedInstruments = () => {
        const categorizedInstruments = {};

        instrumentTypes.forEach(categorizedType => {
            categorizedInstruments[categorizedType.type] = [];
        });

        instruments.forEach(instrument => {
            const InstType = instrumentTypes.find(categorizedType => categorizedType.id === instrument.instrumentTypeId);
            if (InstType) {
                categorizedInstruments[InstType.type].push(instrument);
            }
        });

        return categorizedInstruments;
    };

    const categorizedInstruments = getCategorizedInstruments();

    return (
        <div>
            <h2>Instrument List</h2>
            {Object.keys(categorizedInstruments).map(type => (
                <div key={type}>
                    <h3>{type}</h3>
                    <ul>
                        {categorizedInstruments[type].map(instrument => (
                            <li key={instrument.id}>
                                {editInstrumentId === instrument.id ? (
                                    <form onSubmit={() => handleSave(instrument.id)}>
                                        <input
                                            type="text"
                                            value={editInstrumentName}
                                            onChange={e => setEditInstrumentName(e.target.value)}
                                            autoFocus
                                        />
                                        <button className="submit-button" type="submit">Save</button>
                                        <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
                                    </form>
                                ) : (
                                    <>
                                        {instrument.name}
                                        <button className="edit-button" onClick={() => handleEdit(instrument.id, instrument.name)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDelete(instrument.id)}>Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}



export default InventoryList;
