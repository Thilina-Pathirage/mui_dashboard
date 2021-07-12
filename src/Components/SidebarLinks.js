import React from 'react'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import MyLocationOutlinedIcon from '@material-ui/icons/MyLocationOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

export const SidebarLinks = [
    {
        title: "Dashboard",
        icon: <DashboardOutlinedIcon/>,
        link: '/'
    },
    {
        title: "Event Hornbill",
        icon: <TodayOutlinedIcon/>,
        link: '/event'
    },
    {
        title: "Deztions",
        icon: <MyLocationOutlinedIcon/>,
        link: '/deztions'
    },
    {
        title: "Mustodo",
        icon: <FormatListBulletedOutlinedIcon/>,
        link: '/mustodo'
    },
    {
        title: "Hexagon",
        icon: <BookOutlinedIcon/>,
        link: '/hexagon'
    },
]
