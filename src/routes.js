import LayoutDefault from "./component/Layouts/LayoutDefault/layoutDefault";
import Home from "./pages/Home";
import Crm from "./pages/CRM/crm";
import BookingService from "./pages/BookingService/bookingService";
import Room from "./pages/Room/room";
import CreateRoom from "./pages/Room/CreateRoom/createRoom";
import Setting from "./pages/Setting/setting";

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "crm",
        element: <Crm />
      },
      {
        path: "booking-service",
        element: <BookingService />
      },
      {
        path: "/rooms-info",
        element: <Room />
      },
      {
        path: "/create-room",
        element: <CreateRoom />
      },
      {
        path: "/setting",
        element: <Setting />
      }
    ]
  }
]