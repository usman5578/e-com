import { NavbarItemType } from '@/Components/utils/NavbarArrayandTypes'
import Link from 'next/link'
import React ,{FC} from 'react'

const DropDown:FC<{item:NavbarItemType}> = ({item}) => {
  return (
    <ul>
        {item.dropDownData?.map((item:NavbarItemType, index:number)=>(
            <li key={index} className='hover:ml-2 min-w-[5.5rem] group-hover:duration-300 rounded-sm -translate-y-7 group-hover:translate-y-0'>
                <Link  href={item.href}>{item.label}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DropDown