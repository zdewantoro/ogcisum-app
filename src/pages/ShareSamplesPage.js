import Template from "../components/template/Template";
import ShareSamples from "../components/shared/ShareSamples";
import ShareDestination from "../components/shared/ShareDestination";

function CreatedSamplesPage() {
  return (
    <Template title="Share This Sample:">
      <ShareSamples Name={"Samples"} Date={"2001-12-13"}></ShareSamples>
      <ShareDestination Destination={"UQ Sports, UQ"}></ShareDestination>
      <ShareDestination Destination={"UQU Shops, UQ"}></ShareDestination>
      <ShareDestination
        Destination={"Near UQ Lakes Station, UQ"}
      ></ShareDestination>
      <ShareDestination
        Destination={"General Purpose South, UQ"}
      ></ShareDestination>
      <ShareDestination Destination={"Great Court, UQ"}></ShareDestination>
    </Template>
  );
}

export default CreatedSamplesPage;
