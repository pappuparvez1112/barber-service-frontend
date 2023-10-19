import Table from "@/components/ui/Table/Table";

import ReviewTable from "@/components/view/Service/ReviewsTable";
import { Service } from "@/interfaces";
import { getReviewsData } from "@/services/reviews/reviewsDataFatching";
import { columns } from "./columsReviews";

const AllReviews = async () => {
  const data: any = await getReviewsData();
  console.log(data);

  return (
    <ReviewTable title="All Reviews">
      <Table<Service> columns={columns} data={data} />
    </ReviewTable>
  );
};

export default AllReviews;
