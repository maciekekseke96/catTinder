import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RatingButton from '../RatingButton/RatingButton';
import { votingDetailsActions } from '../../redux/votingDetails/votingDetails-actions';
import { ReactComponent as PetIt } from './../../assets/Pet.svg';
import { ReactComponent as SkipIt } from './../../assets/Skip.svg';
import { ReactComponent as NoPet } from './../../assets/DontPet.svg';
import './RatePet.scss';

const RatePet = withRouter(
  ({
    history,
    votingDetails,
    images,
    addPetted,
    addSkipped,
    addUnpetted,
    addVoted,
  }) => {
    const votedCatsNumber = votingDetails.voted;

    const styleObject = images
      ? { backgroundImage: `url(${images[votedCatsNumber].url}` }
      : {};

    const voteOnPet = (vote) => {
      if (votedCatsNumber !== 9) {
        addVoted();
      } else {
        history.push('/summary');
        addVoted();
      }
      switch (vote) {
        case 'pet':
          addPetted();
          break;
        case 'skip':
          addSkipped();
          break;
        case 'nopet':
          addUnpetted();
          break;
        default:
          console.log('Bad Vote');
      }
    };

    return (
      <div className="ratePet_container">
        <div className="petImage" style={styleObject}></div>
        <div className="ratingButtons_container">
          <div className="ratingButtons">
            <p className="title">{`Cat ${votedCatsNumber + 1}/10`}`</p>
            <RatingButton
              handleVote={() => voteOnPet('nopet')}
              icon={NoPet}
              description="Don't pet it!"
              color={'red'}
            />
            <RatingButton
              handleVote={() => voteOnPet('skip')}
              icon={SkipIt}
              description="Skip it!"
              color={'grey'}
            />
            <RatingButton
              handleVote={() => voteOnPet('pet')}
              icon={PetIt}
              description="Pet it!"
              color={'green'}
            />
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps = (state) => ({
  images: state.images.images,
  votingDetails: state.votingDetails,
});

const mapDispatchToProps = (dispatch) => ({
  addPetted: () => dispatch(votingDetailsActions.addPetted()),
  addSkipped: () => dispatch(votingDetailsActions.addSkipped()),
  addUnpetted: () => dispatch(votingDetailsActions.addUnpetted()),
  addVoted: () => dispatch(votingDetailsActions.addVoted()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RatePet);
