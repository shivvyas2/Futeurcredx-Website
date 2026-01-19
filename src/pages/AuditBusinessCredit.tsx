import { motion } from "framer-motion";
import QRCodeModal from "@/components/QrCode";

export default function AuditBusinessCredit() {
  return (
    <main>
      {/* Standalone audit page to visually verify the Business Credit Visibility phone frames */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35]/10 via-[#FF9500]/5 to-[#4F7CFF]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Audit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Business Credit Visibility
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Visual QA page: verify phone frames and sizing.
            </p>
          </motion.div>

          <div className="relative flex items-end justify-center gap-4 md:gap-6 h-[500px] md:h-[580px]">
            {/* Phone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block relative -ml-16"
            >
              <img
                src="/mobile/dun.png"
                alt="D&B PAYDEX Score"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="hidden md:block relative"
            >
              <img
                src="/mobile/wells-smb.png"
                alt="Wells Fargo Business Credit"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 3 - CENTER with device frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 -mt-8"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#4F7CFF]/30 rounded-full blur-3xl"></div>
              <div className="relative bg-[#1C1C1E] rounded-[3rem] p-3 w-60 md:w-64 shadow-2xl shadow-black/30">
                <div className="bg-white rounded-[2.5rem] h-[480px] md:h-[520px] overflow-hidden">
                  <img
                    src="/mobile/futeurcredx-app-screen.png"
                    alt="FuteurCredX App"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phone 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="hidden md:block relative"
            >
              <img
                src="/mobile/chase-smb.png"
                alt="Chase Business Credit"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 5 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative -mr-16"
            >
              <img
                src="/mobile/citi-smb.png"
                alt="Citi Business Credit"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <QRCodeModal
              buttonText="Get the App Free"
              buttonClassName="bg-gradient-to-r from-[#FF6B35] to-[#FF9500] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 hover:shadow-lg hover:shadow-orange-500/25 transition-all text-lg"
              title="GET FUTEURCREDX APP"
              showIcon={true}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
