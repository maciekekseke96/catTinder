import React from 'react';
import { connect } from 'react-redux';
import RatingButton from '../RatingButton/RatingButton';
import { ReactComponent as PetIt } from './../../assets/Pet.svg';
import { ReactComponent as SkipIt } from './../../assets/Skip.svg';
import { ReactComponent as NoPet } from './../../assets/DontPet.svg';
import './RatePet.scss';

const RatePet = ({votingDetails, images}) => {

  const votedCatsNumber = votingDetails.voted;

  const styleObject = images?{backgroundImage:`url(${images[votedCatsNumber].url}`}:{};

  return (
    <div className="ratePet_container">
      <div className="petImage" style={styleObject}></div>
      <div className="ratingButtons_container">
        <div className="ratingButtons">
          <p className="title">{`Cat ${votedCatsNumber + 1}/10`}`</p>
          <RatingButton
            icon={NoPet}
            description="Don't pet it!"
            color={'red'}
          />
          <RatingButton icon={SkipIt} description="Skip it!" color={'grey'} />
          <RatingButton icon={PetIt} description="Pet it!" color={'green'} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.images.images,
  votingDetails: state.votingDetails,
});

export default connect(mapStateToProps, null)(RatePet);
