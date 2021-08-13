import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { resetDetails } from '../../redux/votingDetails/votingDetails-actions';
import { setImages } from '../../redux/images/images-actions';
import { setSelectedCategory } from '../../redux/selectedCategory/selectegCategory-actions';
import './FinalOptions.scss';

const FinalOptions = withRouter(
  ({ history, resetDetails, setImages, setSelectedCategory }) => {
    const handleReset = () => {
      history.push('./petOrNot');
      resetDetails();
      setImages({});
    };

    const handleNewCategory = () => {
      history.push('./');
      resetDetails();
      setImages({});
      setSelectedCategory({});
    };
    return (
      <div className="finalOptions">
        <button className="button restart" onClick={handleReset}>
          Restart with same category
        </button>
        <button className="button new" onClick={handleNewCategory}>
          Select new Category
        </button>
      </div>
    );
  }
);

const mapDispatchToProps = (dispatch) => ({
  resetDetails: () => dispatch(resetDetails()),
  setImages: () => dispatch(setImages()),
  setSelectedCategory: () => dispatch(setSelectedCategory()),
});
export default connect(null, mapDispatchToProps)(FinalOptions);
