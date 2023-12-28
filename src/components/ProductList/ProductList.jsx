import DataTable from "../DataTable/DataTable";
import FORMATTER from "../../utils/formatter";
import { useClaimModal } from "../ClaimModal/ClaimModal";

export default function ProductList({ data, isLoading, product, refetch }) {
  const { openClaimModal } = useClaimModal();

  return (
    <DataTable
      data={data || []}
      isLoading={isLoading}
      onDelete={(product) => {
        openClaimModal(
          <>
            Do you want to delete product <span>{product.name}</span>
          </>,
          (confirm) => confirm && deleteProductMutation.mutate(product)
        );
      }}
      onEdit={(product) => {
        openUpdateProductModal(product.id, refetch);
      }}
      pick={{
        name: { title: "Name" },
        category: { title: "Category" },
        price: {
          title: "Price",
          className: " font-normal text-secondary-500",
          mapper: FORMATTER.toCurrency,
        },
        quantity: {
          title: "Quantity",
          mapper: (value) => value || "0",
        },
        warrantyPeriod: {
          title: "Warranty period",
          mapper: (value) => `${value} months`,
        },
      }}
    />
  );
}
