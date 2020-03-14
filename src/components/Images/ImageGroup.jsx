import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: '10px',
        display: 'inline-block',
        cursor: 'pointer'
    },
    media: {
        width: '100%',
        height: '200px'
    }
});
const Image = ({image, changeTag}) => {
    console.log(image.url);
    const classes = useStyles();
    return (
            <Card className={classes.root} onClick={() => {changeTag(image.tag)}}>
                <CardMedia className={classes.media}
                    image={image.url}
                    title="Image"
                />
            </Card>
    );
};

export default Image;