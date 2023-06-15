import React, { useState } from "react";

const InstrumentForm = () => {
  const [instrumentName, setInstrumentName] = useState("");
  const [category, setCategory] = useState("");

  const handleInstrumentNameChange = (event) => {
    setInstrumentName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


const user = JSON.parse(localStorage.getItem("mimo_user"));

    // Generate a unique ID for the new instrument (you can customize this according to your requirements)
    const newInstrumentId = Date.now();

    // Create the new instrument object
    const newInstrument = {
      id: newInstrumentId,
      userId: user.id, // Set the appropriate user ID
      name: instrumentName,
      instrumentTypeId: parseInt(category),
    };

    // Send a POST request to the API to add the new instrument
    fetch("http://localhost:8088/instruments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInstrument),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Instrument added successfully:", data);
        // Reset the form fields after successful submission
        setInstrumentName("");
        setCategory("");
      })
      .catch((error) => {
        console.error("Error adding instrument:", error);
      });
  };

  return (
      <form onSubmit={handleSubmit} className="form-container">
      <label>
        Instrument Name:
        <input
          type="text"
          value={instrumentName}
          onChange={handleInstrumentNameChange}
        />
      </label>
      <br />
      <label>
        Category:
         <select value={category} onChange={handleCategoryChange} className="input-field">
          <option value="">Select a category</option>
          <option value="1">Guitars</option>
          <option value="2">Basses & Ukuleles</option>
          <option value="3">Drum & Percussion</option>
          <option value="4">Microphones and Midi Instruments</option>
          <option value="5">Amps Cabinets & PA's</option>
        </select>
      </label>
      <br />
      <div className="button-container">
      <button type="submit">Submit</button>
    </div>
    </form>
  );
};

export default InstrumentForm;
