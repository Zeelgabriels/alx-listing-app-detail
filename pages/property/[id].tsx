import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
  
  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Main Property Content */}
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          
          {/* Reviews Section - Below property details */}
          <div className="mt-12">
            <ReviewSection reviews={property.reviews || []} />
          </div>
        </div>

        {/* Right Column - Booking Section (Sidebar) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}