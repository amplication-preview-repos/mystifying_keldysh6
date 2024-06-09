import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { MenteeList } from "./mentee/MenteeList";
import { MenteeCreate } from "./mentee/MenteeCreate";
import { MenteeEdit } from "./mentee/MenteeEdit";
import { MenteeShow } from "./mentee/MenteeShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
import { ProgressList } from "./progress/ProgressList";
import { ProgressCreate } from "./progress/ProgressCreate";
import { ProgressEdit } from "./progress/ProgressEdit";
import { ProgressShow } from "./progress/ProgressShow";
import { FixtureList } from "./fixture/FixtureList";
import { FixtureCreate } from "./fixture/FixtureCreate";
import { FixtureEdit } from "./fixture/FixtureEdit";
import { FixtureShow } from "./fixture/FixtureShow";
import { SponsorList } from "./sponsor/SponsorList";
import { SponsorCreate } from "./sponsor/SponsorCreate";
import { SponsorEdit } from "./sponsor/SponsorEdit";
import { SponsorShow } from "./sponsor/SponsorShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CricketManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Mentee"
          list={MenteeList}
          edit={MenteeEdit}
          create={MenteeCreate}
          show={MenteeShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
        <Resource
          name="Progress"
          list={ProgressList}
          edit={ProgressEdit}
          create={ProgressCreate}
          show={ProgressShow}
        />
        <Resource
          name="Fixture"
          list={FixtureList}
          edit={FixtureEdit}
          create={FixtureCreate}
          show={FixtureShow}
        />
        <Resource
          name="Sponsor"
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
          show={SponsorShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
