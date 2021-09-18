import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    btn:{
        background: "#6E707A",
        color: "#F2F2F2",
        "&:hover":{
            background: "#7A7C87"
        }
    }
});

function MyIconButton({icon, cssClass, handleClick, ariaLabel}){
    const classes = useStyles();
    return(
        <IconButton className={classes.btn} /* className={cssClass} onClick={handleClick} aria-label={ariaLabel} */>
            {icon}
        </IconButton>
    );
}

export default MyIconButton;