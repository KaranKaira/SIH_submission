import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../styles/ViewDoctorInfo.css';

const ViewDoctorInfo = (props) => {
  const { data } = props;
  const history = useHistory();
  return (
    <div className='viewDoctorInfo-container'>
      <div className='viewDoctorInfo-backButtonDiv'>
        <button
          className='viewDoctorInfo-backButton'
          onClick={() => history.push('/')}
        >
          Back
        </button>
      </div>
      <div className='viewDoctorInfo-form-container'>
        <h1 className='viewDoctorInfo-title'>Doctor's Information</h1>
        <div className='viewDoctorInfo-form-row-wise'>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            value={data.firstName}
            disabled
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last name'
            value={data.lastName}
            disabled
          />
        </div>
        <div className='viewDoctorInfo-form-row-wise'>
          <input
            type='text'
            name='dob'
            placeholder='Date of Birth'
            value={data.dob}
            disabled
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={data.email}
            disabled
          />
        </div>
        <div className='viewDoctorInfo-form-row-wise'>
          <input
            type='tel'
            name='mobileNo'
            placeholder='Mobile Number'
            value={data.mobileNo}
            disabled
          />
          <input
            type='text'
            name='speciality'
            placeholder='Speciality'
            value={data.speciality}
            disabled
          />
        </div>

        <div className='viewDoctorInfo-form-row-wise'>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={data.city}
            disabled
          />
          <input
            type='text'
            name='state'
            placeholder='State'
            value={data.state}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default ViewDoctorInfo;
