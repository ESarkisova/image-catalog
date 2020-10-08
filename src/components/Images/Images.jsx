import React from 'react';
import Card from "@material-ui/core/Card";
import Image from "./Image";
import {makeStyles} from "@material-ui/core/styles";
import ImageGroup from "./ImageGroup";

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
});
const Images = ({images, isGroup, changeTag}) => {

    const classes = useStyles();

    if(!Object.keys(images).length) return null;

    if(isGroup) {
        return (
            <div>
                { Object.keys(images).map( (groupName, key) => <ImageGroup
                    key = {key}
                    images = {images[groupName]}
                    changeTag = {changeTag}
                    groupName = {groupName}/>) }
            </div>
        );
    } else {
        return (
            <Card className={classes.root}>
                { images.map( image => <Image key = {image.id} image = {image} changeTag = {changeTag}/>) }
            </Card>
        );
    }

};

export default Images;