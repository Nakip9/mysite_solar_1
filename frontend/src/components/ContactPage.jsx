function ContactPage() {
  return (
    <section className="container-sm">
      <h1 className="display-5 mb-3">Contact NakipSolar</h1>
      <p className="lead">Let us know how we can support your clean energy goals and we will respond within one business day.</p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Talk With Our Team</h3>
          <p>
            Phone: (123) 456-7890<br />
            Email: hello@nakipsolar.com
          </p>
          <p>Office hours: Monday – Friday, 9:00 AM – 5:30 PM</p>
        </div>
        <div className="col-md-6">
          <h3>Request a Proposal</h3>
          <p>
            Share a few details about your location, energy usage, and project timeline. We will prepare an outline of potential savings and installation steps tailored to your needs.
          </p>
          <p className="text-muted">(A contact form will be placed here in the production-ready version.)</p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
