import deliver2 from "../../assets/deliver2.png";
export default function FeaturesSection() {
  return (
    <section className="bg-[#FFF5EB] min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <img
              src={deliver2}
              alt="Delivery person riding rocket"
              // eslint-disable-next-line react/no-unknown-property
              fill
              className="object-contain"
              // eslint-disable-next-line react/no-unknown-property
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] leading-tight">
                We deliver our products as fast as superman can do
              </h2>
              <p className="text-gray-600 text-lg">
                Pick one of our stock themes, or create your custom theme with
                the most advanced theme editor on any online survey building
                tool.
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="text-6xl font-light text-gray-200">01</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Easy to use application
                  </h3>
                  <p className="text-gray-600">
                    We are driven beyond just finishing the projects. We want to
                    find solutions using our website & apps.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="text-6xl font-light text-gray-200">02</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    Deliver Food within 30 min
                  </h3>
                  <p className="text-gray-600">
                    We are driven beyond just finishing the projects. We want to
                    find solutions using our website & apps.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="text-6xl font-light text-gray-200">03</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#0A2540]">
                    100% Reliable with Privacy
                  </h3>
                  <p className="text-gray-600">
                    We are driven beyond just finishing the projects. We want to
                    find solutions using our website & apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
