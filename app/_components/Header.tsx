import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-2">
        <div className="flex justify-between">
          <Link className='font-semibold text-lg text-emerald-900 uppercase' href='/'>Movie</Link>
          <div className="relative flex items-center w-[450px]">
            <Input placeholder='Search' />
            <Button>Search</Button>
          </div>
          <div className='flex gap-4'>
            <DropdownMenu>
              <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Sign in</DropdownMenuItem>
                <DropdownMenuItem>Sign up</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant='outline'>Log out</Button>

          </div>
        </div>
      </div>

    </header>
  )
}

export default Header