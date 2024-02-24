"use client";


import ViewPetController from "@/app/ViewPet/ViewPetController";

const Page = ({params}) => {
  return (
      <ViewPetController pet_id={params.id}/>
  );
};

export default Page;
