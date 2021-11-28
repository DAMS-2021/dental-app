import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard_dentist.css";
import "./schedular.js";
import "./scheduler.css";
import { auth, db, logout } from "./firebase1";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "./firebase1";

//import icons from react icons
import { FaCalendar, FaCalendarCheck, FaStar, FaUser } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiSettings,
} from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";

function Dashboard_dentist() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const fetchUserName = async () => {
    try {
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/sign_in");
    fetchUserName();
  }, [user, loading]);

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");
  const q = query(collection(db, "doc"), where("doc_mail", "==", email));

  const [info, setInfo] = useState([]);

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const accept1 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m1_req: false,
      doc_m1_bkd: true,
    });
  };

  const accept2 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m2_req: false,
      doc_m2_bkd: true,
    });
  };

  const accept3 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m3_req: false,
      doc_m3_bkd: true,
    });
  };

  const accept4 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu1_req: false,
      doc_tu1_bkd: true,
    });
  };

  const accept5 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu2_req: false,
      doc_tu2_bkd: true,
    });
  };

  const accept6 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu3_req: false,
      doc_tu3_bkd: true,
    });
  };

  const accept7 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w1_req: false,
      doc_w1_bkd: true,
    });
  };

  const accept8 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w2_req: false,
      doc_w2_bkd: true,
    });
  };

  const accept9 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w3_req: false,
      doc_w3_bkd: true,
    });
  };

  const accept10 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th1_req: false,
      doc_th1_bkd: true,
    });
  };

  const accept11 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th2_req: false,
      doc_th2_bkd: true,
    });
  };

  const accept12 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th3_req: false,
      doc_th3_bkd: true,
    });
  };

  const accept13 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f1_req: false,
      doc_f1_bkd: true,
    });
  };

  const accept14 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f2_req: false,
      doc_f2_bkd: true,
    });
  };

  const accept15 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f3_req: false,
      doc_f3_bkd: true,
    });
  };

  const accept16 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa1_req: false,
      doc_sa1_bkd: true,
    });
  };

  const accept17 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa2_req: false,
      doc_sa2_bkd: true,
    });
  };

  const accept18 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa3_req: false,
      doc_sa3_bkd: true,
    });
  };

  const accept19 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su1_req: false,
      doc_su1_bkd: true,
    });
  };

  const accept20 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su2_req: false,
      doc_su2_bkd: true,
    });
  };

  const accept21 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su3_req: false,
      doc_su3_bkd: true,
    });
  };

  const decline1 = (m1_patient_id) => {
    var f = auth.currentUser.uid;
    console.log(m1_patient_id);
    updateDoc(doc(db, "doc", f), {
      doc_m1_req: false,
      doc_m1_bkd: false,
      mon_1_patient_email: "",
      doc_m1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", m1_patient_id), {
      mon_1_name: "",
      mon_1_date: "",
      mon_1_email: "",
      mon_1_id: "",
    });
  };

  const decline2 = (m2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m2_req: false,
      doc_m2_bkd: false,
      doc_m2_prob: "",
      mon_2_patient_email: "",
    });
    updateDoc(doc(db, "gn_user_doc", m2_patient_id), {
      mon_2_name: "",
      mon_2_date: "",
      mon_2_email: "",
      mon_2_id: "",
    });
  };

  const decline3 = (m3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m3_req: false,
      doc_m3_bkd: false,
      mon_3_patient_email: "",
      doc_m3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", m3_patient_id), {
      mon_3_name: "",
      mon_3_date: "",
      mon_3_email: "",
      mon_3_id: "",
    });
  };

  const decline4 = (tu1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu1_req: false,
      doc_tu1_bkd: false,
      tue_1_patient_email: "",
      doc_tu1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", tu1_patient_id), {
      tue_1_name: "",
      tue_1_date: "",
      tue_1_email: "",
      tue_1_id: "",
    });
  };

  const decline5 = (tu2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu2_req: false,
      doc_tu2_bkd: false,
      tue_2_patient_email: "",
      doc_tu2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", tu2_patient_id), {
      tue_2_name: "",
      tue_2_date: "",
      tue_2_email: "",
      tue_2_id: "",
    });
  };

  const decline6 = (tu3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu3_req: false,
      doc_tu3_bkd: false,
      tue_3_patient_email: "",
      doc_tu3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", tu3_patient_id), {
      tue_3_name: "",
      tue_3_date: "",
      tue_3_email: "",
      tue_3_id: "",
    });
  };

  const decline7 = (w1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w1_req: false,
      doc_w1_bkd: false,
      wed_1_patient_email: "",
      doc_w1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", w1_patient_id), {
      wed_1_name: "",
      wed_1_date: "",
      wed_1_email: "",
      wed_1_id: "",
    });
  };

  const decline8 = (w2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w2_req: false,
      doc_w2_bkd: false,
      wed_2_patient_email: "",
      doc_w2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", w2_patient_id), {
      wed_2_name: "",
      wed_2_date: "",
      wed_2_email: "",
      wed_2_id: "",
    });
  };

  const decline9 = (w3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w3_req: false,
      doc_w3_bkd: false,
      wed_3_patient_email: "",
      doc_w3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", w3_patient_id), {
      wed_3_name: "",
      wed_3_date: "",
      wed_3_email: "",
      wed_3_id: "",
    });
  };

  const decline10 = (th1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th1_req: false,
      doc_th1_bkd: false,
      thur_1_patient_email: "",
      doc_th1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", th1_patient_id), {
      thu_1_name: "",
      thu_1_date: "",
      thu_1_email: "",
      thu_1_id: "",
    });
  };

  const decline11 = (th2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th2_req: false,
      doc_th2_bkd: false,
      thur_2_patient_email: "",
      doc_th2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", th2_patient_id), {
      thu_2_name: "",
      thu_2_date: "",
      thu_2_email: "",
      thu_2_id: "",
    });
  };

  const decline12 = (th3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th3_req: false,
      doc_th3_bkd: false,
      thur_3_patient_email: "",
      doc_th3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", th3_patient_id), {
      thu_3_name: "",
      thu_3_date: "",
      thu_3_email: "",
      thu_3_id: "",
    });
  };

  const decline13 = (fr1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f1_req: false,
      doc_f1_bkd: false,
      fri_1_patient_email: "",
      doc_f1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", fr1_patient_id), {
      fri_1_name: "",
      fri_1_date: "",
      fri_1_email: "",
      fri_1_id: "",
    });
  };

  const decline14 = (fr2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f2_req: false,
      doc_f2_bkd: false,
      fri_2_patient_email: "",
      doc_f2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", fr2_patient_id), {
      fri_2_name: "",
      fri_2_date: "",
      fri_2_email: "",
      fri_2_id: "",
    });
  };

  const decline15 = (fr3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f3_req: false,
      doc_f3_bkd: false,
      fri_3_patient_email: "",
      doc_f3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", fr3_patient_id), {
      fri_3_name: "",
      fri_3_date: "",
      fri_3_email: "",
      fri_3_id: "",
    });
  };

  const decline16 = (sa1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa1_req: false,
      doc_sa1_bkd: false,
      sat_1_patient_email: "",
      doc_sa1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", sa1_patient_id), {
      sat_1_name: "",
      sat_1_date: "",
      sat_1_email: "",
      sat_1_id: "",
    });
  };

  const decline17 = (sa2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa2_req: false,
      doc_sa2_bkd: false,
      sat_2_patient_email: "",
      doc_sa2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", sa2_patient_id), {
      sat_2_name: "",
      sat_2_date: "",
      sat_2_email: "",
      sat_2_id: "",
    });
  };

  const decline18 = (sa3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa3_req: false,
      doc_sa3_bkd: false,
      sat_3_patient_email: "",
      doc_sa3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", sa3_patient_id), {
      sat_3_name: "",
      sat_3_date: "",
      sat_3_email: "",
      sat_3_id: "",
    });
  };

  const decline19 = (su1_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su1_req: false,
      doc_su1_bkd: false,
      sun_1_patient_email: "",
      doc_su1_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", su1_patient_id), {
      sun_1_name: "",
      sun_1_date: "",
      sun_1_email: "",
      sun_1_id: "",
    });
  };

  const decline20 = (su2_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su2_req: false,
      doc_su2_bkd: false,
      sun_2_patient_email: "",
      doc_su2_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", su2_patient_id), {
      sun_2_name: "",
      sun_2_date: "",
      sun_2_email: "",
      sun_2_id: "",
    });
  };

  const decline21 = (su3_patient_id) => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su3_req: false,
      doc_su3_bkd: false,
      sun_3_patient_email: "",
      doc_su3_prob: "",
    });
    updateDoc(doc(db, "gn_user_doc", su3_patient_id), {
      sun_3_name: "",
      sun_3_date: "",
      sun_3_email: "",
      sun_3_id: "",
    });
  };

  return (
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "DAMS" : "DAMS"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <Menu iconShape="square">
              <MenuItem icon={<FaUser />}>
                <Link to={"/profile_pg_dentist?email=" + email}>Profile</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/appointments?email=" + email}>Appointment</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendarCheck />}>Follow-Ups</MenuItem>
              <MenuItem icon={<FaStar />}>Reviews</MenuItem>
              <MenuItem icon={<FiSettings />}>
                <Link to={"/settings?email=" + email}>Settings</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/schedular?email=" + email}>scheduler</Link>
              </MenuItem>
              <button className="dashboard__btn" onClick={logout}>
                <MenuItem icon={<FiLogOut />}>
                  <button
                    className="dashboard__btn"
                    type="submit"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </MenuItem>
              </button>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      <div className="dsh_d_main_content">
        <div className="dsh_d_title">
          <h1>Welcome To DAMS</h1>
        </div>
        {info.map((doc) => (
          <table className="apg_main_table">
            <tr>
              <th className="apg_table_head_cont">DAY</th>
              <th className="apg_table_head_cont">DETAILS</th>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Monday</th>

              <td className="apg_table_cont">
                <div id="mon1_name"></div>
                <div id="mon1_time">TIME:&nbsp;{doc.doc_mon_1}</div>
                <div id="mon1_date"></div>
                <div id="mon1_email">{doc.mon_1_patient_email}</div>
                <button
                  id="mon1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept1()}
                >
                  ACCEPT
                </button>

                <br />
                <button
                  id="mon1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline1(doc.mon_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="mon2_name"></div>
                <div id="mon2_time">TIME:&nbsp;{doc.doc_mon_2}</div>
                <div id="mon2_email">{doc.mon_2_patient_email}</div>
                <button
                  id="mon2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept2()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="mon2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline2(doc.mon_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="mon3_name"></div>
                <div id="mon3_time">TIME:&nbsp;{doc.doc_mon_3}</div>
                <div id="mon3_email">{doc.mon_3_patient_email}</div>
                <button
                  id="mon3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept3()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="mon3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline3(doc.mon_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Tuesday</th>

              <td className="apg_table_cont">
                <div id="tue1_name"></div>
                <div id="tue1_time">TIME:&nbsp;{doc.doc_tue_1}</div>
                <div id="tue1_email">{doc.tue_1_patient_email}</div>
                <button
                  id="tue1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept4()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="tue1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline4(doc.tue_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="tue2_name"></div>
                <div id="tue2_time">TIME:&nbsp;{doc.doc_tue_2}</div>
                <div id="tue2_email">{doc.tue_2_patient_email}</div>
                <button
                  id="tue2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept5()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="tue2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline5(doc.tue_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="tue3_name"></div>
                <div id="tue3_time">TIME:&nbsp;{doc.doc_tue_3}</div>
                <div id="tue3_email">{doc.tue_3_patient_email}</div>
                <button
                  id="tue3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept6()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="tue3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline6(doc.tue_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Wednesday</th>

              <td className="apg_table_cont">
                <div id="wed1_name"></div>
                <div id="wed1_time">TIME:&nbsp;{doc.doc_wed_1}</div>
                <div id="wed1_email">{doc.wed_1_patient_email}</div>
                <button
                  id="wed1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept7()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="wed1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline7(doc.wed_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="wed2_name"></div>
                <div id="wed2_time">TIME:&nbsp;{doc.doc_wed_2}</div>
                <div id="wed2_email">{doc.wed_2_patient_email}</div>
                <button
                  id="wed2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept8()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="wed2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline8(doc.wed_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="wed3_name"></div>
                <div id="wed3_time">TIME:&nbsp;{doc.doc_wed_3}</div>
                <div id="wed3_email">{doc.wed_3_patient_email}</div>
                <button
                  id="wed3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept9()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="wed3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline9(doc.wed_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Thursday</th>

              <td className="apg_table_cont">
                <div id="thu1_name"></div>
                <div id="thu1_time">TIME:&nbsp;{doc.doc_thu_1}</div>
                <div id="thu1_email">{doc.thur_1_patient_email}</div>
                <button
                  id="thu1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept10()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="thu1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline10(doc.thur_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="thu2_name"></div>
                <div id="thu2_time">TIME:&nbsp;{doc.doc_thu_2}</div>
                <div id="thu2_email">{doc.thur_2_patient_email}</div>
                <button
                  id="thu2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept10()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="thu2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline10(doc.thur_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="thu3_name"></div>
                <div id="thu3_time">TIME:&nbsp;{doc.doc_thu_3}</div>
                <div id="thu3_email">{doc.thur_3_patient_email}</div>
                <button
                  id="thu3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept11()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="thu3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline11(doc.thur_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Friday</th>

              <td className="apg_table_cont">
                <div id="fri1_name"></div>
                <div id="fri1_time">TIME:&nbsp;{doc.doc_fri_1}</div>
                <div id="fri1_email">{doc.fri_1_patient_email}</div>
                <button
                  id="fri1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept12()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="fri1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline13(doc.fri_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="fri2_name"></div>
                <div id="fri2_time">TIME:&nbsp;{doc.doc_fri_2}</div>
                <div id="fri2_email">{doc.fri_2_patient_email}</div>
                <button
                  id="fri2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept14()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="fri2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline14(doc.fri_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="fri3_name"></div>
                <div id="fri3_time">TIME:&nbsp;{doc.doc_fri_3}</div>
                <div id="fri3_email">{doc.fri_3_patient_email}</div>
                <button
                  id="fri3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept15()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="fri3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline15(doc.fri_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Saturday</th>

              <td className="apg_table_cont">
                <div id="sat1_name"></div>
                <div id="sat1_time">TIME:&nbsp;{doc.doc_sat_1}</div>
                <div id="sat1_email">{doc.sat_1_patient_email}</div>
                <button
                  id="sat1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept16()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sat1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline16(doc.sat_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="sat2_name"></div>
                <div id="sat2_time">TIME:&nbsp;{doc.doc_sat_2}</div>
                <div id="sat2_email">{doc.sat_2_patient_email}</div>
                <button
                  id="sat2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept17()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sat2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline17(doc.sat_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="sat3_name"></div>
                <div id="sat3_time">TIME:&nbsp;{doc.doc_sat_3}</div>
                <div id="sat3_email">{doc.sat_3_patient_email}</div>
                <button
                  id="sat3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept18()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sat3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline18(doc.sat_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>

            <tr className="apg_row">
              <th className="apg_table_head_cont">Sunday</th>

              <td className="apg_table_cont">
                <div id="sun1_name"></div>
                <div id="sun1_time">TIME:&nbsp;{doc.doc_sun_1}</div>
                <div id="sun1_email">{doc.sun_1_patient_email}</div>
                <button
                  id="sun1c"
                  className="apg_d_btn_acc"
                  onClick={() => accept19()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sun1c"
                  className="apg_d_btn_dec"
                  onClick={() => decline19(doc.sun_1_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="sun2_name"></div>
                <div id="sun2_time">TIME:&nbsp;{doc.doc_sun_2}</div>
                <div id="sun2_email">{doc.sun_2_patient_email}</div>
                <button
                  id="sun2c"
                  className="apg_d_btn_acc"
                  onClick={() => accept20()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sun2c"
                  className="apg_d_btn_dec"
                  onClick={() => decline20(doc.sun_2_patient_id)}
                >
                  DECLINE
                </button>
              </td>

              <td className="apg_table_cont">
                <div id="sun3_name"></div>
                <div id="sun3_time">TIME:&nbsp;{doc.doc_sun_3}</div>
                <div id="sun3_email">{doc.sun_3_patient_email}</div>
                <button
                  id="sun3c"
                  className="apg_d_btn_acc"
                  onClick={() => accept21()}
                >
                  ACCEPT
                </button>
                <br />

                <button
                  id="sun3c"
                  className="apg_d_btn_dec"
                  onClick={() => decline21(doc.sun_3_patient_id)}
                >
                  DECLINE
                </button>
              </td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Dashboard_dentist;
