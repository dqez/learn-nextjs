import React from 'react'

const ProfileCard = (props) => {
    const { name, title } = props;

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', margin: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <h2>{name}</h2>
            <p>Nghề nghiệp: {title}</p>
            <p>Sở thích: Học Next.js</p>
        </div>
    )
}

export default ProfileCard
