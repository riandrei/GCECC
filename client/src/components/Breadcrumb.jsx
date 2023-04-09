import { Link, useLocation } from 'react-router-dom';

import '../css/breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();

  let pathnames = location.pathname.split('/').filter((x) => x);
  pathnames = pathnames.slice(1, pathnames.length);
  console.log(pathnames);

  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/user/${pathnames.slice(0, index - 1).join('/')}`;
    const isLast = index === pathnames.length - 1;

    return isLast ? (
      <span key={name}>Polo</span>
    ) : (
      <Link key={name} to={routeTo}>
        {`${name.charAt(0).toUpperCase(``)}${name.slice(1, name.length)} / `}
      </Link>
    );
  });

  return <div className="breadcrumbs">{breadcrumbs}</div>;
};

export default Breadcrumb;
