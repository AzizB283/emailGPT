import React, { useState, useEffect } from "react";
import { Input, Button, Form, Typography, Space, Modal, Avatar, Badge } from "antd";
import "../commoncss.css";
import "./template4.css";

const { TextArea } = Input;
const { Title } = Typography;

function Template4({ data }) {
  const [modals, setModals] = useState({
    image1: false,
  });
  const [textareaRows, setTextareaRows] = useState(4);

  const [selectedImage1, setSelectedImage1] = useState(data?.image1?.regular[0]);
  const [selectedImage2, setSelectedImage2] = useState(data?.image2?.regular[0]);
  const [selectedImage3, setSelectedImage3] = useState(data?.image3?.regular[0]);
  const [mainImage1, setMainImage1] = useState(selectedImage1);
  const [mainImage2, setMainImage2] = useState(selectedImage2);
  const [mainImage3, setMainImage3] = useState(selectedImage3);

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
        setTextareaRows(4); // Set maxRows to 4 for mobile and tablet devices
      } else {
        setTextareaRows(20); // Set maxRows to 20 for desktop and laptop devices
      }
    };

    handleResize(); // Call initially to set the appropriate maxRows
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    };
  }, []);

  useEffect(() => {
    setMainImage1(data.image1.regular[0])
    setMainImage2(data.image2.regular[0])
    setMainImage3(data.image3.regular[0])
  }, [data])

  return (
    <>
      <center>
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
              <h1>{data.subject}</h1>

              <tr>
                <td valign="top" className="bodyContainer">
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    className="mcnImageBlock"
                    style={{ minWidth: "100%" }}
                  >
                    <tbody className="mcnImageBlockOuter">
                      <tr>
                        <td
                          valign="top"
                          style={{ padding: 9 }}
                          className="mcnImageBlockInner"
                        >
                          <table
                            align="left"
                            width="100%"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnImageContentContainer"
                            style={{ minWidth: "100%" }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnImageContent"
                                  valign="top"
                                  style={{
                                    paddingRight: 9,
                                    paddingLeft: 9,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image1")} color="blue" />
                                    </div>
                                    <img
                                      align="center"
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-full.png"
                                      // src={data?.image1?.regular[0]}
                                      src={mainImage1}
                                      width={564}
                                      style={{
                                        maxWidth: 564,
                                        paddingBottom: 0,
                                        display: "inline !important",
                                        verticalAlign: "bottom",
                                      }}
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
                                  {/* <h3>
                                      Feature the star of your collection first.
                                    </h3> */}
                                  <p>
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
                                      title="Start Shopping"
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
                                      Start Shopping
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
                            width={282}
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
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-sm1.png"
                                      // src={data?.image2?.regular[0]}
                                      src={mainImage2}
                                      width={264}
                                      style={{ maxWidth: 264 }}
                                      className="mcnImage"
                                    />
                                  </div>
                                  <Modal title="Basic Modal" open={modals["image2"]} onOk={() => handleOk("image2")} onCancel={() => handleCancel("image2")} width={700}>
                                  <div className="image-grid">
                                      {data?.image2?.regular.map((image, index) => (

                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage2 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage2(image)}
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
                                  width={282}
                                >
                                  {/* <h4>Related products</h4> */}
                                  <p>
                                    {data.body2}
                                  </p>
                                  {/* <p>
                                      <a href="#">View similar products »</a>
                                    </p> */}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            align="right"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnCaptionBottomContent"
                            width={282}
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
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-sm2.png"
                                      // src={data?.image3?.regular[0]}
                                      src={mainImage3}
                                      width={264}
                                      style={{ maxWidth: 264 }}
                                      className="mcnImage"
                                    />
                                  </div>
                                  <Modal title="Basic Modal" open={modals["image3"]} onOk={() => handleOk("image3")} onCancel={() => handleCancel("image3")} width={700}>
                                  <div className="image-grid">
                                      {data?.image3?.regular.map((image, index) => (

                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage3 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage3(image)}
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
                                  width={282}
                                >
                                  {/* <h4>What's on sale</h4> */}
                                  <p>
                                    {data.body3}
                                  </p>
                                  <p>
                                    {/* <a href="#">Shop the sale »</a> */}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
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
      </center>
    </>
  );
}

export default Template4;
