import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
    return (
	<>
          <section className="flex flex-col gap-4 h-full w-full">
            <h1 className="hidden md:block font-bold text-4xl dark:text-white">Dashboard</h1>
            <Tabs defaultValue="members" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="members">Member Management</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="employees">Employee Management</TabsTrigger>
              </TabsList>
              <TabsContent className="dark:text-white" value="members">Make changes to your account here.</TabsContent>
              <TabsContent className="dark:text-white" value="payments">Change your password here.</TabsContent>
              <TabsContent className="dark:text-white" value="employees">Change your password here.</TabsContent>
            </Tabs>
          </section>
        </>
    );
}
