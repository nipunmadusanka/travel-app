import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center">
      <p>hello</p>
      <li className="w-full pl-3 bg-white cursor-pointer hover:bg-secondary border-b-1">
      <a>
        <div className="flex items-center justify-start py-3">
          <i className="h-5" />
          <p className="ml-3 font-[WorkSons] font-medium">gfg</p>
        </div>
      </a>
    </li>
    </div>
    
  )
}
