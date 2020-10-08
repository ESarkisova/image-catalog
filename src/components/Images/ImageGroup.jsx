import React from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Image from "./Image";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        padding: 20,
        margin: '20px 0'
    },
    text: {
        textAlign: 'left'
    }
});

const ImageGroup = ({images, groupName, changeTag}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Typography gutterBottom variant="h5" component="h5" className={classes.text}>
                {groupName}
            </Typography>
            { images.map( image => <Image key = {image.id} image = {image} changeTag = {changeTag}/>) }
        </Card>
    );
};

export default ImageGroup;