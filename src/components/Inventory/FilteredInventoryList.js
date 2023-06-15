/* import React, { useState, useEffect } from 'react';

const FilteredInventoryList = ({ instruments, onDelete }) => {
    const [editInstrumentId, setEditInstrumentId] = useState(null);
    const [editInstrumentName, setEditInstrumentName] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        setFilteredItems(instruments);
    }, [instruments]);

    const handleEditClick = (instrumentId, instrumentName) => {
        setEditInstrumentId(instrumentId);
        setEditInstrumentName(instrumentName);
    };

    const handleEditChange = event => {
        setEditInstrumentName(event.target.value);
    };

    const handleEditSubmit = () => {
        if (editInstrumentName.trim() !== '') {
            // Update the instrument name
            const updatedInstruments = instruments.map(instrument => {
                if (instrument.id === editInstrumentId) {
                    return {
                        ...instrument,
                        name: editInstrumentName.trim(),
                    };
                }
                return instrument;
            });

            // Save the updated instrument
            fetch(`http://localhost:8088/instruments/${editInstrumentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: editInstrumentName.trim(),
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`Instrument with ID ${editInstrumentId} updated successfully.`);
                    setFilteredItems(updatedInstruments);
                    setEditInstrumentId(null);
                    setEditInstrumentName('');
                })
                .catch(error => console.error('Error updating instrument:', error));
        }
    };

    // Group instruments by instrument type
    const groupedInstruments = instruments.reduce((groups, instrument) => {
        const { instrumentTypeId } = instrument;
        const group = groups.find(g => g.instrumentType.id === instrumentTypeId);
        if (group) {
            group.instruments.push(instrument);
        } else {
            const instrumentType = {
                id: instrumentTypeId,
                type: '',
            };
            groups.push({
                instrumentType,
                instruments: [instrument],
            });
        }
        return groups;
    }, []);

    return (
        <div>
            {groupedInstruments.map(group => (
                <div key={group.instrumentType.id}>
                    <h3>{group.instrumentType.type}</h3>
                    <ul>
                        {group.instruments.map(instrument => (
                            <li key={instrument.id}>
                                {instrument.name}
                                {editInstrumentId === instrument.id ? (
                                    <div>
                                        <input type="text" value={editInstrumentName} onChange={handleEditChange} />
                                        <button onClick={handleEditSubmit}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button onClick={() => handleEditClick(instrument.id, instrument.name)}>Edit</button>
                                        <button onClick={() => onDelete(instrument.id)}>Delete</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FilteredInventoryList;
 */