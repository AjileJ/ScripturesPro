import React, { useState } from "react";

const CreateScripture = props => {

    const [scripture, setScripture] = useState({
        book: "",
        chapter: "",
        verse: "", 
        passage: ""

    });
    const changeHandler = event => {
        setScripture({...scripture, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewScripture(scripture);
        setScripture({ book: "", chapter: "", verse: "", passage: ""})
    }
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Book</label>
        <input
          name="book"
          id="book"
          type="text"
          placeholder="Book Name"
          onChange={changeHandler}
          value= {scripture.book}
        />
        <label htmlFor="chapter">Chapter</label>
        <input 
        type="text" 
        name="chapter"      
        id="chapter"
        placeholder="Chapter Name"
        onChange={changeHandler}
        value={scripture.chapter}
          
        />
        <label htmlfor="verse">Verse</label>
        <input
          name="verse"
          id="verse"
          type="text"
          placeholder="Verse Number"
          onChange={changeHandler}
          value= {scripture.verse}
        />
        <label htmlfor="passage">Verse</label>
        <input
          name="passage"
          id="passage"
          type="text"
          placeholder="Full Passage"
          onChange={changeHandler}
          value= {scripture.passage}
        />
        <button type = "submit"> Submit </button>
      </form>
    )
}

export default CreateScripture;