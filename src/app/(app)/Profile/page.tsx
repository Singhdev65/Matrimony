"use client";

import * as Styled from "./styles";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Card, Avatar } from "@mui/material";
import GenericHeader from "../../GenericComponents/GenericHeader/Header";
import Footer from "../../../app/GenericComponents/GenericFooter/Footer";
import Link from "next/link";
import { Edit as EditIcon } from "@mui/icons-material";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  type Tab =
    | "plan"
    | "chat"
    | "requests"
    | "shortlists"
    | "settings"
    | "help"
    | "aboutus";

  interface TabItem {
    value: Tab;
    label: string;
  }

  interface DashboardImages {
    label: string;
    value: string;
  }

  interface DashboardCategories {
    id: number;
    label: string;
    value: string;
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

  const buttons = [
    { id: 0, label: "button1" },
    { id: 1, label: "button2" },
  ];

  const DashboardPremiumimages: DashboardImages[] = [
    { value: "image1.jpg", label: "Label 1" },
    { value: "image2.jpg", label: "Label 2" },
    { value: "image3.jpg", label: "Label 3" },
    { value: "image4.jpg", label: "Label 4" },
    { value: "image5.jpg", label: "Label 5" },
    { value: "image6.jpg", label: "Label 6" },
    { value: "image7.jpg", label: "Label 7" },
    { value: "image8.jpg", label: "Label 8" },
  ];

  const Categories: DashboardCategories[] = [
    { id: 0, label: "City/Town", value: "" },
    { id: 1, label: "Education", value: "" },
    { id: 2, label: "Income", value: "" },
    { id: 3, label: "Religion", value: "" },
    { id: 4, label: "Caste", value: "" },
  ];

  return (
    <Styled.CardWrapper>
      <GenericHeader buttons={buttons} showSearch={false} />

      <Card>
        <Styled.DrawerContainer>
          <Styled.Drawer>
            <Styled.ProfileDetailContainer>
              <div>
                <Avatar
                  alt="Profile Picture"
                  src="/path/to/profile-picture.jpg"
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                {/* <Styled.EditIconContainer> */}
                <EditIcon sx={{ fontSize: 16 }} />
                {/* </Styled.EditIconContainer> */}
              </div>
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
                  <h2 style={{ marginBottom: "20px" }}>Choose By Categories</h2>

                  <Styled.Categories>
                    {Categories?.map((item, index) => {
                      return (
                        <Styled.SingleCategory key={index}>
                          {item.label}
                        </Styled.SingleCategory>
                      );
                    })}
                  </Styled.Categories>
                </Styled.ProfileFormContainer>
              </Card>
              <br />
              {/* My matches */}

              <Card
                sx={{
                  display: "flex",
                  padding: "35px",
                  position: "relative",
                }}
              >
                <Styled.ProfileFormContainer>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 style={{ marginBottom: "20px" }}>My Matches</h2>
                    <Styled.SeeAllLink>See All</Styled.SeeAllLink>
                  </div>

                  <Styled.IMGContainer>
                    {DashboardPremiumimages?.map((item, index) => {
                      return (
                        <>
                          <Styled.ImageItem key={index}>
                            {/* <Styled.Image
                              src={item.value}
                              alt={`Img ${index + 1}`}
                            /> */}
                            <Avatar
                              alt={item.label}
                              src={item.value}
                              sx={{ width: 30, height: 30, marginRight: 2 }}
                            />
                            <Styled.Label>{item.label}</Styled.Label>
                          </Styled.ImageItem>
                        </>
                      );
                    })}
                  </Styled.IMGContainer>
                </Styled.ProfileFormContainer>
              </Card>

              {/* Premium Matches */}

              <br />
              <Card
                sx={{
                  display: "flex",
                  padding: "35px",
                }}
              >
                <Styled.ProfileFormContainer>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 style={{ marginBottom: "20px" }}>Premium Matches</h2>
                    <Styled.SeeAllLink>See All</Styled.SeeAllLink>
                  </div>
                  <Styled.IMGContainer>
                    {DashboardPremiumimages?.map((item, index) => {
                      return (
                        <>
                          <Styled.ImageItem key={index}>
                            {/* <Styled.Image
                              src={item.value}
                              alt={`Img ${index + 1}`}
                            /> */}

                            <Avatar
                              alt={item.label}
                              src={item.value}
                              sx={{ width: 30, height: 30, marginRight: 2 }}
                            />
                            <Styled.Label>{item.label}</Styled.Label>
                          </Styled.ImageItem>
                        </>
                      );
                    })}
                  </Styled.IMGContainer>
                </Styled.ProfileFormContainer>
              </Card>
            </Box>
          </Styled.ProfileContent>
        </Styled.DrawerContainer>
      </Card>
      <Footer />
    </Styled.CardWrapper>
  );
}
