import Link from "next/link";
import Image from "next/image";

export const AnimalPreview = ({animal}) => {
	return (
		<>
			<Link href="/ViewPet">
				<Image
					src={animal.image}
					alt={animal.name}
					className="hover:border-4 border-orange-500 rounded-full w-40 h-40 mx-auto mb-4"
					width={500}
					height={500}
				/>
			</Link>
			<h2 className="text-xl font-bold mb-2">{animal.name}</h2>
			<p>
				<span className="font-bold">AnimalID:</span> {animal.id}
			</p>
			<p>
				<span className="font-bold">Age:</span> {animal.age}
			</p>
			<p>
				<span className="font-bold">Sex:</span> {animal.sex}
			</p>
			<p>
				<span className="font-bold">Breed:</span> {animal.breed}
			</p>
		</>
	)
}