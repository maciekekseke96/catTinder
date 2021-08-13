import React from 'react';
import SummaryDetails from '../../components/SummaryDetails/SummaryDetails';
import FinalOptions from '../../components/FinalOptions/FinalOptions';
import { connect } from 'react-redux';
import './Summary.scss';

const Summary = ({ selectedCategory, votingDetails }) => {
  return (
    <div className="summary__section">
      <p className="selectedCategory">{`>${
        selectedCategory && selectedCategory.name
      }`}</p>
      <p className="seenCatsNumber">Cat's seen: {votingDetails.voted}</p>
      <SummaryDetails />
      <FinalOptions />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory.selectedCategory,
  votingDetails: state.votingDetails,
});

export default connect(mapStateToProps, null)(Summary);
