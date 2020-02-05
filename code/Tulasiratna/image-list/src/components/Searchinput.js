import React from 'react';

class Searchinput extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);

  }
  render() {
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="filed">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Searchinput;
