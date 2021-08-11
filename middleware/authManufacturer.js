export default function ({ redirect, $strapi }) {
    if (!$strapi.user || $strapi.user.role.name!="manufacturer") {
      return redirect('/login')
    }
  }