import React from 'react';
import CustomSummary from '../CustomSummary/CustomSummary';
import { ReactComponent as PetIt } from './../../assets/Pet.svg';
import { ReactComponent as SkipIt } from './../../assets/Skip.svg';
import { ReactComponent as NoPet } from './../../assets/DontPet.svg';
import './SummaryDetails.scss';

const SummaryDetails = () => {
  return (
    <div className="summaryDetails">
      <CustomSummary
        icon={NoPet}
        description={`Cats you didn't pet`}
        summaryFor="nopet"
        color='red'
      />
      <CustomSummary
        icon={SkipIt}
        description={`Cats you skipped`}
        summaryFor="skip"
        color='grey'
      />
      <CustomSummary
        icon={PetIt}
        description={`Cats you petted`}
        summaryFor="pet"
        color='green'
      />
    </div>
  );
};

export default SummaryDetails;
