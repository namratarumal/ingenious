import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
      <>
        <aside class="left-sidebar">
      <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" class="text-nowrap logo-img">
            <Image src="/assets/images/logos/dark-logo.jpg" width="200" height="150" class="mt-3" alt="Picture" />
          </a>
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>
        
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">

            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Home</span>
            </li>

            <li class="sidebar-item">
              <Link href="/Index" class="sidebar-link" aria-expanded="false">
                <span>
                  <i class="ti ti-layout-dashboard"></i>
                </span>
                <span class="hide-menu">Dashboard</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/TruckCategory" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Truck Category</span>
              </Link>
            </li>


            <li class="sidebar-item">
              <Link class="sidebar-link" href="/VehicleDetails" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Vehicle Details</span>
              </Link>
            </li>


            <li class="sidebar-item">
              <Link href="/Planning" class="sidebar-link"  aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Planning</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Clients" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Clients</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Role" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Role Management</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Distribution" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Distribution</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/TypeDistribution" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Distribution Type</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/StatusDistribution" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Distribution Status</span>
              </Link>
            </li>


            <li class="sidebar-item">
              <Link class="sidebar-link" href="/City" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">City Management</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Driver" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Driver Management</span>
              </Link>
            </li>
            
            {/* <li class="sidebar-item">
              <Link class="sidebar-link" href="/OTManagement" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">OT Management</span>
              </Link>
            </li>
    


            <li class="sidebar-item">
              <Link class="sidebar-link" href="/PODIOD" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">POD/IOD</span>
              </Link>
            </li>


            <li class="sidebar-item">
              <Link class="sidebar-link" href="/ManagementOfInventory" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Management Of Inventory</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Arrivals" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Arrivals</span>
              </Link>
            </li>


            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Settings" aria-expanded="false">
                <span>
                  <i class="ti ti-file-description"></i>
                </span>
                <span class="hide-menu">Settings</span>
              </Link>
            </li> */}

{/* 
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">AUTH</span>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Login" aria-expanded="false">
                <span>
                  <i class="ti ti-login"></i>
                </span>
                <span class="hide-menu">Login</span>
              </Link>
            </li>

            <li class="sidebar-item">
              <Link class="sidebar-link" href="/Registration" aria-expanded="false">
                <span>
                  <i class="ti ti-user-plus"></i>
                </span>
                <span class="hide-menu">Register</span>
              </Link>
            </li> */}
            
          </ul>
        </nav>
      </div>
    </aside>
      </>
    )
  }
  