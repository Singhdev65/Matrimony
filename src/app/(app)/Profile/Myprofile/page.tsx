"use client";

import * as Styled from "./styles";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Card, Avatar } from "@mui/material";
import GenericHeader from "../../../GenericComponents/GenericHeader/Header";
import Footer from "../../../../app/GenericComponents/GenericFooter/Footer";
import Link from "next/link";
import { Edit as EditIcon } from "@mui/icons-material";

export default function Myprofile() {
  const buttons = [
    { id: 0, label: "button1" },
    { id: 1, label: "button2" },
  ];

  interface FormField {
    sections: Section[];
  }

  interface Section {
    label: string;
    name: string;
    type: "text" | "email" | "number" | "password" | "select" | "button";
    placeholder?: string;
    value: string;
    required?: boolean;
    options?: string[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  interface FormProps {
    formFields: FormField[];
    handleChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    handleSubmit: () => void;
    handleBtnClick: (name: string) => void;
    formValues: { [key: string]: string };
    setImagePreview: (image: string | ArrayBuffer | null) => void;
  }

  const formFields = [
    {
      id: 0,
      sections: [
        {
          id: 1,
          label: "First name:",
          type: "text",
          placeholder: "Enter First name",
          name: "full_name",
          required: "required",
          value: "full_name",
          // onChange: handleChange,
        },
        {
          id: 1,
          label: "Last name:",
          type: "text",
          placeholder: "Enter Last name",
          name: "full_name",
          required: "required",
          value: "full_name",
          // onChange: handleChange,
        },

        {
          id: 2,
          label: "Email-ID:",
          type: "email",
          name: "email_id",
          value: "email_id",
          placeholder: "Enter email",
          required: "required",
          // onChange: handleChange,
        },
        {
          id: 3,
          label: "Phone Number:",
          type: "number",
          name: "phone_number",
          value: "phone_number",
          placeholder: "Enter Phone Number",

          required: "required",
          // onChange: handleChange,
        },

        {
          id: 6,
          label: "City/Town:",
          type: "select",
          placeholder: "Enter your Expertise",
          name: "City",
          value: "City",

          required: "required",
          // onChange: handleChange,
          options: ["a", "b", "c"],
        },

        {
          id: 7,
          label: "User Name:",
          type: "text",
          placeholder: "Enter username",
          name: "username",
          value: "username",
          required: true,
          // onChange: handleChange,
        },
      ],
    },
  ];

  const PersonalDetailsFields = [
    {
      id: 0,
      sections: [
        {
          id: 0,
          label: "Date of Birth:",
          type: "number",
          placeholder: "Enter Date of Birth",
          name: "dob",
          required: "required",
          value: "dob",
          // onChange: handleChange,
        },
        {
          id: 1,
          label: "Age:",
          type: "number",
          placeholder: "Enter Age",
          name: "age",
          required: "required",
          value: "age",
          // onChange: handleChange,
        },

        {
          id: 2,
          label: "Religion:",
          type: "text",
          name: "religion",
          value: "religion",
          placeholder: "Enter religion",
          required: "required",
          // onChange: handleChange,
        },
        {
          id: 3,
          label: "Caste:",
          type: "text",
          name: "caste",
          value: "caste",
          placeholder: "Enter Caste",

          required: "required",
          // onChange: handleChange,
        },

        {
          id: 6,
          label: "Languages known:",
          type: "text",
          placeholder: "Enter Languages known",
          name: "languages",
          value: "languages",

          required: "required",
          // onChange: handleChange,
        },

        {
          id: 7,
          label: "Mother Tongue:",
          type: "text",
          placeholder: "Enter Mother Tongue",
          name: "mothertongue",
          value: "mothertongue",
          required: true,
          // onChange: handleChange,
        },
      ],
    },
  ];

  return (
    <Styled.CardWrapper>
      <GenericHeader buttons={buttons} showSearch={false} />

      <Card>
        <Styled.DrawerContainer>
          <Styled.ProfileContent>
            <Box component="main">
              <Card
                sx={{
                  display: "flex",
                  padding: "35px",
                }}
              >
                <Styled.IMGContainer>
                  <Styled.Image
                    src="/path/to/profile-picture.jpg"
                    alt="profile pic"
                  />
                </Styled.IMGContainer>
                <div style={{ width: "50rem", border: "1px solid red" }}>
                  <h2>FName LName(1400fgs)</h2>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce eu varius orci. Cras ut mollis nibh. Donec aliquet
                    neque a lobortis sollicitudin. Sed maximus nec tortor eu
                    fermentum. Curabitur volutpat odio nibh, vitae dapibus ante
                    rutrum et. Phasellus laoreet suscipit dictum. Nam mauris
                    mauris, ultrices a magna sed, feugiat congue quam. Donec nec
                    rutrum urna, mollis suscipit risus.
                  </h6>
                </div>
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
                    <h2 style={{ marginBottom: "20px" }}>Basic Details</h2>
                    <Styled.SeeAllLink>Gold Member</Styled.SeeAllLink>
                  </div>

                  <>
                    <Styled.Form>
                      <Styled.FormWrapper>
                        {formFields?.map((items, index) => {
                          return (
                            <React.Fragment key={index}>
                              {items?.sections?.map((item, sectionIndex) => {
                                item?.options?.unshift("Please Select");
                                return (
                                  <Grid key={sectionIndex}>
                                    <Styled.Label>{item.label}</Styled.Label>
                                    {item.type === "text" ||
                                    item.type === "email" ||
                                    item.type === "number" ||
                                    item.type === "password" ? (
                                      <Styled.Input
                                        name={item.name}
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        value={item.value}
                                        // required={item.required}
                                        // onChange={handleChange}
                                      />
                                    ) : item.type === "select" ? (
                                      <Styled.Select
                                        id={sectionIndex.toString()}
                                        // label={item.label}
                                        name={item.name}
                                        value={item.value}
                                        // required={item.required}
                                        // onChange={handleChange}
                                        // placeholder={item.placeholder}
                                      >
                                        {item.options?.map((i, optionIndex) => (
                                          <Styled.Option
                                            key={optionIndex}
                                            value={i}
                                          >
                                            {i}
                                          </Styled.Option>
                                        ))}
                                      </Styled.Select>
                                    ) : item.type === "button" ? (
                                      <>
                                        <input
                                          // component="label"
                                          // variant="contained"
                                          type="file"
                                          placeholder="file"
                                          // onClick={() =>
                                          //   handleBtnClick(item?.name)
                                          // }
                                        />
                                      </>
                                    ) : null}
                                  </Grid>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
                        <br />
                      </Styled.FormWrapper>
                      <Styled.SubmitButton
                      // onClick={handleSubmit}
                      >
                        Save Changes
                      </Styled.SubmitButton>
                    </Styled.Form>
                  </>
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
                    <h2 style={{ marginBottom: "20px" }}>Personal Details</h2>
                    <Styled.SeeAllLink>See All</Styled.SeeAllLink>
                  </div>
                  {/* <Styled.IMGContainer>
                  {DashboardPremiumimages?.map((item, index) => {
                    return (
                      <>
                        <Styled.ImageItem key={index}>
                          {/* <Styled.Image
                            src={item.value}
                            alt={`Img ${index + 1}`}
                          /> */}

                  {/* <Avatar
                            alt={item.label}
                            src={item.value}
                            sx={{ width: 30, height: 30, marginRight: 2 }}
                          />
                          <Styled.Label>{item.label}</Styled.Label>
                        </Styled.ImageItem>
                      </>
                    );
                  })}
                </Styled.IMGContainer> */}

                  <>
                    <Styled.Form>
                      <Styled.FormWrapper>
                        {PersonalDetailsFields?.map((items, index) => {
                          return (
                            <React.Fragment key={index}>
                              {items?.sections?.map((item, sectionIndex) => {
                                // item?.options?.unshift("Please Select");
                                return (
                                  <Grid key={sectionIndex}>
                                    <Styled.Label>{item.label}</Styled.Label>
                                    {item.type === "text" ||
                                    item.type === "email" ||
                                    item.type === "number" ||
                                    item.type === "password" ? (
                                      <Styled.Input
                                        name={item.name}
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        value={item.value}
                                        // required={item.required}
                                        // onChange={handleChange}
                                      />
                                    ) : item.type === "select" ? (
                                      <Styled.Select
                                        id={sectionIndex.toString()}
                                        // label={item.label}
                                        name={item.name}
                                        value={item.value}
                                        // required={item.required}
                                        // onChange={handleChange}
                                        // placeholder={item.placeholder}
                                      >
                                        {/* {item.options?.map((i, optionIndex) => (
                                          <Styled.Option
                                            key={optionIndex}
                                            value={i}
                                          >
                                            {i}
                                          </Styled.Option>
                                        ))} */}
                                      </Styled.Select>
                                    ) : item.type === "button" ? (
                                      <>
                                        <input
                                          // component="label"
                                          // variant="contained"
                                          type="file"
                                          placeholder="file"
                                          // onClick={() =>
                                          //   handleBtnClick(item?.name)
                                          // }
                                        />
                                      </>
                                    ) : null}
                                  </Grid>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
                        <br />
                      </Styled.FormWrapper>
                      <Styled.SubmitButton
                      // onClick={handleSubmit}
                      >
                        Save Changes
                      </Styled.SubmitButton>
                    </Styled.Form>
                  </>
                </Styled.ProfileFormContainer>
              </Card>
            </Box>
          </Styled.ProfileContent>
          <Styled.Drawer>Drawer</Styled.Drawer>
        </Styled.DrawerContainer>
      </Card>
      <Footer />
    </Styled.CardWrapper>
  );
}
