import React, { useState, useEffect } from "react";
import { Input, Button, Form, Typography, Space, Modal, Avatar, Badge } from "antd";
import "../commoncss.css";
import "./template2.css";

const { Title } = Typography;
const { TextArea } = Input;

function Template2({ data }) {
  const [modals, setModals] = useState({
    image1: false
  });

  const [selectedImage1, setSelectedImage1] = useState(data?.image1?.regular[0]);
  const [selectedImage2, setSelectedImage2] = useState(data?.image2?.regular[0]);
  const [selectedImage3, setSelectedImage3] = useState(data?.image3?.regular[0]);
  const [mainImage1, setMainImage1] = useState(selectedImage1);
  const [mainImage2, setMainImage2] = useState(selectedImage2);
  const [mainImage3, setMainImage3] = useState(selectedImage3);

  const [textareaRows, setTextareaRows] = useState(4);

  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const showModal = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }));
  };
  const handleOk = (modalId, image) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));

    if (modalId == "image1") {
      setMainImage1(selectedImage1)
    }
    if (modalId == "image2") {
      setMainImage2(selectedImage2)
    }
    if (modalId == "image3") {
      setMainImage3(selectedImage3)
    }
  };
  const handleCancel = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth <= 767) {
        setTextareaRows(4);
      } else {
        setTextareaRows(20);
      }
    };

    handleResize(); // Call initially to set the appropriate maxRows
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    };
  }, []);

  useEffect(()=> {
    setMainImage1(data.image1.regular[0])
    setMainImage2(data.image2.regular[0])
    setMainImage3(data.image3.regular[0])
  },[data])

  return (
    <>
      {/* <Title level={2}>Education Template</Title> */}
      <center>
        {/* <div className="parentcontainer"> */}

        <div className="tablecontainer">
          <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            className="templateContainer"
          >
            <tbody>
              <tr>
                <td valign="top" className="bodyContainer">
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnTextBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnTextBlockOuter">
                      <tr>
                        <td
                          valign="top"
                          className="mcnTextBlockInner"
                          style={{ paddingTop: 9 }}
                        >
                          <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ maxWidth: "100%", minWidth: "100%" }}
                            width="100%"
                            className="mcnTextContentContainer"
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  className="mcnTextContent"
                                  style={{
                                    paddingTop: 0,
                                    paddingRight: 18,
                                    paddingBottom: 9,
                                    paddingLeft: 18,
                                  }}
                                >
                                  <h2>
                                    {data.subject}
                                  </h2>
                                  <p style={{ fontSize: "18px !important" }}>
                                    {data.body1}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnDividerBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnDividerBlockOuter">
                      <tr>
                        <td
                          className="mcnDividerBlockInner"
                          style={{ minWidth: "100%", padding: "18px 18px 0px" }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnButtonBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnButtonBlockOuter">
                      <tr>
                        <td
                          style={{
                            paddingTop: 0,
                            paddingRight: 18,
                            paddingBottom: 18,
                            paddingLeft: 18,
                          }}
                          valign="top"
                          align="center"
                          className="mcnButtonBlockInner"
                        >
                          {/* <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              className="mcnButtonContentContainer"
                              style={{
                                borderCollapse: "separate !important",
                                borderRadius: 3,
                                backgroundColor: "#009FC7",
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="middle"
                                    className="mcnButtonContent"
                                    style={{
                                      fontFamily: "Helvetica",
                                      fontSize: 18,
                                      padding: 18,
                                    }}
                                  >
                                    <a
                                      className="mcnButton "
                                      title="Let's Get Started"
                                      href="#"
                                      target="_blank"
                                      style={{
                                        fontWeight: "bold",
                                        letterSpacing: "-0.5px",
                                        lineHeight: "100%",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        color: "#FFFFFF",
                                      }}
                                    >
                                      Let's Get Started
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnDividerBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnDividerBlockOuter">
                      <tr>
                        <td
                          className="mcnDividerBlockInner"
                          style={{ minWidth: "100%", padding: 18 }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnCaptionBlock"
                  >
                    <tbody className="mcnCaptionBlockOuter">
                      <tr>
                        <td
                          className="mcnCaptionBlockInner"
                          valign="top"
                          style={{ padding: 9 }}
                        >
                          <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnCaptionBottomContent"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnCaptionBottomImageContent"
                                  align="center"
                                  valign="top"
                                  style={{ padding: "0 9px 9px 9px" }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image1")} color="blue" />
                                    </div>
                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full3.png"
                                      // src={data?.image1?.regular[0]}
                                      src={mainImage1}
                                      width={564}
                                      style={{ maxWidth: 564 }}
                                      className="mcnImage"
                                    />
                                  </div>
                                  <Modal title="Basic Modal" open={modals["image1"]} onOk={() => handleOk("image1")} onCancel={() => handleCancel("image1")} width={700}>
                                    <div className="image-grid">
                                      {data?.image1?.regular.map((image, index) => (

                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage1 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage1(image)}
                                        >
                                          <img src={image} alt="" className="modalImage" />
                                        </div>
                                      ))}
                                    </div>

                                  </Modal>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  {/* <h3>Choose your approach.</h3> */}
                                  <p>
                                    {data.body2}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnDividerBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnDividerBlockOuter">
                      <tr>
                        <td
                          className="mcnDividerBlockInner"
                          style={{ minWidth: "100%", padding: 18 }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnCaptionBlock"
                  >
                    <tbody className="mcnCaptionBlockOuter">
                      <tr>
                        <td
                          className="mcnCaptionBlockInner"
                          valign="top"
                          style={{ padding: 9 }}
                        >
                          <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnCaptionBottomContent"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnCaptionBottomImageContent"
                                  align="center"
                                  valign="top"
                                  style={{ padding: "0 9px 9px 9px" }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image2")} color="blue" />
                                    </div>
                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full2.png"
                                      // src={data?.image2?.regular[0]}
                                      src={mainImage2}
                                      width={564}
                                      style={{ maxWidth: 564 }}
                                      className="mcnImage"
                                    />
                                  </div>
                                  <Modal title="Basic Modal" open={modals['image2']} onOk={() => handleOk("image2")} onCancel={() => handleCancel("image2")} width={700}>
                                  <div className="image-grid">
                                      {data?.image2?.regular.map((image, index) => (
                                        
                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage2 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage2(image)}
                                        >
                                          <img src={image} alt="" className="modalImage"/>
                                        </div>
                                      ))}
                                    </div>

                                  </Modal>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  {/* <h3>Share one idea at a time.</h3> */}
                                  <p>
                                    {data.body3}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnDividerBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnDividerBlockOuter">
                      <tr>
                        <td
                          className="mcnDividerBlockInner"
                          style={{ minWidth: "100%", padding: 18 }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnCaptionBlock"
                  >
                    <tbody className="mcnCaptionBlockOuter">
                      <tr>
                        <td
                          className="mcnCaptionBlockInner"
                          valign="top"
                          style={{ padding: 9 }}
                        >
                          <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnCaptionBottomContent"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnCaptionBottomImageContent"
                                  align="center"
                                  valign="top"
                                  style={{ padding: "0 9px 9px 9px" }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image3")} color="blue" />
                                    </div>
                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full.png"
                                      // src={data?.image3?.regular[0]}
                                      src={mainImage3}
                                      width={564}
                                      style={{ maxWidth: 1128 }}
                                      className="mcnImage"
                                    />
                                  </div>
                                  <Modal title="Basic Modal" open={modals['image3']} onOk={() => handleOk("image3")} onCancel={() => handleCancel("image3")} width={700}>
                                  <div className="image-grid">
                                      {data?.image3?.regular.map((image, index) => (
                                        
                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage3 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage3(image)}
                                        >
                                          <img src={image} alt="" className="modalImage"/>
                                        </div>
                                      ))}
                                    </div>
                                  </Modal>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  {/* <h3>One last thing.</h3> */}
                                  <p>
                                    {data.body4}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnDividerBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnDividerBlockOuter">
                      <tr>
                        <td
                          className="mcnDividerBlockInner"
                          style={{ minWidth: "100%", padding: 18 }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnBoxedTextBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnBoxedTextBlockOuter">
                      <tr>
                        <td valign="top" className="mcnBoxedTextBlockInner">
                          <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                            className="mcnBoxedTextContentContainer"
                          >
                            {/* <tbody>
                                <tr>
                                  <td
                                    style={{
                                      paddingTop: 9,
                                      paddingLeft: 18,
                                      paddingBottom: 9,
                                      paddingRight: 18,
                                    }}
                                  >
                                    <table
                                      border={0}
                                      cellSpacing={0}
                                      className="mcnTextContentContainer"
                                      width="100%"
                                      style={{
                                        minWidth: "100% !important",
                                        backgroundColor: "#F7F7F7",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            valign="top"
                                            className="mcnTextContent"
                                            style={{
                                              padding: 18,
                                              color: "#707070",
                                              textAlign: "center",
                                            }}
                                          >
                                            <h3 style={{ textAlign: "center" }}>
                                              Happy to help.
                                            </h3>
                                            <p
                                              style={{
                                                textAlign: "center !important",
                                              }}
                                            >
                                              Let people know how to reach you
                                              with questions, or where to go for
                                              help if they need it.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody> */}
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* </div> */}
      </center>
    </>
  );
}

export default Template2;
