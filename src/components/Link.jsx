function Link (props) {
    return (
        <a href={props.url}><strong>{props.children}</strong></a>
    )
}

export default Link