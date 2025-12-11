import { useEffect, useState } from 'react'

const ProfileCard = (props) => {
    const { name, title } = props;

    const [likes, setLikes] = useState(0);

    useEffect(() => {
        console.log(`[MOUNT] Component ProfileCard của ${name} đã loaded.`);

        return () => {
            console.warn(`[UNMOUNT] Component ProfileCard của ${name} đã bị gỡ khỏi DOM.`)
            //Chỗ này thì để xóa timer, ngắt connect websocket, hủy sự kiện, ...
        }
    }, [name, likes]);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', margin: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <h2>{name}</h2>
            <p>Nghề nghiệp: {title}</p>

            <hr />

            <p>Đã nhận được: **{likes}** Likes</p>
            <button
                onClick={handleLike}
                style={{ backgroundColor: 'salmon', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
            >
                Like
            </button>
        </div>
    );
}

export default ProfileCard
