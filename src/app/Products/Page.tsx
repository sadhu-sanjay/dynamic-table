import { Table } from "~/components/Organisms/table";
import data from "~/../data.json";


export default function Products() {
  return <Table data={data} search={true} pagination={true} />;
}
