import React from 'react';
import '../CSS/App.css';
import Note from './Note';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			notes: []
		};

		this.deleteTask = this.deleteTask.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.addTask = this.addTask.bind(this);
		this.updateNoteText = this.updateNoteText.bind(this);
		this.inputRef = React.createRef();

	}

	updateNoteText(event) {
		this.setState({ inputValue: event.target.value });
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.addTask()
		}
	}

	addTask() {
		if (!this.state.inputValue.replace(/\s/,'').length) {
			return;
		}
		
		
		this.setState( state => ({notes:[...state.notes, state.inputValue], inputValue:''}))
		this.inputRef.current.focus();
	}

	deleteTask(index) {
		const notesArray = [...this.state.notes];
		notesArray.splice(index, 1);
		this.setState({ notes: notesArray });
	}

	render() {

		return (
			<div className="container">
				<div className="header">React - TODO List Demo</div>
				<div className="btn" onClick={this.addTask}>
					+
				</div>
				<input
					type="text"
					className="textInput"
					ref={this.inputRef}
					value={this.state.inputValue}
					onChange={this.updateNoteText}
					onKeyPress={this.handleKeyPress}
				/>
				{this.state.notes.map((item, index) => <Note item={item} onClick={() => this.deleteTask(index)} key={`task${index}`}/>)}
			</div>
		);
	}
}

export default App;
