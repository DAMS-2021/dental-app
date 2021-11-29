// import React from "react";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app, db, auth } from "./firebase1";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import "./appointments_gen.css";

function Appointmentsgen() {
  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);
  const q = query(
    collection(db, "gn_user_doc"),
    where("gn_user_doc_mail", "==", email)
  );

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const c_mon_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_1_name: "",
      mon_1_email: "",
      mon_1_date: "",
      mon_1_time: "",
    });

    var m1_id = document.getElementById("mon1_id").textContent;
    console.log(m1_id);
    updateDoc(doc(db, "doc", m1_id), {
      doc_m1_prob: "",
      doc_m1_bkd: false,
      doc_m1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_mon_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_2_name: "",
      mon_2_email: "",
      mon_2_date: "",
      mon_2_time: "",
    });
    var m2_id = document.getElementById("mon2_id").textContent;
    console.log(m2_id);
    updateDoc(doc(db, "doc", m2_id), {
      doc_m2_prob: "",
      doc_m2_bkd: false,
      doc_m2_req: false
    });
    alert("your appointment has been cancelled successfully");
  };

  const c_mon_3 = () => {
    console.log();
    var user = auth.currentUser.uid;
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_3_name: "",
      mon_3_email: "",
      mon_3_date: "",
      mon_3_time: "",
    });
    var m3_id = document.getElementById("mon3_id").textContent;
    updateDoc(doc(db, "doc", m3_id), {
      doc_m3_prob: "",
      doc_m3_bkd: false,
      doc_m3_req: false
    });
    alert("your appointment has been cancelled successfully");
  };

  const c_tue_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_1_name: "",
      tue_1_email: "",
      tue_1_date: "",
      tue_1_time: "",
    });
    var tue1_id = document.getElementById("tue1_id").textContent;
    updateDoc(doc(db, "doc", tue1_id), {
      doc_tu1_prob: "",
      doc_tu1_bkd: false,
      doc_tu1_req: false
    });
    alert("your appointment has been cancelled successfully");
  };

  const c_tue_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_2_name: "",
      tue_2_email: "",
      tue_2_date: "",
      tue_2_time: "",
    });

    var tue2_id = document.getElementById("tue2_id").textContent;
    updateDoc(doc(db, "doc", tue2_id), {
      doc_tu2_prob: "",
      doc_tu2_bkd: false,
      doc_tu2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_tue_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_3_name: "",
      tue_3_email: "",
      tue_3_date: "",
      tue_3_time: "",
    });

    var tue3_id = document.getElementById("tue3_id").textContent;
    updateDoc(doc(db, "doc", tue3_id), {
      doc_tu3_prob: "",
      doc_tu3_bkd: false,
      doc_tu3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_wed_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_1_name: "",
      wed_1_email: "",
      wed_1_date: "",
      wed_1_time: "",
    });

    var wed1_id = document.getElementById("wed1_id").textContent;
    updateDoc(doc(db, "doc", wed1_id), {
      doc_w1_prob: "",
      doc_w1_bkd: false,
      doc_w1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_wed_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_2_name: "",
      wed_2_email: "",
      wed_2_date: "",
      wed_2_time: "",
    });

    var wed2_id = document.getElementById("wed2_id").textContent;
    updateDoc(doc(db, "doc", wed2_id), {
      doc_w2_prob: "",
      doc_w2_bkd: false,
      doc_w2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_wed_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_3_name: "",
      wed_3_email: "",
      wed_3_date: "",
      wed_3_time: "",
    });

    var wed3_id = document.getElementById("wed3_id").textContent;
    updateDoc(doc(db, "doc", wed3_id), {
      doc_w3_prob: "",
      doc_w3_bkd: false,
      doc_w3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_thu_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_1_name: "",
      thu_1_email: "",
      thu_1_date: "",
      thu_1_time: "",
    });

    var thu1_id = document.getElementById("thu1_id").textContent;
    updateDoc(doc(db, "doc", thu1_id), {
      doc_th1_prob: "",
      doc_th1_bkd: false,
      doc_th1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_thu_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_2_name: "",
      thu_2_email: "",
      thu_2_date: "",
      thu_2_time: "",
    });

    var thu2_id = document.getElementById("thu2_id").textContent;
    updateDoc(doc(db, "doc", thu2_id), {
      doc_th2_prob: "",
      doc_th2_bkd: false,
      doc_th2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_thu_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_3_name: "",
      thu_3_email: "",
      thu_3_date: "",
      thu_3_time: "",
    });

    var thu3_id = document.getElementById("thu3_id").textContent;
    updateDoc(doc(db, "doc", thu3_id), {
      doc_th3_prob: "",
      doc_th3_bkd: false,
      doc_th3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_fri_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_1_name: "",
      fri_1_email: "",
      fri_1_date: "",
      fri_1_time: "",
    });

    var fri1_id = document.getElementById("fri1_id").textContent;
    updateDoc(doc(db, "doc", fri1_id), {
      doc_f1_prob: "",
      doc_f1_bkd: false,
      doc_f1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_fri_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_2_name: "",
      fri_2_email: "",
      fri_2_date: "",
      fri_2_time: "",
    });

    var fri2_id = document.getElementById("fri2_id").textContent;
    updateDoc(doc(db, "doc", fri2_id), {
      doc_f2_prob: "",
      doc_f2_bkd: false,
      doc_f2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_fri_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_3_name: "",
      fri_3_email: "",
      fri_3_date: "",
      fri_3_time: "",
    });

    var fri3_id = document.getElementById("fri3_id").textContent;
    updateDoc(doc(db, "doc", fri3_id), {
      doc_f3_prob: "",
      doc_f3_bkd: false,
      doc_f3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sat_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_1_name: "",
      sat_1_email: "",
      sat_1_date: "",
      sat_1_time: "",
    });

    var sat1_id = document.getElementById("sat1_id").textContent;
    updateDoc(doc(db, "doc", sat1_id), {
      doc_sa1_prob: "",
      doc_sa1_bkd: false,
      doc_sa1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sat_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_2_name: "",
      sat_2_email: "",
      sat_2_date: "",
      sat_2_time: "",
    });

    var sat2_id = document.getElementById("sat2_id").textContent;
    updateDoc(doc(db, "doc", sat2_id), {
      doc_sa2_prob: "",
      doc_sa2_bkd: false,
      doc_sa2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sat_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_3_name: "",
      sat_3_email: "",
      sat_3_date: "",
      sat_3_time: "",
    });

    var sat3_id = document.getElementById("sat3_id").textContent;
    updateDoc(doc(db, "doc", sat3_id), {
      doc_sa3_prob: "",
      doc_sa3_bkd: false,
      doc_sa3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sun_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_1_name: "",
      sun_1_email: "",
      sun_1_date: "",
      sun_1_time: "",
    });

    var sun1_id = document.getElementById("sun1_id").textContent;
    updateDoc(doc(db, "doc", sun1_id), {
      doc_su1_prob: "",
      doc_su1_bkd: false,
      doc_su1_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sun_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_2_name: "",
      sun_2_email: "",
      sun_2_date: "",
      sun_2_time: "",
    });

    var sun2_id = document.getElementById("sun2_id").textContent;
    updateDoc(doc(db, "doc", sun2_id), {
      doc_su2_prob: "",
      doc_su2_bkd: false,
      doc_su2_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  const c_sun_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_3_name: "",
      sun_3_email: "",
      sun_3_date: "",
      sun_3_time: "",
    });

    var sun3_id = document.getElementById("sun3_id").textContent;
    updateDoc(doc(db, "doc", sun3_id), {
      doc_su3_prob: "",
      doc_su3_bkd: false,
      doc_su3_req: false
    });

    alert("your appointment has been cancelled successfully");
  };

  return (
    <div className="apg_main">
      <h1 className="apg_title">SCHEDULE</h1>
      {info.map((doc) => (
        <table className="apg_main_table">
          <tr>
            <th className="apg_table_head_cont">DAY</th>
            <th className="apg_table_head_cont">DETAILS</th>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Monday</th>

            <td className="apg_table_cont">
              <div id="mon1_name">{doc.mon_1_name}</div>
              <div id="mon1_id" hidden>
                {doc.mon_1_id}
              </div>
              <div id="mon1_time">{doc.mon_1_time}</div>
              <div id="mon1_date">{doc.mon_1_date}</div>
              <div id="mon1_email">{doc.mon_1_email}</div>
              <button id="mon1c" className="apg_btn" onClick={() => c_mon_1()}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="mon2_name">{doc.mon_2_name}</div>
              <div id="mon2_id" hidden>
                {doc.mon_2_id}
              </div>
              <div id="mon2_time">{doc.mon_2_time}</div>
              <div id="mon2_date">{doc.mon_2_date}</div>
              <div id="mon2_email">{doc.mon_2_email}</div>
              <button id="mon2c" className="apg_btn" onClick={c_mon_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="mon3_name">{doc.mon_3_name}</div>
              <div id="mon3_id" hidden>
                {doc.mon_3_id}
              </div>
              <div id="mon3_time">{doc.mon_3_time}</div>
              <div id="mon3_date">{doc.mon_3_date}</div>
              <div id="mon3_email">{doc.mon_3_email}</div>
              <button
                id="mon3c"
                className="apg_btn"
                onClick={() => c_mon_3(doc.doc_id)}
              >
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Tuesday</th>

            <td className="apg_table_cont">
              <div id="tue1_name">{doc.tue_1_name}</div>
              <div id="tue1_id" hidden>
                {doc.tue_1_id}
              </div>
              <div id="tue1_time">{doc.tue_1_time}</div>
              <div id="tue1_date">{doc.tue_1_date}</div>
              <div id="tue1_email">{doc.tue_1_email}</div>
              <button id="tue1c" className="apg_btn" onClick={c_tue_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="tue2_name">{doc.tue_2_name}</div>
              <div id="tue2_id" hidden>
                {doc.tue_2_id}
              </div>
              <div id="tue2_time">{doc.tue_2_time}</div>
              <div id="tue2_date">{doc.tue_2_date}</div>
              <div id="tue2_email">{doc.tue_2_email}</div>
              <button id="tue2c" className="apg_btn" onClick={c_tue_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="tue3_name">{doc.tue_3_name}</div>
              <div id="tue3_id" hidden>
                {doc.tue_3_id}
              </div>
              <div id="tue3_time">{doc.tue_3_time}</div>
              <div id="tue3_date">{doc.tue_3_date}</div>
              <div id="tue3_email">{doc.tue_3_email}</div>
              <button id="tue3c" className="apg_btn" onClick={c_tue_3}>
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Wednesday</th>

            <td className="apg_table_cont">
              <div id="wed1_name">{doc.wed_1_name}</div>
              <div id="wed1_id" hidden>
                {doc.wed_1_id}
              </div>
              <div id="wed1_time">{doc.wed_1_time}</div>
              <div id="wed1_date">{doc.wed_1_date}</div>
              <div id="wed1_email">{doc.wed_1_email}</div>
              <button id="wed1c" className="apg_btn" onClick={c_wed_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="wed2_name">{doc.wed_2_name}</div>
              <div id="wed2_id" hidden>
                {doc.wed_2_id}
              </div>
              <div id="wed2_time">{doc.wed_2_time}</div>
              <div id="wed2_date">{doc.wed_2_date}</div>
              <div id="wed2_email">{doc.wed_2_email}</div>
              <button id="wed2c" className="apg_btn" onClick={c_wed_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="wed3_name">{doc.wed_3_name}</div>
              <div id="wed3_id" hidden>
                {doc.wed_3_id}
              </div>
              <div id="wed3_time">{doc.wed_3_time}</div>
              <div id="wed3_date">{doc.wed_3_date}</div>
              <div id="wed3_email">{doc.wed_3_email}</div>
              <button id="wed3c" className="apg_btn" onClick={c_wed_3}>
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Thursday</th>

            <td className="apg_table_cont">
              <div id="thu1_name">{doc.thu_1_name}</div>
              <div id="thu1_id" hidden>
                {doc.thu_1_id}
              </div>
              <div id="thu1_time">{doc.thu_1_time}</div>
              <div id="thu1_date">{doc.thu_1_date}</div>
              <div id="thu1_email">{doc.thu_1_email}</div>
              <button id="thu1c" className="apg_btn" onClick={c_thu_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="thu2_name">{doc.thu_2_name}</div>
              <div id="thu2_id" hidden>
                {doc.thu_2_id}
              </div>
              <div id="thu2_time">{doc.thu_2_time}</div>
              <div id="thu2_date">{doc.thu_2_date}</div>
              <div id="thu2_email">{doc.thu_2_email}</div>
              <button id="thu2c" className="apg_btn" onClick={c_thu_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="thu3_name">{doc.thu_3_name}</div>
              <div id="thu3_id" hidden>
                {doc.thu_3_id}
              </div>
              <div id="thu3_time">{doc.thu_3_time}</div>
              <div id="thu3_date">{doc.thu_3_date}</div>
              <div id="thu3_email">{doc.thu_3_email}</div>
              <button id="thu3c" className="apg_btn" onClick={c_thu_3}>
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Friday</th>

            <td className="apg_table_cont">
              <div id="fri1_name">{doc.fri_1_name}</div>
              <div id="fri1_id" hidden>
                {doc.fri_1_id}
              </div>
              <div id="fri1_time">{doc.fri_1_time}</div>
              <div id="fri1_date">{doc.fri_1_date}</div>
              <div id="fri1_email">{doc.fri_1_email}</div>
              <button id="fri1c" className="apg_btn" onClick={c_fri_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="fri2_name">{doc.fri_2_name}</div>
              <div id="fri2_id" hidden>
                {doc.fri_2_id}
              </div>
              <div id="fri2_time">{doc.fri_2_time}</div>
              <div id="fri2_date">{doc.fri_2_date}</div>
              <div id="fri2_email">{doc.fri_2_email}</div>
              <button id="fri2c" className="apg_btn" onClick={c_fri_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="fri3_name">{doc.fri_3_name}</div>
              <div id="fri3_id" hidden>
                {doc.fri_3_id}
              </div>
              <div id="fri3_time">{doc.fri_3_time}</div>
              <div id="fri3_date">{doc.fri_3_date}</div>
              <div id="fri3_email">{doc.fri_3_email}</div>
              <button id="fri3c" className="apg_btn" onClick={c_fri_3}>
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Saturday</th>

            <td className="apg_table_cont">
              <div id="sat1_name">{doc.sat_1_name}</div>
              <div id="sat1_id" hidden>
                {doc.sat_1_id}
              </div>
              <div id="sat1_time">{doc.sat_1_time}</div>
              <div id="sat1_date">{doc.sat_1_date}</div>
              <div id="sat1_email">{doc.sat_1_email}</div>
              <button id="sat1c" className="apg_btn" onClick={c_sat_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sat2_name">{doc.sat_2_name}</div>
              <div id="sat2_id" hidden>
                {doc.sat_2_id}
              </div>
              <div id="sat2_time">{doc.sat_2_time}</div>
              <div id="sat2_date">{doc.sat_2_date}</div>
              <div id="sat2_email">{doc.sat_2_email}</div>
              <button id="sat2c" className="apg_btn" onClick={c_sat_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sat3_name">{doc.sat_3_name}</div>
              <div id="sat3_id" hidden>
                {doc.sat_3_id}
              </div>
              <div id="sat3_time">{doc.sat_3_time}</div>
              <div id="sat3_date">{doc.sat_3_date}</div>
              <div id="sat3_email">{doc.sat_3_email}</div>
              <button id="sat3c" className="apg_btn" onClick={c_sat_3}>
                CANCEL
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Sunday</th>

            <td className="apg_table_cont">
              <div id="sun1_name">{doc.sun_1_name}</div>
              <div id="sun1_id" hidden>
                {doc.sun_1_id}
              </div>
              <div id="sun1_time">{doc.sun_1_time}</div>
              <div id="sun1_date">{doc.sun_1_date}</div>
              <div id="sun1_email">{doc.sun_1_email}</div>
              <button id="sun1c" className="apg_btn" onClick={c_sun_1}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sun2_name">{doc.sun_2_name}</div>
              <div id="sun2_id" hidden>
                {doc.sun_2_id}
              </div>
              <div id="sun2_time">{doc.sun_2_time}</div>
              <div id="sun2_date">{doc.sun_2_date}</div>
              <div id="sun2_email">{doc.sun_2_email}</div>
              <button id="sun2c" className="apg_btn" onClick={c_sun_2}>
                CANCEL
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sun3_name">{doc.sun_3_name}</div>
              <div id="sun3_id" hidden>
                {doc.sun_3_id}
              </div>
              <div id="sun3_time">{doc.sun_3_time}</div>
              <div id="sun3_date">{doc.sun_3_date}</div>
              <div id="sun3_email">{doc.sun_3_email}</div>
              <button id="sun3c" className="apg_btn" onClick={c_sun_3}>
                CANCEL
              </button>
            </td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Appointmentsgen;
