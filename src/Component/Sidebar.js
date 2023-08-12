import React from 'react'
import "../Css/Sidebar.css"
import SidebarRow from './SidebarRow'
import {Link } from 'react-router-dom';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import AppsIcon from '@mui/icons-material/Apps';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className='dashboard' to='/admin'>
                <AppsIcon /><h2> DashBoard</h2>
            </Link>
            
            <Link className="sidebar__link" to="/admin/upload">
                <SidebarRow Icon={DownloadForOfflineIcon} title="Product Add" />
            </Link>
            <Link className="sidebar__link" to="/admin/productlist">
                <SidebarRow Icon={AlignHorizontalLeftIcon} title="Product List" />
            </Link>
            <Link className="sidebar__link" to="/admin/customer">
                <SidebarRow  Icon={AddToHomeScreenIcon} title="Customer List" />
            </Link>

            <Link className="sidebar__link" to="/admin/orderlist">
                <SidebarRow Icon={ShoppingCartIcon} title="Order" />
            </Link>

            <Link className="sidebar__link" to="/works">
                <SidebarRow Icon={BarChartIcon} title="Statistics" />
            </Link>
            <Link className="sidebar__link" to="/portfolio">
                <SidebarRow Icon={RateReviewIcon} title="Reviews" />
            </Link>
            <Link className="sidebar__link" to="/transection">
                <SidebarRow Icon={PaidIcon} title="Transactions" />
            </Link>
            <Link className="sidebar__link" to="/profile">
                <SidebarRow Icon={PersonIcon} title="Proifle" />
            </Link>
            <Link className="sidebar__link" to="/logout">
                <SidebarRow Icon={ExitToAppIcon} title="Log Out" />
            </Link>
        </div>
    )
}

export default Sidebar