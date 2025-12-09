export function ProfileCard() {
    const profileName = "Tran Dinh Quy";

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', margin: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>

            <h2>{profileName}</h2>
            <p>Kinh nghiệm: 0 năm lập trình</p>
            <p>Sở thích: Bóng đá</p>

            <Button />
        </div>
    );
}