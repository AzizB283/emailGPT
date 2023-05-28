import React, { useState, useEffect } from "react";
import { Modal, Badge } from "antd";
import "./template1.css";
import "../commoncss.css";


function Template1({ data }) {

  console.log(data)
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

    if(modalId === "image1"){
      setMainImage1(data?.image1?.regular[data?.image1?.thumb.indexOf(selectedImage1)])
      
    }
    if(modalId === "image2"){
      setMainImage2(data?.image2?.regular[data?.image2?.thumb.indexOf(selectedImage2)])
    }
    if(modalId === "image3"){
      setMainImage3(data?.image3?.regular[data?.image3?.thumb.indexOf(selectedImage3)])
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

  useEffect(()=> {
    setMainImage1(data?.image1?.regular[0])
    setMainImage2(data?.image2?.regular[0])
    setMainImage3(data?.image3?.regular[0])
  },[data])

  return (
    <>
      {/* <Title level={2} style={{marginLeft:25}}>Announcement Template</Title> */}
      <center>
        {/* <div className="parentcontainer"> */}
        {/* <div className="formcontainer">
            <Form
              name="prompt"
              labelCol={{
                span: 8,
              }}
              style={{
                maxWidth: 600,
                margin: "20px",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Form.Item
                required
                rules={[
                  {
                    required: true,
                    message: "Please enter prompt",
                  },
                ]}
                name="prompt"
              >
                <TextArea placeholder="Enter your prompt here..." rows={4}
                  autoSize={{ minRows: 4, maxRows: 20 }}
                  style={{ maxHeight: "calc(100vh - 170px)" }} />
              </Form.Item>

              <Form.Item
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            <div className="regenerate">
              <Space>
                <Button type="primary" size="small" >Regenerate Content</Button>
                <Button type="primary" size="small">Regenerate Image</Button>
              </Space>
            </div>
          </div> */}

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
                                  {/* <h4>Have an announcement to make?</h4> */}
                                  <h1>{data.subject}</h1>
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
                          style={{
                            minWidth: "100%",
                            padding: "27px 18px 0px",
                          }}
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
                    className="mcnImageGroupBlock"
                  >
                    <tbody className="mcnImageGroupBlockOuter">
                      <tr>
                        <td
                          valign="top"
                          style={{ padding: 9 }}
                          className="mcnImageGroupBlockInner"
                        >
                          <table
                            align="left"
                            width={564}
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnImageGroupContentContainer"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnImageGroupContent"
                                  valign="top"
                                  style={{
                                    paddingLeft: 9,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                  }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image1")} color="blue" />
                                    </div>
                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-full.png"
                                      // src={data?.image1?.regular[0]}
                                      src={mainImage1}
                                      width={564}
                                      style={{
                                        maxWidth: 564,
                                        paddingBottom: 0,
                                      }}
                                      className="mcnImage"
                                    />
                                    {/* <Button type="primary" className="showbtn" onClick={showModal}>Pick another image</Button> */}
                                  </div>
                                  <Modal title="Basic Modal" open={modals["image1"]} onOk={() => handleOk("image1")} onCancel={() => handleCancel("image1")} width={700}>
                                    <div className="image-grid">
                                      {data?.image1?.thumb.map((image, index) => (
                                        
                                        <div
                                          key={index}
                                          className={`image-item ${selectedImage1 === image ? "selected" : ""}`}
                                          onClick={() => setSelectedImage1(image)}
                                        >
                                          <img src={image} alt="" className="modalImage"/>
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
                      <tr>
                        <td
                          valign="top"
                          style={{ padding: 9 }}
                          className="mcnImageGroupBlockInner"
                        >
                          <table
                            align="left"
                            width={273}
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnImageGroupContentContainer"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnImageGroupContent"
                                  valign="top"
                                  style={{
                                    paddingLeft: 9,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                  }}
                                >
                                  <div className="image-container">
                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image2")} color="blue" />
                                    </div>

                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-sm1.png"
                                      // src={data?.image2?.regular[0]}
                                      src={mainImage2}
                                      width={264}
                                      style={{
                                        maxWidth: 264,
                                        paddingBottom: 0,
                                      }}
                                      className="mcnImage"
                                    >
                                    </img>
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
                            </tbody>
                          </table>
                          <table
                            align="right"
                            width={273}
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="mcnImageGroupContentContainer"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="mcnImageGroupContent"
                                  valign="top"
                                  style={{
                                    paddingRight: 9,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                  }}
                                >
                                  <div className="image-container">

                                    <div className="badge-container">
                                      <Badge count={'Pick Another Image'} onClick={() => showModal("image3")} color="blue" />
                                    </div>
                                    <img
                                      alt=""
                                      // src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-sm1.png"
                                      // src={data?.image3?.regular[0]}
                                      src={mainImage3}
                                      width={264}
                                      style={{
                                        maxWidth: 264,
                                        paddingBottom: 0,
                                        // height:400,
                                        // width:200,
                                      }}
                                      className="mcnImage"
                                    />
                                    {/* <Button type="primary" className="showbtn" onClick={showModal}>Pick another image</Button> */}
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
                          style={{
                            minWidth: "100%",
                            padding: "9px 18px 0px",
                          }}
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
                                  <p>
                                    {data.body1}
                                  </p>
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
                          style={{ minWidth: "100%", padding: "9px 18px" }}
                        >
                          <table
                            className="mcnDividerContent"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{
                              minWidth: "100%",
                              borderTop: "1px solid #E0E0E0",
                            }}
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
                                  {/* <h3>Draw attention with a heading.</h3> */}
                                  <p>
                                    {data.body3}
                                  </p>
                                  {/* <ul>
                                      <li>Here's what's happening.</li>
                                      <li>Here's where it'll be.</li>
                                      <li>Here's when it starts and ends.</li>
                                    </ul>
                                    <p>
                                      Less is more here, since you're trying to
                                      get people to visit your site.
                                    </p> */}
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
                          style={{
                            minWidth: "100%",
                            padding: "18px 18px 0px",
                          }}
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
                          <table
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
                                {/* <td
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
                                      title="Find Out More"
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
                                      Find Out More
                                    </a>
                                  </td> */}
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
        {/* </div> */}
      </center>
    </>
  );
}

export default Template1;
