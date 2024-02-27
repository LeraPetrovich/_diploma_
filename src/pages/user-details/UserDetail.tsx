import React from "react";
import {
  UserDetailsBox,
  UserInfBox,
  InformationContainer,
  InformationChartGraph,
  LiaisonBox,
  Button,
  ButtonsBox,
} from "./UserDetails.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";

import {
  UserCardInformation,
  FlightCardInformation,
  Chart,
  Table,
} from "src/components";

export const UserDetails: React.FunctionComponent = () => {
  const { id } = useParams();
  const users = useSelector((state: IRootState) => state.userItem.userItems);

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
                    <Button>Сделать телефон</Button>
                    <Button>Сделать связь</Button>
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
    </UserDetailsBox>
  );
};
