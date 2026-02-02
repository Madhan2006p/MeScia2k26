import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  const wrapperRef = useRef(null);
  const pathsRef = useRef([]);

  const scheduleItems = [
    { title: "Inaugural", desc: "Opening Ceremony", tag: "CEREMONY", time: "09:00 AM – 09:45 AM" },
    { title: "Project Pitch", desc: "Project Presentation", tag: "EVENT", time: "09:45 AM – 11:30 AM" },
    { title: "Paper Parade", desc: "Paper Presentation", tag: "EVENT", time: "09:45 AM – 11:30 AM" },
    { title: "Tech Clash", desc: "Technical Debate", tag: "TECH", time: "11:30 AM – 12:00 PM" },
    { title: "Marketing Insights", desc: "Marketing Event", tag: "EVENT", time: "11:30 AM – 12:30 PM" },
    { title: "Code Combat", desc: "Coding Competition", tag: "EVENT", time: "12:00 PM – 12:30 PM" },
    { title: "Lunch", desc: "Refreshments", tag: "BREAK", time: "12:30 PM – 01:30 PM" },
    { title: "IPL Auction", desc: "Bidding War", tag: "EVENT", time: "01:50 PM – 03:20 PM" },
    { title: "Chaos Carnival", desc: "Fun Event", tag: "FUN", time: "01:50 PM – 02:30 PM" },
    { title: "Esports", desc: "Gaming Tournament", tag: "GAME", time: "02:30 PM – 03:15 PM" },
    { title: "Valedictory", desc: "Prize Distribution", tag: "CEREMONY", time: "03:30 PM – 04:30 PM" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /* =========================
         DRAW / RETRACT ALL LINES
      ========================= */
      let progress = (windowHeight - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));

      pathsRef.current.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length - length * progress;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zigzag path calculation based on number of items
  // Each item should roughly correspond to one curve segment (240 units high)
  const pathData1 = `M50 0 
    Q20 120 50 240
    Q80 360 50 480
    Q20 600 50 720
    Q80 840 50 960
    Q20 1080 50 1200
    Q80 1320 50 1440
    Q20 1560 50 1680
    Q80 1800 50 1920
    Q20 2040 50 2160
    Q80 2280 50 2400
    Q20 2520 50 2640
    Q80 2760 50 2880`;

  const pathData2 = `M48 0 
    Q18 120 48 240
    Q78 360 48 480
    Q18 600 48 720
    Q78 840 48 960
    Q18 1080 48 1200
    Q78 1320 48 1440
    Q18 1560 48 1680
    Q78 1800 48 1920
    Q18 2040 48 2160
    Q78 2280 48 2400
    Q18 2520 48 2640
    Q78 2760 48 2880`;

  const pathData3 = `M52 0 
    Q22 120 52 240
    Q82 360 52 480
    Q22 600 52 720
    Q82 840 52 960
    Q22 1080 52 1200
    Q82 1320 52 1440
    Q22 1560 52 1680
    Q82 1800 52 1920
    Q22 2040 52 2160
    Q82 2280 52 2400
    Q22 2520 52 2640
    Q82 2760 52 2880`;

  return (
    <section className="zigzag-timeline-section" id="schedule">
      <h2 className="zigzag-title">Result & Schedule</h2>
      <p className="zigzag-sub">Plan your day at the symposium</p>

      <div className="zigzag-wrapper" ref={wrapperRef}>
        {/* SVG LINE (BEHIND) */}
        <div className="zigzag-lines">
          {/* DEFINITIONS (ARROW MARKER) - Color changed to ff6700 */}
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <marker
                id="arrow-down"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#ff6700" />
              </marker>
            </defs>
          </svg>

          {/* LINE 1 */}
          <svg viewBox="0 0 100 2880" preserveAspectRatio="none">
            <path
              ref={(el) => (pathsRef.current[0] = el)}
              d={pathData1}
              className="zigzag-path line-1"
              markerMid="url(#arrow-down)"
            />
          </svg>

          {/* LINE 2 */}
          <svg viewBox="0 0 100 2880" preserveAspectRatio="none">
            <path
              ref={(el) => (pathsRef.current[1] = el)}
              d={pathData2}
              className="zigzag-path line-2"
              markerMid="url(#arrow-down)"
            />
          </svg>

          {/* LINE 3 */}
          <svg viewBox="0 0 100 2880" preserveAspectRatio="none">
            <path
              ref={(el) => (pathsRef.current[2] = el)}
              d={pathData3}
              className="zigzag-path line-3"
              markerMid="url(#arrow-down)"
            />
          </svg>
        </div>

        {/* ITEMS */}
        {scheduleItems.map((item, index) => (
          <motion.div
            className="zigzag-item"
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="zigzag-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.tag}</span>
              <div className="time">{item.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
