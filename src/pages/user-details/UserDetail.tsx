import React, { useState } from "react";
import {
  UserDetailsBox,
  UserInfBox,
  InformationContainer,
  InformationChartGraph,
  LiaisonBox,
  Button,
  ButtonsBox,
  IconButton,
} from "./UserDetails.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import phone from "../../assets/phone.svg";
import camera from "../../assets/camera.svg";

import {
  UserCardInformation,
  FlightCardInformation,
  Chart,
  Table,
  UserViewCamera,
} from "src/components";

export const UserDetails: React.FunctionComponent = () => {
  const { id } = useParams();
  const users = useSelector((state: IRootState) => state.userItem.userItems);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <UserDetailsBox>
      {users.map((item) => {
        if (item.id === id) {
          return (
            <InformationContainer key={item.id}>
              <UserInfBox>
                <UserCardInformation
                  name={item.name}
                  serialNumber={item.id ?? ""}
                  licenseNumber={item.licenseNumber ?? ""}
                  categories={item.categories ?? ""}
                  dateBirth={item.dateBirth ?? ""}
                  image={item.image}
                />
                <LiaisonBox>
                  <FlightCardInformation
                    carBrand={item.flightInformation.carBrand}
                    carNumber={item.flightInformation.carNumber}
                    startFlight={item.flightInformation.startFlight}
                    endFlight={item.flightInformation.endFlight}
                    dispatchPoint={item.flightInformation.dispatchPoint}
                    destination={item.flightInformation.destination}
                    coordinates={item.flightInformation.coordinates}
                    recordedTime={item.flightInformation.recordedTime}
                    distanceTraveled={item.flightInformation.distanceTraveled}
                  />
                  <ButtonsBox>
                    <Button href={`tel:${item.phone}`}>
                      <IconButton src={phone} />
                    </Button>
                    <Button onClick={() => setIsOpenModal(true)}>
                      <IconButton src={camera} />
                    </Button>
                  </ButtonsBox>
                </LiaisonBox>
              </UserInfBox>
              <InformationChartGraph>
                <Table id={item.id} date={item.date} />
                <Chart data={item.weeklyStatus} />
              </InformationChartGraph>
            </InformationContainer>
          );
        }
      })}
      <UserViewCamera
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </UserDetailsBox>
  );
};
