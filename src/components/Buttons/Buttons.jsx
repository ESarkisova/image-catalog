import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {withStyles} from '@material-ui/core/styles';
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto'
    },
}));

const GreenButton = withStyles(() => ({
    root: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);



const Buttons = ({tag, changeTag, isGroup, isLoading, handleClickLoadButton, handleClickClearButton, changeIsGroup}) => {
    const changeTagField = (e) => {
        changeTag(e.currentTarget.value.trim());
    };


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                label="Введите тег"
                variant="outlined"
                value = {tag}
                onChange = {changeTagField}/>
            <GreenButton
                variant="contained"
                color="primary"
                disabled = {isLoading}
                onClick = {handleClickLoadButton}>
                {isLoading ? 'Загрузка...': 'Загрузить'}
            </GreenButton>
            <Button
                variant="contained"
                color="secondary"
                onClick = {handleClickClearButton}>
                Очистить
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick = { () => {changeIsGroup(!isGroup)}}>
                {isGroup ? 'Разгруппировать' : 'Группировать'}
            </Button>
        </div>
    );
};

export default Buttons;