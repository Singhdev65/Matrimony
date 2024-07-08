"use client";

import * as Styled from "./styles";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Card, Avatar } from "@mui/material";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  type Tab = "plan" | "chat" | "requests" | "shortlists" | "settings" | "help" | "aboutus";

  interface TabItem {
    value: Tab;
    label: string;
  }

  const handleTabChange = (newValue: Tab) => {
    setActiveTab(newValue);
  };

  const requestsTabs: TabItem[] = [
    { label: "My Requests", value: "requests" },
    { label: "My Shortlists", value: "shortlists" },
  ];

  const generalDetailsTabs: TabItem[] = [
    { label: "My Plan", value: "plan" },
    { label: "My Chat", value: "chat" },
  ];

  const settingsTabs: TabItem[] = [
    { label: "Settings", value: "settings" },
    { label: "Help & Support", value: "help" },
    { label: "About Us", value: "aboutus" },
  ];

  return (
    <Styled.CardWrapper>
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
                <h3>Prince Kumar</h3>

                <Styled.EmailTypography>
                  prince@mailinator.com
                </Styled.EmailTypography>
              </Box>
            </Styled.ProfileDetailContainer>
            <Divider />
            <Styled.GeneralDetailContainer>
              {/* <h6>Plan & Chat</h6> */}
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
              {/* <h6>Requests and Shortlists</h6> */}
              <Styled.CustomTabsContainer>
                {requestsTabs?.map((item, index) => {
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
              {/* <h6>Settings</h6> */}
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
                  <Grid item xs={12}>
                    Dashboard content
                  </Grid>
                </Styled.ProfileFormContainer>
              </Card>
            </Box>
          </Styled.ProfileContent>
        </Styled.DrawerContainer>
      </Card>
    </Styled.CardWrapper>
  );
}
