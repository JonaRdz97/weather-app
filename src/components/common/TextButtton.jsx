import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    btn:{
        background: "#6E707A",
        color: "#F2F2F2",
        textTransform: "none",
        borderRadius: 0,
        width: "40%",
        "&:hover":{
            background: "#7A7C87"
        }
    },
    txt:{
        letterSpacing: 1,
        fontWeight: 500
    }
});

function TextButton({text}){

    const classes = useStyles();

    return(
        <Button className={`${classes.btn} ${classes.txt}`}>
            {text}
        </Button>
    );
}

export default TextButton;