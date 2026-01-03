import Dashboard from "../components/Dashbord"
import { AuthProvider } from "../context/AuthContext"
import { RestaurantProvider } from "../context/ReastaurantContext"
import AdminRoute from "../routes/AdminRoute"
import CustomerRoute from "../routes/CustometRoute"

const App=()=>{
    return(
        AuthProvider>
        <RestaurantProvider>
        <BrowserRouter>
        <switch>
        <Route path='/login' component={Login}/>
        <AdminRoute path="/admin/dashbord" component={Dashboard} />
        <CustomerRoute path="/customer/dashbord" component={Dashboard} />
        </switch>
        </BrowserRouter>
        </RestaurantProvider>
        </AuthProvider>
    )
        
};
export default App;