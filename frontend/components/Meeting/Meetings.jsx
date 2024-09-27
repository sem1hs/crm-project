"use client";
import Loader from "@/components/Loader/Loader";
import useGetAllMeetings from "@/hooks/useGetAllMeetings";
import MeetingCard from "@/components/Meeting/MeetingCard";

const Meetings = () => {
  const { data: meetings, isLoading } = useGetAllMeetings();

  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">
          Gelecek Toplantılar
        </h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Gelecek toplantılar bölümü, yaklaşan tüm toplantılarınızı ve
          görüşmelerinizi düzenli bir şekilde takip etmenizi sağlar. Tarih, saat
          ve katılımcı bilgilerine hızlıca ulaşarak planlamalarınızı daha
          verimli yapabilir, hiçbir detayı kaçırmadan toplantılarınızı zamanında
          gerçekleştirebilirsiniz.
        </p>

        <ul className="mt-12 grid grid-cols-3 gap-4">
          {isLoading && <Loader />}
          {!isLoading &&
            meetings?.map((meeting, i) => (
              <MeetingCard key={i} info={meeting} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Meetings;
