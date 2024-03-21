import { useState } from "react"

export function TwitterFollowCard ({userName, name,}) {
    const [isFollowing, setIsFollowing]= useState(false);

    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname= isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }
    const imageSrc= `https://unavatar.io/${userName}`
    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-img"
            alt= "El avatar" 
            src={imageSrc}
            /> 
            <div className="tw-followCard-div">
                <strong> {name}</strong>
                <span className="tw-followCard-span">@{(userName)}</span>
            </div>
        </header>

        <aside>
            <button
                onClick={handleClick}
                className={buttonClassname}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-unfollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}  