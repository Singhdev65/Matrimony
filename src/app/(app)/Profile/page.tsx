"use client";

import * as Styled from "./styles";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Card, Avatar } from "@mui/material";

export default function Profile() {
  // const [activeTab, setActiveTab] = useState('personal')
  type Tab = "personal" | "professional" | "additional";

  interface TabItem {
    value: Tab;
    label: string;
  }

  const [activeTab, setActiveTab] = useState<Tab>("personal");

  const handleTabChange = (newValue: Tab) => {
    setActiveTab(newValue);
  };

  const settingsTabs = [
    { label: "Settings1", value: "Settings1" },
    { label: "Settings2", value: "Settings2" },
    { label: "Settings3", value: "Settings3" },
  ];

  const generalDetailsTabs: TabItem[] = [
    { label: "Personal Details", value: "personal" },
    { label: "Professional Details", value: "professional" },
    { label: "Additional Details", value: "additional" },
  ];

  return (
    <div>
      <Card>
        <Styled.DrawerContainer>
          <Styled.Drawer>
            <Styled.ProfileDetailContainer>
              <Avatar
                alt="Profile Picture"
                src="/path/to/profile-picture.jpg"
                sx={{ width: 56, height: 56, marginRight: 2 }}
              />

              <Box>
                <h6>Ron Doe</h6>

                <Styled.EmailTypography>
                  Ron@mailinator.com
                </Styled.EmailTypography>
              </Box>
            </Styled.ProfileDetailContainer>
            <Divider />
            <Styled.GeneralDetailContainer>
              <h6>General Details</h6>
              <Styled.CustomTabsContainer>
                {generalDetailsTabs?.map((item, index) => {
                  return (
                    <Styled.CustomTab
                      key={index}
                      // active={activeTab === item.value}
                      onClick={() => handleTabChange(item.value)}
                    >
                      {item.label}
                    </Styled.CustomTab>
                  );
                })}
              </Styled.CustomTabsContainer>
            </Styled.GeneralDetailContainer>
            <Divider />
            <Styled.GeneralDetailContainer>
              <h6>Settings</h6>
              <Styled.CustomTabsContainer>
                {settingsTabs?.map((item, index) => {
                  return (
                    <Styled.CustomTab
                      key={index}
                      // active={activeTab === item.value}
                      // onClick={() => handleTabChange(item.value)}
                    >
                      {item.label}
                    </Styled.CustomTab>
                  );
                })}
              </Styled.CustomTabsContainer>
            </Styled.GeneralDetailContainer>
          </Styled.Drawer>
          <Styled.ProfileContent>
            <Box component="main">
              <Card
                sx={{
                  display: "flex",
                  padding: "35px",
                }}
              >
                <Styled.ProfileFormContainer>
                  {/* <Grid item xs={12}>
                    {activeTab === "personal" && <PersonalDetails />}
                    {activeTab === "professional" && <ProfessionalDetails />}
                    {activeTab === "additional" && <AdditionalDetails />}
                  </Grid> */}
                </Styled.ProfileFormContainer>
              </Card>
            </Box>
          </Styled.ProfileContent>
        </Styled.DrawerContainer>
      </Card>
    </div>
  );
}
