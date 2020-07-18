import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadScriptures, addScriptures, logout, deleteScripture, updateScripture} from '../components/actions';


const Scriptures = ({id, loadScriptures, scriptures, addScriptures, logout, history, deleteScripture, updateScripture}) => {
    const handleLogout = () => {
        logout()
        history.push('/');
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const [scriptureForm, setScriptureForm] = useState({book: '', chapter: '', verse: ''});
    const [editScripture, setEditScripture] = useState(null)

    const handleChange = e => {
        setScriptureForm(
            {
                ...scriptureForm,
                [e.target.name]: e.target.value
            }
        )
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(editScripture){
            updateScripture(id, editScripture.id, scriptureForm)
        }else{
            addScriptures(id, scriptureForm);
        }
    }
    const handleEdit = (scripture) => {
        setEditScripture(scripture)
    }

    useEffect(() => {
        if(editScripture){
            setScriptureForm({
                book: editScripture.book, 
                chapter: editScripture.chapter, 
                verse: editScripture.verse})
        }
    }, [editScripture])

    return (
        <div>
            <h1>Scriptures To Study</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name= 'book' value={scriptureForm.book} onChange={handleChange} placeholder = 'Book'/>
                    <input type="text" name= 'chapter' value={scriptureForm.chapter} onChange={handleChange} placeholder = 'Chapter'/>
                    <input type="text" name= 'verse' value={scriptureForm.verse} onChange={handleChange} placeholder = 'Verse'/>
                    <div>
                        <button type='submit'>Submit</button>
                        <button onClick={() => {handleLogout()}}>Logout</button>
                    </div>
                </form>
            </div>
            {scriptures.map(scripture => {
                return (
                    <section>
                        <div>
                            <p>
                                {scripture.book} {scripture.chapter}:{scripture.verse}
                                </p>
                        </div>
                        <div>
                            <button onClick={() => deleteScripture(id, scripture.id)}>
                                Delete Scripture
                            </button>
                            <button onClick={() => {handleEdit(scripture)}}>
                                Edit Scripture
                            </button>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps, {loadScriptures, addScriptures, logout, deleteScripture, updateScripture})(Scriptures);
