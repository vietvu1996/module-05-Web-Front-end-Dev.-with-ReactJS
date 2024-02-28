import "./App.css";
import React, { useState } from "react";
import { Formik } from "formik";

export default function App() {
  const REGEX = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
  };

  const SEX_LIST = [
    {
      label: "Nam",
      value: "male",
    },
    {
      label: "Nữ",
      value: "female",
    },
  ];

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? !form[event.target.name]
        : event.target.value;

    setForm({ ...form, [event.target.name]: value });
  };

  const handleValidate = () => {
    const errors = {};

    if (
      !form.name &&
      !form.passport &&
      !form.nationality &&
      !form.province &&
      !form.ward &&
      !form.district &&
      !form.address &&
      !form.phone &&
      !form.yearsBorn
    ) {
      errors.name = "Required";
      errors.passport = "Required";
      errors.nationality = "Required";
      errors.province = "Required";
      errors.ward = "Required";
      errors.district = "Required";
      errors.address = "Required";
      errors.phone = "Required";
      errors.yearsBorn = "Required";
    }

    if (form.yearsBorn <= 1900) {
      errors.yearsBorn = "Năm sinh phải lớn hơn 1900";
    }

    if (!form.email) {
      errors.email = "Required";
    } else if (form.email && !REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <>
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.name ? "custom-input-error" : ""
              }`}
            >
              <label>Họ tên</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.name}</p>
            </div>

            <div
              className={`custom-input ${
                errors.passport ? "custom-input-error" : ""
              }`}
            >
              <label>Sổ hộ chiếu/ CMND</label>
              <input
                type="text"
                name="passport"
                value={form.passport || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.passport}</p>
            </div>

            <div
              className={`custom-input ${
                errors.yearsBorn ? "custom-input-error" : ""
              }`}
            >
              <label>Năm sinh</label>
              <input
                type="text"
                name="yearsBorn"
                value={form.yearsBorn || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.yearsBorn}</p>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <label>Giới tính</label>
              {SEX_LIST.map((gender, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`gender-${index}`}
                    name="gender"
                    value={gender.value}
                    onChange={handleChange}
                  />
                  <label htmlFor={`gender-${index}`}>{gender.label}</label>
                </div>
              ))}
            </div>

            <div
              className={`custom-input ${
                errors.nationality ? "custom-input-error" : ""
              }`}
            >
              <label>Quốc tịch</label>
              <input
                type="text"
                name="nationality"
                value={form.nationality || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.nationality}</p>
            </div>

            <div>
              <label>Công ty làm việc</label>
              <input type="text" onChange={handleChange} />
            </div>

            <div>
              <label>Bộ phận làm việc</label>
              <input type="text" onChange={handleChange} />
            </div>

            <div>
              <label>Có thẻ bảo hiểm y tế</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <h2>Địa chỉ liên lạc tại Việt Nam</h2>

            <div
              className={`custom-input ${
                errors.province ? "custom-input-error" : ""
              }`}
            >
              <label>Tỉnh thành</label>
              <input
                type="text"
                name="province"
                value={form.province || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.province}</p>
            </div>

            <div
              className={`custom-input ${
                errors.district ? "custom-input-error" : ""
              }`}
            >
              <label>Quận/ huyện</label>
              <input
                type="text"
                name="district"
                value={form.district || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.district}</p>
            </div>

            <div
              className={`custom-input ${
                errors.ward ? "custom-input-error" : ""
              }`}
            >
              <label>Phường/ xã</label>
              <input
                type="text"
                name="ward"
                value={form.ward || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.ward}</p>
            </div>

            <div
              className={`custom-input ${
                errors.address ? "custom-input-error" : ""
              }`}
            >
              <label>Số nhà, phố, tổ dân phố/ thôn/ đội</label>
              <input
                type="text"
                name="address"
                value={form.address || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.address}</p>
            </div>

            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label>Điện thoại</label>
              <input
                type="text"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.phone}</p>
            </div>

            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.email}</p>
            </div>

            <div>
              <h2>
                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ
                (Có thể đi qua nhiều quốc gia)
              </h2>
              <textarea></textarea>
            </div>

            <div>
              <h2>
                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào
                sau đây không{" "}
              </h2>
            </div>

            <div>
              <label>Sốt</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <label>Ho</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <label>Khó thở</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <label>Viêm phổi</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <label>Đau họng</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <label>Mệt mỏi</label>
              <input className="flex" type="checkbox" onChange={handleChange} />
            </div>

            <div>
              <h2>
                Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với ai không?{" "}
              </h2>

              <div>
                <label>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                <input
                  className="flex"
                  type="checkbox"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Người từ nước có bệnh COVID-19</label>
                <input
                  className="flex"
                  type="checkbox"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                <input
                  className="flex"
                  type="checkbox"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
}
