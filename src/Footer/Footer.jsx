
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
            <div className="grid justify-center place-items-center gap-4">
                <img src="/public/images/crystal-cure-final-logo.png" alt="Footer Logo" className="w-28"/>
                <p>Crystal Cure Pest Control</p>
            </div>
            <div className="grid gap-y-4">
              <p>Why Choose Crystal Cure?</p>
              <p>At Crystal Cure Pest Control, we understand that the well-being of your home and business is paramount.
We do not believe in one-size-fits-all solutions. Every pest problem is unique, and our expert team tailors our services to meet your specific needs.

We stand by the quality of our services. Crystal Cure offers guarantees and follow-up inspections to ensure the long-term effectiveness of our pest control solutions.</p>
            </div>
            <div>Hi</div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; 2020 Crystal Cure Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;