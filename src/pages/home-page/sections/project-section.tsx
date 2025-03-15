const RenderProject = () => {
  return (
    <div className='bg-orange-500 cursor-pointer'>
      <div className='bg-red-500 w-[400px] h-[350px]'></div>
      <div>
        <h2>Title</h2>
      </div>
    </div>
  );
};

import * as React from 'react';

import { cn } from '@src/lib/utils';
// import { useMediaQuery } from "@src/hooks/uddse-media-query"
import { Button } from '@src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@src/components/ui/dialog';
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
// import { Input } from "@src/components/ui/input"
// import { Label } from "@src/components/ui/label"

// export function DrawerDialogDemo() {
//   const [open, setOpen] = React.useState(false)
//   const isDesktop = useMediaQuery("(min-width: 768px)")

//   if (isDesktop) {
//     return (
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button variant="outline">Edit Profile</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you're done.
//             </DialogDescription>
//           </DialogHeader>
//           <ProfileForm />
//         </DialogContent>
//       </Dialog>
//     )
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Edit profile</DrawerTitle>
//           <DrawerDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DrawerDescription>
//         </DrawerHeader>
//         <ProfileForm className="px-4" />
//         <DrawerFooter className="pt-2">
//           <DrawerClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   )
// }

// function ProfileForm({ className }: React.ComponentProps<"form">) {
//   return (
//     <form className={cn("grid items-start gap-4", className)}>
//       <div className="grid gap-2">
//         <Label htmlFor="email">Email</Label>
//         <Input type="email" id="email" defaultValue="shadcn@example.com" />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="username">Username</Label>
//         <Input id="username" defaultValue="@shadcn" />
//       </div>
//       <Button type="submit">Save changes</Button>
//     </form>
//   )
// }

export const ProjectSection = () => {
  return (
    <section>
      <div className='bg-blue-500 flex space-x-3'>
        <RenderProject />
        <RenderProject />
      </div>
      <button>See More</button>
    </section>
  );
};

// i would like my dad to get checked up
// he has discolouration on his neck
// it appeared a few days ago but it spread rapidly
// and theres a lot under his neck and its spreading on the side
// we are not sure what it is and
