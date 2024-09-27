import React, { memo, useEffect } from "react";
import { formatTime } from "@/lib/formatTime";
import useGetMeetingDetails from "@/hooks/useGetMeetingDetails";
import { formatDate } from "@/lib/formatDate";

const MeetingCard = ({ info }) => {
  const meetingId = info.id;
  const { fetchMeeting, data: employees } = useGetMeetingDetails();
  useEffect(() => {
    fetchMeeting(meetingId);
  }, [fetchMeeting, meetingId]);

  return (
    <li className="px-6 py-8 bg-secondaryBg rounded-lg flex flex-col gap-2">
      <h3 className="font-semibold text-white">Toplantı Adı : {info.name}</h3>
      <p className="text-white font-light text-base">
        Toplantı Tarihi : {formatDate(info.meetingDate)}
      </p>
      <p className="text-white font-light text-base">
        Başlangıç Saati : {formatTime(info.startTime)}
      </p>
      <p className="text-white font-light text-base">
        Bitiş Saati : {formatTime(info.endTime)}
      </p>
      <p className="text-white font-light text-base">
        Proje : {info.projectname}
      </p>
      <span className="text-gray-200 font-light">
        Müşteri : {info.customername}
      </span>
      <p className="text-gray-200 font-light flex flex-row gap-2">
        İlgilenen :
        {employees?.map((employee, i) => (
          <span key={i}>{employee.employeename}</span>
        ))}
      </p>
    </li>
  );
};

export default memo(MeetingCard);
