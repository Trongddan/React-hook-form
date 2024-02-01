import React from "react";
import { useFormContext } from "react-hook-form";
const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="card border-0 mb-4">
        <div className="card-header">Address Form</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your City"
              {...register("city")}
              name="city"
            />
            {errors?.["city"] && (
              <p style={{ color: "red" }}>{errors?.["city"]?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Zipcode"
              {...register("zipcode")}
              name="zipcode"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Village"
              {...register("village")}
              name="village"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressForm;
