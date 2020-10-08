import React from 'react';
import Buttons from "./Buttons";
import {connect} from "react-redux";
import {changeIsGroup, clearImage, getImage} from "../../Redux/imageReducer";
import {changeTag} from "../../Redux/buttonsReducer";
import {showMsg} from "../../Redux/alertReducer";

const ButtonsComponent = (props) => {

    const handleClickLoadButton = () => {
        if(props.tag.length){
            props.getImage(props.tag);
        } else {
            props.showMsg('Заполните поле "тег"', 'warning');
        }
    };

    const handleClickClearButton = () => {
        props.changeTag('');
        props.clearImage();
    };

    return <Buttons {...props} handleClickLoadButton = {handleClickLoadButton} handleClickClearButton={handleClickClearButton} />
};

const mapStateToProps = (state) => {
    return {
        isGroup: state.image.isGroup,
        isLoading: state.image.isLoading,
        tag: state.buttons.tag
    }
};

export default connect(mapStateToProps, {getImage, changeTag, showMsg, clearImage, changeIsGroup})(ButtonsComponent);