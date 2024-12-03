import { cn } from "@/lib/utils";
import Section from "../helpers/Section";
import FunctionUseCallback from "./FunctionUseCallback";

const Dummy = () => {
  const patelotStyle = "#MK2025";

  return (
    <Section className={cn(`my-0 ${patelotStyle}`)}>
      DATA JSON API CALL
      {/* <ProductList /> */}
      <FunctionUseCallback />
    </Section>
  );
};

export default Dummy;
