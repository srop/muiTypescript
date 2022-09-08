import React, { useEffect, useState } from 'react'
import { Grid, Paper, Container } from '@mui/material';
import NoteCard from '../components/NoteCard'
interface INoteItem {
  id: number;
  title: string,
};


export default function Notes() {
  const [notes, setNotes] = useState<INoteItem[]>([]);


  const getApiData = async () => {
    const data = []
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
    console.log(data)
    // update the state
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}