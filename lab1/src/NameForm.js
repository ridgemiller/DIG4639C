import React from 'react';

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', correctname: true};
        this.setName = props.setName;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        if (/[^A-Za-z ]/.test(this.state.value)){
          this.setState({correctname: false});
        } else {
          this.setName(this.state.value);
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            {this.state.correctname ? null: <p className="incorrect" style={{color:'red'}}>Incorrect. Please Use Letters Only.</p> }
          </form>
        );
      }
    }

export default NameForm;
