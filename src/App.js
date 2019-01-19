import React, { Component } from 'react';
import './App.css';
import Note from './Note';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			notes: []
		};
		this.delete = this.delete.bind(this);
	}
	updateNoteText(noteText) {
		this.setState({ inputValue: noteText.target.value });
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
		}
	}

	addNote() {
		if (this.state.value === '' || this.state.value === ' ') {
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
				{item.value === '' ? '' : item}
			</div>
		);
	}

	render() {
		const notesArr = this.state.notes;
		const notes = notesArr.map(this.createTasks);

		return (
			<div className="container">
				<div className="header">TODO App</div>
				<div className="btn" onClick={this.addNote.bind(this)}>
					+
				</div>
				<input
					type="text"
					className="textInput"
					ref={input => (this.textinput = input)}
					value={this.state.inputValue}
					onChange={noteText => this.updateNoteText(noteText)}
					onKeyPress={this.handleKeyPress.bind(this)}
				/>
				<Note item={notes} delete={this.delete} state={this.state.notes} />
			</div>
		);
	}
}

export default App;
