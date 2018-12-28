const ItemScope = () => {

    return (
        <span itemScope itemType="http://schema.org/BreadcrumbList">
            {this.props.children}
        </span>
    )
};

export default ItemScope;