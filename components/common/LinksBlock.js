import Link from 'next/link';
import styled from "styled-components"


const UlBlockTextLinksList = styled.ul `
    list-style: disc;
`;


const renderLinks = (links) => (
    links.map((item, index) => {
        if (item.url === undefined) {
            item.url = ""
        }
        return (
            <li key={index}>
                <Link href={item.url}>
                    <a>{item.text}</a>
                </Link>
            </li>
        )
    })
)

const LinksBlock = ({links}) => (

    <section className="block-text">
        <UlBlockTextLinksList className="block-text__links-list">
            {renderLinks(links)}
        </UlBlockTextLinksList>
    </section>
)

export default LinksBlock