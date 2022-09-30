import React from 'react'

import List from '@mui/material/List'

import IconDashboard from '@mui/icons-material/Dashboard'
import IconShoppingCart from '@mui/icons-material/ShoppingCart'
import IconBarChart from '@mui/icons-material/BarChart'
import IconLibraryBooks from '@mui/icons-material/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
  },
 
  {
    name: 'Table',
    link: '/table',
    Icon: IconBarChart,
  },
  {
    name: 'Multi Level',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
        link: '/level2',
      },
      // {
      //   name: 'Level 2',
      //   items: [
      //     {
      //       name: 'Level 3',
      //     },
      //     {
      //       name: 'Level 3',
      //     },
      //   ],
      // },
    ],
  },
  
]

const AppMenu: React.FC = () => {
 // const classes = makeStyles();

  return (
    <List component="nav"  disablePadding >
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}


export default AppMenu
