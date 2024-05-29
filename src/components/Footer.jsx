import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 pb-20">
      <article className="flex gap-2 items-center">
        {/* GitHub Icon */}
        <Link to="https://github.com/MiaMarmeladenbrot" target="_blank">
          <svg
            className="hover:bg-brightColor rounded-full "
            height="20"
            viewBox="0 0 38 38"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 1.1875C8.93985 1.1875 0.791626 9.33573 0.791626 19.3958C0.791626 27.453 6.00376 34.2584 13.2416 36.671C14.152 36.8303 14.4934 36.2841 14.4934 35.8061C14.4934 35.3736 14.4706 33.9397 14.4706 32.4148C9.89579 33.2569 8.71225 31.2995 8.34808 30.2753C8.14324 29.7518 7.25558 28.1358 6.48173 27.7034C5.84444 27.362 4.93402 26.5198 6.45897 26.4971C7.89288 26.4743 8.91709 27.8172 9.2585 28.3634C10.8973 31.1174 13.5147 30.3436 14.5617 29.8656C14.721 28.6821 15.199 27.8855 15.7225 27.4303C11.6711 26.975 7.43767 25.4046 7.43767 18.4399C7.43767 16.4597 8.14324 14.821 9.30402 13.5464C9.12194 13.0912 8.48465 11.2248 9.4861 8.7212C9.4861 8.7212 11.0111 8.24323 14.4934 10.5876C15.9501 10.1779 17.4978 9.97302 19.0455 9.97302C20.5932 9.97302 22.1409 10.1779 23.5976 10.5876C27.0799 8.22047 28.6049 8.7212 28.6049 8.7212C29.6063 11.2248 28.969 13.0912 28.7869 13.5464C29.9477 14.821 30.6533 16.437 30.6533 18.4399C30.6533 25.4273 26.3971 26.975 22.3457 27.4303C23.0058 27.9993 23.5748 29.0918 23.5748 30.7988C23.5748 33.2342 23.552 35.1916 23.552 35.8061C23.552 36.2841 23.8934 36.8531 24.8039 36.671C31.9962 34.2584 37.2083 27.4303 37.2083 19.3958C37.2083 9.33573 29.0601 1.1875 19 1.1875Z"
              fill="#1F2328"
            />
          </svg>
        </Link>

        {/* Mail Icon */}
        <Link to="mailto:mia.mecklenburg@gmx.net" target="_blank">
          <svg
            className="hover:bg-brightColor rounded-lg "
            height="20"
            viewBox="0 0 48 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.15 4.73905C0.452455 3.39274 1.19597 2.19067 2.25876 1.3297C3.32156 0.468735 4.64065 -9.29354e-05 6 1.38183e-08H42C43.3593 -9.29354e-05 44.6784 0.468735 45.7412 1.3297C46.804 2.19067 47.5475 3.39274 47.85 4.73905L24 19.5474L0.15 4.73905ZM0 8.21943V29.8697L17.409 19.0263L0 8.21943ZM20.283 20.8152L0.573 33.088C1.05998 34.1312 1.82858 35.0124 2.78934 35.629C3.75011 36.2457 4.86352 36.5725 6 36.5714H42C43.1363 36.5717 44.2493 36.2441 45.2095 35.6269C46.1697 35.0097 46.9377 34.1282 47.424 33.0849L27.714 20.8122L24 23.1192L20.283 20.8122V20.8152ZM30.591 19.0293L48 29.8697V8.21943L30.591 19.0263V19.0293Z"
              fill="#25282B"
            />
          </svg>
        </Link>

        {/* Linkedin Icon */}
        <Link
          to="https://www.linkedin.com/in/ann-marie-mia-mecklenburg/"
          target="_blank"
        >
          <svg
            className="hover:bg-brightColor "
            height="20"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.72175C0 1.21837 1.24925 0 2.79062 0H35.2094C36.7507 0 38 1.21837 38 2.72175V35.2783C38 36.7816 36.7507 38 35.2094 38H2.79062C1.24925 38 0 36.7816 0 35.2783V2.72175ZM11.7396 31.8108V14.6514H6.03725V31.8108H11.7396ZM8.88963 12.3073C10.8775 12.3073 12.1149 10.9915 12.1149 9.34325C12.0792 7.65938 10.8799 6.37925 8.92762 6.37925C6.97538 6.37925 5.7 7.66175 5.7 9.34325C5.7 10.9915 6.93738 12.3073 8.85163 12.3073H8.88963ZM20.5461 31.8108V22.2276C20.5461 21.7146 20.5841 21.2016 20.7361 20.8359C21.147 19.8123 22.0851 18.7506 23.6621 18.7506C25.726 18.7506 26.5501 20.3229 26.5501 22.6314V31.8108H32.2525V21.9688C32.2525 16.6962 29.4405 14.2453 25.688 14.2453C22.6623 14.2453 21.3061 15.9078 20.5461 17.0786V17.138H20.5081C20.5207 17.1182 20.5334 17.0984 20.5461 17.0786V14.6514H14.8461C14.9174 16.2616 14.8461 31.8108 14.8461 31.8108H20.5461Z"
              fill="#25282B"
            />
          </svg>
        </Link>
      </article>
      <Link
        to="/impressum"
        className="text-lightGreyColor hover:text-brightColor"
      >
        Impressum
      </Link>
    </footer>
  );
};

export default Footer;
