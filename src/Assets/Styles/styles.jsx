 const styles = theme => ({
    wrappers: {
        padding: 100,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '66vh',
        background: '#5c94bd',
    },
    card: {
        padding: 5,
        minWidth: 255,
        height: '60vh'
    },
    icon: {
        margin: theme.spacing(2),
    },
    bullet: {
        lineHeight: '220%',
        background: '#5c94bd',
        color: 'white',
        fontSize: 15,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    headers: {
        textAlign: 'center',
        fontWeight: 700,
        color: ' #00ACC1',
        paddingBottom: 20
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 225,
    },
    links: {
        textDecoration: 'none'
    },
    error:{
        color: 'red',
        fontFamily: 'Roboto, "calibri", "Times new Roman"',
        fontSize: 14,
        textAlign: 'center',
    }
});

export default styles;