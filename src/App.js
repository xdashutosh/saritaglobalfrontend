import { HStack } from '@chakra-ui/react';
import {React} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import DashboardAdmin from './DashboardAdmin';
import DashboardUser from './DashboardUser';
import Forgotpassword from './Forgotpassword';
import ChangePassword from './ChangePassword';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/register' element={<Register/>} />
  <Route path='/dashboardadmin' element={<DashboardAdmin/>}/>
  <Route path='/dashboarduser' element={<DashboardUser/>}/>
  <Route path='/forgot-password' element={<Forgotpassword/>}/>
  <Route path ='/change-password/:ptoken' element={<ChangePassword/>}/> 
</Routes>
</BrowserRouter>

  );
}

export default App;
