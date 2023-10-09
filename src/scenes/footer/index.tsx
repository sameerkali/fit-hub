import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="max-w-100" alt="fit-hub" src={Logo} />
          <p className="my-5">
            FitHub is a straightforward and visually appealing landing page
            specifically crafted for gyms and fitness centers. It offers a
            pristine and efficient online representation, aiming to allure
            prospective clientele and exhibit the comprehensive range of
            amenities and services provided by the gym.
          </p>
          <p>@Sameerkali© All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Meal plans</p>
          <p className="my-5">Workout plans</p>
          <p>Supliments</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">360, U-block DLF gurgao haryana india (IN).</p>
          <p>+91 9639356396</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
