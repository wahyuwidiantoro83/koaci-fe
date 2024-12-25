"use client";

import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = (props) => {
  return (
    <>
      <Layout>
        <div className="flex items-end w-full px-4 pb-16 md:px-24 h-[282px] bg-gradient-to-r from-[#1E74D7] from-[0%] via-[#1F98DB] via-[54%] to-[#1EE0B3] to-100%">
          <h1 className="text-2xl md:text-4xl text-white font-light">
            Frequently Asked Questions (F.A.Q)
          </h1>
        </div>
        <div className="flex w-full justify-center px-4 py-10 md:py-16 md:px-24">
          <Tabs defaultValue="umum" className="flex flex-col w-full items-center">
            <TabsList className="flex w-full md:w-fit flex-wrap place-items-center gap-2 mb-16 h-full bg-[#DBF0FC]">
              <TabsTrigger
                className="py-3 text-[#1459A8] data-[state=active]:text-white data-[state=active]:bg-[#8AB3E3]"
                value="umum"
              >
                Umum
              </TabsTrigger>
              <TabsTrigger
                className="py-3 text-[#1459A8] data-[state=active]:text-white data-[state=active]:bg-[#8AB3E3]"
                value="projectDelayed"
              >
                Project Delayed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="umum" className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="px-4" value="item-1">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-2">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-3">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Blanditiis eligendi excepturi enim omnis, rem iusto adipisci error cumque
                    possimus sapiente laborum dolorum laudantium qui, aut fugiat delectus. Soluta,
                    reprehenderit cupiditate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-4">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-5">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-6">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-7">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquid sed, porro dolorum dignissimos consectetur quia repudiandae non
                    quo itaque dolore. Qui corrupti quam nesciunt, rerum praesentium nemo modi ea
                    quod?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-8">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="projectDelayed" className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="px-4" value="item-1">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-2">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-3">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Blanditiis eligendi excepturi enim omnis, rem iusto adipisci error cumque
                    possimus sapiente laborum dolorum laudantium qui, aut fugiat delectus. Soluta,
                    reprehenderit cupiditate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-4">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-5">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-6">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-7">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquid sed, porro dolorum dignissimos consectetur quia repudiandae non
                    quo itaque dolore. Qui corrupti quam nesciunt, rerum praesentium nemo modi ea
                    quod?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-8">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] p-4 rounded-xl text-sm font-lght">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
                    perspiciatis repudiandae sed incidunt dolore iusto ipsam assumenda nemo
                    aspernatur vitae corrupti, cumque sapiente dicta quae, ratione repellendus
                    libero dolorem. Praesentium!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};

export default FAQ;
