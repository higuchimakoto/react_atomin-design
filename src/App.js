import { RecoilRoot } from 'recoil';
import { Router } from './components/router/Router';
import { UserProvider } from './providers/UserProvider';
import './styles.css';

function App() {
    return (
        <RecoilRoot>
            <UserProvider>
                <Router />
            </UserProvider>
        </RecoilRoot>
    );
}
export default App;
