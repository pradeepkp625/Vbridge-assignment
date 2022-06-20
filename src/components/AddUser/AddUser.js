// import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useState } from 'react';
import Button from '../Common/Button';
import CustomAutoComplete from '../Common/customAutocomplete';
import CustomInput from '../Common/CustomInput';
import CustomTextarea from '../Common/customTextarea';
import ListContext from '../ContextApi/ListContext';
import uniqid from 'uniqid';
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@mui/material';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      jobDesc: '',
      jobSkills: '',
      isLoad: false,
      isSuccess: false,
    };
  }
  onChangeName = (e) => {
    this.setState({
      isTitleError: false,
      jobTitle: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      isDescError: '',
      jobDesc: e.target.value,
    });
  };
  onChangePrimaryskill = (e, values) => {
    this.setState({
      isSkillError: '',
      jobSkills: values,
    });
  };
  onSubmit = () => {
    if (this.state.jobTitle.length === 0) {
      this.setState({
        isTitleError: 'This field is Required (*)',
      });
      return;
    }
    if (!this.state.jobDesc) {
      this.setState({
        isDescError: 'This field is Required (*)',
      });
      return;
    }
    if (!this.state.jobSkills) {
      this.setState({
        isSkillError: 'This field is Required (*)',
      });
      return;
    }
    this.setState({
      isLoad: true,
    });
    // Api call goes here
    setTimeout(() => {
      let { setUserList } = this.context;
      this.props.clicked(true)
      setUserList({
        id: uniqid(),
        jobTitle: this.state.jobTitle,
        jobDesc: this.state.jobDesc,
        jobSkills: this.state.jobSkills,
      });
      this.setState({
        jobTitle: '',
        jobDesc: '',
        jobSkills: [],
        isLoad: false,
        isSuccess: true,
      });
    }, 1000);
  };
  render() {
    let {
      jobTitle,
      jobDesc,
      jobSkills,
      isTitleError,
      isSkillError,
      isDescError,
    } = this.state;
    return (
      <>
        <div className="form__wrapper-addUser">
          <div className="form__container">
            <div className="form__heading">Post Job Description</div>
            <div style={{ color: 'black', textAlign: 'center', transform: `translateY(${15})`}}>
                Post and Check in JD list Tab
            </div>
            <CustomInput
              onChange={this.onChangeName}
              value={jobTitle}
              label={'Job title'}
              onError={isTitleError}
            />
            <CustomTextarea
              onChange={this.onChangeDescription}
              value={jobDesc}
              label={'Job Description'}
              onError={isDescError}
            />
            <CustomAutoComplete
              onChange={this.onChangePrimaryskill}
              value={jobSkills}
              label={'Primary Skill'}
              onError={isSkillError}
            />
            {this.state.isLoad ? (
              <div className="submit__loader">
                <CircularProgress />
              </div>
            ) : (
              <>
                <Button onClick={this.onSubmit} label={'Sumbit'} />
                {this.state.isSuccess ? (
                  <Alert severity="success">
                    JD is created succesfully Checkout in JD List!
                  </Alert>
                ) : null}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
AddUser.contextType = ListContext;
export default AddUser;
