const ItemScope = () => {

    return (
        <span itemScope itemType="http://schema.org/BreadcrumbList" style={{visibility: "hidden", width: "0", height: "0"}}>
            {this.props.children}
        </span>
    )
};

export default ItemScope;