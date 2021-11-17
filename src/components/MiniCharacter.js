import React from 'react'

const MiniCharacter = ({ character }) => {
    return (
        <div className="d-flex">
            <div className="mini-character my-2">
                <img src={character.img} />
            </div>
            <div className="p-2">
                <p>{character.name}</p>
                <p>{character.info}</p>
            </div>
        </div>
    )
}

export default MiniCharacter
