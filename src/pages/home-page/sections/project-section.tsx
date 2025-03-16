import * as React from 'react';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@src/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@src/components/ui/drawer';

export const ProjectSection = () => {
  return (
    <section>
      {/* <Link to='/projects'>
        <div>
          <div>
            <div className='bg-red-500 w-[400px] h-[350px]'></div>
            <div>
              <h2>My Title</h2>
            </div>
          </div>
        </div>
      </Link> */}

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='outline'>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent
          style={{ height: '80vh' }}
          className='overflow-y-auto p-4'
        >
          <DrawerHeader style={{ textAlign: 'center' }}>
            <DrawerTitle className='text-2xl'>Project Name</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <h1 className='text-2xl'>Hello World</h1>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};
