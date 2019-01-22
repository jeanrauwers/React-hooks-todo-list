import React, { Component } from 'react';
import '../../CSS/App.css';
import Note from '../Note/Note';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			notes: []
		};
		this.delete = this.delete.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addNote = this.addNote.bind(this);
	}
	updateNoteText(noteText) {
		this.setState({ inputValue: noteText.target.value });
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.addNote()
		}
	}

	addNote() {
		if (this.state.inputValue === '' || this.state.inputValue === ' ') {
			return 0;
		}

		this.setState({ notes: this.state.notes.concat(this.state.inputValue) });
		this.setState({ inputValue: '' });
		this.textinput.focus();
	}

	delete(key) {
		const notesArray = [...this.state.notes];
		const index = notesArray.indexOf(key.key);
		notesArray.splice(index, 1);
		this.setState({ notes: notesArray });
	}

	createTasks(item) {
		return (
			<div className="note" key={item}>
				{item ? item : ''}
			</div>
		);
	}

	render() {
		const notesArr = this.state.notes;
		const notes = notesArr.map(this.createTasks);

		return (
			<div className="container">
				<div className="header">React - TODO List Demo</div>
				<div className="btn" onClick={this.addNote}>
					+
				</div>
				<input
					type="text"
					className="textInput"
					ref={input => (this.textinput = input)}
					value={this.state.inputValue}
					onChange={noteText => this.updateNoteText(noteText)}
					onKeyPress={this.handleKeyPress}
				/>
				<Note item={notes} delete={this.delete} state={this.state.notes} />
			</div>
		);
	}
}

export default App;
