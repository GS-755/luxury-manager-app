import HairService from "../model/hair-service";
import NonQuery from "../model/status/non-query";

interface ServicesNode {
  Data: HairService[];
  Status: NonQuery;
}

export default ServicesNode;