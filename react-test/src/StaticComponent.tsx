import {memo} from 'react'

const AnchorTagComponent = memo(function AnchorTagCompnent({
                                                               name,
                                                               href,
                                                               targetBlank,
                                                           }: {
    name: string;
    href: string;
    targetBlank: boolean;
}) {
    return (
        <a href={href}
           target={targetBlank ? '_blank' : undefined}
           rel="noopener noreferrer"
        >
            {name}
        </a>
    )
})

export default function StaticComponent() {
    return (
        <>
            <h1>Static Component</h1>
            <div>유용한 링크</div>
            <ul data-testid="ul" style={{listStyleType: 'square'}}>
                <li>
                    <AnchorTagComponent name="리액트" href="https://reactjs.org" targetBlank/>
                </li>
                <li>
                    <AnchorTagComponent name="네이버" href="https://www.naver.com" targetBlank/>
                </li>
                <li>
                    <AnchorTagComponent name="블로그" href="https://yceffort.kr" targetBlank/>
                </li>
            </ul>
        </>
    )
}