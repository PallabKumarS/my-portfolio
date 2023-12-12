"use client";
import { IoLogoWebComponent } from "react-icons/io5";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3 justify-center">
          <IoLogoWebComponent className="text-5xl" />
          <p className="text-md">Front End</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default Services;
