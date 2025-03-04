import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import Link from "next/link";
import { CardProps } from "@/store/card";

function FunctionalitiesCard({card}:{card: CardProps}) {
    return (
        <Card className="shadow-gray-700 hover:shadow-lg shadow-gray-300 bg-white rounded-md p-5 border-[0px] shadow-none">
            <CardHeader className="flex flex-col items-center text-center justify-center">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
                {<card.icon size={50}/>}
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
                <Link href={card.href} className="rounded-full text-white px-4 py-2 bg-black hover:bg-white hover:text-black hover:border-black hover:border">Use Now</Link>
            </CardFooter>
        </Card>
    )
}

export default FunctionalitiesCard