import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card'

function App() {
  let data = [
    {
      plan:"FREE",
      priceData : "$0",
      listData : [
        {
          visible : true,
          user: 'Single User',
          bold: false
        },
        {
          visible : true,
          user: '5GB Storage',
          bold: false
        },
        {
          visible : true,
          user: 'Unlimited Public Projects',
          bold: false
        },
        {
          visible : true,
          user: 'Community Access',
          bold: false
        },
        {
          visible : false,
          user: 'Unlimited Private Projects',
          bold: false
        },
        {
          visible : false,
          user: 'Dedicated Phone Support',
          bold: false
        },
        {
          visible : false,
          user: 'Free Subdomain',
          bold: false
        },
        {
          visible : false,
          user: 'Monthly Status Reports',
          bold: false
        }
      ]
    },

    {
      plan:"PLUS",
      priceData : "$9",
      listData : [
        {
          visible : true,
          user: '5 Users',
          bold: true
        },
        {
          visible : true,
          user: '50GB Storage',
          bold: false
        },
        {
          visible : true,
          user: 'Unlimited Public Projects',
          bold: false
        },
        {
          visible : true,
          user: 'Community Access',
          bold: false
        },
        {
          visible : true,
          user: 'Unlimited Private Projects',
          bold: false 
        },
        {
          visible : true,
          user: 'Dedicated Phone Support',
          bold: false
        },
        {
          visible : true,
          user: 'Free Subdomain',
          bold: false
        },
        {
          visible : false,
          user: 'Monthly Status Reports',
          bold: false 
        }
      ]
    },

    {
      plan:"PRO",
      priceData : "$49",
      listData : [
        {
          visible : true,
          user: 'Unlimited Users',
          bold: true
        },
        {
          visible : true,
          user: '150GB Storage',
          bold: false
        },
        {
          visible : true,
          user: 'Unlimited Public Projects',
          bold: false
        },
        {
          visible : true,
          user: 'Community Access',
          bold: false 
        },
        {
          visible : true,
          user: 'Unlimited Private Projects',
          bold: false
        },
        {
          visible : true,
          user: 'Dedicated Phone Support',
          bold: false
        },
        {
          visible : true,
          user: 'Unlimited Free Subdomains',
          bold: true
        },
        {
          visible : true,
          user: 'Monthly Status Reports',
          bold: false 
        }
      ]
    }


  ]

  return (
    <div>
      <Card price={data}></Card>
    </div>
  )
}

export default App