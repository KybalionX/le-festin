function Copyright() {
  return (
    <div className="bg-gray-800 bg-opacity-75">
      <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
        <p className="mt-4 text-lg text-gray-400 sm:ml-6 sm:mt-0">
          Made with ❤️ by
          <a
            href="www.linkedin.com/in/nicolás-eduardo-flórez-acosta-85a84222b"
            className="ml-1 text-primaryLight font-bold"
            target="_blank"
          >
            Nicolás Flórez
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-400">
            <svg
              fill="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}

function FooterColumn(props: { title: string; links: string[] }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4 ">
      <h2 className="mb-3 font-pacifico text-2xl font-medium tracking-widest text-primary">
        {props.title}
      </h2>
      <nav className="mb-10 list-none">
        {props.links.map((link, i) => (
          <li key={i}>
            <a className="text-white">{link}</a>
          </li>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="body-font border-t-4 border-t-primaryLight bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-20">
        <div className="order-first flex flex-wrap text-left">
          <FooterColumn
            title="Company"
            links={[
              '> About us',
              '> Contact Us',
              '> Reservation',
              '> Privacy Policy',
              '> Terms & Condition',
            ]}
          />
          <FooterColumn
            title="Contact"
            links={[
              '123 Street, New York, USA',
              '+012 345 67890',
              'info@example.com',
            ]}
          />
          <FooterColumn
            title="Opening"
            links={['Monday - Saturday', '09AM - 09PM']}
          />
          <FooterColumn
            title="Newsletter"
            links={['Lorem ipsum dolor sit amet consectetur adipisicing elit.']}
          />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
