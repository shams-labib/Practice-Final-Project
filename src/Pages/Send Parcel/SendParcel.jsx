import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Firebase/useaAuth/useAuth";

const SendParcel = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Send Parcel</h1>
      <form className="mt-8 p-4" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex gap-8 items-center">
          <label>
            <input
              type="radio"
              value={"document"}
              {...register("parcelType")}
              className="radio mr-2 radio-neutral"
              defaultChecked
            />
            Document
          </label>
          <label>
            <input
              type="radio"
              value={"non-document"}
              {...register("parcelType")}
              className="radio mr-2 radio-neutral"
            />
            Non-Document
          </label>
        </div>

        {/* parcel name and info */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label class="label font-semibold text-[14px]">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              class="input outline-none w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label class="label font-semibold text-[14px]">
              {" "}
              Parcel Weight (KG)
            </label>
            <input
              type="text"
              {...register("parcelWeight")}
              class="input outline-none w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>

        {/* two column section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sender Info */}
          <fieldset className="fieldset space-y-1">
            <h4 className="text-xl font-bold mb-8">Sender Details</h4>
            {/* Sender Name */}
            <label className="label font-semibold text-[14px]">
              Sender Name
            </label>
            <input
              {...register("senderName")}
              type="text"
              defaultValue={user?.displayName}
              className="input outline-none w-full"
              placeholder="Sender Name"
            />
            {/* sender Email */}
            <label className="label font-semibold text-[14px]">
              Sender Email
            </label>
            <input
              {...register("senderEmail")}
              defaultValue={user?.email}
              type="text"
              className="input outline-none w-full"
              placeholder="Sender Email"
            />

            {/* Sender region */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="default"
                className="select"
              >
                <option value="default" disabled>
                  Pick a Region
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="rajshahi">Rajshahi</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* Sender district */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="default"
                className="select"
              >
                <option value="default" disabled>
                  Pick a district
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="gazipur">Gazipur</option>
              </select>

              <span className="label">Optional</span>
            </fieldset>

            {/* Address */}
            <label className="label font-semibold text-[14px] mt-4">
              Sender Address
            </label>
            <input
              {...register("senderAddress")}
              type="text"
              className="input outline-none w-full"
              placeholder="Sender Address"
            />

            {/* textarea */}
            <legend className="fieldset-legend">Pickup Instruction</legend>
            <textarea
              {...register("senderTextarea")}
              className="textarea h-24 outline-none w-full"
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>
          {/* Receiver Info */}
          <fieldset className="fieldset space-y-1">
            <h4 className="text-xl font-bold mb-8">Receiver Details</h4>
            {/* Receiver Name */}
            <label className="label font-semibold text-[14px]">
              Receiver Name
            </label>
            <input
              {...register("receiverName")}
              type="text"
              className="input outline-none w-full"
              placeholder="Receiver Name"
            />
            {/* Receiver Email */}
            <label className="label font-semibold text-[14px]">
              Receiver Email
            </label>
            <input
              {...register("receiverEmail")}
              type="text"
              className="input outline-none w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver region */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="default"
                className="select"
              >
                <option value="default" disabled>
                  Pick a Region
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="rajshahi">Rajshahi</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* Receiver district */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="default"
                className="select"
              >
                <option value="default" disabled>
                  Pick a district
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="gazipur">Gazipur</option>
              </select>

              <span className="label">Optional</span>
            </fieldset>

            {/* Address */}
            <label className="label font-semibold text-[14px] mt-4">
              Receiver Address
            </label>
            <input
              {...register("receiverAddress")}
              type="text"
              className="input outline-none w-full"
              placeholder="Receiver Address"
            />

            {/* textarea */}
            <legend className="fieldset-legend">Pickup Instruction</legend>
            <textarea
              {...register("receiverTextarea")}
              className="textarea h-24 outline-none w-full"
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn text-black bg-primary"
          value={"Proceed to confirm parcel"}
        />
      </form>
    </div>
  );
};

export default SendParcel;
