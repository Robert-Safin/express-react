import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const params = useParams();
  return (
  <>
    <h1>Event details page</h1><p>Event ID: {params.eventId}</p>
  </>
)
};

export default EventDetailsPage;
