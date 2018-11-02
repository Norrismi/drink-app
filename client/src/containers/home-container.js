import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrinks } from "../actions";
import DrinkItem from "../widgetsUI/drink-item";

class HomeContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getDrinks(1, 0, "asc"));
  }

  renderItems = drinks =>
    drinks.list
      ? drinks.list.map(item => <DrinkItem {...item} key={item._id} />)
      : null;

  loadmore = () => {
      let count = this.props.drinks.list.length;
    this.props.dispatch(getDrinks(1, count, "desc", this.props.drinks.list));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderItems(this.props.drinks)}
        <div className="loadmore" onClick={this.loadmore}>
          Load More
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drinks: state.drinks
  };
}

export default connect(mapStateToProps)(HomeContainer);
