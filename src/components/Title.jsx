import Link from "./Link";

function Title (props) {
    const { name, post, follow, group } = props
    let groupTitle = follow ?
        <h3><Link>{name}</Link> join to your group <Link>{group && <Link url="#">{group}</Link>}</Link></h3>
        : <h3><Link>{name}</Link> left from group <Link>{group && <Link url="#">{group}</Link>}</Link></h3>

    const commonTitle =
        <h3>
            <Link>{name}</Link> {props.children} <Link>{post && <Link url="#">{post}</Link> }</Link>
        </h3>
    return group === undefined ? commonTitle : groupTitle

}

export default Title