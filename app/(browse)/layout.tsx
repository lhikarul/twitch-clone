import { Suspense } from "react";

import { Navbar } from "./(home)/_components/navbar";
import { Container } from "./(home)/_components/container";
import { Sidebar, SidebarSkeleton } from "./(home)/_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
