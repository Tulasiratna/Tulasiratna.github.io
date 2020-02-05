import React from 'react';

class Searchinput extends React.Component {
  render() {
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="filed">
            <div className="ui massive icon input">
              <input type="text" placeholder="search..." />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Searchinput;
