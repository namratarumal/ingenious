"use client"
import Sidebar from "../Sidebar/page";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/adminuserregister";
import Link from "next/link";

export default function Header() {

  let localUser = null;
  if (typeof window !== 'undefined') {
    localUser = JSON.parse(localStorage.getItem('user'));
  }

    var emailid=localUser.emailid;

  console.log("Header Page LocalUser : ",localUser)

  let token='';


  const dispatch = useDispatch();

    const handleLogout=()=>{
      token=localUser.token;

      const data={
        tokenId:token,
      }
      dispatch(logout(data));
    }


  return (
    <>
          <header class="app-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                <i class="ti ti-bell-ringing"></i>
                <div class="notification bg-primary rounded-circle"></div>
              </a>
            </li>
          </ul>
          <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li class="nav-item dropdown">
                  <button type="submit" class="btn btn-primary mx-3 mt-2 d-block">{emailid}</button>
              </li>
              <li class="nav-item dropdown">
                  <button type="submit" onClick={handleLogout} class="btn btn-outline-primary mx-3 mt-2 d-block">Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
