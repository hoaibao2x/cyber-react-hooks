import logo from './logo.svg';
import './App.css';
// import Counter from './components/hook/Counter';

// cấu hình rounter
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Counter from './pages/hook/Counter';
import UseEffectDemo from './pages/hook/UseEffectDemo';
import APIRcc from './pages/hook/APIRcc';
import APIRfc from './pages/hook/APIRfc';
import UseCallbackDemo from './pages/hook/UseCallbackDemo';
import UseMemoDemo from './pages/hook/UseMemoDemo';
import UseRefDemo from './pages/hook/UseRefDemo';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import ApiMiddleWare from './pages/ReduxDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import { HomeTemplate } from './templates/HomeTemplate';
import { FormTemplate } from './templates/FormTemplate';

// Hỗ trợ sử dụng history của Router cho các file không phải  component
import { createBrowserHistory } from 'history';
import LoginUser from './pages/LoginUser/LoginUser';
import AntdDemo from './pages/AntdDemo/AntdDemo';
import { AdminTemplate } from './templates/AdminTemplate';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>

      {/* <Header />  */}
      {/* Dùng cho tất cả các trang */}

      {/** Đường path /home sẽ hiện component Home */}
      {/* Nếu không có exact thì so sánh đường dẫn có chứa (included) ký tự thì thỏa đk */}
      {/* exact: so sánh bằng chính xác đường dẫn */}

      {/**
       * Template: mẫu UI được dùng chung cho nhiều trang
       * 
       * + HomeTemplate (Header - Dùng chung cho các trang bình thường)
       * + FormTemplate (Thiết kế không cần Header)
       * + AdminTemplate (sidebar, header riêng của admin)
       * 
       */ }
      {/* {HOC: truyền component này vào props của component khác
      Home => props của HomeTemplate} */}

      <Switch>
        {/* <Route exact path='/home' render={(propsRoute) => {
          return <>
            <Header />
            <Home {...propsRoute} />
          </>
        }} /> */}
        {/* <Route exact path='/about' render={(propsRoute) => {
          return <>
            <Header />
            <About {...propsRoute} />
          </>
        }} /> */}

        <HomeTemplate exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />

        <FormTemplate exact path='/login' component={LoginUser} />
        <FormTemplate exact path='/register' component={Register} />

        {/* <Route exact path='/home' component={Home} /> */}
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <Route exact path='/register' component={Register} /> */}
        {/* <Route exact path='/about' component={About} /> */}
        <HomeTemplate exact path='/counter' component={Counter} />
        <HomeTemplate exact path='/use-effect' component={UseEffectDemo} />
        <HomeTemplate exact path='/api-rcc' component={APIRcc} />
        <HomeTemplate exact path='/api-rfc' component={APIRfc} />
        <HomeTemplate exact path='/usecallback' component={UseCallbackDemo} />
        <HomeTemplate exact path='/usememo' component={UseMemoDemo} />
        <HomeTemplate exact path='/useref' component={UseRefDemo} />
        <HomeTemplate exact path='/reduxdemo' component={ReduxDemo} />
        <HomeTemplate exact path='/api-redux' component={ApiMiddleWare} />
        <HomeTemplate exact path='/detail/:maPhim' component={Detail} />
        <HomeTemplate exact path='/profile' component={Profile} />
        <AdminTemplate exact path='/antd-demo' component={AntdDemo} />

        {/* Khi ko có trang cụ thể thì mặc định hiện Home */}
        <HomeTemplate exact path='/' component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
