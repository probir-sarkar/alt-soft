import { Software } from "@/models/Soft";
import { categotySchema } from "@/utils/constants";
import { allSoftwaresByType } from "../type.action";

const TypePage = async ({ params }: { params: { type: string } }) => {
  const { type } = params;
  if (!categotySchema.parse(type)) throw new Error("Invalid type");
  const allSoftwares = await allSoftwaresByType(type);

  return (
    <div>
      <h1>{type}</h1>
      <ul>
        {allSoftwares.map((software) => (
          <li key={software._id}>{software.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TypePage;
