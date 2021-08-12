import React from 'react';
import RatingButton from '../RatingButton/RatingButton';
import { ReactComponent as PetIt } from './../../assets/Pet.svg';
import { ReactComponent as SkipIt } from './../../assets/Skip.svg';
import { ReactComponent as NoPet } from './../../assets/DontPet.svg';
import './RatePet.scss';

const RatePet = () => {
  return (
    <div className="ratePet_container">
      <div className="petImage"></div>
      <div className="ratingButtons_container">
        <div className="ratingButtons">
        <p className="title">Cat 4/10</p>
          <RatingButton icon={NoPet} description="Don't pet it!" color={'red'}/>
          <RatingButton icon={SkipIt} description="Skip it!"  color={'grey'} />
          <RatingButton icon={PetIt} description="Pet it!"  color={'green'}/>
        </div>
      </div>
    </div>
  );
};

export default RatePet;
