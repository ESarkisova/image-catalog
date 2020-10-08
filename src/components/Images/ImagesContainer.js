import React from 'react';
import Images from "./Images";
import {connect} from "react-redux";
import {changeTag} from "../../Redux/buttonsReducer";
import {getImagesRslc} from "../../Redux/selectors";

const ImagesComponent = (props) => {
    return <Images {...props} />
};

const mapStateToProps = (state) => {
    return {
        images: getImagesRslc(state),
        isGroup: state.image.isGroup
    }
};

export default connect(mapStateToProps, {changeTag})(ImagesComponent);
