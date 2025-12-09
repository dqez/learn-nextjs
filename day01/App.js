import MyButton from './Button';
import { ProfileCard } from './ProfileCard';

function App() {
    return (
        <div className='container'>
            <h1>Dashboard Quản lý Profile</h1>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />

            <hr />

            <h2>Thành phần tái sử dụng:</h2>
            <MyButton />

        </div>
    );
}

export default App;