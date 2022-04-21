import style from "../../../styles/modules/event.module.css";
import { checkHowManyDaysTill, datePresentation } from "../../../utils/date";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { BsThreeDotsVertical, BsFillFileEarmarkFill } from "react-icons/bs";
import ReadMore from "../../../utils/read-more";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/ContextProvider";
import MenuButton from "../../template/MenuButton";
import AlertWidget from "../../template/Alert";
import { Chip, Card, CardMedia, CardHeader, CardContent } from "@mui/material";

export default function NoticeWidget({ event }) {
  /*

    Show take all info for an event and display it

    */

  const UserService = useContext(UserContext);
  const [close, setClose] = useState(false);
  const [alert, setAlert] = useState({});
  const [openAlert, setOpenAlert] = useState(false);

  if (close) {
    return <></>;
  }

  return (
    <>
      <AlertWidget
        severity={alert.severity}
        content={alert.content}
        title={alert.title}
        open={openAlert}
        setOpen={setOpenAlert}
      />

      <Card
        variant="outlined"
        sx={{ borderRadius: 5, borderWidth: 0 }}
        style={{ margin: "10px", opacity: 0.9 }}
      >
        <CardMedia
          component="img"
          height="200"
          image={event.image || "https://picsum.photos/500/500"}
          alt="Paella dish"
        />
        <div className="row">
          <div className="col-12 text-start ">
            <CardHeader
              title={event.name}
              action={
                UserService.user.id === event.created_by && (
                  <MenuButton
                    list={[
                      {
                        label: "Delete",
                        activity: async () => {
                          if (
                            await event.delete(UserService.user.access_token)
                          ) {
                            // Delete was successful

                            setAlert({
                              severity: "success",
                              title: "Event",
                              content: "Deleted Successfully",
                            });
                            setOpenAlert(true);
                            setClose(true);
                          } else {
                            setAlert({
                              severity: "error",
                              title: "Event",
                              content: "Deletion Failed",
                            });
                            setOpenAlert(true);
                          }
                        },
                      },
                    ]}
                  >
                    <BsThreeDotsVertical />
                  </MenuButton>
                )
              }
              subheader={`Notification`}
            />
          </div>
        </div>

        <CardContent>
          <ReadMore limit={300}>{`${event.description}`}</ReadMore>
          <div className="row">
            <div className="col-12 text-start">
              <Chip
                size="small"
                variant="outlined"
                sx={{ margin: 0.5 }}
                icon={<BiTimeFive />}
                label={`${checkHowManyDaysTill(
                  new Date(),
                  new Date(event.date)
                )}`}
              />

              {event.resource && (
                <a href={event.resource} target="_blank" rel="noreferrer">
                  <Chip
                    size="small"
                    sx={{ margin: 0.5 }}
                    variant="outlined"
                    label={`resources`}
                    icon={
                      <BsFillFileEarmarkFill
                        style={{ fontSize: "15px", padding: "1px" }}
                      />
                    }
                  />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
