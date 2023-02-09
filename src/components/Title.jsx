import Link from "./Link";

function Title (props) {
    const { name, post, follow, group } = props
    let groupTitle = follow ?
        <h3><strong>{name}</strong> join to your group <strong>{group && <Link url="#">{group}</Link>}</strong></h3>
        : <h3><strong>{name}</strong> left from group <strong>{group && <Link url="#">{group}</Link>}</strong></h3>

    const commonTitle =
        <h3>
            <strong>{name}</strong> {props.children} <strong>{post && <Link url="#">{post}</Link> }</strong>
        </h3>
    return group === undefined ? commonTitle : groupTitle

}

export default Title