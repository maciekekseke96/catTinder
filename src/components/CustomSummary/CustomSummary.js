import React from 'react';
import { connect } from 'react-redux';
import './CustomSummary.scss';

const CustomSummary = ({
  icon,
  description,
  color,
  votingDetails,
  summaryFor,
}) => {
  const Icon = icon;

  let summaryNumber;

  switch (summaryFor) {
    case 'pet':
      summaryNumber = votingDetails.petted;
      break;
    case 'skip':
      summaryNumber = votingDetails.skipped;
      break;
    case 'nopet':
      summaryNumber = votingDetails.unpetted;
      break;
    default:
      summaryNumber = 'unknown';
  }
  return (
    <div className="customSummary">
      <Icon />
      <div className="detailedSummary">
        <span className="detailedNumber" style={{ color }}>
          {summaryNumber}
        </span>
        <span className="detailedDescription">{description}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  votingDetails: state.votingDetails,
});

export default connect(mapStateToProps, null)(CustomSummary);
