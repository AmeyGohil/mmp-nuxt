export default function ({ redirect, $strapi }) {
    if (!$strapi.user || $strapi.user.role.name!="Manufacturer") {
      return redirect('/login')
    }
  }